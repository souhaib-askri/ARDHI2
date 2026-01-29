"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Thermometer,
  CloudRain,
  Wind,
  Droplets,
  Sun,
  Gauge,
  Compass,
  TrendingUp,
  TrendingDown,
  Minus,
  CloudSun,
  Cloud,
  CloudDrizzle,
  MapPin,
  Clock,
} from "lucide-react";

// Weather data type
interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  rainfall: number;
  pressure: number;
  solarRadiation: number;
  dewPoint: number;
}

// Generate random weather variation
const generateVariation = (current: number, range: number, min: number, max: number) => {
  const change = (Math.random() - 0.5) * range;
  return Math.max(min, Math.min(max, current + change));
};

// Wind direction to text
const windDirectionText = (degrees: number) => {
  const directions = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};

// Hourly forecast data
const hourlyForecast = [
  { hour: "14h", temp: 28, icon: Sun, condition: "Ensoleillé" },
  { hour: "15h", temp: 29, icon: Sun, condition: "Ensoleillé" },
  { hour: "16h", temp: 28, icon: CloudSun, condition: "Peu nuageux" },
  { hour: "17h", temp: 26, icon: CloudSun, condition: "Peu nuageux" },
  { hour: "18h", temp: 24, icon: Cloud, condition: "Nuageux" },
  { hour: "19h", temp: 22, icon: CloudDrizzle, condition: "Bruine" },
];

// Weekly rainfall data
const weeklyRainfall = [
  { day: "Lun", amount: 0 },
  { day: "Mar", amount: 2.4 },
  { day: "Mer", amount: 8.2 },
  { day: "Jeu", amount: 0 },
  { day: "Ven", amount: 0 },
  { day: "Sam", amount: 1.2 },
  { day: "Dim", amount: 0 },
];

export function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 27.4,
    humidity: 58,
    windSpeed: 12.5,
    windDirection: 315,
    rainfall: 0,
    pressure: 1013.2,
    solarRadiation: 685,
    dewPoint: 18.2,
  });
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate live updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setWeatherData((prev) => ({
        temperature: generateVariation(prev.temperature, 0.4, 20, 35),
        humidity: generateVariation(prev.humidity, 2, 40, 80),
        windSpeed: generateVariation(prev.windSpeed, 1, 0, 25),
        windDirection: generateVariation(prev.windDirection, 10, 0, 360),
        rainfall: prev.rainfall,
        pressure: generateVariation(prev.pressure, 0.5, 1000, 1030),
        solarRadiation: generateVariation(prev.solarRadiation, 20, 400, 900),
        dewPoint: generateVariation(prev.dewPoint, 0.3, 10, 25),
      }));
      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getTrend = (value: number, baseline: number) => {
    const diff = value - baseline;
    if (Math.abs(diff) < 0.5) return "stable";
    return diff > 0 ? "up" : "down";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sky-700 border-sky-300 bg-sky-50"
          >
            <CloudSun className="w-4 h-4 mr-2" />
            Dashboard Météo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visualisation <span className="text-sky-600">Temps Réel</span>
          </h2>
          <p className="text-lg text-gray-600">
            Accédez à toutes vos données météo depuis un tableau de bord
            intuitif, mis à jour automatiquement.
          </p>
        </div>

        {/* Weather Dashboard */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CloudSun className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">
                Station Météo - Exploitation Demo
              </span>
              <div className="flex items-center gap-1 text-sky-200 text-sm">
                <MapPin className="w-4 h-4" />
                Kairouan, Tunisie
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-sky-200 text-sm">
                <Clock className="w-4 h-4" />
                {lastUpdate.toLocaleTimeString("fr-FR")}
              </div>
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

          <div className="p-6">
            {/* Main Weather Widgets */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {/* Temperature */}
              <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Thermometer className="w-5 h-5 text-amber-600" />
                    </div>
                    {getTrend(weatherData.temperature, 27) === "up" ? (
                      <TrendingUp className="w-4 h-4 text-red-500" />
                    ) : getTrend(weatherData.temperature, 27) === "down" ? (
                      <TrendingDown className="w-4 h-4 text-blue-500" />
                    ) : (
                      <Minus className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="text-3xl font-bold text-gray-900">
                      {weatherData.temperature.toFixed(1)}°C
                    </div>
                    <div className="text-sm text-gray-600">Température</div>
                  </div>
                </CardContent>
              </Card>

              {/* Humidity */}
              <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-cyan-600" />
                    </div>
                    {getTrend(weatherData.humidity, 58) === "up" ? (
                      <TrendingUp className="w-4 h-4 text-cyan-500" />
                    ) : getTrend(weatherData.humidity, 58) === "down" ? (
                      <TrendingDown className="w-4 h-4 text-orange-500" />
                    ) : (
                      <Minus className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="text-3xl font-bold text-gray-900">
                      {weatherData.humidity.toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-600">Humidité Air</div>
                  </div>
                </CardContent>
              </Card>

              {/* Wind */}
              <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-gray-50">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Wind className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Compass className="w-3 h-3" />
                      {windDirectionText(weatherData.windDirection)}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-3xl font-bold text-gray-900">
                      {weatherData.windSpeed.toFixed(1)}
                      <span className="text-lg font-normal text-gray-500 ml-1">km/h</span>
                    </div>
                    <div className="text-sm text-gray-600">Vent</div>
                  </div>
                </CardContent>
              </Card>

              {/* Rainfall */}
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <CloudRain className="w-5 h-5 text-blue-600" />
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                      Sec
                    </Badge>
                  </div>
                  <div className="mt-3">
                    <div className="text-3xl font-bold text-gray-900">
                      {weatherData.rainfall.toFixed(1)}
                      <span className="text-lg font-normal text-gray-500 ml-1">mm</span>
                    </div>
                    <div className="text-sm text-gray-600">Pluie (24h)</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Secondary Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Gauge className="w-5 h-5 text-gray-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">
                  {weatherData.pressure.toFixed(0)} hPa
                </div>
                <div className="text-xs text-gray-500">Pression</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Sun className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">
                  {weatherData.solarRadiation.toFixed(0)} W/m²
                </div>
                <div className="text-xs text-gray-500">Rayonnement</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Droplets className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">
                  {weatherData.dewPoint.toFixed(1)}°C
                </div>
                <div className="text-xs text-gray-500">Point de Rosée</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Hourly Forecast */}
              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Clock className="w-5 h-5 text-sky-600" />
                    Prévisions Horaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    {hourlyForecast.map((hour) => (
                      <div key={hour.hour} className="text-center">
                        <div className="text-xs text-gray-500 mb-1">{hour.hour}</div>
                        <hour.icon className="w-6 h-6 mx-auto text-sky-500 mb-1" />
                        <div className="text-sm font-semibold">{hour.temp}°</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Rainfall Chart */}
              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <CloudRain className="w-5 h-5 text-blue-600" />
                    Pluviométrie Hebdomadaire
                    <span className="text-sm font-normal text-gray-500 ml-auto">
                      Total: {weeklyRainfall.reduce((a, b) => a + b.amount, 0).toFixed(1)} mm
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between h-24 gap-2">
                    {weeklyRainfall.map((day) => (
                      <div key={day.day} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-400 rounded-t transition-all"
                          style={{
                            height: `${Math.max(4, (day.amount / 10) * 100)}%`,
                            opacity: day.amount > 0 ? 1 : 0.2,
                          }}
                        />
                        <div className="text-xs text-gray-500 mt-2">{day.day}</div>
                        <div className="text-xs font-medium">
                          {day.amount > 0 ? `${day.amount}mm` : "-"}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
