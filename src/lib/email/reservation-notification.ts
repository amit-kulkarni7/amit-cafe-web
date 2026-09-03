import { Resend } from "resend";

export interface ReservationNotificationParams {
  id: string;
  reservationDate: string;
  reservationTime: string;
  partySize: string;
  name: string;
  email: string;
  phone: string;
  occasion?: string | null;
  specialRequests?: string | null;
}

export interface ReservationNotificationResult {
  sent: boolean;
  messageId?: string;
  error?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  if (!year || !month || !day) return dateStr;
  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatPartySize(size: string): string {
  if (size === "1") return "1 Guest";
  if (size === "8+") return "8+ Guests";
  return `${size} Guests`;
}

/**
 * Sends a server-side notification email to the cafe owner when a new reservation request is stored.
 * This is an operational notification channel; failures are caught and logged without affecting visitor success.
 */
export async function sendReservationNotification(
  params: ReservationNotificationParams
): Promise<ReservationNotificationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESERVATIONS_TO_EMAIL;

  const referenceId = `AC-${params.id.slice(0, 8).toUpperCase()}`;

  if (!apiKey || !toEmail) {
    console.warn(
      `[RESERVATION_NOTIFICATION_CONFIG_MISSING] ID: ${referenceId} - Resend API key or recipient email not configured.`
    );
    return { sent: false, error: "Configuration missing" };
  }

  const subject = `New Amit Cafe demo reservation request — ${referenceId}`;
  const displayDate = formatDisplayDate(params.reservationDate);
  const displayParty = formatPartySize(params.partySize);

  // Plain-text email version
  const textLines = [
    "AMIT CAFE",
    "New Demo Reservation Request",
    "==================================",
    `Reference: ${referenceId}`,
    "Status: Pending",
    `Date: ${displayDate}`,
    `Time: ${params.reservationTime}`,
    `Party Size: ${displayParty}`,
    "",
    "GUEST DETAILS",
    "----------------------------------",
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    `Phone: ${params.phone}`,
  ];

  if (params.occasion && params.occasion.trim()) {
    textLines.push(`Occasion: ${params.occasion.trim()}`);
  }
  if (params.specialRequests && params.specialRequests.trim()) {
    textLines.push(`Special Requests: ${params.specialRequests.trim()}`);
  }

  textLines.push(
    "",
    "----------------------------------",
    "This submission came from the fictional Amit Cafe concept website and does not represent a real table booking."
  );

  const text = textLines.join("\n");

  // HTML email version with escaped user-supplied values
  const safeName = escapeHtml(params.name);
  const safeEmail = escapeHtml(params.email);
  const safePhone = escapeHtml(params.phone);
  const safeOccasion = params.occasion ? escapeHtml(params.occasion.trim()) : null;
  const safeRequests = params.specialRequests
    ? escapeHtml(params.specialRequests.trim())
    : null;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fcfbf9; margin: 0; padding: 24px; color: #231b14;">
  <div style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e8e2dc; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="margin-bottom: 24px; border-bottom: 1px solid #e8e2dc; padding-bottom: 16px;">
      <span style="display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #534339; background-color: #f4ede6; padding: 4px 8px; border-radius: 4px; margin-bottom: 8px;">
        Reference: ${referenceId}
      </span>
      <h1 style="font-size: 22px; font-weight: 700; margin: 8px 0 4px 0; color: #372a22;">Amit Cafe</h1>
      <p style="font-size: 14px; color: #796c62; margin: 0;">New Demo Reservation Request</p>
    </div>

    <div style="background-color: #fdfbf7; border: 1px solid #ede7e0; border-radius: 6px; padding: 16px 20px; margin-bottom: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 6px 0; color: #796c62; width: 120px; text-transform: uppercase; font-size: 11px; font-weight: 700; letter-spacing: 0.05em;">Status</td>
          <td style="padding: 6px 0; font-weight: 600; color: #372a22;">Pending</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #796c62; text-transform: uppercase; font-size: 11px; font-weight: 700; letter-spacing: 0.05em;">Date</td>
          <td style="padding: 6px 0; font-weight: 600; color: #372a22;">${escapeHtml(displayDate)}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #796c62; text-transform: uppercase; font-size: 11px; font-weight: 700; letter-spacing: 0.05em;">Time</td>
          <td style="padding: 6px 0; font-weight: 600; color: #372a22;">${escapeHtml(params.reservationTime)}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #796c62; text-transform: uppercase; font-size: 11px; font-weight: 700; letter-spacing: 0.05em;">Party Size</td>
          <td style="padding: 6px 0; font-weight: 600; color: #372a22;">${escapeHtml(displayParty)}</td>
        </tr>
      </table>
    </div>

    <div style="margin-bottom: 24px;">
      <h2 style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #796c62; margin: 0 0 12px 0;">Guest Details</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 6px 0; color: #796c62; width: 120px;">Name:</td>
          <td style="padding: 6px 0; color: #231b14; font-weight: 500;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #796c62;">Email:</td>
          <td style="padding: 6px 0; color: #231b14;"><a href="mailto:${safeEmail}" style="color: #534339; text-decoration: underline;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #796c62;">Phone:</td>
          <td style="padding: 6px 0; color: #231b14;"><a href="tel:${safePhone}" style="color: #534339; text-decoration: underline;">${safePhone}</a></td>
        </tr>
        ${
          safeOccasion
            ? `<tr>
          <td style="padding: 6px 0; color: #796c62;">Occasion:</td>
          <td style="padding: 6px 0; color: #231b14;">${safeOccasion}</td>
        </tr>`
            : ""
        }
        ${
          safeRequests
            ? `<tr>
          <td style="padding: 6px 0; color: #796c62; vertical-align: top;">Requests:</td>
          <td style="padding: 6px 0; color: #231b14;">${safeRequests}</td>
        </tr>`
            : ""
        }
      </table>
    </div>

    <div style="border-top: 1px solid #e8e2dc; padding-top: 16px; margin-top: 24px;">
      <p style="font-size: 12px; color: #9c8e84; line-height: 1.5; margin: 0; font-style: italic;">
        This submission came from the fictional Amit Cafe concept website and does not represent a real table booking.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Amit Cafe Reservations <onboarding@resend.dev>",
      to: toEmail,
      subject,
      text,
      html,
    });

    if (error || !data) {
      console.error(
        `[RESERVATION_EMAIL_FAILED] ID: ${referenceId} Reason: ${error?.message || "No data returned"}`
      );
      return { sent: false, error: error?.message || "Failed to send email" };
    }

    console.log(
      `[RESERVATION_EMAIL_SENT] ID: ${referenceId} Message ID: ${data.id}`
    );
    return { sent: true, messageId: data.id };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(
      `[RESERVATION_EMAIL_FAILED] ID: ${referenceId} Reason: ${errorMessage}`
    );
    return { sent: false, error: errorMessage };
  }
}
