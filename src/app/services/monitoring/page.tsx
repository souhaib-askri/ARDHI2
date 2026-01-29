import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MonitoringHero } from "@/components/services/monitoring/MonitoringHero";
import { MonitoringSensors } from "@/components/services/monitoring/MonitoringSensors";
import { MonitoringLiveData } from "@/components/services/monitoring/MonitoringLiveData";
import { MonitoringArchitecture } from "@/components/services/monitoring/MonitoringArchitecture";
import { MonitoringCTA } from "@/components/services/monitoring/MonitoringCTA";

export const metadata: Metadata = {
  title: "Monitoring IoT Préventif | ARDHI",
  description:
    "Système de monitoring préventif basé sur capteurs IoT. Surveillance continue de l'humidité, température, pH et nutriments du sol. Détection précoce du stress des cultures.",
  keywords: [
    "capteurs IoT agricoles",
    "monitoring sol",
    "humidité sol",
    "température sol",
    "pH sol",
    "diagnostic préventif",
    "agriculture connectée",
  ],
};

export default function MonitoringPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <MonitoringHero />
        <MonitoringSensors />
        <MonitoringLiveData />
        <MonitoringArchitecture />
        <MonitoringCTA />
      </main>
      <Footer />
    </>
  );
}
