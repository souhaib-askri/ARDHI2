"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Radio,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function MonitoringHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230891b2' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-cyan-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 border-2 border-blue-200 rounded-full opacity-20 animate-pulse delay-500" />
      <div className="absolute top-1/2 right-1/2 w-32 h-32 border-2 border-cyan-300 rounded-full opacity-20 animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-cyan-700 border-cyan-300 bg-cyan-50"
          >
            <Activity className="w-4 h-4 mr-2" />
            Monitoring IoT Préventif
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Surveillez Vos Sols{" "}
            <span className="text-cyan-600">24/7</span>{" "}
            <span className="text-blue-600">en Temps Réel</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Notre système de monitoring préventif utilise des capteurs IoT de
            dernière génération pour détecter les signes de stress du sol avant
            qu'ils n'affectent vos cultures. Anticipez, n'attendez pas.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Radio, text: "Capteurs Sans Fil" },
              { icon: Activity, text: "Données Temps Réel" },
              { icon: Shield, text: "Diagnostic Préventif" },
              { icon: Zap, text: "Alertes Instantanées" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm"
              >
                <item.icon className="w-4 h-4 text-cyan-600" />
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
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/services/demo">
                Voir la Démo Live
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/contact">Demander un Devis</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              "Installation professionnelle",
              "Garantie 3 ans",
              "Support technique inclus",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
