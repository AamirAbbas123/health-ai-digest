"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import SkeletonCard from "@/components/SkeletonCard";
import ContentSlider from "@/components/ContentSlider";
import { getAutoColor, getSubColor } from "@/lib/categories";

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

  const catColors = getAutoColor(categoryName);
  const subColors = getSubColor(subName);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-10 sm:py-12 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${subColors.gradient} opacity-8`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-5 flex-wrap">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href={`/category/${encodeURIComponent(categoryName)}`}
              className={`hover:text-primary-500 transition-colors ${catColors.text}`}
            >
              {categoryName}
            </Link>
            <span className="text-gray-400">/</span>
            <span className={`font-medium ${subColors.text}`}>{subName}</span>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${catColors.gradient}`} />
              <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${subColors.gradient}`} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${catColors.bg} ${catColors.text}`}>
                  {categoryName}
                </span>
                <span className="text-gray-300 dark:text-gray-600">›</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${subColors.text}`}>
                  Level 3 · Articles
                </span>
              </div>
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

        {/* Article count */}
        {!loading && articles.length > 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {articles.length} {articles.length === 1 ? "article" : "articles"} found
          </p>
        )}

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
