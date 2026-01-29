"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Layers,
  BarChart3,
  Droplets,
  History,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function GestionHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-green-700 border-green-300 bg-green-50"
          >
            <Layers className="w-4 h-4 mr-2" />
            Module Gestion des Exploitations
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Gérez Votre Exploitation{" "}
            <span className="text-green-600">Agricole</span>{" "}
            <span className="text-amber-600">Digitalement</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ce module permet aux agriculteurs et coopératives de gérer
            l'intégralité de leur exploitation agricole de manière digitale.
            Centralisez vos données, suivez vos parcelles et optimisez vos
            rendements.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Layers, text: "Gestion Centralisée" },
              { icon: BarChart3, text: "Suivi Performance" },
              { icon: Droplets, text: "Contrôle Irrigation" },
              { icon: History, text: "Historique Complet" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm"
              >
                <item.icon className="w-4 h-4 text-green-600" />
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
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/demo">
                Demander une Démo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              "Installation en 24h",
              "Formation incluse",
              "Support technique dédié",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
