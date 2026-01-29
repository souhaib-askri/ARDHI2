"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Droplets,
  Target,
  Brain,
  Satellite,
  Sparkles,
  ArrowRight,
  Layers,
} from "lucide-react";

const visionItems = [
  {
    icon: Plane,
    title: "Drones Autonomes",
    description:
      "Flotte de drones entièrement autonomes capables d'effectuer des missions de fertilisation sans intervention humaine. Décollage, navigation, épandage et retour automatisés.",
    future: [
      "Multi-drones coordonnés",
      "Recharge automatique",
      "Missions de nuit",
    ],
    color: "violet",
  },
  {
    icon: Droplets,
    title: "Intégration Irrigation Automatisée",
    description:
      "Synchronisation complète entre nos systèmes d'irrigation intelligente et les drones de fertilisation. Une seule plateforme pour gérer eau et nutriments.",
    future: [
      "Fertigation drone + goutte-à-goutte",
      "Calendrier unifié",
      "Optimisation croisée",
    ],
    color: "cyan",
  },
  {
    icon: Target,
    title: "Agriculture de Précision Étendue",
    description:
      "Extension de nos capacités de précision à tous les aspects de la production agricole : semis, traitement phytosanitaire, récolte assistée.",
    future: [
      "Drone semoir",
      "Traitement localisé",
      "Comptage fruits",
    ],
    color: "emerald",
  },
];

const integrationStack = [
  { icon: Satellite, label: "Imagerie Satellite", desc: "Détection besoins" },
  { icon: Brain, label: "IA ARDHI", desc: "Prescription" },
  { icon: Plane, label: "Drone", desc: "Application" },
  { icon: Layers, label: "Plateforme", desc: "Suivi & Rapports" },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; dark: string }> = {
  violet: { bg: "bg-violet-100", text: "text-violet-600", border: "border-violet-200", dark: "bg-violet-600" },
  cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200", dark: "bg-cyan-600" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", dark: "bg-emerald-600" },
};

export function DroneVision() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-4 py-2 bg-violet-500/20 text-violet-300 border-violet-500/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Vision Future
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            L'Agriculture de Demain,{" "}
            <span className="text-violet-400">Aujourd'hui en Construction</span>
          </h2>
          <p className="text-lg text-gray-300">
            Notre vision va au-delà d'un simple drone. Nous construisons un
            écosystème complet d'agriculture autonome et de précision.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {visionItems.map((item) => {
            const colors = colorClasses[item.color];
            return (
              <Card
                key={item.title}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.dark} flex items-center justify-center mb-4`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">{item.description}</p>

                  {/* Future Items */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-violet-400 uppercase">
                      À venir
                    </div>
                    {item.future.map((futureItem, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        {futureItem}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Flow */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Intégration Complète Plateforme ARDHI
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {integrationStack.map((item, index) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-violet-600/30 border border-violet-500/30 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-8 h-8 text-violet-400" />
                  </div>
                  <div className="text-sm font-medium text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
                {index < integrationStack.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-violet-500/50 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto">
              De la détection satellite des carences à l'application précise par
              drone, tout est orchestré par notre plateforme IA pour une
              agriculture vraiment autonome.
            </p>
          </div>
        </div>

        {/* Impact Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "-30%", label: "Engrais utilisés", desc: "Objectif" },
            { value: "10×", label: "Plus rapide", desc: "vs manuel" },
            { value: "0", label: "Contact sol", desc: "Préservation" },
            { value: "24/7", label: "Disponibilité", desc: "Autonome" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white font-medium">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
