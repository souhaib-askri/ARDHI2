"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Thermometer,
  Wind,
  Sun,
  Sprout,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Bell,
  Leaf,
  MapPin,
  Activity,
  Wifi,
  RefreshCw,
} from "lucide-react";

// Simulated real-time data
const initialSensorData = {
  soilHumidity: 65,
  soilTemp: 22,
  airTemp: 28,
  airHumidity: 45,
  windSpeed: 12,
  uvIndex: 7,
  lastUpdate: new Date(),
};

const parcels = [
  { id: 1, name: "Olivier Nord", crop: "Olivier", health: 94, humidity: 68, status: "optimal" },
  { id: 2, name: "Blé Zone A", crop: "Blé dur", health: 88, humidity: 52, status: "optimal" },
  { id: 3, name: "Tomates Serre", crop: "Tomates", health: 72, humidity: 45, status: "warning" },
  { id: 4, name: "Agrumes Est", crop: "Agrumes", health: 96, humidity: 71, status: "optimal" },
];

const alerts = [
  { id: 1, type: "warning", message: "Humidité basse - Tomates Serre", time: "Il y a 5 min", read: false },
  { id: 2, type: "info", message: "Irrigation Zone A terminée", time: "Il y a 23 min", read: true },
  { id: 3, type: "success", message: "Objectif rendement atteint - Blé", time: "Il y a 1h", read: true },
];

const recommendations = [
  { id: 1, priority: "high", action: "Augmenter irrigation Tomates (+20%)", impact: "+15% rendement estimé" },
  { id: 2, priority: "medium", action: "Fertilisation azotée recommandée", impact: "Correction déficit N" },
  { id: 3, priority: "low", action: "Taille préventive Olivier", impact: "Optimisation récolte" },
];

export function DemoDashboard() {
  const [sensorData, setSensorData] = useState(initialSensorData);
  const [isLive, setIsLive] = useState(true);
  const [activeParcel, setActiveParcel] = useState(parcels[0]);

  // Simulate real-time data updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setSensorData((prev) => ({
        soilHumidity: Math.max(40, Math.min(90, prev.soilHumidity + (Math.random() - 0.5) * 4)),
        soilTemp: Math.max(18, Math.min(30, prev.soilTemp + (Math.random() - 0.5) * 1)),
        airTemp: Math.max(20, Math.min(38, prev.airTemp + (Math.random() - 0.5) * 2)),
        airHumidity: Math.max(30, Math.min(70, prev.airHumidity + (Math.random() - 0.5) * 3)),
        windSpeed: Math.max(5, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 2)),
        uvIndex: Math.max(3, Math.min(10, prev.uvIndex + (Math.random() - 0.5) * 1)),
        lastUpdate: new Date(),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <section id="demo-dashboard" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-green-700 border-green-300 bg-green-50"
          >
            <Activity className="w-4 h-4 mr-2" />
            Dashboard en Temps Réel
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aperçu de la <span className="text-green-600">Plateforme</span>
          </h2>
          <p className="text-lg text-gray-600">
            Simulation de monitoring d'une exploitation agricole avec données
            IoT en temps réel.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Exploitation Demo - El Kahena
                </h3>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  Kairouan, Tunisie • 847 ha
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                {isLive ? (
                  <span className="flex items-center gap-1.5 text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="text-gray-400">Pause</span>
                )}
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
                onClick={() => setIsLive(!isLive)}
              >
                {isLive ? "Pause" : "Reprendre"}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
                onClick={() => setSensorData(initialSensorData)}
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* IoT Sensor Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              {[
                {
                  icon: Droplets,
                  label: "Humidité Sol",
                  value: sensorData.soilHumidity.toFixed(0),
                  unit: "%",
                  color: "blue",
                  optimal: sensorData.soilHumidity >= 55 && sensorData.soilHumidity <= 75,
                },
                {
                  icon: Thermometer,
                  label: "Temp. Sol",
                  value: sensorData.soilTemp.toFixed(1),
                  unit: "°C",
                  color: "amber",
                  optimal: sensorData.soilTemp >= 18 && sensorData.soilTemp <= 26,
                },
                {
                  icon: Thermometer,
                  label: "Temp. Air",
                  value: sensorData.airTemp.toFixed(1),
                  unit: "°C",
                  color: "red",
                  optimal: sensorData.airTemp <= 35,
                },
                {
                  icon: Droplets,
                  label: "Humidité Air",
                  value: sensorData.airHumidity.toFixed(0),
                  unit: "%",
                  color: "cyan",
                  optimal: true,
                },
                {
                  icon: Wind,
                  label: "Vent",
                  value: sensorData.windSpeed.toFixed(0),
                  unit: "km/h",
                  color: "gray",
                  optimal: sensorData.windSpeed <= 20,
                },
                {
                  icon: Sun,
                  label: "Indice UV",
                  value: sensorData.uvIndex.toFixed(0),
                  unit: "/10",
                  color: "orange",
                  optimal: sensorData.uvIndex <= 8,
                },
              ].map((sensor) => (
                <Card
                  key={sensor.label}
                  className={`border transition-all duration-300 ${
                    sensor.optimal
                      ? "border-gray-200 bg-white"
                      : "border-amber-300 bg-amber-50"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <sensor.icon
                        className={`w-5 h-5 text-${sensor.color}-500`}
                      />
                      {isLive && (
                        <Wifi className="w-3 h-3 text-green-500 animate-pulse" />
                      )}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {sensor.value}
                      <span className="text-sm font-normal text-gray-500">
                        {sensor.unit}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{sensor.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Parcels Overview */}
              <Card className="lg:col-span-2 border-gray-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    État des Parcelles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {parcels.map((parcel) => (
                      <div
                        key={parcel.id}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          activeParcel.id === parcel.id
                            ? "border-green-500 bg-green-50"
                            : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                        }`}
                        onClick={() => setActiveParcel(parcel)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                parcel.status === "optimal"
                                  ? "bg-green-100"
                                  : "bg-amber-100"
                              }`}
                            >
                              <Sprout
                                className={`w-5 h-5 ${
                                  parcel.status === "optimal"
                                    ? "text-green-600"
                                    : "text-amber-600"
                                }`}
                              />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">
                                {parcel.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {parcel.crop}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">
                                {parcel.health}%
                              </div>
                              <div className="text-xs text-gray-500">Santé</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">
                                {parcel.humidity}%
                              </div>
                              <div className="text-xs text-gray-500">
                                Humidité
                              </div>
                            </div>
                            {parcel.status === "optimal" ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                            ) : (
                              <AlertTriangle className="w-5 h-5 text-amber-500" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Alerts Panel */}
              <Card className="border-gray-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Bell className="w-5 h-5 text-amber-500" />
                      Alertes
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {alerts.filter((a) => !a.read).length} nouvelle(s)
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-3 rounded-lg border ${
                          !alert.read
                            ? "bg-amber-50 border-amber-200"
                            : "bg-gray-50 border-gray-100"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {alert.type === "warning" ? (
                            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                          ) : alert.type === "success" ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                          ) : (
                            <Bell className="w-4 h-4 text-blue-500 mt-0.5" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              {alert.message}
                            </p>
                            <p className="text-xs text-gray-500">{alert.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recommendations Section */}
            <Card className="mt-6 border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Recommandations IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {recommendations.map((rec) => (
                    <div
                      key={rec.id}
                      className={`p-4 rounded-xl border-l-4 ${
                        rec.priority === "high"
                          ? "border-l-red-500 bg-red-50"
                          : rec.priority === "medium"
                          ? "border-l-amber-500 bg-amber-50"
                          : "border-l-blue-500 bg-blue-50"
                      }`}
                    >
                      <Badge
                        variant="outline"
                        className={`mb-2 text-xs ${
                          rec.priority === "high"
                            ? "text-red-700 border-red-300"
                            : rec.priority === "medium"
                            ? "text-amber-700 border-amber-300"
                            : "text-blue-700 border-blue-300"
                        }`}
                      >
                        {rec.priority === "high"
                          ? "Priorité haute"
                          : rec.priority === "medium"
                          ? "Priorité moyenne"
                          : "Suggestion"}
                      </Badge>
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {rec.action}
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {rec.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Footer */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
            <span>
              Dernière mise à jour:{" "}
              {sensorData.lastUpdate.toLocaleTimeString("fr-FR")}
            </span>
            <span className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-green-500" />
              12 capteurs connectés
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
