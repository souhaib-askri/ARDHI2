import { Leaf, TrendingUp, Users, Droplets, Sprout, GraduationCap } from "lucide-react";

const impacts = [
  {
    category: "Environnement",
    icon: Leaf,
    color: "green",
    items: [
      {
        icon: Leaf,
        title: "Réduction des intrants chimiques",
        description: "Fertilisation de précision basée sur les besoins réels du sol",
        stat: "-30%",
      },
      {
        icon: Droplets,
        title: "Optimisation de l'eau",
        description: "Irrigation intelligente selon l'évapotranspiration",
        stat: "-40%",
      },
      {
        icon: Sprout,
        title: "Pratiques agroécologiques",
        description: "Transition vers une agriculture régénérative",
        stat: "+50%",
      },
    ],
  },
  {
    category: "Économie",
    icon: TrendingUp,
    color: "blue",
    items: [
      {
        icon: TrendingUp,
        title: "Amélioration des rendements",
        description: "Décisions préventives et timing optimal",
        stat: "+25%",
      },
      {
        icon: Droplets,
        title: "Réduction coûts irrigation",
        description: "Moins de gaspillage, plus d'efficacité",
        stat: "-35%",
      },
      {
        icon: Leaf,
        title: "Économies fertilisation",
        description: "Application ciblée selon les besoins",
        stat: "-20%",
      },
    ],
  },
  {
    category: "Social",
    icon: Users,
    color: "amber",
    items: [
      {
        icon: Users,
        title: "Accompagnement agriculteurs",
        description: "Support technique et recommandations personnalisées",
        stat: "24/7",
      },
      {
        icon: GraduationCap,
        title: "Formation & éducation",
        description: "Renforcement des capacités en agriculture de précision",
        stat: "+500",
      },
      {
        icon: Sprout,
        title: "Sécurité alimentaire",
        description: "Rendements stables et prévisibles",
        stat: "100%",
      },
    ],
  },
];

export function ImpactSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Notre Impact
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Un impact{" "}
            <span className="text-green-600">positif et mesurable</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            ARDHI contribue à une agriculture plus durable, plus rentable et plus
            équitable pour tous les acteurs de la chaîne de valeur.
          </p>
        </div>

        {/* Impact Categories */}
        <div className="grid gap-8 lg:grid-cols-3">
          {impacts.map((category, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 ${
                category.color === "green"
                  ? "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100"
                  : category.color === "blue"
                  ? "bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100"
                  : "bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                    category.color === "green"
                      ? "bg-green-600"
                      : category.color === "blue"
                      ? "bg-blue-600"
                      : "bg-amber-600"
                  }`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span
                        className={`text-lg font-bold ml-4 ${
                          category.color === "green"
                            ? "text-green-600"
                            : category.color === "blue"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      >
                        {item.stat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <p className="text-sm text-gray-500 mb-4">
            Contribution aux Objectifs de Développement Durable
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200">
              <span className="text-2xl">🌾</span>
              <span className="text-sm font-medium text-gray-700">ODD 2 - Faim Zéro</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200">
              <span className="text-2xl">💧</span>
              <span className="text-sm font-medium text-gray-700">ODD 6 - Eau Propre</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200">
              <span className="text-2xl">🌍</span>
              <span className="text-sm font-medium text-gray-700">ODD 13 - Action Climat</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200">
              <span className="text-2xl">🌱</span>
              <span className="text-sm font-medium text-gray-700">ODD 15 - Vie Terrestre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
