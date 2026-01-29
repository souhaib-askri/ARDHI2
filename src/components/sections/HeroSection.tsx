import Link from "next/link";
import { ArrowRight, Play, Droplets, Satellite, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

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
              Now with AI-powered crop recommendations
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Precision Agriculture for{" "}
              <span className="text-green-600">Climate-Smart</span> Farming
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              Combine IoT soil sensors, satellite imagery, and weather
              intelligence with AI recommendations to optimize irrigation, reduce
              water waste, and maximize crop yields.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <p className="text-3xl font-bold text-green-600">40%</p>
                <p className="text-sm text-gray-500">Water savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">25%</p>
                <p className="text-sm text-gray-500">Yield increase</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">10K+</p>
                <p className="text-sm text-gray-500">Hectares monitored</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-base h-12 px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base h-12 px-8 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Live Demo
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <p className="mt-8 text-sm text-gray-500">
              Trusted by 500+ farms across East Africa
            </p>
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
                      Field Overview
                    </h3>
                    <p className="text-sm text-gray-500">
                      Maize Block A • 15 hectares
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    Healthy
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <Droplets className="h-5 w-5 text-blue-600 mb-2" />
                    <p className="text-xs text-gray-500">Soil Moisture</p>
                    <p className="text-lg font-semibold text-gray-900">68%</p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-3">
                    <Satellite className="h-5 w-5 text-purple-600 mb-2" />
                    <p className="text-xs text-gray-500">NDVI Index</p>
                    <p className="text-lg font-semibold text-gray-900">0.82</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-3">
                    <Brain className="h-5 w-5 text-amber-600 mb-2" />
                    <p className="text-xs text-gray-500">AI Score</p>
                    <p className="text-lg font-semibold text-gray-900">94</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="mt-6 h-32 rounded-lg bg-gradient-to-r from-green-100 via-emerald-50 to-green-100 flex items-end justify-around px-4 pb-4">
                  {[40, 65, 55, 80, 70, 90, 75, 85, 78, 82].map((h, i) => (
                    <div
                      key={i}
                      className="w-4 rounded-t bg-green-500"
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
                        AI Recommendation
                      </p>
                      <p className="text-sm text-green-700 mt-0.5">
                        Schedule irrigation for tomorrow 6AM. Expected
                        evapotranspiration: 4.2mm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 rounded-xl bg-white p-3 shadow-lg ring-1 ring-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Droplets className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Water Saved Today</p>
                    <p className="text-sm font-semibold text-gray-900">
                      2,450 L
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-3 shadow-lg ring-1 ring-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <Satellite className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Last Satellite Pass</p>
                    <p className="text-sm font-semibold text-gray-900">2h ago</p>
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
