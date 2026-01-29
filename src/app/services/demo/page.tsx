import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoHero } from "@/components/services/demo/DemoHero";
import { DemoDashboard } from "@/components/services/demo/DemoDashboard";
import { DemoFeatures } from "@/components/services/demo/DemoFeatures";
import { DemoRequestForm } from "@/components/services/demo/DemoRequestForm";

export const metadata: Metadata = {
  title: "Démonstration Plateforme | ARDHI",
  description:
    "Découvrez ARDHI en action : simulation de monitoring agricole en temps réel, visualisation données IoT, moteur de recommandations IA et système d'alertes intelligent.",
  keywords: [
    "démo ARDHI",
    "démonstration plateforme agricole",
    "monitoring temps réel",
    "IoT agriculture",
    "dashboard agricole",
    "simulation ferme",
  ],
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <DemoHero />
        <DemoDashboard />
        <DemoFeatures />
        <DemoRequestForm />
      </main>
      <Footer />
    </>
  );
}
