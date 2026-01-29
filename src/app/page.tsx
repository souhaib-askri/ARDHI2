import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  PlatformPreviewSection,
  ImpactSection,
  FinalCTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PlatformPreviewSection />
        <ImpactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}