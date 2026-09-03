import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import BrandIntro from "@/components/brand-intro";
import SignatureMenu from "@/components/signature-menu";
import PeaceBreak from "@/components/peace-break";
import CafeExperience from "@/components/cafe-experience";
import DessertFeature from "@/components/dessert-feature";
import FloatingReviews from "@/components/floating-reviews";
import VisitSection from "@/components/visit-section";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    absolute: "Amit Cafe | A little cup of peace.",
  },
  description: "A little cup of peace. A Portland-inspired cafe concept for specialty coffee, desserts, and quiet luxury.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-[100px] md:pt-[130px]">
        <Hero />
        <BrandIntro />
        <SignatureMenu />
        <PeaceBreak />
        <CafeExperience />
        <DessertFeature />
        <FloatingReviews />
        <VisitSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
