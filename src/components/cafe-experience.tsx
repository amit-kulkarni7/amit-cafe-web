import Image from "next/image";
import Link from "next/link";

export default function CafeExperience() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-[70vh]">
          <Image
            src="/images/amit-cafe/cafe-experience-refined.jpg"
            alt="Editorial lifestyle photography of young adults studying and socializing in a bright, modern cafe setting."
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <h2 className="font-headline text-[40px] md:text-5xl font-bold text-primary mb-6">
            More than just a cafe.
          </h2>
          <p className="font-body text-[18px] text-on-surface-variant mb-8 leading-relaxed">
            A vibrant hub for the curious and the creative. Whether you&apos;re deeply focused on a project, catching up with old friends, or finding a quiet corner to read, our space adapts to your rhythm.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-4 text-on-surface">
              <span className="text-secondary opacity-80" aria-hidden="true">✦</span> High-speed connectivity for focused work.
            </li>
            <li className="flex items-center gap-4 text-on-surface">
              <span className="text-secondary opacity-80" aria-hidden="true">✦</span> Comfortable nooks for lingering conversations.
            </li>
            <li className="flex items-center gap-4 text-on-surface">
              <span className="text-secondary opacity-80" aria-hidden="true">✦</span> A curated playlist that sets the perfect mood.
            </li>
          </ul>
          <Link
            href="/moments"
            className="inline-flex items-center gap-2 font-body text-[12px] text-primary hover:text-[#886955] border-b-2 border-primary hover:border-[#886955] pb-1 transition-colors uppercase font-bold tracking-wider self-start"
          >
            Discover the Space
          </Link>
        </div>
      </div>
    </section>
  );
}
