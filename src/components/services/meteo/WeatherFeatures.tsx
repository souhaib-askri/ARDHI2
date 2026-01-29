"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Thermometer,
  CloudRain,
  Wind,
  Droplets,
  Gauge,
  Sun,
  Compass,
  CloudSun,
} from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Monitoring Climatique Local",
    description:
      "Température de l'air, pression atmosphérique et rayonnement solaire. Des données hyper-locales qui reflètent les conditions réelles de votre parcelle, pas une moyenne régionale.",
    specs: [
      { label: "Température", value: "-40 à +60°C" },
      { label: "Précision", value: "±0.3°C" },
      { label: "Pression", value: "300-1100 hPa" },
    ],
    color: "amber",
    benefits: ["Planification semis", "Gestion gel", "Évapotranspiration"],
  },
  {
    icon: CloudRain,
    title: "Suivi Pluviométrique",
    description:
      "Pluviomètre à auget basculant haute précision. Mesurez chaque mm de pluie pour ajuster l'irrigation et suivre le bilan hydrique de vos cultures en temps réel.",
    specs: [
      { label: "Résolution", value: "0.2 mm" },
      { label: "Plage", value: "0-999 mm/h" },
      { label: "Auget", value: "Auto-vidange" },
    ],
    color: "blue",
    benefits: ["Bilan hydrique", "Ajustement irrigation", "Historique cumul"],
  },
  {
    icon: Wind,
    title: "Analyse Vitesse du Vent",
    description:
      "Anémomètre et girouette pour mesurer la vitesse et direction du vent. Essentiel pour les traitements phytosanitaires, la pollinisation et la prévention des dégâts.",
    specs: [
      { label: "Vitesse", value: "0-60 m/s" },
      { label: "Direction", value: "0-360°" },
      { label: "Seuil", value: "0.5 m/s" },
    ],
    color: "slate",
    benefits: ["Timing traitements", "Protection cultures", "Alertes tempête"],
  },
  {
    icon: Droplets,
    title: "Mesure Humidité Air",
    description:
      "Capteur d'humidité relative de l'air avec calcul du point de rosée. Paramètre clé pour prédire les conditions favorables aux maladies fongiques.",
    specs: [
      { label: "Plage", value: "0-100% HR" },
      { label: "Précision", value: "±2%" },
      { label: "Point rosée", value: "Calculé" },
    ],
    color: "cyan",
    benefits: ["Risque mildiou", "Oïdium", "Botrytis"],
  },
];

const additionalSensors = [
  { icon: Sun, name: "Rayonnement solaire", unit: "W/m²" },
  { icon: Gauge, name: "Pression atmosphérique", unit: "hPa" },
  { icon: Compass, name: "Direction vent", unit: "°" },
  { icon: Thermometer, name: "Température ressentie", unit: "°C" },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
  slate: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200", light: "bg-slate-50" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", light: "bg-cyan-50" },
};

export function WeatherFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sky-700 border-sky-300 bg-sky-50"
          >
            <CloudSun className="w-4 h-4 mr-2" />
            Capteurs Météo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Équipements de <span className="text-sky-600">Précision</span>
          </h2>
          <p className="text-lg text-gray-600">
            Des capteurs professionnels conçus pour l'agriculture, résistants
            aux intempéries et calibrés pour une précision maximale.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature) => {
            const colors = colorClasses[feature.color];
            return (
              <Card
                key={feature.title}
                className="border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Icon Section */}
                    <div
                      className={`${colors.light} p-8 flex items-center justify-center lg:w-1/3`}
                    >
                      <div
                        className={`w-24 h-24 rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center`}
                      >
                        <feature.icon className={`w-12 h-12 ${colors.text}`} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 lg:w-2/3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {feature.description}
                      </p>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {feature.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="bg-gray-50 px-3 py-1.5 rounded-lg"
                          >
                            <span className="text-xs text-gray-500">
                              {spec.label}:
                            </span>{" "}
                            <span className="text-sm font-medium text-gray-900">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit) => (
                          <Badge
                            key={benefit}
                            variant="outline"
                            className={`text-xs ${colors.bg} ${colors.text} ${colors.border}`}
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Sensors */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Mesures Additionnelles Incluses
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSensors.map((sensor) => (
              <div
                key={sensor.name}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <sensor.icon className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {sensor.name}
                  </div>
                  <div className="text-xs text-gray-500">{sensor.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Station Specs Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "WiFi/4G", label: "Connectivité" },
            { value: "10 min", label: "Fréquence données" },
            { value: "Solaire", label: "Alimentation" },
            { value: "IP66", label: "Protection" },
          ].map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-2xl font-bold text-sky-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
