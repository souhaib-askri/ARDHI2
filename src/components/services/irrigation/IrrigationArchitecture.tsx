"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Radio,
  Brain,
  Droplets,
  Leaf,
  ArrowRight,
  Cpu,
  Cloud,
  Zap,
  Target,
} from "lucide-react";

const architectureSteps = [
  {
    id: "sensors",
    step: "1",
    title: "Capteurs IoT",
    subtitle: "Collecte terrain",
    icon: Radio,
    color: "cyan",
    description: "Capteurs sol et météo collectent les données en continu",
    items: [
      "Humidité sol multi-profondeur",
      "Température sol",
      "Station météo (ETP)",
      "Débitmètres",
    ],
  },
  {
    id: "ai",
    step: "2",
    title: "Moteur IA",
    subtitle: "Analyse & Recommandation",
    icon: Brain,
    color: "purple",
    description: "Algorithmes IA calculent les besoins hydriques optimaux",
    items: [
      "Modèle évapotranspiration",
      "Prévisions météo",
      "Historique parcelle",
      "Stade culture",
    ],
  },
  {
    id: "control",
    step: "3",
    title: "Contrôle Irrigation",
    subtitle: "Pilotage automatique",
    icon: Droplets,
    color: "emerald",
    description: "Commandes envoyées aux électrovannes et pompes",
    items: [
      "Électrovannes connectées",
      "Programmation secteurs",
      "Débit variable",
      "Override manuel",
    ],
  },
  {
    id: "optimization",
    step: "4",
    title: "Optimisation Eau",
    subtitle: "Économies & Performance",
    icon: Leaf,
    color: "green",
    description: "Suivi des économies et amélioration continue",
    items: [
      "Dashboard consommation",
      "Alertes fuites",
      "Rapports économies",
      "Apprentissage continu",
    ],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string; dark: string }> = {
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-300", light: "bg-cyan-50", dark: "bg-cyan-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-300", light: "bg-purple-50", dark: "bg-purple-600" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-300", light: "bg-emerald-50", dark: "bg-emerald-600" },
  green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-300", light: "bg-green-50", dark: "bg-green-600" },
};

export function IrrigationArchitecture() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-gray-700 border-gray-300 bg-gray-50"
          >
            <Cpu className="w-4 h-4 mr-2" />
            Architecture Système
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Du Capteur à{" "}
            <span className="text-emerald-600">l'Économie d'Eau</span>
          </h2>
          <p className="text-lg text-gray-600">
            Un workflow intelligent qui transforme les données terrain en
            décisions d'irrigation optimales, automatiquement.
          </p>
        </div>

        {/* Architecture Flow - Desktop */}
        <div className="hidden lg:block relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 via-emerald-400 to-green-400 -translate-y-1/2 rounded-full opacity-30" />
          
          {/* Steps */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {architectureSteps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <div key={step.id} className="relative">
                  {/* Arrow */}
                  {index < architectureSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-3 z-20 -translate-y-1/2">
                      <div className={`w-6 h-6 rounded-full ${colors.dark} flex items-center justify-center`}>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}

                  <Card className={`border-2 ${colors.border} ${colors.light} h-full`}>
                    <CardContent className="p-6">
                      {/* Step Number */}
                      <div className={`w-10 h-10 rounded-full ${colors.dark} text-white font-bold flex items-center justify-center mb-4`}>
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-4`}>
                        <step.icon className={`w-8 h-8 ${colors.text}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className={`text-sm ${colors.text} mb-3`}>
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {step.description}
                      </p>

                      {/* Items */}
                      <ul className="space-y-2">
                        {step.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.dark}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture Flow - Mobile */}
        <div className="lg:hidden space-y-4 mb-16">
          {architectureSteps.map((step, index) => {
            const colors = colorClasses[step.color];
            return (
              <div key={step.id}>
                <Card className={`border-2 ${colors.border} ${colors.light}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${colors.dark} text-white font-bold flex items-center justify-center flex-shrink-0`}>
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className={`text-sm ${colors.text} mb-2`}>
                          {step.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.items.map((item, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className={`text-xs ${colors.bg} ${colors.text} ${colors.border}`}
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < architectureSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-gray-300 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Key Technologies */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Technologies Clés
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Radio, label: "LoRaWAN", desc: "Communication longue portée" },
              { icon: Cloud, label: "Cloud AWS", desc: "Infrastructure scalable" },
              { icon: Brain, label: "ML/AI", desc: "Modèles prédictifs" },
              { icon: Zap, label: "Temps Réel", desc: "Latence < 5 sec" },
            ].map((tech) => (
              <div key={tech.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                  <tech.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-white font-semibold">{tech.label}</div>
                <div className="text-sm text-gray-400">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
