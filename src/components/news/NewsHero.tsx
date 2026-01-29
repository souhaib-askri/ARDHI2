"use client";

import { Newspaper, Rss, Bell, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-500/30 px-4 py-2 mb-6">
            <Rss className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">
              Blog & Actualités
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            L&apos;Actualité{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              ARDHI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Suivez notre aventure au quotidien : développement de la plateforme,
            tests terrain, partenariats et innovations technologiques qui
            façonnent l&apos;agriculture de demain.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">12+</div>
              <div className="text-sm text-slate-400">Articles publiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-slate-400">Catégories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2026</div>
              <div className="text-sm text-slate-400">Année de lancement</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Bell className="mr-2 h-5 w-5" />
              S&apos;abonner aux actualités
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Articles populaires
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { icon: Newspaper, label: "MVP Updates", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { icon: TrendingUp, label: "Tests Béja", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { icon: Bell, label: "Partenariats", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
          ].map((category, index) => (
            <div
              key={index}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${category.color}`}
            >
              <category.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
