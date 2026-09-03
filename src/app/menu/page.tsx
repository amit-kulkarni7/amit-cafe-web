import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FinalCta from "@/components/final-cta";
import Image from "next/image";
import { menuData } from "@/data/menu";
import { businessConfig } from "@/config/business";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our specialty coffees, cold brews, and handcrafted desserts made for slow mornings and quiet luxury.",
};

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation activeItem="Menu" />
      <main className="flex-grow pt-[88px] sm:pt-[96px] lg:pt-[130px] bg-surface">
        {/* Menu Hero */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 sm:py-16 md:py-24 text-center flex flex-col items-center">
          <span className="font-body text-[12px] uppercase font-bold tracking-[0.1em] text-secondary mb-4 sm:mb-6 border border-outline-variant/50 px-4 py-1.5 rounded-full">
            The Catalog
          </span>
          <h1 className="font-headline text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.2] lg:leading-[1.1] text-primary font-bold max-w-3xl">
            Made for slow mornings,<br className="hidden sm:block" /> long conversations, and<br className="hidden sm:block" /> one more cup.
          </h1>
        </section>

        {/* Signature Picks */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-md md:pb-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Pick 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-high mb-4 sm:mb-6 relative shadow-sm">
                <Image
                  src="/images/amit-cafe/signature-basque-cheesecake-refined.jpg"
                  alt="Burnt Basque Cheesecake"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-surface/90 px-3 py-1 rounded-full border border-outline-variant/30 backdrop-blur-sm shadow-sm">
                  <span className="font-body text-[10px] text-primary uppercase font-bold tracking-[0.1em]">Must Try</span>
                </div>
              </div>
              <h3 className="font-headline text-[22px] sm:text-[24px] text-primary mb-1 sm:mb-2 font-semibold">Burnt Basque Cheesecake</h3>
              <p className="font-body text-[15px] sm:text-[16px] text-on-surface-variant">Deeply caramelized top, soft custard centre.</p>
            </div>
            {/* Pick 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-high mb-4 sm:mb-6 relative shadow-sm">
                <Image
                  src="/images/amit-cafe/menu-spanish-latte-optimized.jpg"
                  alt="Spanish Latte"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-headline text-[22px] sm:text-[24px] text-primary mb-1 sm:mb-2 font-semibold">Spanish Latte</h3>
              <p className="font-body text-[15px] sm:text-[16px] text-on-surface-variant">Double espresso, condensed milk, cold cream.</p>
            </div>
            {/* Pick 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-high mb-4 sm:mb-6 relative shadow-sm">
                <Image
                  src="/images/amit-cafe/menu-sea-salt-cold-brew-optimized.jpg"
                  alt="Sea Salt Cold Brew"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-headline text-[22px] sm:text-[24px] text-primary mb-1 sm:mb-2 font-semibold">Sea Salt Cold Brew</h3>
              <p className="font-body text-[15px] sm:text-[16px] text-on-surface-variant">Slow-steeped cold brew finished with savory-sweet sea salt foam.</p>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="sticky top-[77px] lg:top-[113px] z-40 bg-surface/95 backdrop-blur border-y border-outline-variant/30 py-3.5 sm:py-4 mb-12 sm:mb-16">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <ul className="flex items-center justify-start lg:justify-start gap-6 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar py-0.5">
              {menuData.map((category) => (
                <li key={category.id} className="whitespace-nowrap">
                  <a
                    href={`#${category.id}`}
                    className="font-body text-[13px] sm:text-[14px] uppercase font-bold tracking-[0.05em] text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Full Two-Column Menu */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-md md:pb-stack-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 sm:gap-y-16">
            {menuData.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-[150px] lg:scroll-mt-[190px]">
                <h2 className="font-headline text-[28px] sm:text-[32px] text-primary mb-6 sm:mb-8 border-b border-outline-variant/50 pb-3 sm:pb-4 font-semibold">
                  {category.title}
                </h2>
                <ul className="space-y-6">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-start gap-4 group">
                      <div className="min-w-0 flex-1">
                        <span className="font-body text-[17px] sm:text-[18px] text-primary font-medium block leading-snug">{item.name}</span>
                        {item.description && (
                          <p className="font-body text-[13px] sm:text-[14px] text-on-surface-variant mt-1 leading-relaxed max-w-md">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="font-body text-[15px] sm:text-[16px] text-on-surface-variant shrink-0 tabular-nums font-medium pt-0.5">
                        {businessConfig.currency.symbol}{item.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Feature */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-md md:pb-stack-lg">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/amit-cafe/menu-visual-feature-optimized.jpg"
              alt="Today's excuse to stay a little longer"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6 sm:p-8 text-center">
              <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-white font-bold max-w-2xl leading-[1.2]">
                Today&apos;s excuse to stay a little longer.
              </h2>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta title="Found something you like?" />
      </main>
      <Footer />
    </div>
  );
}
