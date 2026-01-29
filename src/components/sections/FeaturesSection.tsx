import { featuredFeatures } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Platform Features
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Everything You Need for Data-Driven Farming
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From soil sensors to satellite imagery, our integrated platform
            provides complete visibility into your farm operations with
            actionable AI insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredFeatures.map((feature) => (
            <Card
              key={feature.id}
              className="group relative overflow-hidden border-gray-200 transition-all hover:border-green-300 hover:shadow-lg hover:shadow-green-100"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>

                {/* Benefits List */}
                <ul className="mt-4 space-y-2">
                  {feature.benefits.slice(0, 3).map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-8 lg:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="mt-1 text-green-100">Active Farms</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">10,000+</p>
              <p className="mt-1 text-green-100">Hectares Monitored</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">2M+</p>
              <p className="mt-1 text-green-100">Sensor Readings Daily</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">40%</p>
              <p className="mt-1 text-green-100">Avg. Water Savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
