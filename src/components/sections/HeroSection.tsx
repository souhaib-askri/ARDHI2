import Link from "next/link";
import { ArrowRight, MessageCircle, Droplets, Satellite, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-amber-50/30 pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute top-40 right-1/4 h-48 w-48 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Agriculture de Précision & Résilience Climatique
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="text-green-700">Diagnostiquer.</span>{" "}
              <span className="text-blue-700">Optimiser.</span>{" "}
              <span className="text-amber-700">Préserver.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-gray-600 sm:text-xl leading-relaxed">
              Plateforme intelligente pour une agriculture durable basée sur{" "}
              <span className="font-semibold text-gray-700">IoT</span>,{" "}
              <span className="font-semibold text-gray-700">satellites</span> et{" "}
              <span className="font-semibold text-gray-700">intelligence artificielle</span>.
            </p>

            {/* Key Points */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                </div>
                <span>Diagnostic préventif des sols en temps réel</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                </div>
                <span>Optimisation intelligente de l'irrigation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                </div>
                <span>Recommandations IA personnalisées</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-base h-12 px-8 w-full sm:w-auto"
                >
                  Voir la Démo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-base h-12 px-8 border-gray-300 hover:bg-gray-50"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Nous Contacter
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Dashboard Card */}
              <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-green-900/10 ring-1 ring-gray-100">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Vue d'ensemble - Parcelle
                    </h3>
                    <p className="text-sm text-gray-500">
                      Blé dur • 15 hectares • Gouvernorat de Béja
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    État optimal
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-amber-50 p-3 border border-amber-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-5 w-5 rounded bg-amber-200 flex items-center justify-center">
                        <span className="text-amber-700 text-xs">🌱</span>
                      </div>
                      <p className="text-xs text-gray-500">Humidité Sol</p>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">68%</p>
                    <p className="text-xs text-green-600">Niveau optimal</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3 border border-blue-100">
                    <Droplets className="h-5 w-5 text-blue-600 mb-2" />
                    <p className="text-xs text-gray-500">Irrigation</p>
                    <p className="text-lg font-semibold text-gray-900">-35%</p>
                    <p className="text-xs text-blue-600">Eau économisée</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3 border border-green-100">
                    <Brain className="h-5 w-5 text-green-600 mb-2" />
                    <p className="text-xs text-gray-500">Score IA</p>
                    <p className="text-lg font-semibold text-gray-900">94</p>
                    <p className="text-xs text-green-600">Santé culture</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="mt-6 h-28 rounded-lg bg-gradient-to-r from-green-50 via-blue-50 to-amber-50 flex items-end justify-around px-4 pb-4 border border-gray-100">
                  {[35, 55, 45, 70, 60, 85, 75, 80, 72, 78, 82, 76].map((h, i) => (
                    <div
                      key={i}
                      className="w-3 rounded-t bg-gradient-to-t from-green-600 to-green-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* AI Recommendation */}
                <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1.5">
                      <Brain className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-800">
                        Recommandation IA
                      </p>
                      <p className="text-sm text-green-700 mt-0.5">
                        Irrigation recommandée demain à 6h. Évapotranspiration prévue: 4.2mm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 rounded-xl bg-white p-3 shadow-lg ring-1 ring-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplets className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Eau économisée</p>
                    <p className="text-sm font-semibold text-gray-900">
                      2,450 L/jour
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-3 shadow-lg ring-1 ring-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Satellite className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Dernière analyse</p>
                    <p className="text-sm font-semibold text-gray-900">Il y a 2h</p>
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
