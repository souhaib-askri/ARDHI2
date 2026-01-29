import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GestionHero } from "@/components/services/gestion/GestionHero";
import { GestionFeatures } from "@/components/services/gestion/GestionFeatures";
import { GestionDashboard } from "@/components/services/gestion/GestionDashboard";
import { GestionParcels } from "@/components/services/gestion/GestionParcels";
import { GestionCTA } from "@/components/services/gestion/GestionCTA";

export const metadata: Metadata = {
  title: "Gestion des Exploitations | ARDHI",
  description:
    "Plateforme de gestion agricole complète. Gérez vos parcelles, suivez vos cultures, contrôlez l'irrigation et analysez les performances de votre exploitation.",
  keywords: [
    "gestion agricole",
    "gestion exploitation",
    "suivi parcelles",
    "monitoring cultures",
    "irrigation intelligente",
    "données agricoles",
  ],
};

export default function GestionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <GestionHero />
        <GestionFeatures />
        <GestionDashboard />
        <GestionParcels />
        <GestionCTA />
      </main>
      <Footer />
    </>
  );
}
