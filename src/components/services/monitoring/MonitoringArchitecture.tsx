"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Radio,
  Cloud,
  Database,
  Brain,
  Bell,
  Smartphone,
  Server,
  Wifi,
  ArrowRight,
  Shield,
  Zap,
  RefreshCw,
} from "lucide-react";

const architectureLayers = [
  {
    id: "field",
    title: "Couche Terrain",
    subtitle: "Capteurs IoT",
    icon: Radio,
    color: "cyan",
    items: [
      { icon: Radio, label: "Capteurs sol" },
      { icon: Wifi, label: "Gateway LoRaWAN" },
      { icon: Zap, label: "Alimentation solaire" },
    ],
  },
  {
    id: "edge",
    title: "Edge Computing",
    subtitle: "Traitement local",
    icon: Server,
    color: "blue",
    items: [
      { icon: RefreshCw, label: "Agrégation données" },
      { icon: Shield, label: "Validation" },
      { icon: Zap, label: "Alertes locales" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Platform",
    subtitle: "ARDHI Backend",
    icon: Cloud,
    color: "purple",
    items: [
      { icon: Database, label: "Stockage sécurisé" },
      { icon: Brain, label: "Analyse IA" },
      { icon: Bell, label: "Système alertes" },
    ],
  },
  {
    id: "user",
    title: "Interfaces Utilisateur",
    subtitle: "Accès multi-canal",
    icon: Smartphone,
    color: "green",
    items: [
      { icon: Smartphone, label: "App mobile" },
      { icon: Smartphone, label: "Dashboard web" },
      { icon: Bell, label: "SMS/Email" },
    ],
  },
];

const features = [
  {
    icon: RefreshCw,
    title: "Collecte Continue 24/7",
    description:
      "Les capteurs mesurent et transmettent les données en continu, toutes les 15 minutes par défaut. La fréquence est ajustable selon vos besoins.",
  },
  {
    icon: Wifi,
    title: "Transmission Sans Fil",
    description:
      "Protocole LoRaWAN longue portée (2-5km) avec faible consommation. Les données transitent via des gateways vers le cloud de manière sécurisée.",
  },
  {
    icon: Cloud,
    title: "Synchronisation Cloud",
    description:
      "Toutes les données sont stockées sur nos serveurs sécurisés. Accédez à vos mesures depuis n'importe où, sur tous vos appareils.",
  },
  {
    icon: Shield,
    title: "Diagnostic Préventif",
    description:
      "Nos algorithmes détectent les anomalies et signaux de stress avant qu'ils ne deviennent visibles. Anticipez les problèmes, ne les subissez pas.",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  cyan: { bg: "bg-cyan-500", text: "text-cyan-600", border: "border-cyan-300", light: "bg-cyan-50" },
  blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-300", light: "bg-blue-50" },
  purple: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-300", light: "bg-purple-50" },
  green: { bg: "bg-green-500", text: "text-green-600", border: "border-green-300", light: "bg-green-50" },
};

export function MonitoringArchitecture() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-gray-700 border-gray-300 bg-gray-50"
          >
            <Server className="w-4 h-4 mr-2" />
            Architecture Système
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment Fonctionne le{" "}
            <span className="text-cyan-600">Système</span>
          </h2>
          <p className="text-lg text-gray-600">
            De la mesure terrain jusqu'à votre smartphone : découvrez
            l'architecture complète de notre solution de monitoring.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative mb-16">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-green-300 -translate-y-1/2 z-0" />

          {/* Architecture Layers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {architectureLayers.map((layer, index) => {
              const colors = colorClasses[layer.color];
              return (
                <div key={layer.id} className="relative">
                  {/* Arrow (Mobile/Tablet) */}
                  {index < architectureLayers.length - 1 && (
                    <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
                    </div>
                  )}

                  <Card
                    className={`border-2 ${colors.border} ${colors.light} h-full`}
                  >
                    <CardContent className="p-6">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 mx-auto`}
                      >
                        <layer.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
                        {layer.title}
                      </h3>
                      <p className={`text-sm ${colors.text} text-center mb-4`}>
                        {layer.subtitle}
                      </p>

                      {/* Items */}
                      <div className="space-y-2">
                        {layer.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg"
                          >
                            <item.icon className={`w-4 h-4 ${colors.text}`} />
                            <span className="text-sm text-gray-700">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Data Flow Description */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            Flux de Données
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { step: "1", label: "Mesure", desc: "Capteurs IoT" },
              { step: "2", label: "Transmission", desc: "LoRaWAN" },
              { step: "3", label: "Validation", desc: "Edge" },
              { step: "4", label: "Stockage", desc: "Cloud" },
              { step: "5", label: "Analyse", desc: "IA" },
              { step: "6", label: "Alerte", desc: "Utilisateur" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center mx-auto mb-2">
                    {item.step}
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
                {index < 5 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Explanations */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
