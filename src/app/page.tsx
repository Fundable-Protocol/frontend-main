import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/modules/landing-page/Hero";
import FeatureSection from "@/components/modules/landing-page/FeatureSection";
import UtilitySection from "@/components/modules/landing-page/UtilitySection";
import FaqSection from "@/components/modules/landing-page/FaqSection";

export default function Home() {
  return (
    <main className="h-dvh flex flex-col overflow-auto text-white">
      <Navbar />
      <div className="flex-1 overflow-auto space-y-8">
        <Hero />
        <FeatureSection />
        <UtilitySection />
        <FaqSection />
      </div>
    </main>
  );
}
