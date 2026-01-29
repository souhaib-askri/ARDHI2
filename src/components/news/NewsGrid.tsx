"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NewsArticle, getCategoryInfo } from "@/data/news";
import { cn } from "@/lib/utils";

interface NewsGridProps {
  articles: NewsArticle[];
}

export function NewsGrid({ articles }: NewsGridProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => {
        const categoryInfo = getCategoryInfo(article.category);

        return (
          <article
            key={article.id}
            className={cn(
              "group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300",
              "animate-in fade-in slide-in-from-bottom-4"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <Badge className={cn("text-xs font-medium", categoryInfo.color)}>
                  {categoryInfo.label}
                </Badge>
              </div>

              {/* Read Time */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white text-xs">
                <Clock className="h-3 w-3" />
                <span>{article.readTime} min</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Date */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                <Link href={`/actualites/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {article.author.name}
                    </p>
                    <p className="text-xs text-gray-500">{article.author.role}</p>
                  </div>
                </div>

                {/* Read More */}
                <Link
                  href={`/actualites/${article.slug}`}
                  className="inline-flex items-center gap-1 text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
                >
                  Lire
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
