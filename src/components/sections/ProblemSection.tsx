import { AlertTriangle, Droplets, Thermometer, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    stat: "70%",
    title: "Manque de données fiables",
    description:
      "des agriculteurs n'ont pas accès à des données précises sur l'état de leurs sols",
    color: "amber",
  },
  {
    icon: Droplets,
    stat: "40%",
    title: "Gaspillage d'eau",
    description:
      "de l'eau d'irrigation est perdue à cause d'une mauvaise gestion des ressources hydriques",
    color: "blue",
  },
  {
    icon: Thermometer,
    stat: "3x",
    title: "Stress climatique",
    description:
      "plus de sécheresses, maladies et dégradation des sols qu'il y a 20 ans",
    color: "red",
  },
  {
    icon: TrendingDown,
    stat: "25%",
    title: "Pertes économiques",
    description:
      "des rendements perdus chaque année à cause de décisions tardives ou mal informées",
    color: "green",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-amber-400 uppercase tracking-wide">
            Le Défi Agricole
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            L'agriculture fait face à des{" "}
            <span className="text-amber-400">défis critiques</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Sans données fiables et sans outils de prévention, les agriculteurs
            prennent des décisions dans l'incertitude, entraînant des pertes
            économiques et environnementales significatives.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all hover:bg-gray-800/70"
            >
              {/* Icon */}
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                  problem.color === "amber"
                    ? "bg-amber-500/20 text-amber-400"
                    : problem.color === "blue"
                    ? "bg-blue-500/20 text-blue-400"
                    : problem.color === "red"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                <problem.icon className="h-6 w-6" />
              </div>

              {/* Stat */}
              <p
                className={`text-4xl font-bold ${
                  problem.color === "amber"
                    ? "text-amber-400"
                    : problem.color === "blue"
                    ? "text-blue-400"
                    : problem.color === "red"
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {problem.stat}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-lg font-semibold text-white">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Source */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Sources:{" "}
            <span className="text-gray-400">
              FAO • CRDA • Ministère de l'Agriculture
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
