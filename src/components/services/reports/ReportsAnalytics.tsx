"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Target,
  Lightbulb,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";

const insights = [
  {
    type: "recommendation",
    priority: "high",
    title: "Optimisation Irrigation Zone C",
    description:
      "L'efficacité d'irrigation de la Zone C (Tomates) est de 75%, en dessous de la moyenne. Réduire les cycles d'irrigation de 15% et augmenter la durée pourrait améliorer l'efficacité à 88%.",
    impact: "+18% économie eau",
    action: "Appliquer le nouveau programme",
  },
  {
    type: "alert",
    priority: "medium",
    title: "Déficit Azote Détecté",
    description:
      "Le niveau d'azote (42%) est inférieur au seuil optimal (50%). Sans correction, le rendement pourrait être impacté de -8% sur les parcelles de blé.",
    impact: "Risque rendement -8%",
    action: "Programmer fertilisation",
  },
  {
    type: "opportunity",
    priority: "low",
    title: "Potentiel Rendement Agrumes",
    description:
      "Les conditions actuelles (humidité 71%, santé 96%) sont optimales pour les agrumes. Une extension de 2ha pourrait générer un revenu additionnel estimé à 15,000 TND/an.",
    impact: "+15,000 TND/an",
    action: "Étudier l'extension",
  },
];

const analyticsFeatures = [
  {
    icon: Target,
    title: "Objectifs Personnalisés",
    description:
      "Définissez vos objectifs de rendement, consommation d'eau et coûts. Suivez votre progression en temps réel.",
  },
  {
    icon: TrendingUp,
    title: "Analyse Prédictive",
    description:
      "Algorithmes IA pour prédire les rendements, anticiper les problèmes et optimiser les interventions.",
  },
  {
    icon: Lightbulb,
    title: "Recommandations IA",
    description:
      "Suggestions personnalisées basées sur vos données historiques, la météo et les meilleures pratiques.",
  },
  {
    icon: Zap,
    title: "Actions Automatisées",
    description:
      "Transformez les recommandations en actions : programmation irrigation, alertes équipe, rappels.",
  },
];

export function ReportsAnalytics() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-purple-700 border-purple-300 bg-purple-50"
          >
            <Brain className="w-4 h-4 mr-2" />
            Aide à la Décision
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Analytics & <span className="text-purple-600">Intelligence</span>
          </h2>
          <p className="text-lg text-gray-600">
            Au-delà des rapports, ARDHI analyse vos données pour vous fournir
            des insights actionnables et des recommandations personnalisées.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Insights Panel */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Insights Générés Automatiquement
            </h3>
            {insights.map((insight, index) => (
              <Card
                key={index}
                className={`border-l-4 ${
                  insight.type === "alert"
                    ? "border-l-amber-500 bg-amber-50/30"
                    : insight.type === "recommendation"
                    ? "border-l-blue-500 bg-blue-50/30"
                    : "border-l-green-500 bg-green-50/30"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        insight.type === "alert"
                          ? "bg-amber-100"
                          : insight.type === "recommendation"
                          ? "bg-blue-100"
                          : "bg-green-100"
                      }`}
                    >
                      {insight.type === "alert" ? (
                        <AlertCircle className="w-5 h-5 text-amber-600" />
                      ) : insight.type === "recommendation" ? (
                        <Lightbulb className="w-5 h-5 text-blue-600" />
                      ) : (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">
                          {insight.title}
                        </h4>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            insight.priority === "high"
                              ? "bg-red-50 text-red-700 border-red-200"
                              : insight.priority === "medium"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-gray-50 text-gray-700 border-gray-200"
                          }`}
                        >
                          {insight.priority === "high"
                            ? "Priorité haute"
                            : insight.priority === "medium"
                            ? "Priorité moyenne"
                            : "Opportunité"}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {insight.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-semibold ${
                            insight.type === "alert"
                              ? "text-amber-700"
                              : insight.type === "recommendation"
                              ? "text-blue-700"
                              : "text-green-700"
                          }`}
                        >
                          Impact: {insight.impact}
                        </span>
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                          {insight.action}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Analytics Features */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Fonctionnalités Analytics
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {analyticsFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-gray-200 hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                      <feature.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Decision Support Stats */}
            <Card className="mt-6 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  Impact de l'Aide à la Décision
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      +23%
                    </div>
                    <div className="text-xs text-gray-600">
                      Rendement moyen
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">-31%</div>
                    <div className="text-xs text-gray-600">
                      Gaspillage eau
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      -18%
                    </div>
                    <div className="text-xs text-gray-600">Coûts intrants</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
