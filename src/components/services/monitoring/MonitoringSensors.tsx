"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Droplets,
  Thermometer,
  FlaskConical,
  Leaf,
  Radio,
  Battery,
  Wifi,
  Sun,
} from "lucide-react";

const sensors = [
  {
    icon: Droplets,
    title: "Humidité du Sol",
    description:
      "Capteurs capacitifs mesurant le taux d'humidité volumétrique du sol à différentes profondeurs (10cm, 30cm, 60cm). Précision ±2%.",
    specs: [
      { label: "Plage", value: "0-100%" },
      { label: "Précision", value: "±2%" },
      { label: "Profondeurs", value: "3 niveaux" },
    ],
    color: "blue",
    applications: ["Pilotage irrigation", "Détection sécheresse", "Suivi infiltration"],
  },
  {
    icon: Thermometer,
    title: "Température du Sol",
    description:
      "Sondes thermiques de haute précision pour mesurer la température du sol, paramètre critique pour la germination et l'activité biologique.",
    specs: [
      { label: "Plage", value: "-40 à +85°C" },
      { label: "Précision", value: "±0.5°C" },
      { label: "Résolution", value: "0.1°C" },
    ],
    color: "amber",
    applications: ["Calendrier semis", "Activité microbienne", "Risque gel"],
  },
  {
    icon: FlaskConical,
    title: "Niveau pH",
    description:
      "Électrodes pH spécialement conçues pour les sols, résistantes à la corrosion. Indispensable pour ajuster les amendements et la fertilisation.",
    specs: [
      { label: "Plage", value: "3.5-9.0 pH" },
      { label: "Précision", value: "±0.1 pH" },
      { label: "Calibration", value: "Automatique" },
    ],
    color: "purple",
    applications: ["Choix cultures", "Amendements", "Absorption nutriments"],
  },
  {
    icon: Leaf,
    title: "Indicateurs Nutriments",
    description:
      "Capteurs de conductivité électrique (EC) et ions spécifiques pour estimer les niveaux NPK et la salinité du sol en continu.",
    specs: [
      { label: "EC", value: "0-20 mS/cm" },
      { label: "NPK", value: "Estimation" },
      { label: "Salinité", value: "Incluse" },
    ],
    color: "green",
    applications: ["Fertilisation précise", "Détection carences", "Salinisation"],
  },
];

const additionalSensors = [
  { icon: Sun, name: "Rayonnement solaire", status: "Disponible" },
  { icon: Wifi, name: "Station météo", status: "Intégrable" },
  { icon: Battery, name: "Autonomie solaire", status: "Option" },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
  amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", light: "bg-purple-50" },
  green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200", light: "bg-green-50" },
};

export function MonitoringSensors() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-cyan-700 border-cyan-300 bg-cyan-50"
          >
            <Radio className="w-4 h-4 mr-2" />
            Capteurs IoT
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-cyan-600">Capteurs</span> de Précision
          </h2>
          <p className="text-lg text-gray-600">
            Des capteurs professionnels sans fil, conçus pour l'agriculture et
            résistants aux conditions terrain difficiles.
          </p>
        </div>

        {/* Main Sensors Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {sensors.map((sensor) => {
            const colors = colorClasses[sensor.color];
            return (
              <Card
                key={sensor.title}
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
                        <sensor.icon className={`w-12 h-12 ${colors.text}`} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 lg:w-2/3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {sensor.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {sensor.description}
                      </p>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {sensor.specs.map((spec) => (
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

                      {/* Applications */}
                      <div className="flex flex-wrap gap-2">
                        {sensor.applications.map((app) => (
                          <Badge
                            key={app}
                            variant="outline"
                            className={`text-xs ${colors.bg} ${colors.text} ${colors.border}`}
                          >
                            {app}
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
            Capteurs Additionnels Disponibles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSensors.map((sensor) => (
              <div
                key={sensor.name}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                  <sensor.icon className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {sensor.name}
                  </div>
                  <div className="text-xs text-gray-500">{sensor.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sensor Specs Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "LoRaWAN", label: "Protocole sans fil" },
            { value: "2-5 km", label: "Portée transmission" },
            { value: "5+ ans", label: "Durée de vie batterie" },
            { value: "IP67", label: "Étanchéité" },
          ].map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-2xl font-bold text-cyan-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
