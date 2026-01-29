"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CloudSun,
  Droplets,
  Wind,
  Thermometer,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function WeatherHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230284c7' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Weather Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <CloudSun className="w-32 h-32 text-sky-400 animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-15">
        <Wind className="w-24 h-24 text-indigo-400 animate-bounce" style={{ animationDuration: "3s" }} />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-15">
        <Droplets className="w-20 h-20 text-blue-400 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-sky-700 border-sky-300 bg-sky-50"
          >
            <CloudSun className="w-4 h-4 mr-2" />
            Station Météo Agricole
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Maîtrisez le{" "}
            <span className="text-sky-600">Climat</span> de Votre{" "}
            <span className="text-indigo-600">Exploitation</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nos stations météo connectées vous fournissent des données
            climatiques locales précises. Intégrées à notre plateforme, elles
            optimisent l'irrigation et anticipent les risques phytosanitaires.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Thermometer, text: "Climat Local" },
              { icon: Droplets, text: "Pluviométrie" },
              { icon: Wind, text: "Vitesse Vent" },
              { icon: CloudSun, text: "Humidité Air" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm"
              >
                <item.icon className="w-4 h-4 text-sky-600" />
                <span className="text-sm font-medium text-gray-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/services/demo">
                Voir le Dashboard Météo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">Obtenir un Devis</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              "Précision professionnelle",
              "Données toutes les 10 min",
              "Intégration plateforme ARDHI",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
