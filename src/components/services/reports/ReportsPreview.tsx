"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  Droplets,
  Sprout,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  PieChart,
} from "lucide-react";

// Sample chart data for yield comparison
const yieldData = [
  { month: "Jan", current: 0, previous: 0 },
  { month: "Fév", current: 0, previous: 0 },
  { month: "Mar", current: 12, previous: 10 },
  { month: "Avr", current: 28, previous: 22 },
  { month: "Mai", current: 45, previous: 38 },
  { month: "Jun", current: 72, previous: 58 },
  { month: "Jul", current: 85, previous: 75 },
  { month: "Aoû", current: 92, previous: 82 },
];

// Soil analysis data
const soilData = [
  { nutrient: "Azote (N)", value: 42, optimal: 50, status: "warning" },
  { nutrient: "Phosphore (P)", value: 65, optimal: 60, status: "good" },
  { nutrient: "Potassium (K)", value: 58, optimal: 55, status: "good" },
  { nutrient: "pH", value: 6.8, optimal: 7.0, status: "good" },
  { nutrient: "Matière organique", value: 3.2, optimal: 4.0, status: "warning" },
];

// Water efficiency data
const waterData = [
  { zone: "Zone A - Olivier", consumption: 2450, efficiency: 92 },
  { zone: "Zone B - Blé", consumption: 1820, efficiency: 88 },
  { zone: "Zone C - Tomates", consumption: 3200, efficiency: 75 },
  { zone: "Zone D - Agrumes", consumption: 2100, efficiency: 95 },
];

export function ReportsPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-blue-700 border-blue-300 bg-blue-50"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Aperçu des Rapports
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visualisation des{" "}
            <span className="text-blue-600">Données</span>
          </h2>
          <p className="text-lg text-gray-600">
            Des graphiques clairs et des tableaux interactifs pour comprendre
            vos données en un coup d'œil.
          </p>
        </div>

        {/* Report Preview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Report Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Rapport Mensuel - Exploitation El Kahena
                </h3>
                <p className="text-sm text-blue-100">
                  Janvier 2026 • Généré automatiquement
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/20 text-white hover:bg-white/30 border-0"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Période
              </Button>
              <Button
                size="sm"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>

          {/* Report Content */}
          <div className="p-6 lg:p-8">
            {/* Summary KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: "Rendement Global",
                  value: "+12%",
                  trend: "up",
                  icon: TrendingUp,
                  color: "green",
                },
                {
                  label: "Efficacité Eau",
                  value: "87%",
                  trend: "up",
                  icon: Droplets,
                  color: "blue",
                },
                {
                  label: "Santé Cultures",
                  value: "92%",
                  trend: "up",
                  icon: Sprout,
                  color: "emerald",
                },
                {
                  label: "Alertes Actives",
                  value: "3",
                  trend: "warning",
                  icon: AlertTriangle,
                  color: "amber",
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className={`p-4 rounded-xl bg-${kpi.color}-50 border border-${kpi.color}-200`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <kpi.icon className={`w-5 h-5 text-${kpi.color}-600`} />
                    {kpi.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : kpi.trend === "down" ? (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {kpi.value}
                  </div>
                  <div className="text-sm text-gray-600">{kpi.label}</div>
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Yield Chart */}
              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Évolution Rendement (T/ha)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-end justify-between gap-2 px-2">
                    {yieldData.map((item) => (
                      <div
                        key={item.month}
                        className="flex-1 flex flex-col items-center gap-1"
                      >
                        <div className="w-full flex gap-1 items-end h-40">
                          <div
                            className="flex-1 bg-gray-200 rounded-t"
                            style={{ height: `${item.previous}%` }}
                            title={`2025: ${item.previous}%`}
                          />
                          <div
                            className="flex-1 bg-green-500 rounded-t"
                            style={{ height: `${item.current}%` }}
                            title={`2026: ${item.current}%`}
                          />
                        </div>
                        <span className="text-xs text-gray-500">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-200 rounded" />
                      <span className="text-gray-600">2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded" />
                      <span className="text-gray-600">2026</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Water Efficiency */}
              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    Efficacité Irrigation par Zone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {waterData.map((zone) => (
                      <div key={zone.zone}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            {zone.zone}
                          </span>
                          <span
                            className={`text-sm font-semibold ${
                              zone.efficiency >= 90
                                ? "text-green-600"
                                : zone.efficiency >= 80
                                ? "text-blue-600"
                                : "text-amber-600"
                            }`}
                          >
                            {zone.efficiency}%
                          </span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              zone.efficiency >= 90
                                ? "bg-green-500"
                                : zone.efficiency >= 80
                                ? "bg-blue-500"
                                : "bg-amber-500"
                            }`}
                            style={{ width: `${zone.efficiency}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {zone.consumption.toLocaleString()} m³/mois
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Soil Analysis Table */}
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-amber-600" />
                  Analyse Sol - Dernière Mesure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Paramètre
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Valeur Mesurée
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Valeur Optimale
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Statut
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Recommandation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {soilData.map((item) => (
                        <tr key={item.nutrient} className="hover:bg-gray-50/50">
                          <td className="py-3 font-medium text-gray-900">
                            {item.nutrient}
                          </td>
                          <td className="py-3 text-gray-600">
                            {item.value}
                            {item.nutrient === "pH" ? "" : "%"}
                          </td>
                          <td className="py-3 text-gray-500">
                            {item.optimal}
                            {item.nutrient === "pH" ? "" : "%"}
                          </td>
                          <td className="py-3">
                            {item.status === "good" ? (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                Optimal
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-amber-50 text-amber-700 border-amber-200"
                              >
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                À améliorer
                              </Badge>
                            )}
                          </td>
                          <td className="py-3 text-sm text-gray-600">
                            {item.status === "warning"
                              ? item.nutrient.includes("Azote")
                                ? "Apport engrais azoté recommandé"
                                : "Apport compost recommandé"
                              : "Maintenir les pratiques actuelles"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
