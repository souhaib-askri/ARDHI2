"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Brain,
  Gauge,
  Leaf,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";

export function IrrigationHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Water Drops */}
      <div className="absolute top-20 left-10 opacity-20">
        <Droplets className="w-32 h-32 text-emerald-400 animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-15">
        <Leaf className="w-24 h-24 text-green-400 animate-bounce" style={{ animationDuration: "3s" }} />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-15">
        <Gauge className="w-20 h-20 text-cyan-400 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-emerald-700 border-emerald-300 bg-emerald-50"
          >
            <Droplets className="w-4 h-4 mr-2" />
            Irrigation Intelligente
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Chaque Goutte Compte.{" "}
            <span className="text-emerald-600">L'IA</span> Optimise{" "}
            <span className="text-cyan-600">Chaque Arrosage</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Notre système d'irrigation intelligent combine capteurs IoT et
            intelligence artificielle pour irriguer au bon moment, avec la bonne
            quantité. Économisez jusqu'à 40% d'eau tout en améliorant vos
            rendements.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: TrendingDown, value: "-40%", label: "Consommation eau" },
              { icon: Brain, value: "IA", label: "Recommandations" },
              { icon: Gauge, value: "24/7", label: "Monitoring" },
              { icon: Leaf, value: "+15%", label: "Rendement" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-200 shadow-sm"
              >
                <stat.icon className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/services/demo">
                Voir le Système en Action
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">Étude de Faisabilité</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              "Compatible goutte-à-goutte & aspersion",
              "Intégration météo",
              "ROI en 1-2 saisons",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
