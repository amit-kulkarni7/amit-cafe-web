import Image from "next/image";
import Link from "next/link";

export default function SignatureMenu() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 border-b border-outline-variant/30 pb-6 gap-4">
        <h2 className="font-headline text-[32px] sm:text-[36px] md:text-5xl font-bold text-primary">
          Signature Menu
        </h2>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 font-body text-[12px] bg-secondary-container text-[#574335] hover:bg-primary hover:text-on-primary px-6 py-3 rounded-full transition-colors uppercase font-bold tracking-wider"
        >
          View Full Menu <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* Item 1 - Featured Cheesecake */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 group relative rounded-xl overflow-hidden bg-surface-container-low aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[40vh] shadow-md">
          <Image
            src="/images/amit-cafe/signature-basque-cheesecake-refined.jpg"
            alt="Close-up editorial food photography of a burnt basque cheesecake slice on a rustic matte plate."
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent pointer-events-none">
            <span className="bg-[#dec1af] text-[#574335] font-body text-[10px] px-3.5 sm:px-4 py-1.5 rounded-sm mb-3 sm:mb-4 inline-block font-bold tracking-widest shadow-sm uppercase">
              Featured
            </span>
            <h3 className="font-headline text-white text-2xl sm:text-3xl mb-1.5 sm:mb-2 drop-shadow-md">
              Burnt Basque Cheesecake
            </h3>
            <p className="text-surface-container-low font-body text-[14px] sm:text-[16px] opacity-90 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0">
              A rich, creamy center with a perfectly caramelized crust.
            </p>
          </div>
        </div>

        {/* Item 2 - Spanish Latte */}
        <div className="col-span-1 group relative rounded-xl overflow-hidden bg-surface-container-low aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[40vh] shadow-md">
          <Image
            src="/images/amit-cafe/signature-coffee-refined.jpg"
            alt="Overhead shot of a perfect Spanish Latte with intricate latte art."
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 bg-gradient-to-t from-primary/90 to-transparent pointer-events-none">
            <h3 className="font-headline text-white text-xl sm:text-2xl drop-shadow-md">
              Spanish Latte
            </h3>
            <p className="text-surface-container-low font-body text-xs sm:text-sm mt-1 opacity-90 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Sweet, balanced, and visually stunning.
            </p>
          </div>
        </div>

        {/* Item 3 - Sea Salt Cold Brew */}
        <div className="col-span-1 group relative rounded-xl overflow-hidden bg-surface-container-low aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[40vh] shadow-md">
          <Image
            src="/images/amit-cafe/signature-cold-drink-refined.jpg"
            alt="A tall glass of Sea Salt Caramel Cold Brew with cascading milk swirls."
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 bg-gradient-to-t from-primary/90 to-transparent pointer-events-none">
            <h3 className="font-headline text-white text-xl sm:text-2xl drop-shadow-md">
              Sea Salt Cold Brew
            </h3>
            <p className="text-surface-container-low font-body text-xs sm:text-sm mt-1 opacity-90 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Refreshing cold brew with a savory-sweet foam.
            </p>
          </div>
        </div>

        {/* Item 4 - Text Block Tiramisu */}
        <div className="col-span-1 group relative rounded-xl overflow-hidden bg-surface-container-low min-h-[160px] sm:aspect-square lg:aspect-auto lg:h-[40vh] shadow-sm border border-outline-variant/30 flex items-center justify-center">
          <div className="w-full h-full bg-surface-container-low flex items-center justify-center p-6 sm:p-8 text-center transition-colors duration-500 group-hover:bg-surface-container-highest">
            <div>
              <h3 className="font-headline text-[22px] sm:text-[24px] text-primary mb-2">
                Tiramisu
              </h3>
              <p className="font-body text-[14px] sm:text-[16px] text-on-surface-variant">
                Classic espresso-soaked layers of perfection.
              </p>
            </div>
          </div>
        </div>

        {/* Item 5 - Text Block Caramel Cold Brew */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 group relative rounded-xl overflow-hidden bg-surface min-h-[160px] sm:aspect-[21/9] lg:aspect-auto lg:h-[40vh] shadow-sm border border-outline-variant/30 flex items-center justify-center">
          <div className="w-full h-full bg-surface flex items-center justify-center p-6 sm:p-8 text-center transition-colors duration-500 group-hover:bg-surface-container-low">
            <div>
              <h3 className="font-headline text-[22px] sm:text-[24px] text-primary mb-2">
                Caramel Cold Brew
              </h3>
              <p className="font-body text-[14px] sm:text-[16px] text-on-surface-variant">
                Smooth cold brew kissed with rich caramel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
