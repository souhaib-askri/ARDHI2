"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const displayCount = 3;

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev + displayCount >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - displayCount : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + displayCount
  );

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              Customer Stories
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Trusted by Farmers Across East Africa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how agricultural operations of all sizes are using Ardhi to
              improve yields, save water, and make data-driven decisions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.id}
              className={cn(
                "bg-white border-0 shadow-sm transition-all duration-300",
                idx === 1 && "lg:scale-105 lg:shadow-lg"
              )}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-green-200" />

                {/* Quote */}
                <p className="mt-4 text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Metric */}
                {testimonial.metrics && (
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
                    <span className="text-2xl font-bold text-green-700">
                      {testimonial.metrics.value}
                    </span>
                    <span className="text-sm text-green-600">
                      {testimonial.metrics.label}
                    </span>
                  </div>
                )}

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 pt-6 border-t">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-xs text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({
            length: Math.ceil(testimonials.length / displayCount),
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx * displayCount)}
              className={cn(
                "h-2 rounded-full transition-all",
                Math.floor(activeIndex / displayCount) === idx
                  ? "w-8 bg-green-600"
                  : "w-2 bg-green-200"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
