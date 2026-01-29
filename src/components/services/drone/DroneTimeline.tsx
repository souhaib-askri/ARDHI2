"use client";

import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  FileSearch,
  Plane,
  Settings,
  TestTube,
  Users,
} from "lucide-react";

const timelinePhases = [
  {
    phase: "Phase 1",
    title: "R&D et Conception",
    period: "2024 - 2025",
    status: "in-progress",
    items: [
      { text: "Étude de faisabilité technique", done: true },
      { text: "Conception mécanique et électronique", done: true },
      { text: "Développement firmware de vol", done: false },
      { text: "Intégration système d'épandage", done: false },
    ],
    icon: FileSearch,
  },
  {
    phase: "Phase 2",
    title: "Prototypage",
    period: "2025 - 2026",
    status: "upcoming",
    items: [
      { text: "Construction prototype v1", done: false },
      { text: "Tests en conditions contrôlées", done: false },
      { text: "Itérations et améliorations", done: false },
      { text: "Validation performances", done: false },
    ],
    icon: Settings,
  },
  {
    phase: "Phase 3",
    title: "Tests Terrain",
    period: "2026",
    status: "upcoming",
    items: [
      { text: "Partenariats agriculteurs pilotes", done: false },
      { text: "Tests réels multi-cultures", done: false },
      { text: "Optimisation IA prescription", done: false },
      { text: "Certification et homologation", done: false },
    ],
    icon: TestTube,
  },
  {
    phase: "Phase 4",
    title: "Lancement Commercial",
    period: "2027",
    status: "upcoming",
    items: [
      { text: "Production série initiale", done: false },
      { text: "Formation utilisateurs", done: false },
      { text: "Déploiement clients early adopters", done: false },
      { text: "Service drone-as-a-service", done: false },
    ],
    icon: Plane,
  },
];

export function DroneTimeline() {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return {
          badge: "bg-green-100 text-green-700 border-green-200",
          line: "bg-green-500",
          icon: "bg-green-500 text-white",
        };
      case "in-progress":
        return {
          badge: "bg-amber-100 text-amber-700 border-amber-200",
          line: "bg-amber-500",
          icon: "bg-amber-500 text-white",
        };
      default:
        return {
          badge: "bg-gray-100 text-gray-700 border-gray-200",
          line: "bg-gray-300",
          icon: "bg-gray-200 text-gray-500",
        };
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-violet-700 border-violet-300 bg-violet-50"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Roadmap
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre <span className="text-violet-600">Feuille de Route</span>
          </h2>
          <p className="text-lg text-gray-600">
            Suivez l'avancement du projet drone ARDHI, de la conception au
            lancement commercial.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelinePhases.map((phase, index) => {
                const styles = getStatusStyles(phase.status);
                return (
                  <div key={phase.phase} className="relative">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-xl ${styles.icon} flex items-center justify-center relative z-10`}
                        >
                          <phase.icon className="w-8 h-8" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Badge variant="outline" className="text-violet-600 border-violet-200 bg-violet-50">
                            {phase.phase}
                          </Badge>
                          <h3 className="text-xl font-bold text-gray-900">
                            {phase.title}
                          </h3>
                          <Badge className={styles.badge}>
                            {phase.status === "completed" && "Terminé"}
                            {phase.status === "in-progress" && (
                              <>
                                <Clock className="w-3 h-3 mr-1" />
                                En cours
                              </>
                            )}
                            {phase.status === "upcoming" && "À venir"}
                          </Badge>
                          <span className="text-sm text-gray-500 ml-auto">
                            {phase.period}
                          </span>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {phase.items.map((item, i) => (
                            <div
                              key={i}
                              className={`flex items-center gap-2 text-sm ${
                                item.done ? "text-green-700" : "text-gray-600"
                              }`}
                            >
                              {item.done ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                              )}
                              <span className={item.done ? "line-through opacity-70" : ""}>
                                {item.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Join Early Adopters */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <Users className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Rejoignez les Agriculteurs Pilotes
          </h3>
          <p className="text-violet-100 mb-6 max-w-xl mx-auto">
            Nous recherchons des partenaires agriculteurs pour tester notre
            solution en conditions réelles. Accès prioritaire et tarifs
            préférentiels garantis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Tests gratuits
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Tarif early adopter
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Influence produit
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
