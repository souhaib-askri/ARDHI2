"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wifi,
  Brain,
  Bell,
  LineChart,
  Cpu,
  Radio,
  Zap,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Visualisation Données IoT",
    description:
      "Les capteurs IoT déployés sur le terrain mesurent en continu l'humidité du sol, la température, le pH et d'autres paramètres critiques. Ces données sont transmises en temps réel vers la plateforme où elles sont agrégées, nettoyées et visualisées de manière intuitive.",
    highlights: [
      {
        icon: Radio,
        text: "Capteurs LoRaWAN longue portée",
      },
      {
        icon: LineChart,
        text: "Graphiques temps réel",
      },
      {
        icon: Cpu,
        text: "Edge computing local",
      },
    ],
    color: "blue",
  },
  {
    icon: Brain,
    title: "Moteur de Recommandations",
    description:
      "Notre moteur d'intelligence artificielle analyse vos données historiques, les conditions météo et les meilleures pratiques agricoles pour générer des recommandations personnalisées. Chaque suggestion est accompagnée de l'impact estimé sur votre rendement et vos coûts.",
    highlights: [
      {
        icon: Target,
        text: "Recommandations personnalisées",
      },
      {
        icon: LineChart,
        text: "Prédiction des rendements",
      },
      {
        icon: Zap,
        text: "Actions automatisables",
      },
    ],
    color: "purple",
  },
  {
    icon: Bell,
    title: "Système d'Alertes",
    description:
      "Recevez des notifications instantanées pour les événements critiques : seuils dépassés, anomalies détectées, conditions météo défavorables. Configurez vos préférences et canaux de notification (app, SMS, email) selon la priorité.",
    highlights: [
      {
        icon: Bell,
        text: "Alertes temps réel",
      },
      {
        icon: Cpu,
        text: "Détection anomalies IA",
      },
      {
        icon: Radio,
        text: "Multi-canal (app, SMS, email)",
      },
    ],
    color: "amber",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", light: "bg-purple-50" },
  amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
};

export function DemoFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-gray-700 border-gray-300 bg-gray-50"
          >
            <Cpu className="w-4 h-4 mr-2" />
            Technologies Clés
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment Fonctionne{" "}
            <span className="text-green-600">ARDHI</span>
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les technologies qui alimentent la plateforme et
            permettent un monitoring agricole intelligent.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            const isReversed = index % 2 === 1;

            return (
              <Card
                key={feature.title}
                className={`border-gray-200 overflow-hidden ${colors.light}`}
              >
                <CardContent className="p-0">
                  <div
                    className={`flex flex-col ${
                      isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 p-8 lg:p-12">
                      <div
                        className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-6`}
                      >
                        <feature.icon className={`w-7 h-7 ${colors.text}`} />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      <div className="space-y-3">
                        {feature.highlights.map((highlight) => (
                          <div
                            key={highlight.text}
                            className="flex items-center gap-3"
                          >
                            <div
                              className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}
                            >
                              <highlight.icon
                                className={`w-4 h-4 ${colors.text}`}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {highlight.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual */}
                    <div
                      className={`flex-1 ${colors.bg} p-8 lg:p-12 flex items-center justify-center min-h-[300px]`}
                    >
                      <div className="relative">
                        {/* Animated visual representation */}
                        <div className="w-48 h-48 relative">
                          {/* Central icon */}
                          <div
                            className={`absolute inset-0 m-auto w-20 h-20 ${colors.border} border-2 rounded-2xl bg-white shadow-lg flex items-center justify-center`}
                          >
                            <feature.icon className={`w-10 h-10 ${colors.text}`} />
                          </div>

                          {/* Orbiting elements */}
                          {[0, 1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className={`absolute w-10 h-10 ${colors.border} border bg-white rounded-xl shadow-md flex items-center justify-center`}
                              style={{
                                top: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                                left: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
                                transform: "translate(-50%, -50%)",
                                animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
                              }}
                            >
                              <div className={`w-3 h-3 rounded-full ${colors.bg}`} />
                            </div>
                          ))}

                          {/* Connection lines */}
                          <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 100 100"
                          >
                            {[0, 1, 2, 3].map((i) => (
                              <line
                                key={i}
                                x1="50"
                                y1="50"
                                x2={50 + 30 * Math.cos((i * Math.PI) / 2)}
                                y2={50 + 30 * Math.sin((i * Math.PI) / 2)}
                                stroke="currentColor"
                                strokeWidth="0.5"
                                strokeDasharray="2,2"
                                className={colors.text}
                                opacity={0.3}
                              />
                            ))}
                          </svg>
                        </div>
                      </div>
                    </div>
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
