import Image from "next/image";

export default function PeaceBreak() {
  return (
    <section className="w-full mb-stack-lg relative h-[55vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-primary-container">
        <Image
          src="/images/amit-cafe/peace-break-optimized.jpg"
          alt="A cinematic, wide-angle interior shot of a sophisticated cafe. Soft warm sunlight filters through sheer curtains, creating a serene, peaceful atmosphere."
          fill
          className="object-cover opacity-40 mix-blend-multiply"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-headline text-[32px] sm:text-[48px] md:text-[72px] leading-[1.15] sm:leading-[1.1] font-bold text-on-primary mb-4 sm:mb-6">
          Slow down.<br />You have time for coffee.
        </h2>
        <p className="font-body text-[13px] sm:text-[16px] md:text-[18px] text-[#dec1af] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold">
          Espresso &bull; Cheesecake &bull; No rush
        </p>
      </div>
    </section>
  );
}
