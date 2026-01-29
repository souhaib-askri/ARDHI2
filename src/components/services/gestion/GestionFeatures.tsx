"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Layers,
  Map,
  Sprout,
  Database,
  Droplets,
  TrendingUp,
  Bell,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Gestion Centralisée",
    description:
      "Regroupez toutes vos exploitations sur une seule plateforme. Gérez plusieurs fermes, associez des équipes et suivez les activités en temps réel.",
    color: "green",
    highlights: [
      "Multi-exploitations",
      "Gestion des équipes",
      "Tableau de bord unifié",
    ],
  },
  {
    icon: Map,
    title: "Suivi des Parcelles",
    description:
      "Cartographiez vos parcelles avec précision GPS. Définissez les zones de culture, les limites et les caractéristiques de chaque terrain.",
    color: "blue",
    highlights: ["Cartographie GPS", "Zonage intelligent", "Mesures précises"],
  },
  {
    icon: Sprout,
    title: "Monitoring des Cultures",
    description:
      "Suivez le cycle de vie de vos cultures de la plantation à la récolte. Planifiez les interventions et anticipez les besoins.",
    color: "emerald",
    highlights: [
      "Cycle de croissance",
      "Alertes phytosanitaires",
      "Prévisions récolte",
    ],
  },
  {
    icon: Database,
    title: "Historique des Données",
    description:
      "Conservez l'historique complet de votre exploitation. Analysez les tendances sur plusieurs saisons pour améliorer vos décisions.",
    color: "amber",
    highlights: [
      "Archives multi-saisons",
      "Analyses comparatives",
      "Export des données",
    ],
  },
  {
    icon: Droplets,
    title: "Contrôle Irrigation",
    description:
      "Pilotez votre système d'irrigation depuis le tableau de bord. Programmez les cycles et optimisez la consommation d'eau.",
    color: "cyan",
    highlights: [
      "Programmation automatique",
      "Économie d'eau",
      "Alertes fuites",
    ],
  },
  {
    icon: TrendingUp,
    title: "Indicateurs de Performance",
    description:
      "Mesurez la performance de chaque parcelle et culture. Identifiez les opportunités d'amélioration et suivez votre ROI.",
    color: "purple",
    highlights: ["KPIs agricoles", "Benchmarking", "Rapports automatisés"],
  },
  {
    icon: Bell,
    title: "Alertes Intelligentes",
    description:
      "Recevez des notifications pour les événements critiques : conditions météo, seuils d'humidité, échéances d'intervention.",
    color: "red",
    highlights: ["Alertes temps réel", "Notifications mobile", "Escalade"],
  },
  {
    icon: FileText,
    title: "Documentation & Rapports",
    description:
      "Générez automatiquement les rapports de traçabilité et conformité. Documentez chaque intervention pour les certifications.",
    color: "slate",
    highlights: ["Traçabilité complète", "Conformité", "Certifications"],
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

export function GestionFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fonctionnalités du Module{" "}
            <span className="text-green-600">Gestion</span>
          </h2>
          <p className="text-lg text-gray-600">
            Une suite complète d'outils pour digitaliser et optimiser la gestion
            de votre exploitation agricole au quotidien.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const colors = colorClasses[feature.color];
            return (
              <Card
                key={feature.title}
                className="border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} font-medium`}
                      >
                        {highlight}
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
