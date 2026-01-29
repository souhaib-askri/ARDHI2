"use client";

import { Filter, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsCategories, NewsCategory } from "@/data/news";
import { cn } from "@/lib/utils";

interface NewsFilterProps {
  selectedCategory: NewsCategory | "all";
  onCategoryChange: (category: NewsCategory | "all") => void;
  totalArticles: number;
}

export function NewsFilter({
  selectedCategory,
  onCategoryChange,
  totalArticles,
}: NewsFilterProps) {
  return (
    <div className="mb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <Filter className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Filtrer par catégorie
            </h2>
            <p className="text-sm text-gray-500">
              {totalArticles} article{totalArticles > 1 ? "s" : ""} trouvé
              {totalArticles > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-gray-600"
          >
            <LayoutGrid className="h-4 w-4 mr-2" />
            Vue grille
          </Button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("all")}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
            selectedCategory === "all"
              ? "bg-green-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:bg-green-50"
          )}
        >
          Tous les articles
        </button>

        {newsCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
              selectedCategory === category.id
                ? "bg-green-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:bg-green-50"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
