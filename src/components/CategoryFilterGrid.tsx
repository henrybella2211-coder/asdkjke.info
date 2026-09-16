"use client";

import { useMemo, useState } from "react";
import type { Article, FlavourCategory } from "@/lib/articles";
import { categories } from "@/lib/articles";
import ArticleCard from "./ArticleCard";

export default function CategoryFilterGrid({
  articles,
}: {
  articles: Article[];
}) {
  const [active, setActive] = useState<FlavourCategory | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? articles
        : articles.filter((article) => article.category === active),
    [active, articles],
  );

  const options: (FlavourCategory | "All")[] = ["All", ...categories];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter guides by category"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {options.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setActive(option)}
              aria-pressed={isActive}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum ${
                isActive
                  ? "bg-plum text-lilac shadow-sm shadow-plum/30"
                  : "bg-white text-plum ring-1 ring-plum/15 hover:bg-plum/10"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-plum/70">
          No guides in this category yet.
        </p>
      ) : (
        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
