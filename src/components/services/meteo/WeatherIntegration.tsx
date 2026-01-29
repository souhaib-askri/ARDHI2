"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Droplets,
  Bug,
  Thermometer,
  ArrowRight,
  CloudSun,
  Brain,
  Bell,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const integrations = [
  {
    icon: Droplets,
    title: "Planification Irrigation",
    subtitle: "Optimisation automatique",
    description:
      "Les données météo sont intégrées en temps réel à notre algorithme d'irrigation. Le système ajuste automatiquement les besoins en eau selon l'évapotranspiration calculée et les prévisions de pluie.",
    color: "blue",
    metrics: [
      { label: "Économie eau", value: "25-40%" },
      { label: "Ajustement", value: "Auto" },
    ],
    examples: [
      "Réduction dose si pluie prévue dans 24h",
      "Augmentation si vague de chaleur",
      "Report arrosage si vent > 20 km/h",
    ],
  },
  {
    icon: Bug,
    title: "Prédiction Maladies",
    subtitle: "Modèles phytosanitaires",
    description:
      "Notre IA analyse les conditions climatiques (humidité, température, point de rosée) pour prédire le risque de développement des maladies fongiques 48-72h à l'avance.",
    color: "red",
    metrics: [
      { label: "Anticipation", value: "48-72h" },
      { label: "Précision", value: "85%" },
    ],
    examples: [
      "Mildiou: HR > 90% + T 15-25°C",
      "Oïdium: HR 40-70% + T 20-30°C",
      "Botrytis: HR > 85% + pluie",
    ],
  },
  {
    icon: Thermometer,
    title: "Gestion Stress Climatique",
    subtitle: "Alertes préventives",
    description:
      "Recevez des alertes personnalisées selon les seuils de stress pour vos cultures: gel, canicule, vent violent, déficit hydrique. Anticipez les mesures de protection.",
    color: "amber",
    metrics: [
      { label: "Types alertes", value: "12+" },
      { label: "Canaux", value: "SMS/App" },
    ],
    examples: [
      "Alerte gel: T < 2°C (agrumes)",
      "Stress thermique: T > 35°C (tomates)",
      "Vent fort: > 40 km/h (traitements)",
    ],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string; dark: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50", dark: "bg-blue-600" },
  red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200", light: "bg-red-50", dark: "bg-red-600" },
  amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50", dark: "bg-amber-600" },
};

// Data flow visualization
const dataFlow = [
  { step: "1", label: "Capteurs", icon: CloudSun },
  { step: "2", label: "Collecte", icon: CloudSun },
  { step: "3", label: "Analyse IA", icon: Brain },
  { step: "4", label: "Décision", icon: CheckCircle2 },
  { step: "5", label: "Action", icon: Bell },
];

export function WeatherIntegration() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-gray-700 border-gray-300 bg-gray-50"
          >
            <Brain className="w-4 h-4 mr-2" />
            Intégration Intelligente
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des Données Météo{" "}
            <span className="text-sky-600">Actionnables</span>
          </h2>
          <p className="text-lg text-gray-600">
            Vos données météo ne restent pas dans un dashboard. Elles alimentent
            des algorithmes qui prennent des décisions pour vous.
          </p>
        </div>

        {/* Data Flow */}
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">
            Flux de Données → Décisions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {dataFlow.map((item, index) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-white border-2 border-sky-200 shadow-sm flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {item.label}
                  </div>
                </div>
                {index < dataFlow.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-sky-300 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {integrations.map((integration) => {
            const colors = colorClasses[integration.color];
            return (
              <Card
                key={integration.title}
                className={`border-2 ${colors.border} hover:shadow-lg transition-all duration-300`}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${colors.dark} flex items-center justify-center flex-shrink-0`}
                    >
                      <integration.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {integration.title}
                      </h3>
                      <p className={`text-sm ${colors.text}`}>
                        {integration.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {integration.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-3 mb-4">
                    {integration.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className={`${colors.light} px-3 py-2 rounded-lg flex-1 text-center`}
                      >
                        <div className={`text-lg font-bold ${colors.text}`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Examples */}
                  <div className={`${colors.light} rounded-xl p-4`}>
                    <div className="text-xs font-semibold text-gray-700 uppercase mb-2">
                      Exemples de règles
                    </div>
                    <ul className="space-y-2">
                      {integration.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          {integration.color === "red" ? (
                            <AlertTriangle className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                          ) : (
                            <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                          )}
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Benefits */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                value: "-30%",
                label: "Traitements phyto",
                desc: "Grâce à la prédiction des maladies",
              },
              {
                value: "+15%",
                label: "Rendement",
                desc: "Irrigation optimisée au quotidien",
              },
              {
                value: "48h",
                label: "Anticipation",
                desc: "Pour protéger vos cultures",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-sky-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
