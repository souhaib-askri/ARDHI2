"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Droplets,
  Thermometer,
  FlaskConical,
  Leaf,
  Activity,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

// Sensor configuration
const sensorConfigs = [
  {
    id: "humidity",
    name: "Humidité Sol",
    icon: Droplets,
    unit: "%",
    color: "blue",
    min: 30,
    max: 80,
    optimalMin: 55,
    optimalMax: 75,
  },
  {
    id: "temperature",
    name: "Température Sol",
    icon: Thermometer,
    unit: "°C",
    color: "amber",
    min: 10,
    max: 35,
    optimalMin: 18,
    optimalMax: 26,
  },
  {
    id: "ph",
    name: "pH Sol",
    icon: FlaskConical,
    unit: "",
    color: "purple",
    min: 5.0,
    max: 8.5,
    optimalMin: 6.0,
    optimalMax: 7.5,
  },
  {
    id: "ec",
    name: "Conductivité (EC)",
    icon: Leaf,
    unit: "mS/cm",
    color: "green",
    min: 0.5,
    max: 4.0,
    optimalMin: 1.2,
    optimalMax: 2.5,
  },
];

// Generate historical data points
const generateHistoricalData = (config: typeof sensorConfigs[0]) => {
  const points = [];
  const now = Date.now();
  for (let i = 23; i >= 0; i--) {
    const base = (config.optimalMin + config.optimalMax) / 2;
    const variance = (config.max - config.min) * 0.15;
    const value = base + (Math.random() - 0.5) * variance;
    points.push({
      time: new Date(now - i * 3600000).toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      value: Math.max(config.min, Math.min(config.max, value)),
    });
  }
  return points;
};

// Sensor status
const sensorStatuses = [
  { id: "S-001", zone: "Zone A - Olivier", battery: 87, signal: "excellent", lastSync: "2 min" },
  { id: "S-002", zone: "Zone A - Olivier", battery: 92, signal: "excellent", lastSync: "2 min" },
  { id: "S-003", zone: "Zone B - Blé", battery: 76, signal: "good", lastSync: "5 min" },
  { id: "S-004", zone: "Zone B - Blé", battery: 23, signal: "good", lastSync: "5 min" },
  { id: "S-005", zone: "Zone C - Tomates", battery: 68, signal: "weak", lastSync: "12 min" },
  { id: "S-006", zone: "Zone D - Agrumes", battery: 95, signal: "excellent", lastSync: "1 min" },
];

export function MonitoringLiveData() {
  const [sensorData, setSensorData] = useState<Record<string, number>>({});
  const [historicalData, setHistoricalData] = useState<Record<string, { time: string; value: number }[]>>({});
  const [isLive, setIsLive] = useState(true);

  // Initialize data
  useEffect(() => {
    const initial: Record<string, number> = {};
    const historical: Record<string, { time: string; value: number }[]> = {};
    
    sensorConfigs.forEach((config) => {
      initial[config.id] = (config.optimalMin + config.optimalMax) / 2;
      historical[config.id] = generateHistoricalData(config);
    });
    
    setSensorData(initial);
    setHistoricalData(historical);
  }, []);

  // Simulate live updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setSensorData((prev) => {
        const updated: Record<string, number> = {};
        sensorConfigs.forEach((config) => {
          const current = prev[config.id] || (config.optimalMin + config.optimalMax) / 2;
          const change = (Math.random() - 0.5) * (config.max - config.min) * 0.05;
          updated[config.id] = Math.max(
            config.min,
            Math.min(config.max, current + change)
          );
        });
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getStatus = (value: number, config: typeof sensorConfigs[0]) => {
    if (value >= config.optimalMin && value <= config.optimalMax) return "optimal";
    if (value < config.optimalMin - (config.optimalMin - config.min) * 0.3 ||
        value > config.optimalMax + (config.max - config.optimalMax) * 0.3) return "critical";
    return "warning";
  };

  const getTrend = (id: string) => {
    const history = historicalData[id];
    if (!history || history.length < 2) return "stable";
    const recent = history.slice(-3);
    const diff = recent[recent.length - 1].value - recent[0].value;
    if (Math.abs(diff) < 0.5) return "stable";
    return diff > 0 ? "up" : "down";
  };

  const colorClasses: Record<string, string> = {
    blue: "text-blue-600",
    amber: "text-amber-600",
    purple: "text-purple-600",
    green: "text-green-600",
  };

  const bgClasses: Record<string, string> = {
    blue: "bg-blue-100",
    amber: "bg-amber-100",
    purple: "bg-purple-100",
    green: "bg-green-100",
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-cyan-700 border-cyan-300 bg-cyan-50"
          >
            <Activity className="w-4 h-4 mr-2" />
            Données en Temps Réel
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visualisation <span className="text-cyan-600">Live</span> des
            Mesures
          </h2>
          <p className="text-lg text-gray-600">
            Collecte continue des données 24/7. Les valeurs sont actualisées
            toutes les 2 secondes dans cette simulation.
          </p>
        </div>

        {/* Live Data Dashboard */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden mb-8">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">
                Monitoring Temps Réel - Exploitation Demo
              </span>
            </div>
            <div className="flex items-center gap-3">
              {isLive ? (
                <span className="flex items-center gap-1.5 text-sm text-white bg-white/20 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Live
                </span>
              ) : (
                <span className="text-sm text-white/70">Pause</span>
              )}
              <button
                onClick={() => setIsLive(!isLive)}
                className="text-sm text-white/80 hover:text-white underline"
              >
                {isLive ? "Pause" : "Reprendre"}
              </button>
            </div>
          </div>

          {/* Sensor Cards */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {sensorConfigs.map((config) => {
                const value = sensorData[config.id] || 0;
                const status = getStatus(value, config);
                const trend = getTrend(config.id);

                return (
                  <Card
                    key={config.id}
                    className={`border-2 transition-all ${
                      status === "optimal"
                        ? "border-green-200 bg-green-50/30"
                        : status === "warning"
                        ? "border-amber-200 bg-amber-50/30"
                        : "border-red-200 bg-red-50/30"
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${bgClasses[config.color]} flex items-center justify-center`}
                        >
                          <config.icon
                            className={`w-5 h-5 ${colorClasses[config.color]}`}
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          {trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : trend === "down" ? (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          ) : (
                            <Minus className="w-4 h-4 text-gray-400" />
                          )}
                          {status === "optimal" ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          ) : status === "warning" ? (
                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      </div>

                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {value.toFixed(config.id === "ph" ? 1 : 0)}
                        <span className="text-lg font-normal text-gray-500 ml-1">
                          {config.unit}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        {config.name}
                      </div>

                      {/* Mini chart representation */}
                      <div className="h-12 flex items-end gap-0.5">
                        {historicalData[config.id]?.slice(-12).map((point, i) => {
                          const normalizedHeight =
                            ((point.value - config.min) /
                              (config.max - config.min)) *
                            100;
                          return (
                            <div
                              key={i}
                              className={`flex-1 rounded-t ${
                                point.value >= config.optimalMin &&
                                point.value <= config.optimalMax
                                  ? "bg-green-400"
                                  : "bg-amber-400"
                              }`}
                              style={{ height: `${Math.max(10, normalizedHeight)}%` }}
                            />
                          );
                        })}
                      </div>

                      <div className="mt-2 text-xs text-gray-500">
                        Optimal: {config.optimalMin}-{config.optimalMax}
                        {config.unit}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Sensor Status Table */}
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-cyan-600" />
                  État des Capteurs Connectés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          ID Capteur
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Zone
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Signal
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Batterie
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Dernière Sync
                        </th>
                        <th className="text-left text-xs font-semibold text-gray-500 uppercase py-3">
                          Statut
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {sensorStatuses.map((sensor) => (
                        <tr key={sensor.id} className="hover:bg-gray-50/50">
                          <td className="py-3 font-mono text-sm text-gray-900">
                            {sensor.id}
                          </td>
                          <td className="py-3 text-sm text-gray-600">
                            {sensor.zone}
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              {sensor.signal === "excellent" ? (
                                <Wifi className="w-4 h-4 text-green-500" />
                              ) : sensor.signal === "good" ? (
                                <Wifi className="w-4 h-4 text-amber-500" />
                              ) : (
                                <WifiOff className="w-4 h-4 text-red-500" />
                              )}
                              <span className="text-sm capitalize">
                                {sensor.signal}
                              </span>
                            </div>
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              {sensor.battery > 30 ? (
                                <Battery className="w-4 h-4 text-green-500" />
                              ) : (
                                <BatteryLow className="w-4 h-4 text-red-500" />
                              )}
                              <span
                                className={`text-sm ${
                                  sensor.battery <= 30 ? "text-red-600 font-medium" : ""
                                }`}
                              >
                                {sensor.battery}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3 text-sm text-gray-600">
                            {sensor.lastSync}
                          </td>
                          <td className="py-3">
                            {sensor.battery > 30 && sensor.signal !== "weak" ? (
                              <Badge className="bg-green-100 text-green-700 border-green-200">
                                Actif
                              </Badge>
                            ) : sensor.battery <= 30 ? (
                              <Badge className="bg-red-100 text-red-700 border-red-200">
                                Batterie faible
                              </Badge>
                            ) : (
                              <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                                Signal faible
                              </Badge>
                            )}
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
