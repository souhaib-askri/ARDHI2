"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Radio } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Installation clé en main",
  "Configuration personnalisée",
  "Formation équipe incluse",
  "Support technique 24/7",
  "Garantie 3 ans capteurs",
  "Mises à jour firmware incluses",
];

const packages = [
  {
    name: "Starter",
    sensors: "4 capteurs",
    surface: "Jusqu'à 10 ha",
    price: "Sur devis",
  },
  {
    name: "Professional",
    sensors: "12 capteurs",
    surface: "10-50 ha",
    price: "Sur devis",
    popular: true,
  },
  {
    name: "Enterprise",
    sensors: "Illimité",
    surface: "50+ ha",
    price: "Sur devis",
  },
];

export function MonitoringCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-900 via-cyan-800 to-blue-900 relative overflow-hidden">
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border ${
                pkg.popular
                  ? "border-cyan-400 ring-2 ring-cyan-400/50"
                  : "border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="text-xs font-semibold text-cyan-300 uppercase mb-2">
                  Recommandé
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="text-cyan-200 text-sm mb-4">
                <div>{pkg.sensors}</div>
                <div>{pkg.surface}</div>
              </div>
              <div className="text-lg font-semibold text-white">{pkg.price}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Équipez Votre Exploitation en{" "}
            <span className="text-cyan-300">Capteurs IoT</span>
          </h2>

          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Passez à l'agriculture connectée. Nos experts vous accompagnent de
            l'étude terrain jusqu'à la mise en service.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-cyan-100"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-left">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">
                <Radio className="mr-2 w-5 h-5" />
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-300 text-white hover:bg-cyan-800/50 px-8 py-6 text-lg"
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
            <Radio className="w-5 h-5 text-cyan-300" />
            <span className="text-white">
              +500 capteurs déployés en Tunisie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
