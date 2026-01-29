"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Calendar } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Déploiement en moins de 48h",
  "Formation complète de vos équipes",
  "Support technique 6j/7",
  "Données sécurisées et sauvegardées",
  "Mises à jour incluses",
  "Sans engagement",
];

export function GestionCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Digitalisez Votre Exploitation{" "}
            <span className="text-green-300">Dès Aujourd'hui</span>
          </h2>

          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les agriculteurs et coopératives qui ont déjà transformé
            leur gestion agricole avec ARDHI.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-green-100"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm text-left">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-green-900 hover:bg-green-50 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/demo">
                <Calendar className="mr-2 w-5 h-5" />
                Planifier une Démo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-300 text-white hover:bg-green-800/50 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">
                <Phone className="mr-2 w-5 h-5" />
                Parler à un Expert
              </Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white/20 flex items-center justify-center text-white text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">+150 exploitations</p>
              <p className="text-xs text-green-200">utilisent déjà ARDHI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
