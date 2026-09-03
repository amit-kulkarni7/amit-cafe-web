import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Somewhere between your first coffee and staying a little longer. Discover the quiet luxury philosophy behind our Portland-inspired cafe concept.",
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navigation activeItem="Our Story" />
      
      <main className="flex-grow pt-[88px] sm:pt-[96px] lg:pt-[130px] pb-stack-lg">
        {/* 1. Hero / Story opening */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg mt-4 sm:mt-6 lg:mt-8 xl:mt-12">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-center min-h-0 xl:min-h-[70vh]">
            <div className="xl:col-span-5 xl:col-start-1 z-10 flex flex-col items-start max-w-2xl xl:max-w-none">
              <span className="font-body text-[12px] uppercase font-bold tracking-[0.1em] text-surface-tint mb-4 sm:mb-6">
                OUR STORY
              </span>
              <h1 className="font-headline text-[32px] sm:text-[44px] md:text-[52px] xl:text-[64px] leading-[1.2] xl:leading-[1.1] text-primary font-bold mb-4 sm:mb-6">
                Somewhere between your first coffee and staying a little longer.
              </h1>
              <p className="font-body text-[16px] sm:text-[18px] text-on-surface-variant max-w-md leading-[1.6]">
                Amit Cafe is a pause from the pace of the city. A place for slow mornings and long conversations.
              </p>
            </div>
            <div className="xl:col-span-8 xl:col-start-5 mt-8 xl:mt-0 relative w-full">
              <div className="aspect-[1.49] w-full overflow-hidden bg-surface-variant rounded-xl shadow-lg relative">
                <Image
                  src="/images/amit-cafe/our-story-hero-optimized.jpg"
                  alt="Quiet luxury cafe interior in Portland"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 100vw, 66vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Philosophy */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg py-6 sm:py-8 md:py-stack-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-gutter">
            <h2 className="font-headline text-[28px] sm:text-[32px] font-semibold text-primary md:w-1/2 leading-[1.3]">
              A little cup of peace.
            </h2>
            <div className="md:w-1/2 border-l border-outline-variant/30 pl-4 sm:pl-6 md:pl-12">
              <p className="font-body text-[16px] sm:text-[18px] text-on-surface-variant leading-[1.6]">
                Stepping away from the city pace. Coffee without hurry, comfortable solitude, and dates that do not feel rushed.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Three Principles */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
          <div className="flex flex-col gap-10 sm:gap-16 md:gap-24">
            <div className="flex flex-col md:flex-row gap-3 sm:gap-6 md:gap-24 items-start w-full md:w-3/4">
              <span className="font-body text-[12px] uppercase font-bold tracking-[0.1em] text-surface-tint min-w-[120px] mt-1">
                TAKE YOUR TIME
              </span>
              <p className="font-headline text-[20px] sm:text-[24px] font-semibold text-primary leading-[1.4]">
                Good coffee should not feel rushed.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-6 md:gap-24 items-start w-full md:w-3/4 md:ml-auto">
              <span className="font-body text-[12px] uppercase font-bold tracking-[0.1em] text-surface-tint min-w-[120px] mt-1">
                KEEP IT SIMPLE
              </span>
              <p className="font-headline text-[20px] sm:text-[24px] font-semibold text-primary leading-[1.4]">
                Quality ingredients, thoughtful preparation, no unnecessary theatre.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-6 md:gap-24 items-start w-full md:w-3/4">
              <span className="font-body text-[12px] uppercase font-bold tracking-[0.1em] text-surface-tint min-w-[120px] mt-1">
                MAKE ROOM FOR PEOPLE
              </span>
              <p className="font-headline text-[20px] sm:text-[24px] font-semibold text-primary leading-[1.4]">
                A space equally comfortable for conversation, focus, and quiet.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Large coffee-preparation visual */}
        <section className="w-full mb-stack-lg">
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] w-full overflow-hidden bg-surface-variant relative max-w-[1920px] mx-auto shadow-sm">
            <Image
              src="/images/amit-cafe/our-story-coffee-preparation-optimized.jpg"
              alt="Barista preparing pour-over coffee"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </section>

        {/* 5 & 6. More Than Coffee & Portland Connection */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter lg:gap-24 items-start">
            <div className="flex flex-col gap-6 lg:sticky lg:top-36">
              <h2 className="font-headline text-[28px] sm:text-[32px] font-semibold text-primary leading-[1.3]">
                Coffee gets you through the door. The feeling makes you stay.
              </h2>
              <p className="font-body text-[16px] text-on-surface-variant leading-[1.6]">
                Connecting coffee, desserts, design, and atmosphere into a single, cohesive moment.
              </p>
              
              <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-outline-variant/30">
                <h2 className="font-headline text-[28px] sm:text-[32px] font-semibold text-primary mb-4 sm:mb-6 leading-[1.3]">
                  Right at home in Portland.
                </h2>
                <p className="font-body text-[16px] text-on-surface-variant mb-6 sm:mb-8 leading-[1.6]">
                  A sanctuary in the heart of the Pacific Northwest.
                </p>
              </div>
            </div>
            
            {/* Right side: Cafe Image + Human Brand Moment */}
            <div className="mt-8 lg:mt-0 flex flex-col gap-6 sm:gap-8">
              <div className="aspect-[16/10] sm:aspect-[1.79] w-full overflow-hidden rounded-xl bg-surface-container-high shadow-lg relative">
                <Image
                  src="/images/amit-cafe/our-story-interior-optimized.jpg"
                  alt="Cozy cafe corner with window view"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="px-1 sm:px-2">
                <p className="font-headline text-[24px] sm:text-[28px] md:text-[32px] italic text-primary-container leading-[1.4]">
                  No rush. We mean it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Closing Commercial CTA */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center py-12 sm:py-16 md:py-stack-lg border-t border-outline-variant/30 mt-12 sm:mt-16">
          <h2 className="font-headline text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-bold text-primary mb-8 sm:mb-12 max-w-2xl mx-auto leading-[1.15] sm:leading-[1.1] tracking-[-0.02em]">
            Now you know the story.<br/>Come taste it.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link 
              href="/menu"
              className="bg-primary-container text-on-primary rounded font-body text-[12px] uppercase font-bold tracking-[0.1em] px-8 py-4 hover:bg-[#705a4c] hover:shadow-lg transition-all active:scale-95 inline-block"
            >
              EXPLORE THE MENU
            </Link>
            <Link 
              href="/#visit"
              className="border-2 border-primary-container text-primary-container rounded font-body text-[12px] uppercase font-bold tracking-[0.1em] px-8 py-4 hover:bg-surface-container-low transition-colors inline-block"
            >
              FIND US
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
