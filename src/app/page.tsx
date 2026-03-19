"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAutoColor } from "@/lib/categories";

interface CategoryCount {
  category: string;
  _count: { id: number };
}

export default function Home() {
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCounts() {
      try {
        const res = await fetch("/api/articles?groupBy=category");
        const data: CategoryCount[] = await res.json();
        const cats = data.map((c) => ({
          name: c.category,
          count: c._count.id,
        })).sort((a, b) => a.name.localeCompare(b.name));
        setCategories(cats);
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
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-800 dark:to-primary-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Health AI Digest</h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence and healthcare.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-950" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Main Categories</h2>
          <p className="text-gray-500 dark:text-gray-400">Select a category to explore its sub-topics</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700" />
                  <div className="bg-white dark:bg-gray-800 p-6">
                    <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                </div>
              ))
            : categories.map((cat) => {
                const c = getAutoColor(cat.name);
                return (
                  <Link
                    key={cat.name}
                    href={`/category/${encodeURIComponent(cat.name)}`}
                    className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`h-2 ${c.bar}`} />
                    <div className={`p-6 ${c.bg}`}>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${c.text}`}>Category</p>
                      <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {cat.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.badge}`}>
                          {cat.count} {cat.count === 1 ? "article" : "articles"}
                        </span>
                        <span className="text-sm font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>

        {!loading && categories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">No categories yet</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">Add articles via the admin panel to create categories</p>
          </div>
        )}
      </div>
    </div>
  );
}
