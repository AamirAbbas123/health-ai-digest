"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { useContentLevel } from "@/context/ContentLevelContext";
import ContentSlider from "@/components/ContentSlider";
import CategoryBadge from "@/components/CategoryBadge";
import ArticleCard from "@/components/ArticleCard";
import MarkdownContent from "@/components/MarkdownContent";

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
  sourceUrl: string | null;
  authorName: string | null;
  publishedAt: string;
}

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { level } = useContentLevel();
  const [article, setArticle] = useState<Article | null>(null);
  const [related, setRelated] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`/api/articles/${params.id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setArticle(data);

        // Fetch related articles
        const relRes = await fetch(`/api/articles?category=${encodeURIComponent(data.category)}&limit=4`);
        const relData = await relRes.json();
        setRelated(relData.filter((a: Article) => a.id !== data.id).slice(0, 3));
      } catch {
        router.push("/");
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [params.id, router]);

  if (loading || !article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 animate-pulse">
        <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl mb-8" />
        <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
        <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded mb-8" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 dark:bg-gray-800 rounded" />
          ))}
        </div>
      </div>
    );
  }

  const content =
    level === 1
      ? article.fullContent
      : level === 2
      ? article.mediumSummary
      : article.shortSummary;

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image
          src={article.imageUrl || "https://placehold.co/800x450/0D7377/FFFFFF?text=Health+AI"}
          alt={article.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          {/* Back button */}
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to articles
          </button>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <CategoryBadge category={article.category} />
            {article.subCategory && (
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                {article.subCategory}
              </span>
            )}
            <span className="text-sm text-gray-400 dark:text-gray-500">
              {format(new Date(article.publishedAt), "MMMM d, yyyy")}
            </span>
          </div>

          {article.shortTitle && (
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-2">
              {article.shortTitle}
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {article.title}
          </h1>

          {article.authorName && (
            <p className="text-gray-500 dark:text-gray-400 mb-6">By {article.authorName}</p>
          )}

          {/* Content Slider */}
          <div className="bg-surface dark:bg-gray-800 rounded-lg p-4 mb-8 border border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Summary Detail Level
            </p>
            <ContentSlider />
          </div>

          {/* Article Content */}
          <div key={level} className="animate-fade-in">
            <MarkdownContent content={content} />
          </div>

          {article.sourceUrl && (
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400"
              >
                View Original Source &rarr;
              </a>
            </div>
          )}
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
