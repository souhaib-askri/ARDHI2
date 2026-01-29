"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Target,
  Cpu,
  Coins,
  MapPin,
  Zap,
  Shield,
  Wifi,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Fertilisation Autonome",
    description:
      "Le drone effectue ses missions de manière autonome selon les plans de vol générés par ARDHI. Décollage, épandage et atterrissage automatisés pour une efficacité maximale.",
    status: "development",
    specs: [
      { label: "Autonomie", value: "30 min" },
      { label: "Capacité", value: "15 kg" },
      { label: "Portée", value: "5 km" },
    ],
    color: "violet",
  },
  {
    icon: Target,
    title: "Application de Précision",
    description:
      "Épandage ciblé basé sur les cartes de prescription générées par notre IA. Chaque zone reçoit la dose exacte nécessaire, réduisant le gaspillage et optimisant l'efficacité.",
    status: "development",
    specs: [
      { label: "Précision", value: "±10 cm" },
      { label: "Débit variable", value: "Oui" },
      { label: "RTK GPS", value: "Intégré" },
    ],
    color: "indigo",
  },
  {
    icon: Coins,
    title: "Solution Locale Abordable",
    description:
      "Conçu et assemblé en Tunisie pour réduire les coûts. Notre objectif : rendre la technologie drone accessible aux exploitations de toutes tailles, pas seulement aux grandes fermes.",
    status: "development",
    specs: [
      { label: "Coût", value: "-50% vs import" },
      { label: "SAV", value: "Local" },
      { label: "Pièces", value: "Disponibles" },
    ],
    color: "emerald",
  },
  {
    icon: Cpu,
    title: "Intégration Plateforme ARDHI",
    description:
      "Le drone est piloté directement depuis la plateforme ARDHI. Les données sol, météo et satellites génèrent automatiquement les plans de vol et doses de fertilisation optimales.",
    status: "development",
    specs: [
      { label: "Sync", value: "Temps réel" },
      { label: "Plans vol", value: "Auto" },
      { label: "Rapports", value: "Intégrés" },
    ],
    color: "cyan",
  },
];

const additionalFeatures = [
  { icon: MapPin, label: "Cartographie 3D", status: "Planifié" },
  { icon: Zap, label: "Charge rapide", status: "En R&D" },
  { icon: Shield, label: "Détection obstacles", status: "En R&D" },
  { icon: Wifi, label: "Connexion 4G/5G", status: "Planifié" },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  violet: { bg: "bg-violet-100", text: "text-violet-600", border: "border-violet-200", light: "bg-violet-50" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200", light: "bg-indigo-50" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", light: "bg-emerald-50" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", light: "bg-cyan-50" },
};

export function DroneFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-violet-700 border-violet-300 bg-violet-50"
          >
            <Plane className="w-4 h-4 mr-2" />
            Fonctionnalités Drone
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologie en{" "}
            <span className="text-violet-600">Développement</span>
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les capacités que nous développons pour révolutionner la
            fertilisation agricole en Tunisie.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature) => {
            const colors = colorClasses[feature.color];
            return (
              <Card
                key={feature.title}
                className="border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden relative"
              >
                {/* Development Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                    <Clock className="w-3 h-3 mr-1" />
                    En développement
                  </Badge>
                </div>

                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{feature.description}</p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-3">
                    {feature.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className={`${colors.light} ${colors.border} border px-3 py-1.5 rounded-lg`}
                      >
                        <span className="text-xs text-gray-500">
                          {spec.label}:
                        </span>{" "}
                        <span className={`text-sm font-medium ${colors.text}`}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Fonctionnalités Additionnelles en Planification
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {feature.label}
                  </div>
                  <div className="text-xs text-gray-500">{feature.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Specs */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "15 kg", label: "Capacité réservoir" },
            { value: "30 min", label: "Autonomie vol" },
            { value: "10 ha/h", label: "Surface couverte" },
            { value: "±10 cm", label: "Précision GPS RTK" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-violet-50 rounded-xl">
              <div className="text-2xl font-bold text-violet-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className="text-xs text-amber-600 mt-1">Objectif</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
