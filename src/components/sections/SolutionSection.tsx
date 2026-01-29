import {
  Cpu,
  Satellite,
  FileText,
  Brain,
  Droplets,
  Leaf,
  Bug,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Cpu,
    title: "Capteurs IoT",
    description: "Surveillance en temps réel de l'humidité, température et nutriments du sol",
  },
  {
    icon: Satellite,
    title: "Imagerie Satellite",
    description: "Analyse NDVI et détection précoce du stress végétal",
  },
  {
    icon: FileText,
    title: "Rapports Intelligents",
    description: "Traçabilité complète et historique des interventions",
  },
];

const aiFeatures = [
  {
    icon: Droplets,
    title: "Optimisation Irrigation",
    description: "Recommandations précises basées sur l'évapotranspiration et les prévisions météo",
    color: "blue",
  },
  {
    icon: Leaf,
    title: "Gestion Fertilisation",
    description: "Plans de fertilisation adaptés au stade de croissance et aux besoins du sol",
    color: "green",
  },
  {
    icon: Bug,
    title: "Détection Maladies",
    description: "Alertes préventives basées sur les conditions favorables aux pathogènes",
    color: "amber",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            La Solution ARDHI
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Une plateforme complète pour{" "}
            <span className="text-green-600">l'agriculture préventive</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            ARDHI combine technologies de pointe et intelligence artificielle pour
            transformer vos données agricoles en décisions éclairées.
          </p>
        </div>

        {/* Main Capabilities */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="relative group bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-all hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-600 text-white">
                <cap.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{cap.title}</h3>
              <p className="mt-3 text-gray-600">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Diagnostic Arrow */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4 bg-gray-100 rounded-full px-6 py-3">
            <span className="text-sm font-medium text-gray-600">
              Diagnostic Préventif
            </span>
            <ArrowRight className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-600">
              Système d'Alerte
            </span>
            <ArrowRight className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-600">
              Actions Recommandées
            </span>
          </div>
        </div>

        {/* AI Recommendations Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2">
              <Brain className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">
                Recommandations IA Personnalisées
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {aiFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-2xl p-6 ${
                  feature.color === "blue"
                    ? "bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200"
                    : feature.color === "green"
                    ? "bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200"
                    : "bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200"
                }`}
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    feature.color === "blue"
                      ? "bg-blue-600 text-white"
                      : feature.color === "green"
                      ? "bg-green-600 text-white"
                      : "bg-amber-600 text-white"
                  }`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-green-700 hover:bg-green-800 h-12 px-8"
          >
            Découvrir la Plateforme
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
