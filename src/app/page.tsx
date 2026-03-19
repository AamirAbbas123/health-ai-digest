"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CATEGORIES, CATEGORY_ICONS, CATEGORY_DESCRIPTIONS, getCategoryColor } from "@/lib/categories";

interface CategoryCount {
  category: string;
  _count: { id: number };
}

export default function Home() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCounts() {
      try {
        const res = await fetch("/api/articles?groupBy=category");
        const data: CategoryCount[] = await res.json();
        const map: Record<string, number> = {};
        data.forEach((c) => {
          map[c.category] = c._count.id;
        });
        setCounts(map);
      } catch (err) {
        console.error("Failed to fetch category counts:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-800 dark:to-primary-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Health AI Digest
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence and healthcare.
            Stay informed with the latest breakthroughs, ethics, and policy.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-950" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Browse by Category
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Select a category to explore sub-topics and articles
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white dark:bg-gray-800 rounded-xl p-6 h-48 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4" />
                  <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
                  <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              ))
            : CATEGORIES.map((cat) => {
                const colors = getCategoryColor(cat);
                const count = counts[cat] || 0;
                const icon = CATEGORY_ICONS[cat] || "📄";
                const description = CATEGORY_DESCRIPTIONS[cat] || "";

                return (
                  <Link
                    key={cat}
                    href={`/category/${encodeURIComponent(cat)}`}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${colors.bg}`}>
                      {icon}
                    </div>
                    <h3 className={`text-lg font-bold mb-2 group-hover:text-primary-500 transition-colors text-gray-900 dark:text-white`}>
                      {cat}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
                      {description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                        {count} {count === 1 ? "article" : "articles"}
                      </span>
                      <span className="text-sm text-primary-500 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore →
                      </span>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
}
