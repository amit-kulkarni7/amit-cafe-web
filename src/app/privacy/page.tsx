import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How information submitted through the Amit Cafe demo reservation experience is handled.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navigation />

      <main className="flex-grow pt-[100px] md:pt-[130px] pb-stack-lg">
        <article className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Header */}
          <header className="mb-12 border-b border-outline-variant/30 pb-8">
            <span className="font-body text-[12px] uppercase font-bold tracking-[0.18em] text-secondary border border-outline-variant/50 px-4 py-1.5 rounded-full mb-6 inline-block">
              Transparency
            </span>
            <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[56px] font-bold text-primary mb-4 leading-[1.15]">
              Privacy Notice
            </h1>
            <p className="font-body text-[16px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              This privacy notice explains how information submitted through the Amit Cafe demo reservation experience is handled.
            </p>
          </header>

          {/* Content Sections */}
          <div className="space-y-10 font-body text-on-surface leading-relaxed text-[15px] sm:text-[16px]">
            {/* 1. Important Concept Context */}
            <section className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 sm:p-8">
              <h2 className="font-headline text-[20px] sm:text-[24px] font-bold text-primary mb-3">
                Important Demo Context
              </h2>
              <p className="text-on-surface-variant mb-3">
                Amit Cafe is a fictional Portland-inspired cafe concept created for demonstration purposes.
              </p>
              <p className="text-on-surface-variant">
                Submitting the reservation form does not reserve a real table, as no physical cafe exists. Visitors are requested not to submit sensitive personal, financial, or confidential information.
              </p>
            </section>

            {/* 2. What Is Collected */}
            <section>
              <h2 className="font-headline text-[22px] sm:text-[26px] font-bold text-primary mb-4">
                What Is Collected
              </h2>
              <p className="text-on-surface-variant mb-4">
                When you interact with the demo reservation form, the following details are received:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                <li><strong className="text-primary font-medium">Guest Name:</strong> Used to personalize the demo reservation record.</li>
                <li><strong className="text-primary font-medium">Email Address:</strong> Included in the demo record and owner notification.</li>
                <li><strong className="text-primary font-medium">Phone Number:</strong> Included in the demo record.</li>
                <li><strong className="text-primary font-medium">Reservation Date & Time:</strong> The requested demo seating schedule.</li>
                <li><strong className="text-primary font-medium">Party Size:</strong> The requested number of demo guests.</li>
                <li><strong className="text-primary font-medium">Occasion & Special Requests:</strong> Optional notes provided during submission.</li>
              </ul>
            </section>

            {/* 3. Why It Is Collected */}
            <section>
              <h2 className="font-headline text-[22px] sm:text-[26px] font-bold text-primary mb-4">
                Why It Is Collected
              </h2>
              <p className="text-on-surface-variant mb-3">
                Information submitted through this website is processed solely for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                <li>Demonstrating and testing the technical reservation pipeline.</li>
                <li>Storing the demo record in the project database to confirm end-to-end functionality.</li>
                <li>Generating a private notification to the project owner to verify notification delivery.</li>
              </ul>
              <p className="text-on-surface-variant mt-4">
                Data is never used for commercial marketing, newsletters, or advertising, and is never sold or rented.
              </p>
            </section>

            {/* 4. How It Is Handled & Stored */}
            <section>
              <h2 className="font-headline text-[22px] sm:text-[26px] font-bold text-primary mb-4">
                How It Is Handled
              </h2>
              <p className="text-on-surface-variant mb-3">
                When you submit a demo reservation request:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                <li>The payload is validated server-side using strict schema verification.</li>
                <li>The reservation record is stored securely in the project database with pending status.</li>
                <li>A private administrative email notification is transmitted to the project owner.</li>
                <li>Direct browser access to database records is denied through database security policies.</li>
              </ul>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h2 className="font-headline text-[22px] sm:text-[26px] font-bold text-primary mb-4">
                Data Retention
              </h2>
              <p className="text-on-surface-variant">
                Demo reservation records may be removed periodically or when they are no longer needed for testing. Records are not maintained for permanent archiving or commercial profiling.
              </p>
            </section>

            {/* 6. Third-Party Services */}
            <section>
              <h2 className="font-headline text-[22px] sm:text-[26px] font-bold text-primary mb-4">
                Third-Party Services
              </h2>
              <p className="text-on-surface-variant mb-3">
                This concept project relies on standard cloud infrastructure services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                <li><strong className="text-primary font-medium">Supabase:</strong> Managed database infrastructure used to store demo reservation records.</li>
                <li><strong className="text-primary font-medium">Resend:</strong> Transactional email service used to transmit owner notification messages.</li>
                <li><strong className="text-primary font-medium">Vercel:</strong> Web hosting and serverless deployment platform.</li>
              </ul>
            </section>

            {/* 7. Cookies and Tracking */}
            <section>
              <h2 className="font-headline text-[22px] sm:text-[26px] font-bold text-primary mb-4">
                Cookies & Analytics
              </h2>
              <p className="text-on-surface-variant">
                This website does not use tracking cookies, marketing pixels, or third-party analytics scripts. Only essential server hosting logs are generated as part of standard web traffic delivery.
              </p>
            </section>

            {/* Back link */}
            <div className="pt-8 border-t border-outline-variant/30 flex justify-between items-center">
              <Link
                href="/reservations"
                className="font-body text-[13px] font-bold uppercase tracking-[0.1em] text-primary hover:text-[#705a4c] transition-colors inline-flex items-center gap-2"
              >
                ← Back to Reservations
              </Link>
              <Link
                href="/"
                className="font-body text-[13px] font-bold uppercase tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
