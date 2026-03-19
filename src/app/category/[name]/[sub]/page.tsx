"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import SkeletonCard from "@/components/SkeletonCard";
import ContentSlider from "@/components/ContentSlider";
import { getCategoryColor, CATEGORY_ICONS } from "@/lib/categories";

interface Article {
  id: number;
  title: string;
  shortTitle?: string | null;
  category: string;
  subCategory?: string | null;
  fullContent: string;
  mediumSummary: string;
  shortSummary: string;
  imageUrl: string | null;
  authorName: string | null;
  publishedAt: string;
}

export default function SubCategoryPage() {
  const params = useParams();
  const categoryName = decodeURIComponent(params.name as string);
  const subName = decodeURIComponent(params.sub as string);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(
          `/api/articles?category=${encodeURIComponent(categoryName)}&subCategory=${encodeURIComponent(subName)}`
        );
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [categoryName, subName]);

  const colors = getCategoryColor(categoryName);
  const icon = CATEGORY_ICONS[categoryName] || "📄";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className={`relative py-10 sm:py-12 ${colors.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-5 flex-wrap">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href={`/category/${encodeURIComponent(categoryName)}`}
              className="text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors"
            >
              {categoryName}
            </Link>
            <span className="text-gray-400">/</span>
            <span className={`font-medium ${colors.text}`}>{subName}</span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {categoryName}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {subName}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Content Slider */}
        <div className="bg-surface dark:bg-gray-900 rounded-xl p-4 mb-8 border border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Summary Detail Level
          </p>
          <ContentSlider />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
        </div>

        {!loading && articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No articles found for this sub-topic.
            </p>
            <Link
              href={`/category/${encodeURIComponent(categoryName)}`}
              className="text-primary-500 hover:text-primary-600 mt-4 inline-block"
            >
              ← Back to {categoryName}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
