import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moments",
  description: "The kind of place you lose track of time in. Explore the atmosphere and quiet luxury of our Portland-inspired cafe concept.",
};

export default function MomentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navigation activeItem="Moments" />

      <main className="flex-grow pt-[88px] sm:pt-[96px] lg:pt-[130px]">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 sm:mb-16 lg:mb-stack-lg w-full">
          <div className="max-w-3xl">
            <h1 className="font-headline text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-primary mb-4 sm:mb-6 leading-[1.15] lg:leading-[1.1] tracking-[-0.02em]">
              The kind of place you lose track of time in.
            </h1>
            <p className="font-body text-[16px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              More than just coffee, Amit Cafe is a canvas for your day. From the first morning light catching the steam of your espresso, to the quiet hum of evening conversations, these are the moments that define us.
            </p>
          </div>
        </section>

        {/* Editorial Image Sequence */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 sm:mb-16 lg:mb-stack-lg w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            
            {/* Image 1: Window Seat */}
            <div className="lg:col-span-7 flex flex-col items-start mb-8 lg:mb-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[600px] mb-3 sm:mb-4 overflow-hidden rounded-sm bg-surface-container-high">
                <Image 
                  src="/images/amit-cafe/moments-window-seat-refined.jpg"
                  alt="Sun-drenched window seat at Amit Cafe with green velvet seating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
              <span className="font-body text-[11px] sm:text-[12px] font-bold text-outline uppercase tracking-[0.1em]">An hour turned into three.</span>
            </div>

            {/* Spacer/Offset for Editorial Look */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Images 2 & 3: Student & Window */}
            <div className="lg:col-span-4 flex flex-col justify-end gap-8 lg:gap-stack-md">
              <div>
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-[450px] mb-3 sm:mb-4 overflow-hidden rounded-sm bg-surface-container-high">
                  <Image 
                    src="/images/amit-cafe/moments-work-detail-optimized.jpg"
                    alt="Quiet study moment at a rustic wooden table with laptop and cappuccino"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <span className="font-body text-[11px] sm:text-[12px] font-bold text-outline uppercase tracking-[0.1em]">Study break, upgraded.</span>
              </div>
              <div>
                <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[300px] mb-3 sm:mb-4 overflow-hidden rounded-sm bg-surface-container-high">
                  <Image 
                    src="/images/amit-cafe/moments-quiet-interior-refined.jpg"
                    alt="Quiet cafe interior scene"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <span className="font-body text-[11px] sm:text-[12px] font-bold text-outline uppercase tracking-[0.1em]">The perfect spot.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Dark Moment */}
        <section className="w-full bg-primary-container text-on-primary py-12 sm:py-16 lg:py-stack-lg mb-12 sm:mb-16 lg:mb-stack-lg">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-stack-md items-center">
            <div className="order-2 lg:order-1 relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[700px] overflow-hidden rounded-sm bg-black/20">
              <Image 
                src="/images/amit-cafe/moments-evening-refined.jpg"
                alt="Warm atmospheric evening photography of Amit Cafe"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <h2 className="font-headline text-[28px] sm:text-[32px] font-semibold mb-4 sm:mb-6 leading-[1.3] text-white">
                Different light.<br />Same reason to stay.
              </h2>
              <p className="font-body text-[16px] sm:text-[18px] text-[#dec1af]/80 leading-relaxed">
                As the sun sets, the pace shifts. The espresso machine quiets down, the lighting warms up, and the cafe transforms into an intimate space for evening rendezvous.
              </p>
            </div>
          </div>
        </section>

        {/* Seasonal Content - Rainy Evenings */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 sm:mb-16 lg:mb-stack-lg w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-stack-md bg-[#f7f3f0] p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 bg-[#848D78]/10 text-[#848D78] rounded-full font-body text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.1em] mb-4 sm:mb-6">
                SEASONAL
              </div>
              <h2 className="font-headline text-[28px] sm:text-[32px] font-semibold text-primary mb-4 sm:mb-6 leading-[1.3]">
                Rainy Evenings
              </h2>
              <p className="font-body text-[16px] sm:text-[18px] text-on-surface-variant leading-relaxed">
                There is a distinct magic to quiet evenings when the rain begins to fall. The world slows down outside our windows, while inside, the air is thick with the aroma of freshly ground beans and warm pastries. It&apos;s the perfect excuse to linger a little longer.
              </p>
            </div>
            <div className="lg:w-1/2 w-full relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-xl bg-surface-container-high shadow-sm">
              <Image 
                src="/images/amit-cafe/moments-rainy-evening-optimized.jpg"
                alt="Rainy evening from inside a luxury cafe with soft blurred city lights"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="max-w-3xl mx-auto text-center px-margin-mobile mb-12 sm:mb-16 lg:mb-stack-lg">
          <h2 className="font-headline text-[28px] sm:text-[32px] font-semibold text-primary mb-6 sm:mb-8 leading-[1.3]">
            Make your own moment.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/reservations" 
              className="w-full sm:w-auto bg-primary-container text-on-primary rounded px-8 py-4 font-body text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#705a4c] transition-all text-center inline-block"
            >
              Reserve a Table
            </Link>
            <Link 
              href="/#visit" 
              className="w-full sm:w-auto border border-primary-container text-primary-container rounded px-8 py-4 font-body text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-surface-container-low transition-colors text-center inline-block"
            >
              Find Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
