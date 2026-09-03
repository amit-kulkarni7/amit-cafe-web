import Image from "next/image";

export default function DessertFeature() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg py-12 md:py-20 lg:py-24 bg-[#E8E1DA] rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#705a4c] opacity-30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-container opacity-40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col justify-center">
          <span className="font-body text-[12px] text-secondary uppercase tracking-widest mb-3 sm:mb-4 block font-bold">
            Indulgence
          </span>
          <h2 className="font-headline text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-bold text-primary mb-6 sm:mb-8">
            Save room for something sweet.
          </h2>
          <p className="font-body text-[16px] sm:text-[18px] text-on-surface-variant mb-8 sm:mb-10 leading-relaxed max-w-md">
            Our desserts are crafted with the same precision and passion as our coffee. From rich, velvety textures to light, delicate flavors, every bite is a celebration.
          </p>
          <button className="bg-primary text-on-primary font-body text-[12px] px-8 py-4 rounded hover:bg-[#886955] hover:-translate-y-1 hover:shadow-lg transition-all self-start shadow-md uppercase tracking-widest font-bold">
            See Desserts
          </button>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] transform rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white/50">
          <Image
            src="/images/amit-cafe/dessert-feature-optimized.jpg"
            alt="Rich, indulgent dessert photography."
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
