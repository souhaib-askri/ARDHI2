import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WeatherHero } from "@/components/services/meteo/WeatherHero";
import { WeatherFeatures } from "@/components/services/meteo/WeatherFeatures";
import { WeatherDashboard } from "@/components/services/meteo/WeatherDashboard";
import { WeatherIntegration } from "@/components/services/meteo/WeatherIntegration";
import { WeatherCTA } from "@/components/services/meteo/WeatherCTA";

export const metadata: Metadata = {
  title: "Station Météo Agricole | ARDHI",
  description:
    "Stations météo connectées pour l'agriculture. Monitoring climatique local, pluviométrie, vent et humidité. Données intégrées à l'irrigation et prédiction des maladies.",
  keywords: [
    "station météo agricole",
    "pluviomètre connecté",
    "anémomètre",
    "humidité air",
    "prédiction maladies",
    "irrigation intelligente",
    "agriculture Tunisie",
  ],
};

export default function MeteoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <WeatherHero />
        <WeatherFeatures />
        <WeatherDashboard />
        <WeatherIntegration />
        <WeatherCTA />
      </main>
      <Footer />
    </>
  );
}
