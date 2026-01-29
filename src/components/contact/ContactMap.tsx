"use client";

import { MapPin, Navigation, Building2, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactMap() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 mb-4">
            <MapPin className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              Notre localisation
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Venez nous rencontrer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos bureaux sont situés au cœur du Technopark El Ghazala, le pôle
            technologique de référence en Tunisie.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          {/* Map Placeholder */}
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-green-50 to-emerald-50">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #10b981 1px, transparent 1px),
                  linear-gradient(to bottom, #10b981 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Decorative Roads */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 500"
              preserveAspectRatio="none"
            >
              {/* Main Roads */}
              <path
                d="M0,250 Q200,250 400,200 T800,250"
                stroke="#d1d5db"
                strokeWidth="8"
                fill="none"
              />
              <path
                d="M400,0 Q400,150 350,250 T400,500"
                stroke="#d1d5db"
                strokeWidth="8"
                fill="none"
              />
              <path
                d="M100,0 L200,500"
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M600,0 L700,500"
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="none"
              />
            </svg>

            {/* Location Areas */}
            <div className="absolute top-20 left-20 w-32 h-24 bg-green-200/50 rounded-lg" />
            <div className="absolute bottom-32 right-32 w-40 h-32 bg-emerald-200/50 rounded-lg" />
            <div className="absolute top-40 right-20 w-28 h-20 bg-teal-200/50 rounded-lg" />

            {/* Location Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Pulse Animation */}
                <div className="absolute -inset-4 bg-green-500/20 rounded-full animate-ping" />
                <div className="absolute -inset-2 bg-green-500/30 rounded-full" />
                
                {/* Marker */}
                <div className="relative w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                
                {/* Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">ARDHI HQ</p>
                    <p className="text-xs text-gray-500">Technopark El Ghazala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Landmarks */}
            <div className="absolute top-24 right-40 flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full shadow">
              <Building2 className="h-4 w-4 text-gray-500" />
              <span className="text-xs text-gray-600">Centre Tech</span>
            </div>
            <div className="absolute bottom-24 left-32 flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full shadow">
              <Building2 className="h-4 w-4 text-gray-500" />
              <span className="text-xs text-gray-600">Zone Industrielle</span>
            </div>
          </div>

          {/* Info Card Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80">
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Siège Social ARDHI</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Technopark El Ghazala<br />
                    Route de Raoued, Km 3.5<br />
                    2088 Ariana, Tunisie
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span>+216 71 123 456</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span>9h - 18h</span>
                </div>
              </div>

              <Button
                asChild
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
              >
                <a
                  href="https://maps.google.com/?q=Technopark+El+Ghazala+Ariana+Tunisie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Obtenir l&apos;itinéraire
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Parking gratuit</p>
              <p className="text-xs text-gray-500">50+ places disponibles</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Navigation className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Accès transport</p>
              <p className="text-xs text-gray-500">Bus & Métro à proximité</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Sur rendez-vous</p>
              <p className="text-xs text-gray-500">Contactez-nous avant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
