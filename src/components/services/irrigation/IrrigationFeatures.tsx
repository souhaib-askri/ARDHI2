"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Gauge,
  Hand,
  Droplets,
  Clock,
  Bell,
  Settings,
  TrendingDown,
  Zap,
  Shield,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Calendar,
    title: "Planification Automatique",
    description:
      "L'IA calcule le calendrier d'irrigation optimal basé sur les besoins réels de vos cultures. Plus besoin de programmer manuellement : le système s'adapte en continu aux conditions.",
    color: "emerald",
    highlights: [
      { icon: Clock, text: "Horaires optimisés (éviter évaporation)" },
      { icon: Zap, text: "Adaptation météo automatique" },
      { icon: Settings, text: "Règles personnalisables par culture" },
    ],
    stats: { value: "100%", label: "Automatisation possible" },
  },
  {
    icon: Gauge,
    title: "Monitoring Temps Réel",
    description:
      "Visualisez en direct la consommation d'eau de chaque secteur, les débits, pressions et volumes. Détectez instantanément les anomalies et fuites potentielles.",
    color: "blue",
    highlights: [
      { icon: Gauge, text: "Débitmètres connectés" },
      { icon: Bell, text: "Alertes anomalies instantanées" },
      { icon: TrendingDown, text: "Historique et comparatifs" },
    ],
    stats: { value: "< 5 sec", label: "Latence données" },
  },
  {
    icon: Hand,
    title: "Override Manuel",
    description:
      "Gardez toujours le contrôle. Intervenez à tout moment depuis l'application mobile pour démarrer, arrêter ou modifier un cycle d'irrigation. L'automatisation ne vous enlève jamais le pouvoir.",
    color: "amber",
    highlights: [
      { icon: Hand, text: "Contrôle instantané par secteur" },
      { icon: Shield, text: "Modes manuel/auto/hybride" },
      { icon: Bell, text: "Notifications actions manuelles" },
    ],
    stats: { value: "Mobile", label: "Contrôle depuis l'app" },
  },
  {
    icon: Droplets,
    title: "Optimisation Économie Eau",
    description:
      "Notre objectif principal : chaque goutte compte. Le système minimise le gaspillage en irriguant uniquement selon les besoins réels, prévisions météo et capacité de rétention du sol.",
    color: "cyan",
    highlights: [
      { icon: TrendingDown, text: "Réduction 30-40% consommation" },
      { icon: Droplets, text: "Évite sur-arrosage et lessivage" },
      { icon: Gauge, text: "Rapports économies mensuels" },
    ],
    stats: { value: "-40%", label: "Économie eau moyenne" },
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", light: "bg-emerald-50" },
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
  amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", light: "bg-cyan-50" },
};

export function IrrigationFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-emerald-700 border-emerald-300 bg-emerald-50"
          >
            <Droplets className="w-4 h-4 mr-2" />
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Un Système{" "}
            <span className="text-emerald-600">Complet</span> et{" "}
            <span className="text-cyan-600">Flexible</span>
          </h2>
          <p className="text-lg text-gray-600">
            Automatisation intelligente avec contrôle total. Le meilleur des
            deux mondes pour une irrigation de précision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {mainFeatures.map((feature) => {
            const colors = colorClasses[feature.color];
            return (
              <Card
                key={feature.title}
                className="border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`${colors.light} p-6 border-b ${colors.border}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}
                        >
                          <feature.icon className={`w-7 h-7 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <div className={`${colors.bg} px-3 py-2 rounded-lg text-center`}>
                        <div className={`text-xl font-bold ${colors.text}`}>
                          {feature.stats.value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {feature.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{feature.description}</p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {feature.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}
                          >
                            <highlight.icon className={`w-4 h-4 ${colors.text}`} />
                          </div>
                          <span className="text-sm text-gray-700">
                            {highlight.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-200 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "30-40%", label: "Économie d'eau", desc: "Moyenne constatée" },
              { value: "+15%", label: "Rendement", desc: "Irrigation optimale" },
              { value: "24/7", label: "Monitoring", desc: "Surveillance continue" },
              { value: "< 2 ans", label: "ROI", desc: "Retour sur investissement" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  {stat.value}
                </div>
                <div className="font-medium text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
