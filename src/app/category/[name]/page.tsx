"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getAutoColor, getSubColor } from "@/lib/categories";

export default function CategoryPage() {
  const params = useParams();
  const categoryName = decodeURIComponent(params.name as string);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [subCounts, setSubCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const subRes = await fetch(`/api/articles?groupBy=subCategory&category=${encodeURIComponent(categoryName)}`);
        const subs: string[] = await subRes.json();
        setSubCategories(subs);

        const countsMap: Record<string, number> = {};
        await Promise.all(
          subs.map(async (sub) => {
            const res = await fetch(`/api/articles?category=${encodeURIComponent(categoryName)}&subCategory=${encodeURIComponent(sub)}&limit=100`);
            const articles = await res.json();
            countsMap[sub] = articles.length;
          })
        );
        setSubCounts(countsMap);
      } catch (err) {
        console.error("Failed to fetch sub-categories:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [categoryName]);

  const catC = getAutoColor(categoryName);

  return (
    <div className="min-h-screen">
      {/* Category Header */}
      <section className={`py-12 sm:py-16 ${catC.bg} border-b ${catC.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className={`font-medium ${catC.text}`}>{categoryName}</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${catC.bar} flex items-center justify-center`}>
              <div className="w-5 h-5 rounded-full bg-white/40" />
            </div>
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest ${catC.text} mb-1`}>Level 1 · Category</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{categoryName}</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Level 2</p>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Sub-topics</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Select a sub-topic to view related articles</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="h-1.5 bg-gray-200 dark:bg-gray-700" />
                  <div className="bg-white dark:bg-gray-800 p-5">
                    <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
                    <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                </div>
              ))
            : subCategories.map((sub) => {
                const sc = getSubColor(sub);
                const count = subCounts[sub] || 0;
                return (
                  <Link
                    key={sub}
                    href={`/category/${encodeURIComponent(categoryName)}/${encodeURIComponent(sub)}`}
                    className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className={`h-1.5 ${sc.bar}`} />
                    <div className={`p-5 ${sc.bg}`}>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${sc.text}`}>Sub-topic</p>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {sub}
                        </h3>
                        <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${sc.badge}`}>
                        {count} {count === 1 ? "article" : "articles"}
                      </span>
                    </div>
                  </Link>
                );
              })}
        </div>

        {!loading && subCategories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No sub-topics found.</p>
            <Link href="/" className="text-primary-500 hover:text-primary-600 mt-4 inline-block">← Back to categories</Link>
          </div>
        )}
      </div>
    </div>
  );
}
