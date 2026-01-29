import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IrrigationHero } from "@/components/services/irrigation/IrrigationHero";
import { IrrigationArchitecture } from "@/components/services/irrigation/IrrigationArchitecture";
import { IrrigationFeatures } from "@/components/services/irrigation/IrrigationFeatures";
import { IrrigationDashboard } from "@/components/services/irrigation/IrrigationDashboard";
import { IrrigationCTA } from "@/components/services/irrigation/IrrigationCTA";

export const metadata: Metadata = {
  title: "Irrigation Intelligente | ARDHI",
  description:
    "Système d'irrigation intelligent basé sur IA. Planification automatique, monitoring temps réel, optimisation de la consommation d'eau. Réduisez le gaspillage et améliorez la précision.",
  keywords: [
    "irrigation intelligente",
    "économie eau",
    "agriculture précision",
    "capteurs IoT",
    "IA agriculture",
    "pilotage irrigation",
    "Tunisie",
  ],
};

export default function IrrigationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <IrrigationHero />
        <IrrigationArchitecture />
        <IrrigationFeatures />
        <IrrigationDashboard />
        <IrrigationCTA />
      </main>
      <Footer />
    </>
  );
}
