"use client";

import { useState, useMemo } from "react";
import { NewsFilter } from "./NewsFilter";
import { NewsGrid } from "./NewsGrid";
import { NewsPagination } from "./NewsPagination";
import { FeaturedArticle } from "./FeaturedArticle";
import {
  newsArticles,
  NewsCategory,
  ARTICLES_PER_PAGE,
} from "@/data/news";

export function NewsContent() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Get featured article (always show regardless of filter)
  const featuredArticle = newsArticles.find((article) => article.featured);

  // Filter articles based on selected category (exclude featured)
  const filteredArticles = useMemo(() => {
    const nonFeatured = newsArticles.filter((article) => !article.featured);
    if (selectedCategory === "all") {
      return nonFeatured;
    }
    return nonFeatured.filter((article) => article.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: NewsCategory | "all") => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Featured Article */}
        {featuredArticle && selectedCategory === "all" && currentPage === 1 && (
          <FeaturedArticle article={featuredArticle} />
        )}

        {/* Filter */}
        <NewsFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          totalArticles={filteredArticles.length}
        />

        {/* Grid */}
        <NewsGrid articles={paginatedArticles} />

        {/* Pagination */}
        {totalPages > 1 && (
          <NewsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📰</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Aucun article trouvé
            </h3>
            <p className="text-gray-600">
              Aucun article dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
