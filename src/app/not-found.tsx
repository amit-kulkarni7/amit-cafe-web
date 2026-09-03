import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center pt-[100px] md:pt-[130px] pb-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-xl mx-auto text-center py-12">
          <span className="font-body text-[12px] uppercase font-bold tracking-[0.18em] text-secondary border border-outline-variant/50 px-4 py-1.5 rounded-full mb-6 inline-block">
            404
          </span>
          <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[56px] font-bold text-primary mb-4 leading-[1.15]">
            Page not found
          </h1>
          <p className="font-body text-[16px] sm:text-[18px] text-on-surface-variant max-w-md mx-auto mb-10 leading-relaxed">
            This page seems to have wandered off. Let us guide you back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto bg-primary text-on-primary font-body text-[12px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded hover:bg-[#705a4c] transition-all text-center inline-block shadow-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto border border-outline-variant text-primary font-body text-[12px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded hover:bg-surface-container-low transition-colors text-center inline-block"
            >
              Menu
            </Link>
            <Link
              href="/reservations"
              className="w-full sm:w-auto border border-outline-variant text-primary font-body text-[12px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded hover:bg-surface-container-low transition-colors text-center inline-block"
            >
              Reservations
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
