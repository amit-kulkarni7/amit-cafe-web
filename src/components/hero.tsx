import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-md lg:mb-stack-lg pt-6 sm:pt-8 lg:pt-12 relative">
      {/* Decorative background blur */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        <div className="lg:col-span-5 order-2 lg:order-1 mt-8 lg:mt-0 flex flex-col justify-center">
          <div className="relative inline-block mb-4 self-start">
            <h1 className="font-headline text-[40px] sm:text-[56px] lg:text-[80px] leading-[1.2] lg:leading-[1.1] lg:tracking-[-0.02em] font-bold text-primary relative z-10">
              Amit Cafe
            </h1>
            <div className="absolute -bottom-2 -right-4 bg-[#dec1af] text-[#574335] font-body text-[11px] sm:text-[12px] font-bold tracking-[0.1em] px-2.5 sm:px-3 py-1 rounded-sm transform -rotate-6 shadow-sm z-20">
              EST. 2024
            </div>
          </div>
          
          <p className="font-headline text-[22px] sm:text-[26px] lg:text-[32px] leading-[1.4] lg:leading-[1.3] font-semibold italic text-secondary mb-8 sm:mb-12 border-l-4 border-secondary-container pl-6 py-2">
            A little cup of peace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link
              href="/menu"
              className="bg-primary text-on-primary font-body text-[12px] uppercase px-10 py-5 rounded hover:bg-[#705a4c] hover:-translate-y-1 hover:shadow-xl transition-all w-full sm:w-auto text-center font-bold tracking-[0.1em]"
            >
              Explore the Menu
            </Link>
            <Link
              href="/reservations"
              className="border-2 border-primary text-primary font-body text-[12px] uppercase px-10 py-5 rounded hover:bg-primary-container hover:text-on-primary hover:-translate-y-1 transition-all w-full sm:w-auto text-center font-bold tracking-[0.1em]"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-7 order-1 lg:order-2 relative h-[45vh] sm:h-[55vh] lg:h-[80vh] w-full bg-surface-container-highest rounded-xl overflow-hidden group shadow-2xl">
          <Image
            src="/images/amit-cafe/hero-interior-optimized.jpg"
            alt="A meticulously styled, high-end photograph of a modern, quiet luxury cafe interior in Portland. Natural sunlight streaming through large windows, casting soft shadows on smooth concrete and warm wood tables."
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
