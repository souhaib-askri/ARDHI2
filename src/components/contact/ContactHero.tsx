"use client";

import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 pt-24 pb-16">
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 mb-6">
            <MessageSquare className="h-4 w-4 text-green-300" />
            <span className="text-sm font-medium text-green-100">
              Parlons de votre projet
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contactez{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
              ARDHI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto mb-10">
            Notre équipe est là pour répondre à vos questions et vous accompagner
            dans la transformation digitale de votre exploitation agricole.
          </p>

          {/* Quick Contact Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@ardhi.io"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="h-5 w-5 text-green-300" />
              <span>contact@ardhi.io</span>
            </a>
            <a
              href="tel:+21671123456"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-white hover:bg-white/20 transition-colors"
            >
              <Phone className="h-5 w-5 text-green-300" />
              <span>+216 71 123 456</span>
            </a>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-white">
              <MapPin className="h-5 w-5 text-green-300" />
              <span>Tunis, Tunisie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
