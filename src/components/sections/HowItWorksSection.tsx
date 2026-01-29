import { steps } from "@/data/how-it-works";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Getting Started
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            From Installation to Insights in Days
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our streamlined onboarding process gets your farm connected and
            generating actionable insights within a week.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 hidden lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-200">
                  <step.icon className="h-7 w-7" />
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <span className="text-sm font-semibold text-green-600">
                    Step {step.number}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{step.description}</p>

                  {/* Details */}
                  <ul className="mt-4 space-y-2 text-left">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-500"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Graphic */}
        <div className="mt-20 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Typical Deployment Timeline
          </h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gray-200 rounded" />
            <div className="relative flex justify-between">
              {[
                { day: "Day 1", label: "Site Assessment" },
                { day: "Day 2-3", label: "Sensor Installation" },
                { day: "Day 4-5", label: "System Configuration" },
                { day: "Day 6", label: "Training Session" },
                { day: "Day 7+", label: "Full Operation" },
              ].map((milestone, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="relative z-10 h-4 w-4 rounded-full bg-green-600 ring-4 ring-white" />
                  <p className="mt-3 text-sm font-semibold text-gray-900">
                    {milestone.day}
                  </p>
                  <p className="text-xs text-gray-500">{milestone.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
