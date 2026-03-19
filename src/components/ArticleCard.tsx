"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { useContentLevel } from "@/context/ContentLevelContext";
import CategoryBadge from "./CategoryBadge";

interface Article {
  id: number;
  title: string;
  category: string;
  fullContent: string;
  mediumSummary: string;
  shortSummary: string;
  imageUrl: string | null;
  authorName: string | null;
  publishedAt: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  const { level } = useContentLevel();

  const content =
    level === 1
      ? article.fullContent
      : level === 2
      ? article.mediumSummary
      : article.shortSummary;

  const maxLen = level === 1 ? 400 : level === 2 ? 250 : content.length;
  const truncatedContent =
    content.length > maxLen ? content.slice(0, maxLen) + "..." : content;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700">
      <Link href={`/articles/${article.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.imageUrl || "https://placehold.co/800x450/0D7377/FFFFFF?text=Health+AI"}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <CategoryBadge category={article.category} />
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {format(new Date(article.publishedAt), "MMM d, yyyy")}
          </span>
        </div>
        <Link href={`/articles/${article.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
            {article.title}
          </h3>
        </Link>
        {article.authorName && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            By {article.authorName}
          </p>
        )}
        <div
          key={level}
          className="animate-fade-in text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          <p className="whitespace-pre-line">{truncatedContent}</p>
        </div>
        <Link
          href={`/articles/${article.id}`}
          className="inline-block mt-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
