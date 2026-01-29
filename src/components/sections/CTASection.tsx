import { ArrowRight, Sprout, Droplets, Sun, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full border-2 border-white" />
        <div className="absolute top-32 right-20 h-24 w-24 rounded-full border-2 border-white" />
        <div className="absolute bottom-20 left-1/4 h-32 w-32 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-1/3 h-20 w-20 rounded-full border-2 border-white" />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-16 left-[15%] text-white/20">
        <Sprout className="h-12 w-12" />
      </div>
      <div className="absolute top-1/2 right-[10%] text-white/20">
        <Droplets className="h-16 w-16" />
      </div>
      <div className="absolute bottom-20 left-[20%] text-white/20">
        <Sun className="h-10 w-10" />
      </div>
      <div className="absolute top-1/3 left-[5%] text-white/20">
        <Cloud className="h-14 w-14" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            Limited Time: First 3 months at 50% off for new farms
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Farm with
            <br />
            Precision Agriculture?
          </h2>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
            Join 500+ farms already using Ardhi to save water, increase yields,
            and make smarter decisions. Start your 14-day free trial today — no
            credit card required.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 text-base h-12 px-8"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-base h-12 px-8"
            >
              Schedule a Demo
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
              14-day free trial
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
              No credit card required
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
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
