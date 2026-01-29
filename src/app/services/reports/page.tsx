import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReportsHero } from "@/components/services/reports/ReportsHero";
import { ReportsFeatures } from "@/components/services/reports/ReportsFeatures";
import { ReportsPreview } from "@/components/services/reports/ReportsPreview";
import { ReportsAnalytics } from "@/components/services/reports/ReportsAnalytics";
import { ReportsCTA } from "@/components/services/reports/ReportsCTA";

export const metadata: Metadata = {
  title: "Rapports Intelligents | ARDHI",
  description:
    "Rapports agricoles intelligents pour une prise de décision basée sur les données. Traçabilité, diagnostic sol, efficacité irrigation, analyse rendements et alertes climatiques.",
  keywords: [
    "rapports agricoles",
    "traçabilité agricole",
    "diagnostic sol",
    "analyse rendements",
    "alertes climatiques",
    "export PDF",
    "visualisation données",
  ],
};

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ReportsHero />
        <ReportsFeatures />
        <ReportsPreview />
        <ReportsAnalytics />
        <ReportsCTA />
      </main>
      <Footer />
    </>
  );
}
