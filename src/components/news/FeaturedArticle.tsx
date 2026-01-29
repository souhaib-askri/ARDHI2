"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Sparkles, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsArticle, getCategoryInfo } from "@/data/news";
import { cn } from "@/lib/utils";

interface FeaturedArticleProps {
  article: NewsArticle;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const categoryInfo = getCategoryInfo(article.category);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-amber-100 rounded-lg">
          <Sparkles className="h-5 w-5 text-amber-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">À la une</h2>
      </div>

      {/* Featured Card */}
      <article className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 lg:h-96 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/60 lg:to-transparent" />

            {/* Mobile Content Overlay */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 p-6">
              <Badge className={cn("text-xs font-medium mb-3", categoryInfo.color)}>
                {categoryInfo.label}
              </Badge>
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                {article.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-10 flex flex-col justify-center">
            {/* Badge - Desktop */}
            <div className="hidden lg:block mb-4">
              <Badge className={cn("text-sm font-medium", categoryInfo.color)}>
                {categoryInfo.label}
              </Badge>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min de lecture</span>
              </div>
            </div>

            {/* Title - Desktop */}
            <h3 className="hidden lg:block text-2xl xl:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
              <Link href={`/actualites/${article.slug}`}>
                {article.title}
              </Link>
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {article.excerpt}
            </p>

            {/* Author & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 ring-2 ring-green-100">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{article.author.name}</p>
                  <p className="text-sm text-gray-500">{article.author.role}</p>
                </div>
              </div>

              {/* CTA */}
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Link href={`/actualites/${article.slug}`}>
                  Lire l&apos;article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
          <div className="flex items-center gap-1 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            <Sparkles className="h-3 w-3" />
            <span>À la une</span>
          </div>
        </div>
      </article>
    </div>
  );
}
