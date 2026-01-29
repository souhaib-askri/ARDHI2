import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full border-2 border-white" />
        <div className="absolute top-32 right-20 h-24 w-24 rounded-full border-2 border-white" />
        <div className="absolute bottom-20 left-1/4 h-32 w-32 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-1/3 h-20 w-20 rounded-full border-2 border-white" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-8">
            <Calendar className="h-4 w-4" />
            Démonstration gratuite et personnalisée
          </div>

          {/* Headline */}
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
            Prêt à transformer votre exploitation avec{" "}
            <span className="text-green-300">l'agriculture de précision</span> ?
          </h2>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
            Découvrez comment ARDHI peut vous aider à réduire vos coûts,
            optimiser vos ressources et augmenter vos rendements de manière
            durable.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 h-14 px-10 text-lg font-semibold"
            >
              Demander une Démo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-base h-14 px-10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Nous Contacter
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Démonstration gratuite
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Sans engagement
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Accompagnement personnalisé
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-green-200 text-sm">
              Des questions ? Contactez-nous à{" "}
              <a
                href="mailto:contact@ardhi.io"
                className="text-white underline hover:no-underline"
              >
                contact@ardhi.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
