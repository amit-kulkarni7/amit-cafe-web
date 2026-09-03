import Link from "next/link";

interface FinalCtaProps {
  title?: string;
}

export default function FinalCta({ title = "A little cup of peace awaits." }: FinalCtaProps) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg text-center py-14 sm:py-20 bg-primary-container rounded-3xl shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="relative z-10 px-4 sm:px-6">
        <h2 className="font-headline text-[32px] sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-[#dec1af] leading-[1.15]">
          {title}
        </h2>
        <div className="flex justify-center">
          <Link 
            href="/reservations" 
            className="bg-[#dec1af] text-primary-container font-body text-[12px] px-10 py-5 rounded hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all uppercase font-bold tracking-widest inline-block"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </section>
  );
}
