"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Monitor, Zap, ArrowDown } from "lucide-react";
import Link from "next/link";

export function DemoHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-green-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-green-300 border-green-500/50 bg-green-500/10"
          >
            <Monitor className="w-4 h-4 mr-2" />
            Démonstration Interactive
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Découvrez ARDHI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              en Action
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Cette démo présente une simulation de monitoring agricole en temps
            réel. Explorez les fonctionnalités de la plateforme avec des données
            d'une exploitation fictive.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg group"
              asChild
            >
              <Link href="#demo-dashboard">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Explorer la Démo
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-white hover:bg-white/10 px-8 py-6 text-lg"
              asChild
            >
              <Link href="#request-demo">
                <Zap className="mr-2 w-5 h-5" />
                Demander une Démo Live
              </Link>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
