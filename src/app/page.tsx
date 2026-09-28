import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyColiseum } from "@/components/sections/WhyColiseum";
import { ProgramOverview } from "@/components/sections/ProgramOverview";
import { TrainingProcess } from "@/components/sections/TrainingProcess";
import { OfficeExperience } from "@/components/sections/OfficeExperience";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <WhyColiseum />
        <ProgramOverview />
        <TrainingProcess />
        <OfficeExperience />
        <ExpertiseSection />
        <ReviewsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
