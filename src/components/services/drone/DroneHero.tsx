"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Target,
  Cpu,
  Leaf,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export function DroneHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-violet-950 via-slate-900 to-indigo-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-violet-500/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-indigo-500/20 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-purple-500/20 rounded-full animate-pulse delay-1000" />

      {/* Drone Icon Animation */}
      <div className="absolute top-20 right-10 opacity-30">
        <Plane className="w-32 h-32 text-violet-400 animate-bounce" style={{ animationDuration: "3s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge className="mb-6 px-4 py-2 bg-amber-500/20 text-amber-300 border-amber-500/30 animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            En Développement
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Fertilisation par{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              Drone Autonome
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            ARDHI développe une solution de drone agricole locale et abordable
            pour la fertilisation de précision. Technologie autonome, intégrée à
            notre plateforme, conçue pour l'agriculture tunisienne.
          </p>

          {/* Key Features Preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Plane, text: "Drone Autonome" },
              { icon: Target, text: "Application Précise" },
              { icon: Cpu, text: "Intégré ARDHI" },
              { icon: Leaf, text: "Coût Local" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <item.icon className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-gray-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="#notify">
                <Sparkles className="mr-2 w-5 h-5" />
                Être Notifié du Lancement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/services/demo">Voir Nos Solutions Actuelles</Link>
            </Button>
          </div>

          {/* Coming Soon Indicator */}
          <div className="mt-12 inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-violet-500/20">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-100" />
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200" />
            </div>
            <span className="text-gray-300">
              Lancement prévu : <span className="text-violet-300 font-semibold">2027</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
