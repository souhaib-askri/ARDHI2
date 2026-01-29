"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, CloudSun, Phone } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Station tout-en-un",
  "Installation incluse",
  "Calibration terrain",
  "Intégration ARDHI",
  "Support technique",
  "Données exportables",
];

const packages = [
  {
    name: "Station Basique",
    sensors: "T°, HR, Pluie",
    coverage: "1 parcelle",
    price: "À partir de 890 DT",
  },
  {
    name: "Station Pro",
    sensors: "Complète + Vent",
    coverage: "Multi-parcelles",
    price: "À partir de 1490 DT",
    popular: true,
  },
  {
    name: "Réseau Stations",
    sensors: "Sur mesure",
    coverage: "Exploitation entière",
    price: "Sur devis",
  },
];

export function WeatherCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-900 via-sky-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border ${
                pkg.popular
                  ? "border-sky-400 ring-2 ring-sky-400/50"
                  : "border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="text-xs font-semibold text-sky-300 uppercase mb-2">
                  Plus populaire
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="text-sky-200 text-sm mb-4">
                <div>{pkg.sensors}</div>
                <div>{pkg.coverage}</div>
              </div>
              <div className="text-lg font-semibold text-white">{pkg.price}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Installez Votre{" "}
            <span className="text-sky-300">Station Météo</span> Connectée
          </h2>

          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Passez à l'agriculture de précision avec des données météo locales
            et fiables. Installation et configuration par nos techniciens.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sky-100"
              >
                <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm text-left">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-sky-900 hover:bg-sky-50 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                <CloudSun className="mr-2 w-5 h-5" />
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sky-300 text-white hover:bg-sky-800/50 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/services/demo">
                <Phone className="mr-2 w-5 h-5" />
                Voir la Démo
              </Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <CloudSun className="w-5 h-5 text-sky-300" />
            <span className="text-white">
              +150 stations installées en Tunisie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
