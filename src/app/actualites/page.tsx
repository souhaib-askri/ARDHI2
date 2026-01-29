import { Metadata } from "next";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsContent } from "@/components/news/NewsContent";

export const metadata: Metadata = {
  title: "Actualités | ARDHI - Innovation AgriTech Tunisienne",
  description:
    "Suivez l'actualité d'ARDHI : mises à jour de la plateforme, tests terrain à Béja, partenariats stratégiques, développement du drone de fertilisation et innovations AgriTech.",
  keywords: [
    "actualités agriculture",
    "agritech tunisie",
    "innovation agricole",
    "drone fertilisation",
    "tests terrain béja",
    "startup agriculture",
  ],
};

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewsHero />
      <NewsContent />
    </main>
  );
}
