"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Droplets, Phone } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Étude terrain gratuite",
  "Installation complète",
  "Formation utilisateur",
  "Support technique 24/7",
  "Mises à jour incluses",
  "Garantie 2 ans",
];

const packages = [
  {
    name: "Essentiel",
    description: "Petite exploitation",
    coverage: "Jusqu'à 5 ha",
    price: "Sur devis",
  },
  {
    name: "Professionnel",
    description: "Exploitation moyenne",
    coverage: "5-50 ha",
    price: "Sur devis",
    popular: true,
  },
  {
    name: "Entreprise",
    description: "Grande exploitation",
    coverage: "50+ ha",
    price: "Sur devis",
  },
];

export function IrrigationCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-cyan-900 relative overflow-hidden">
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Goal Statement */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Réduisez le Gaspillage.{" "}
            <span className="text-emerald-300">Améliorez la Précision.</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Chaque goutte d'eau économisée est un pas vers une agriculture
            durable et rentable. Passez à l'irrigation intelligente.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border ${
                pkg.popular
                  ? "border-emerald-400 ring-2 ring-emerald-400/50"
                  : "border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="text-xs font-semibold text-emerald-300 uppercase mb-2">
                  Recommandé
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
              <p className="text-emerald-200 text-sm mb-2">{pkg.description}</p>
              <div className="text-emerald-100 text-sm mb-4">{pkg.coverage}</div>
              <div className="text-lg font-semibold text-white">{pkg.price}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-emerald-100"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-left">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                <Droplets className="mr-2 w-5 h-5" />
                Demander une Étude
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-300 text-white hover:bg-emerald-800/50 px-8 py-6 text-lg"
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
            <Droplets className="w-5 h-5 text-emerald-300" />
            <span className="text-white">
              +2 millions de litres économisés par nos clients
            </span>
          </div>

          {/* Impact Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { value: "40%", label: "Économie eau moyenne" },
              { value: "1-2 ans", label: "Retour sur investissement" },
              { value: "24/7", label: "Monitoring automatique" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-emerald-300">
                  {stat.value}
                </div>
                <div className="text-sm text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
