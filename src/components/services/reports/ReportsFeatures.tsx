"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  FlaskConical,
  Droplets,
  TrendingUp,
  CloudRain,
  FileText,
  Calendar,
  Shield,
} from "lucide-react";

const reportTypes = [
  {
    icon: FileCheck,
    title: "Rapports de Traçabilité",
    description:
      "Documentez chaque intervention, traitement et récolte. Générez automatiquement les rapports de conformité pour les certifications biologiques, GlobalGAP ou autres labels de qualité.",
    color: "green",
    features: [
      "Historique interventions",
      "Conformité bio/labels",
      "Export réglementaire",
    ],
  },
  {
    icon: FlaskConical,
    title: "Diagnostic Sol",
    description:
      "Analysez la composition et la santé de vos sols. Rapports détaillés sur le pH, l'humidité, les nutriments (NPK) et les recommandations d'amendements personnalisées.",
    color: "amber",
    features: [
      "Analyse NPK complète",
      "Cartographie pH",
      "Recommandations amendements",
    ],
  },
  {
    icon: Droplets,
    title: "Efficacité Irrigation",
    description:
      "Mesurez la performance de votre système d'irrigation. Identifiez les gaspillages, optimisez les cycles et suivez votre consommation d'eau par parcelle et par culture.",
    color: "blue",
    features: [
      "Consommation par parcelle",
      "Détection fuites",
      "Optimisation cycles",
    ],
  },
  {
    icon: TrendingUp,
    title: "Analyse Rendements",
    description:
      "Comparez vos rendements par saison, parcelle et culture. Identifiez les facteurs de succès et les axes d'amélioration pour maximiser votre productivité.",
    color: "emerald",
    features: [
      "Comparaison saisonnière",
      "Benchmarking régional",
      "Prévisions récolte",
    ],
  },
  {
    icon: CloudRain,
    title: "Alertes Risques Climatiques",
    description:
      "Anticipez les événements climatiques à risque : gel, canicule, grêle, sécheresse. Recevez des rapports préventifs avec recommandations de protection.",
    color: "purple",
    features: [
      "Prévisions 14 jours",
      "Alertes personnalisées",
      "Plans de protection",
    ],
  },
  {
    icon: FileText,
    title: "Bilan Financier",
    description:
      "Suivez la rentabilité de chaque parcelle et culture. Analysez vos coûts (intrants, main d'œuvre, eau) et calculez votre marge nette par hectare.",
    color: "slate",
    features: ["ROI par parcelle", "Coûts détaillés", "Marge nette/ha"],
  },
  {
    icon: Calendar,
    title: "Planning Saisonnier",
    description:
      "Visualisez et planifiez toutes vos activités agricoles. Rapports de suivi des tâches, échéances et recommandations de calendrier cultural.",
    color: "cyan",
    features: [
      "Calendrier cultural",
      "Rappels automatiques",
      "Suivi tâches",
    ],
  },
  {
    icon: Shield,
    title: "Audit & Conformité",
    description:
      "Préparez vos audits de certification en un clic. Générez tous les documents requis avec traçabilité complète et preuves d'intervention.",
    color: "red",
    features: [
      "Dossiers audit",
      "Preuves traçabilité",
      "Conformité réglementaire",
    ],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200" },
  amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
  red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
  slate: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
};

export function ReportsFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types de <span className="text-blue-600">Rapports</span> Disponibles
          </h2>
          <p className="text-lg text-gray-600">
            Une gamme complète de rapports pour couvrir tous les aspects de
            votre exploitation agricole, de la traçabilité à l'analyse financière.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportTypes.map((report) => {
            const colors = colorClasses[report.color];
            return (
              <Card
                key={report.title}
                className="border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <report.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {report.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {report.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {report.features.map((feature) => (
                      <span
                        key={feature}
                        className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
