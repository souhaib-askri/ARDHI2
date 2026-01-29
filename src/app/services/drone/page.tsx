import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DroneHero } from "@/components/services/drone/DroneHero";
import { DroneFeatures } from "@/components/services/drone/DroneFeatures";
import { DroneVision } from "@/components/services/drone/DroneVision";
import { DroneTimeline } from "@/components/services/drone/DroneTimeline";
import { DroneCTA } from "@/components/services/drone/DroneCTA";

export const metadata: Metadata = {
  title: "Drone de Fertilisation | En Développement | ARDHI",
  description:
    "Solution drone autonome pour fertilisation de précision. Application ciblée, coût local réduit, intégration plateforme ARDHI. Bientôt disponible en Tunisie.",
  keywords: [
    "drone agricole",
    "fertilisation précision",
    "drone autonome",
    "agriculture Tunisie",
    "épandage drone",
    "ARDHI plateforme",
  ],
};

export default function DronePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <DroneHero />
        <DroneFeatures />
        <DroneVision />
        <DroneTimeline />
        <DroneCTA />
      </main>
      <Footer />
    </>
  );
}
