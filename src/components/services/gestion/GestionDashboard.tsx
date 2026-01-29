"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  Droplets,
  Thermometer,
  Sprout,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Leaf,
  Sun,
  Wind,
} from "lucide-react";

// KPI Data
const kpis = [
  {
    title: "Surface Totale",
    value: "847",
    unit: "hectares",
    change: "+12%",
    trend: "up",
    icon: MapPin,
    color: "green",
  },
  {
    title: "Parcelles Actives",
    value: "23",
    unit: "parcelles",
    change: "+3",
    trend: "up",
    icon: Sprout,
    color: "emerald",
  },
  {
    title: "Rendement Moyen",
    value: "4.2",
    unit: "T/ha",
    change: "+8%",
    trend: "up",
    icon: TrendingUp,
    color: "blue",
  },
  {
    title: "Consommation Eau",
    value: "2,340",
    unit: "m³/mois",
    change: "-15%",
    trend: "down",
    icon: Droplets,
    color: "cyan",
  },
];

// Recent Activities
const activities = [
  {
    type: "irrigation",
    message: "Irrigation Zone A - Parcelle Olivier Nord",
    time: "Il y a 2h",
    status: "completed",
  },
  {
    type: "alert",
    message: "Seuil humidité bas - Parcelle Tomates",
    time: "Il y a 4h",
    status: "warning",
  },
  {
    type: "harvest",
    message: "Récolte terminée - Blé dur (45T)",
    time: "Hier",
    status: "completed",
  },
  {
    type: "treatment",
    message: "Traitement préventif programmé",
    time: "Dans 2 jours",
    status: "pending",
  },
];

// Crop Status
const crops = [
  { name: "Olivier", parcels: 8, health: 92, stage: "Maturation" },
  { name: "Blé dur", parcels: 6, health: 88, stage: "Récolte" },
  { name: "Tomates", parcels: 4, health: 75, stage: "Floraison" },
  { name: "Agrumes", parcels: 5, health: 95, stage: "Croissance" },
];

// Weather Data
const weather = {
  temp: 28,
  humidity: 45,
  wind: 12,
  uv: 7,
};

export function GestionDashboard() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-green-700 border-green-300 bg-green-50"
          >
            <Activity className="w-4 h-4 mr-2" />
            Aperçu du Tableau de Bord
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre Exploitation en{" "}
            <span className="text-green-600">Temps Réel</span>
          </h2>
          <p className="text-lg text-gray-600">
            Visualisez les KPIs clés, suivez l'état de vos cultures et gérez les
            alertes depuis une interface unifiée.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 lg:p-8">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Exploitation: Domaine El Kahena
              </h3>
              <p className="text-sm text-gray-500">
                Kairouan, Tunisie • Dernière mise à jour: il y a 5 min
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Système actif
              </span>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((kpi) => (
              <Card
                key={kpi.title}
                className="border-gray-200 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-${kpi.color}-100 flex items-center justify-center`}
                    >
                      <kpi.icon className={`w-5 h-5 text-${kpi.color}-600`} />
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        kpi.trend === "up"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {kpi.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 inline mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 inline mr-1" />
                      )}
                      {kpi.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {kpi.value}
                  </div>
                  <div className="text-xs text-gray-500">{kpi.unit}</div>
                  <div className="text-sm font-medium text-gray-700 mt-1">
                    {kpi.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Crop Status */}
            <Card className="lg:col-span-2 border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  État des Cultures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">
                          Culture
                        </th>
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">
                          Parcelles
                        </th>
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">
                          Santé
                        </th>
                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">
                          Stade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {crops.map((crop) => (
                        <tr
                          key={crop.name}
                          className="border-b border-gray-50 hover:bg-gray-50/50"
                        >
                          <td className="py-3">
                            <span className="font-medium text-gray-900">
                              {crop.name}
                            </span>
                          </td>
                          <td className="py-3 text-gray-600">
                            {crop.parcels} parcelles
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    crop.health >= 90
                                      ? "bg-green-500"
                                      : crop.health >= 80
                                      ? "bg-yellow-500"
                                      : "bg-orange-500"
                                  }`}
                                  style={{ width: `${crop.health}%` }}
                                />
                              </div>
                              <span className="text-sm text-gray-600">
                                {crop.health}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3">
                            <Badge
                              variant="outline"
                              className="text-xs bg-green-50 text-green-700 border-green-200"
                            >
                              {crop.stage}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Weather & Conditions */}
            <Card className="border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sun className="w-5 h-5 text-amber-500" />
                  Conditions Météo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Thermometer className="w-5 h-5 text-amber-600" />
                      <span className="text-sm text-gray-600">Température</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {weather.temp}°C
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Droplets className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">Humidité</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {weather.humidity}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Wind className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-600">Vent</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {weather.wind} km/h
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Sun className="w-5 h-5 text-orange-600" />
                      <span className="text-sm text-gray-600">Indice UV</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {weather.uv}/10
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Feed */}
          <Card className="mt-6 border-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Activités Récentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      activity.status === "warning"
                        ? "bg-amber-50 border-amber-200"
                        : activity.status === "completed"
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.status === "warning"
                            ? "bg-amber-100"
                            : activity.status === "completed"
                            ? "bg-green-100"
                            : "bg-gray-100"
                        }`}
                      >
                        {activity.status === "warning" ? (
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                        ) : (
                          <CheckCircle2
                            className={`w-4 h-4 ${
                              activity.status === "completed"
                                ? "text-green-600"
                                : "text-gray-400"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
