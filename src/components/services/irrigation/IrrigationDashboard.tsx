"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Play,
  Pause,
  Power,
  Gauge,
  Clock,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  Calendar,
  Zap,
  Timer,
} from "lucide-react";

// Sector data
const sectors = [
  { id: 1, name: "Olivier Zone A", status: "active", flow: 45, duration: 28, scheduled: 45, progress: 62 },
  { id: 2, name: "Tomates Serre 1", status: "scheduled", flow: 0, duration: 0, scheduled: 30, progress: 0 },
  { id: 3, name: "Agrumes Sud", status: "completed", flow: 0, duration: 35, scheduled: 35, progress: 100 },
  { id: 4, name: "Blé Parcelle B", status: "paused", flow: 0, duration: 12, scheduled: 40, progress: 30 },
];

// Daily consumption data
const dailyConsumption = [
  { hour: "06h", actual: 120, optimal: 115 },
  { hour: "08h", actual: 180, optimal: 170 },
  { hour: "10h", actual: 90, optimal: 95 },
  { hour: "12h", actual: 45, optimal: 50 },
  { hour: "14h", actual: 30, optimal: 35 },
  { hour: "16h", actual: 85, optimal: 90 },
  { hour: "18h", actual: 150, optimal: 145 },
  { hour: "20h", actual: 95, optimal: 100 },
];

export function IrrigationDashboard() {
  const [sectorData, setSectorData] = useState(sectors);
  const [totalFlow, setTotalFlow] = useState(45);
  const [isLive, setIsLive] = useState(true);

  // Simulate live updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setSectorData((prev) =>
        prev.map((sector) => {
          if (sector.status === "active") {
            const newProgress = Math.min(100, sector.progress + 1);
            const newDuration = sector.duration + (Math.random() > 0.5 ? 1 : 0);
            return {
              ...sector,
              flow: Math.max(40, Math.min(50, sector.flow + (Math.random() - 0.5) * 3)),
              duration: newDuration,
              progress: newProgress,
              status: newProgress >= 100 ? "completed" : "active",
            };
          }
          return sector;
        })
      );
      setTotalFlow((prev) => Math.max(40, Math.min(50, prev + (Math.random() - 0.5) * 2)));
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "scheduled":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "completed":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "paused":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "En cours";
      case "scheduled":
        return "Programmé";
      case "completed":
        return "Terminé";
      case "paused":
        return "Pause";
      default:
        return status;
    }
  };

  const todayTotal = dailyConsumption.reduce((sum, d) => sum + d.actual, 0);
  const optimalTotal = dailyConsumption.reduce((sum, d) => sum + d.optimal, 0);
  const savings = Math.round(((optimalTotal - todayTotal) / optimalTotal) * -100);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-emerald-700 border-emerald-300 bg-emerald-50"
          >
            <Gauge className="w-4 h-4 mr-2" />
            Dashboard Irrigation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contrôle <span className="text-emerald-600">Centralisé</span> de
            l'Irrigation
          </h2>
          <p className="text-lg text-gray-600">
            Visualisez et contrôlez tous vos secteurs d'irrigation depuis une
            interface unique et intuitive.
          </p>
        </div>

        {/* Dashboard */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Droplets className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">
                Système d'Irrigation - Exploitation Demo
              </span>
            </div>
            <div className="flex items-center gap-3">
              {isLive ? (
                <span className="flex items-center gap-1.5 text-sm text-white bg-white/20 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Système Actif
                </span>
              ) : (
                <span className="text-sm text-white/70">Simulation Pause</span>
              )}
              <button
                onClick={() => setIsLive(!isLive)}
                className="text-sm text-white/80 hover:text-white underline"
              >
                {isLive ? "Pause" : "Reprendre"}
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card className="border-emerald-200 bg-emerald-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Droplets className="w-5 h-5 text-emerald-600" />
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      Live
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {totalFlow.toFixed(1)} L/min
                  </div>
                  <div className="text-sm text-gray-600">Débit actuel</div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Gauge className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {todayTotal} L
                  </div>
                  <div className="text-sm text-gray-600">Consommé aujourd'hui</div>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 bg-cyan-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingDown className="w-5 h-5 text-cyan-600" />
                    <Badge className={savings < 0 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                      {savings}%
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {Math.abs(todayTotal - optimalTotal)} L
                  </div>
                  <div className="text-sm text-gray-600">
                    {savings < 0 ? "Économisé" : "Surplus"}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {sectorData.filter((s) => s.status === "scheduled").length}
                  </div>
                  <div className="text-sm text-gray-600">Cycles programmés</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Sector Control */}
              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Power className="w-5 h-5 text-emerald-600" />
                    Contrôle des Secteurs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sectorData.map((sector) => (
                      <div
                        key={sector.id}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                sector.status === "active"
                                  ? "bg-emerald-500 animate-pulse"
                                  : sector.status === "paused"
                                  ? "bg-amber-500"
                                  : sector.status === "completed"
                                  ? "bg-gray-400"
                                  : "bg-blue-500"
                              }`}
                            />
                            <span className="font-medium text-gray-900">
                              {sector.name}
                            </span>
                          </div>
                          <Badge className={getStatusColor(sector.status)}>
                            {getStatusLabel(sector.status)}
                          </Badge>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-3">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Progression</span>
                            <span>
                              {sector.duration} / {sector.scheduled} min
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-500 ${
                                sector.status === "completed"
                                  ? "bg-gray-400"
                                  : "bg-emerald-500"
                              }`}
                              style={{ width: `${sector.progress}%` }}
                            />
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            {sector.flow > 0 && (
                              <span className="flex items-center gap-1">
                                <Droplets className="w-3 h-3" />
                                {sector.flow.toFixed(1)} L/min
                              </span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 p-0"
                              disabled={sector.status === "completed"}
                            >
                              {sector.status === "active" ? (
                                <Pause className="w-4 h-4" />
                              ) : (
                                <Play className="w-4 h-4" />
                              )}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                              disabled={sector.status === "completed"}
                            >
                              <Power className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Consumption Chart */}
              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-blue-600" />
                    Consommation Journalière
                    <span className="text-sm font-normal text-gray-500 ml-auto">
                      Aujourd'hui
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-end justify-between gap-2 mb-4">
                    {dailyConsumption.map((data) => (
                      <div key={data.hour} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex flex-col gap-1 h-36">
                          <div
                            className="w-full bg-emerald-400 rounded-t transition-all relative group"
                            style={{ height: `${(data.actual / 200) * 100}%` }}
                          >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {data.actual}L
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">{data.hour}</div>
                      </div>
                    ))}
                  </div>

                  {/* Legend & Alerts */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-emerald-400" />
                        <span className="text-gray-600">Consommé</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">Dans la normale</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Alerts */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-amber-800">
                    Alerte : Secteur Blé Parcelle B en pause
                  </div>
                  <div className="text-sm text-amber-700">
                    Cycle interrompu à 30% suite à détection de pression anormale.
                    Vérifiez la vanne V-12 ou reprenez manuellement.
                  </div>
                </div>
                <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                  Reprendre
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
