"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { businessConfig } from "@/config/business";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface SuccessSummary {
  referenceId: string;
  formattedDate: string;
  time: string;
  partySize: string;
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

export default function ReservationsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isSubmittingRef = useRef(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [minDate, setMinDate] = useState("");

  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<SuccessSummary | null>(null);

  const scrollToCard = useCallback(() => {
    if (!cardRef.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    cardRef.current.scrollIntoView({
      behavior: prefersReducedMotion ? "instant" : "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    if (status === "success") {
      requestAnimationFrame(() => {
        scrollToCard();
      });
    }
  }, [status, scrollToCard]);

  useEffect(() => {
    // Compute date asynchronously to bypass strict synchronous-setState-in-effect linter
    // while ensuring server HTML matches first client render.
    const timer = setTimeout(() => {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      setMinDate(`${yyyy}-${mm}-${dd}`);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const timeSlots = useMemo(() => {
    // Default to weekend boundary if no date selected, or compute based on date
    let isWeekend = true;
    if (selectedDate) {
      const dateObj = new Date(selectedDate);
      const day = dateObj.getDay();
      isWeekend = day === 0 || day === 5 || day === 6;
    }
    const endHour = isWeekend
      ? businessConfig.hours.friSun.closeHour24
      : businessConfig.hours.monThu.closeHour24;
    const startHour = businessConfig.hours.monThu.openHour24;

    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      for (const min of ["00", "30"]) {
        const ampm = hour >= 12 ? "PM" : "AM";
        const displayHour = hour > 12 ? hour - 12 : hour;
        slots.push(`${displayHour}:${min} ${ampm}`);
      }
    }
    return slots;
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingRef.current || status === "submitting") return;

    isSubmittingRef.current = true;
    setErrorMessage(null);
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const partySize = (formData.get("partySize") as string) || "";
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const occasion = (formData.get("occasion") as string) || "";
    const specialRequests = (formData.get("specialRequests") as string) || "";
    const websiteHp = (formData.get("websiteHp") as string) || "";

    const payload = {
      date: selectedDate,
      time: selectedTime,
      partySize,
      name,
      email,
      phone,
      occasion,
      specialRequests,
      websiteHp,
    };

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok && data.data?.id) {
        setSuccessData({
          referenceId: `AC-${data.data.id.slice(0, 8).toUpperCase()}`,
          formattedDate: formatDisplayDate(payload.date),
          time: payload.time,
          partySize: formatPartySize(payload.partySize),
        });
        setStatus("success");
      } else {
        const message =
          data?.error?.message ||
          "Unable to process your reservation request. Please check your details and try again.";
        setErrorMessage(message);
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Unable to process your reservation request. Please check your details and try again."
      );
      setStatus("error");
    } finally {
      isSubmittingRef.current = false;
    }
  };

  const handleMakeAnotherRequest = () => {
    isSubmittingRef.current = false;
    setSelectedDate("");
    setSelectedTime("");
    setSuccessData(null);
    setErrorMessage(null);
    setStatus("idle");
    requestAnimationFrame(() => {
      scrollToCard();
    });
  };

  const isSubmitting = status === "submitting";

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navigation activeItem="Reservations" />

      <main className="flex-grow pt-[88px] sm:pt-[96px] lg:pt-[130px] pb-12 sm:pb-stack-lg">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 sm:mb-12 lg:mb-stack-lg mt-4 sm:mt-6 lg:mt-8 text-left">
          <h1 className="font-headline text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.15] lg:leading-[1.1] font-bold text-primary mb-4 sm:mb-6 tracking-[-0.02em]">
            A table, when you need one.
          </h1>
          <p className="font-body text-[16px] sm:text-[18px] text-on-surface-variant max-w-2xl leading-[1.6]">
            Reserve a quiet corner, a table for two, or a little more room for the people you’re bringing with you.
          </p>
        </section>

        {/* Main Reservation Experience */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 sm:mb-16 lg:mb-stack-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            {/* Left Column: Form or Success State */}
            <div
              ref={cardRef}
              className="lg:col-span-6 bg-surface-container p-6 sm:p-8 md:p-12 rounded-xl flex flex-col justify-center border border-outline-variant/30 scroll-mt-[88px] sm:scroll-mt-[104px] lg:scroll-mt-[140px]"
            >
              {status === "success" && successData ? (
                <div className="py-4 space-y-6 text-left">
                  <div>
                    <span className="inline-block font-body text-[11px] font-bold tracking-[0.15em] uppercase text-primary/80 bg-primary/10 px-2.5 py-1 rounded mb-4">
                      Reference: {successData.referenceId}
                    </span>
                    <h2 className="font-headline text-[28px] sm:text-[36px] font-bold text-primary leading-[1.2] mb-3">
                      Reservation request received
                    </h2>
                    <p className="font-body text-[15px] sm:text-[16px] text-on-surface-variant leading-[1.6]">
                      Your demo request has been stored successfully.
                    </p>
                  </div>

                  {/* Compact Summary */}
                  <div className="bg-surface-container-high/60 border border-outline-variant/30 rounded-lg p-5 space-y-3 font-body">
                    <div className="flex justify-between items-center text-[14px]">
                      <span className="text-on-surface-variant/80 uppercase text-[12px] font-bold tracking-[0.05em]">
                        Date
                      </span>
                      <span className="font-medium text-primary">
                        {successData.formattedDate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[14px] pt-2.5 border-t border-outline-variant/20">
                      <span className="text-on-surface-variant/80 uppercase text-[12px] font-bold tracking-[0.05em]">
                        Time
                      </span>
                      <span className="font-medium text-primary">
                        {successData.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[14px] pt-2.5 border-t border-outline-variant/20">
                      <span className="text-on-surface-variant/80 uppercase text-[12px] font-bold tracking-[0.05em]">
                        Party Size
                      </span>
                      <span className="font-medium text-primary">
                        {successData.partySize}
                      </span>
                    </div>
                  </div>

                  {/* Truthful Note */}
                  <p className="font-body text-[13px] text-on-surface-variant/80 leading-[1.6] italic border-l-2 border-primary/40 pl-3">
                    This is a concept experience and does not reserve a real table.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleMakeAnotherRequest}
                      className="w-full bg-primary-container text-on-primary font-body text-[12px] font-bold tracking-[0.1em] uppercase py-4 rounded hover:bg-[#705a4c] transition-colors duration-300 active:scale-[0.99] shadow-sm cursor-pointer"
                    >
                      MAKE ANOTHER REQUEST
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  className="space-y-6 sm:space-y-8"
                  onSubmit={handleSubmit}
                >
                  {/* Invisible Honeypot */}
                  <input
                    type="text"
                    name="websiteHp"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute opacity-0 pointer-events-none -z-10 w-0 h-0 overflow-hidden"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="flex flex-col">
                      <label
                        className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2"
                        htmlFor="date"
                      >
                        DATE
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-[16px] text-primary placeholder-on-surface-variant/50 transition-colors"
                        id="date"
                        name="date"
                        type="date"
                        min={minDate}
                        required
                        disabled={isSubmitting}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2"
                        htmlFor="time"
                      >
                        TIME
                      </label>
                      <select
                        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-[16px] text-primary transition-colors appearance-none"
                        id="time"
                        name="time"
                        required
                        disabled={!selectedDate || isSubmitting}
                        value={
                          timeSlots.includes(selectedTime) ? selectedTime : ""
                        }
                        onChange={(e) => setSelectedTime(e.target.value)}
                      >
                        <option value="" disabled>
                          Select Time
                        </option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2"
                      htmlFor="party"
                    >
                      PARTY SIZE
                    </label>
                    <select
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-[16px] text-primary transition-colors appearance-none"
                      id="party"
                      name="partySize"
                      required
                      disabled={isSubmitting}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Party Size
                      </option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8+">8+ Guests</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2"
                      htmlFor="name"
                    >
                      NAME
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-[16px] text-primary placeholder-on-surface-variant/50 transition-colors"
                      id="name"
                      name="name"
                      placeholder="First &amp; Last Name"
                      type="text"
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="flex flex-col">
                      <label
                        className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2"
                        htmlFor="email"
                      >
                        EMAIL
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-[16px] text-primary placeholder-on-surface-variant/50 transition-colors"
                        id="email"
                        name="email"
                        placeholder="hello@example.com"
                        type="email"
                        autoComplete="email"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2"
                        htmlFor="phone"
                      >
                        PHONE
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-[16px] text-primary placeholder-on-surface-variant/50 transition-colors"
                        id="phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        type="tel"
                        autoComplete="tel"
                        pattern="^(?:[\+\-\(\)\s]*\d){7,15}[\+\-\(\)\s]*$"
                        title="Please enter a valid phone number (7 to 15 digits)."
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2"
                      htmlFor="occasion"
                    >
                      OCCASION (OPTIONAL)
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-[16px] text-primary placeholder-on-surface-variant/50 transition-colors"
                      id="occasion"
                      name="occasion"
                      placeholder="Birthday, Anniversary, Business..."
                      type="text"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-on-surface-variant mb-2"
                      htmlFor="requests"
                    >
                      SPECIAL REQUESTS
                    </label>
                    <textarea
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-[16px] text-primary placeholder-on-surface-variant/50 transition-colors resize-none"
                      id="requests"
                      name="specialRequests"
                      placeholder="Window seat, dietary restrictions..."
                      rows={2}
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  {/* Inline Error Message */}
                  {errorMessage && (
                    <div className="p-3.5 bg-[#ba1a1a]/10 border border-[#ba1a1a]/20 rounded text-[#ba1a1a] text-[13px] font-body text-center leading-relaxed">
                      {errorMessage}
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      className="w-full bg-primary-container text-on-primary font-body text-[12px] font-bold tracking-[0.1em] uppercase py-4 rounded hover:bg-[#705a4c] transition-colors duration-300 active:scale-[0.99] shadow-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "SENDING REQUEST…" : "RESERVE A TABLE"}
                    </button>
                    <p className="text-center text-[14px] text-on-surface-variant mt-4 font-body italic">
                      Coffee plans are better when there’s a seat waiting.
                    </p>
                    <p className="text-center text-[12px] text-on-surface-variant/75 mt-3 font-body">
                      {businessConfig.disclosure.reservations}{" "}
                      <Link
                        href="/privacy"
                        className="underline hover:text-primary transition-colors inline-block ml-1"
                      >
                        Privacy
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6 aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-full min-h-[350px] relative overflow-hidden rounded-xl mt-8 lg:mt-0 bg-surface-container-high shadow-sm">
              <Image
                src="/images/amit-cafe/reservations-table-refined-v3.jpg"
                alt="Cafe interior with prepared table"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Supporting Information */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 sm:py-stack-md border-t border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-primary mb-3">
                REQUEST STATUS
              </h3>
              <p className="font-body text-[14px] text-on-surface-variant leading-[1.6]">
                Demo reservation requests are recorded as pending for workflow testing.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-primary mb-3">
                LARGER GROUPS
              </h3>
              <p className="font-body text-[14px] text-on-surface-variant leading-[1.6]">
                For parties of 8 or more, select “8+” in the reservation form.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-primary mb-3">
                TIME SLOTS
              </h3>
              <p className="font-body text-[14px] text-on-surface-variant leading-[1.6]">
                Choose from the available 30-minute time slots shown for your selected date.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[12px] font-bold tracking-[0.1em] uppercase text-primary mb-3">
                HOURS
              </h3>
              <div className="font-body text-[14px] text-on-surface-variant leading-[1.6] space-y-1">
                <p>{businessConfig.hours.monThu.display}</p>
                <p>{businessConfig.hours.friSun.display}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Moment */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-6 sm:pt-stack-md pb-12 sm:pb-stack-lg text-center mt-4 sm:mt-8">
          <h2 className="font-headline text-[26px] sm:text-[32px] font-semibold text-primary/80 italic">
            Your request is almost ready.
          </h2>
        </section>
      </main>

      <Footer />
    </div>
  );
}
