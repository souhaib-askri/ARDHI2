import {
  Droplets,
  Bell,
  Brain,
  Thermometer,
  Activity,
  CloudRain,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

export function PlatformPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Aperçu Plateforme
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Un tableau de bord{" "}
            <span className="text-green-600">intuitif et complet</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Visualisez toutes vos données agricoles en un coup d'œil et recevez
            des recommandations actionnables en temps réel.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative">
          {/* Main Dashboard */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-200 overflow-hidden">
            {/* Top Bar */}
            <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-gray-400 ml-4">
                  ARDHI Dashboard — Ferme Modèle Béja
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">
                  Dernière mise à jour: il y a 5 min
                </span>
                <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">FM</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-4">
                {/* Soil Data Card */}
                <div className="lg:col-span-2 bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <span className="text-lg">🌱</span>
                      Données Sol
                    </h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      En direct
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Droplets className="h-4 w-4 text-blue-600" />
                        <span className="text-xs text-gray-500">Humidité</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">68%</p>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: "68%" }}
                        />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="h-4 w-4 text-red-500" />
                        <span className="text-xs text-gray-500">Température</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">24°C</p>
                      <p className="text-xs text-green-600 mt-1">Optimal</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-4 w-4 text-purple-600" />
                        <span className="text-xs text-gray-500">pH Sol</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">6.8</p>
                      <p className="text-xs text-green-600 mt-1">Équilibré</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-500">Nutriments</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">N-P-K</p>
                      <p className="text-xs text-amber-600 mt-1">Azote faible</p>
                    </div>
                  </div>
                </div>

                {/* Water Usage Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                    <Droplets className="h-5 w-5 text-blue-600" />
                    Consommation Eau
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Cette semaine</span>
                        <span className="font-medium text-gray-900">2,450 L</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: "65%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Économie</span>
                        <span className="font-medium text-green-600">-35%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "35%" }}
                        />
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-500">
                        Prochaine irrigation recommandée
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        Demain, 06:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Alerts Card */}
                <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                    <Bell className="h-5 w-5 text-red-500" />
                    Alertes
                    <span className="ml-auto text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                      2 actives
                    </span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-amber-50 rounded-lg p-3 border border-amber-200">
                      <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-amber-800">
                          Stress hydrique
                        </p>
                        <p className="text-xs text-amber-600">Zone B - Parcelle 3</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <CloudRain className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">
                          Pluie prévue
                        </p>
                        <p className="text-xs text-blue-600">Dans 48h - 15mm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Recommendations Row */}
              <div className="mt-6 bg-gradient-to-r from-green-50 via-green-100/50 to-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Recommandations IA - Aujourd'hui
                    </h3>
                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="bg-white/80 rounded-lg p-3 border border-green-100">
                        <p className="text-sm font-medium text-gray-900">
                          💧 Irrigation
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Reporter de 24h - Pluie attendue
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 border border-green-100">
                        <p className="text-sm font-medium text-gray-900">
                          🌿 Fertilisation
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Apport azoté recommandé - 20kg/ha
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 border border-green-100">
                        <p className="text-sm font-medium text-gray-900">
                          🛡️ Protection
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Risque mildiou faible - Surveiller
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
