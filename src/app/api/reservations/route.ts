import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import {
  reservationInputSchema,
  normalizeTimeTo24Hour,
} from "@/lib/validations/reservation";
import { sendReservationNotification } from "@/lib/email/reservation-notification";

/**
 * Validates that an incoming request originates from the same site.
 * Supports production (https://amit-cafe.vercel.app), localhost, and Vercel preview deployments.
 * Note: This provides defense-in-depth against unauthorized off-site browser scripts.
 */
function isValidSameOrigin(req: NextRequest): boolean {
  const originHeader = req.headers.get("origin");
  const refererHeader = req.headers.get("referer");

  let sourceOrigin: string | null = null;
  if (originHeader) {
    try {
      sourceOrigin = new URL(originHeader).origin;
    } catch {
      return false;
    }
  } else if (refererHeader) {
    try {
      sourceOrigin = new URL(refererHeader).origin;
    } catch {
      return false;
    }
  }

  if (!sourceOrigin) {
    return false;
  }

  // Check host / proto from reverse proxy or request URL
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") || req.nextUrl.protocol.replace(":", "");

  if (host) {
    const expectedOrigin = `${proto}://${host}`.toLowerCase();
    if (sourceOrigin.toLowerCase() === expectedOrigin) {
      return true;
    }
  }

  if (req.nextUrl.origin && sourceOrigin.toLowerCase() === req.nextUrl.origin.toLowerCase()) {
    return true;
  }

  return false;
}

export async function POST(req: NextRequest) {
  // 1. Same-origin validation guard (defense-in-depth against off-site scripted requests)
  if (!isValidSameOrigin(req)) {
    return NextResponse.json(
      {
        ok: false,
        error: "FORBIDDEN",
      },
      { status: 403 }
    );
  }

  // 2. Parse JSON body safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "INVALID_JSON",
          message: "Malformed JSON request body.",
        },
      },
      { status: 400 }
    );
  }

  // 2. Validate input schema with Zod
  const parseResult = reservationInputSchema.safeParse(body);
  if (!parseResult.success) {
    const fieldErrors = parseResult.error.flatten().fieldErrors;
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid reservation data.",
          fieldErrors,
        },
      },
      { status: 400 }
    );
  }

  const validatedData = parseResult.data;

  // 3. Honeypot check (prevent bot spam without DB write)
  if (validatedData.websiteHp) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid reservation data.",
        },
      },
      { status: 400 }
    );
  }

  // 4. Normalize UI time (e.g. "8:00 AM") to PostgreSQL TIME (HH:MM:SS)
  const normalizedTime = normalizeTimeTo24Hour(validatedData.time);
  if (!normalizedTime) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid reservation time format.",
          fieldErrors: {
            time: ["Invalid time format."],
          },
        },
      },
      { status: 400 }
    );
  }

  // 5. Initialize server-only Supabase client
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error(
      "[RESERVATION_SERVER_ERROR] Missing Supabase configuration (SUPABASE_URL or SUPABASE_SECRET_KEY)."
    );
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "SERVER_ERROR",
          message: "Unable to process reservation request at this time.",
        },
      },
      { status: 500 }
    );
  }

  // 6. Insert reservation into database (strictly pending status, generated ID)
  try {
    const { data, error } = await supabase
      .from("reservations")
      .insert({
        reservation_date: validatedData.date,
        reservation_time: normalizedTime,
        party_size: validatedData.partySize,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        occasion: validatedData.occasion ?? null,
        special_requests: validatedData.specialRequests ?? null,
        status: "pending",
      })
      .select("id, status")
      .single();

    if (error || !data) {
      console.error(
        "[RESERVATION_DB_ERROR] Database insertion failed:",
        error?.message || "No data returned."
      );
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "SERVER_ERROR",
            message: "Unable to process reservation request at this time.",
          },
        },
        { status: 500 }
      );
    }

    console.log(
      `[RESERVATION_CREATED] ID: ${data.id} Date: ${validatedData.date} Time: ${normalizedTime}`
    );

    // 7. Attempt owner notification email (secondary channel; failure does not block visitor success)
    try {
      await sendReservationNotification({
        id: data.id,
        reservationDate: validatedData.date,
        reservationTime: validatedData.time,
        partySize: validatedData.partySize,
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        occasion: validatedData.occasion ?? null,
        specialRequests: validatedData.specialRequests ?? null,
      });
    } catch (emailErr) {
      console.error(
        `[RESERVATION_EMAIL_FAILED] ID: AC-${data.id.slice(0, 8).toUpperCase()} Reason: ${
          emailErr instanceof Error ? emailErr.message : "Unknown error"
        }`
      );
    }

    // 8. Return success contract (based strictly on DATABASE insertion success)
    return NextResponse.json(
      {
        ok: true,
        data: {
          id: data.id,
          status: data.status,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(
      "[RESERVATION_UNEXPECTED_ERROR] Error inserting reservation:",
      err instanceof Error ? err.message : "Unknown error"
    );
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "SERVER_ERROR",
          message: "Unable to process reservation request at this time.",
        },
      },
      { status: 500 }
    );
  }
}
