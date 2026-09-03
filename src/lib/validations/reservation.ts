import { z } from "zod";
import { businessConfig } from "@/config/business";

/**
 * Validates that a string represents a real, valid calendar date (YYYY-MM-DD).
 * Rejects invalid days like Feb 31 or month 13.
 */
export function isValidCalendarDate(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [year, month, day] = dateStr.split("-").map(Number);
  if (month < 1 || month > 12 || day < 1 || day > 31) return false;
  const d = new Date(Date.UTC(year, month - 1, day));
  return (
    d.getUTCFullYear() === year &&
    d.getUTCMonth() === month - 1 &&
    d.getUTCDate() === day
  );
}

/**
 * Returns today's date in Portland (America/Los_Angeles) as YYYY-MM-DD.
 */
export function getPortlandToday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: businessConfig.location.timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/**
 * Deterministically computes day of week (0 = Sun, 1 = Mon, ..., 6 = Sat)
 * from YYYY-MM-DD without UTC timezone boundary shifting.
 */
export function getDayOfWeek(dateStr: string): number {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  return d.getUTCDay();
}

/**
 * Generates the authoritative list of allowed 30-minute reservation slots
 * for a given date according to Amit Cafe's operating hours in businessConfig.
 */
export function getAllowedTimeSlots(dateStr: string): string[] {
  const day = getDayOfWeek(dateStr);
  const isWeekend = day === 0 || day === 5 || day === 6; // Fri, Sat, Sun
  const startHour = businessConfig.hours.monThu.openHour24; // 8
  const endHour = isWeekend
    ? businessConfig.hours.friSun.closeHour24 // 23 (11 PM close, last slot 10:30 PM)
    : businessConfig.hours.monThu.closeHour24; // 22 (10 PM close, last slot 9:30 PM)

  const slots: string[] = [];
  for (let hour = startHour; hour < endHour; hour++) {
    for (const min of ["00", "30"]) {
      const ampm = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour;
      slots.push(`${displayHour}:${min} ${ampm}`);
    }
  }
  return slots;
}

/**
 * Normalizes a UI time string (e.g. "8:00 AM", "7:30 PM", "10:30 PM")
 * to PostgreSQL TIME format (HH:MM:SS in 24-hour time).
 */
export function normalizeTimeTo24Hour(timeStr: string): string | null {
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  let hour = parseInt(match[1], 10);
  const minute = match[2];
  const ampm = match[3].toUpperCase();

  if (ampm === "PM" && hour < 12) hour += 12;
  if (ampm === "AM" && hour === 12) hour = 0;

  return `${String(hour).padStart(2, "0")}:${minute}:00`;
}

/**
 * Zod schema for incoming reservation requests.
 */
export const reservationInputSchema = z
  .object({
    date: z
      .string({ message: "Date is required." })
      .trim()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date must be in YYYY-MM-DD format." })
      .refine(isValidCalendarDate, { message: "Date must be a valid calendar date." })
      .refine(
        (date) => date >= getPortlandToday(),
        { message: "Reservation date cannot be in the past." }
      ),
    time: z.string({ message: "Time is required." }).trim(),
    partySize: z.enum(["1", "2", "3", "4", "5", "6", "7", "8+"], {
      message: "Please select a valid party size.",
    }),
    name: z
      .string({ message: "Name is required." })
      .trim()
      .min(2, { message: "Name must be at least 2 characters." })
      .max(100, { message: "Name cannot exceed 100 characters." }),
    email: z
      .string({ message: "Email is required." })
      .trim()
      .toLowerCase()
      .email({ message: "Please enter a valid email address." })
      .max(255, { message: "Email cannot exceed 255 characters." }),
    phone: z
      .string({ message: "Phone is required." })
      .trim()
      .max(30, { message: "Phone number cannot exceed 30 characters." })
      .regex(
        /^(?:[\+\-\(\)\s]*\d){7,15}[\+\-\(\)\s]*$/,
        { message: "Please enter a valid phone number (7 to 15 digits)." }
      ),
    occasion: z
      .string()
      .trim()
      .max(100, { message: "Occasion cannot exceed 100 characters." })
      .optional()
      .nullable()
      .transform((val) => (val && val.length > 0 ? val : null)),
    specialRequests: z
      .string()
      .trim()
      .max(500, { message: "Special requests cannot exceed 500 characters." })
      .optional()
      .nullable()
      .transform((val) => (val && val.length > 0 ? val : null)),
    websiteHp: z
      .string()
      .optional()
      .refine((val) => !val || val === "", { message: "Spam submission rejected." }),
  })
  .superRefine((data, ctx) => {
    if (isValidCalendarDate(data.date)) {
      const allowedSlots = getAllowedTimeSlots(data.date);
      if (!allowedSlots.includes(data.time)) {
        ctx.addIssue({
          code: "custom",
          message: "Selected time is not an available reservation slot.",
          path: ["time"],
        });
      }
    }
  });

export type ReservationInput = z.infer<typeof reservationInputSchema>;
