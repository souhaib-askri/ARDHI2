"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, Download } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Rapports PDF professionnels",
  "Données exportables (Excel, CSV)",
  "Historique illimité",
  "Conformité certifications",
  "Analyses comparatives",
  "Mises à jour automatiques",
];

export function ReportsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Passez à une Agriculture{" "}
            <span className="text-blue-300">Basée sur les Données</span>
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Arrêtez de deviner, commencez à mesurer. Nos rapports transforment
            vos données terrain en décisions éclairées.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-blue-100"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-left">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/demo">
                <FileText className="mr-2 w-5 h-5" />
                Voir un Rapport Exemple
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 text-white hover:bg-blue-800/50 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">
                <Download className="mr-2 w-5 h-5" />
                Télécharger la Brochure
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                50+
              </div>
              <div className="text-sm text-blue-200">Types de rapports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                24/7
              </div>
              <div className="text-sm text-blue-200">Génération auto</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                100%
              </div>
              <div className="text-sm text-blue-200">Conformité labels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
