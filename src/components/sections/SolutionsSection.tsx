import { solutions } from "@/data/solutions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Tailored Solutions
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Built for Every Agricultural Stakeholder
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From individual farmers to international development programs, Ardhi
            adapts to your scale and objectives with purpose-built features.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className="group relative overflow-hidden border-gray-200 bg-white transition-all hover:border-green-300 hover:shadow-xl"
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                      <solution.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                  {/* Metric Badge */}
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      {solution.metrics.value}
                    </p>
                    <p className="text-xs text-gray-500">
                      {solution.metrics.label}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-gray-600">{solution.description}</p>

                {/* Benefits */}
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solution.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="group/btn border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
