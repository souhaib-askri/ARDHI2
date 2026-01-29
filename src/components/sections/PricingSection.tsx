"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { pricingTiers } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Pricing Plans
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Invest in Your Farm's Future
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that matches your farm size. All plans include a
            14-day free trial with full access to all features.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                billingPeriod === "monthly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                billingPeriod === "yearly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Yearly
              <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                "relative overflow-hidden transition-all",
                tier.highlighted
                  ? "border-green-500 ring-2 ring-green-500 shadow-xl shadow-green-100 scale-105 z-10"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
              )}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-green-600 py-1.5 text-center text-sm font-medium text-white">
                  Most Popular
                </div>
              )}

              <CardHeader className={cn("p-6", tier.highlighted && "pt-10")}>
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{tier.description}</p>

                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingPeriod === "monthly" ? tier.price.monthly : Math.round(tier.price.yearly / 12)}
                  </span>
                  <span className="text-gray-500">/{tier.unit}</span>
                  {billingPeriod === "yearly" && (
                    <p className="mt-1 text-sm text-green-600">
                      Billed ${tier.price.yearly}/year
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <Button
                  className={cn(
                    "w-full",
                    tier.highlighted
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  )}
                >
                  {tier.cta}
                </Button>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Callout */}
        <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900">
            Need a custom solution for your agricultural cooperative or
            large-scale operation?
          </h3>
          <p className="mt-2 text-gray-600">
            We offer volume discounts, custom integrations, and dedicated support
            for enterprise deployments.
          </p>
          <Button variant="outline" size="lg" className="mt-6">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
}
