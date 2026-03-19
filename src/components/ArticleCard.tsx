"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { useContentLevel } from "@/context/ContentLevelContext";
// Soft, eye-pleasing card background colors
const CARD_BG_COLORS = [
  { bg: "bg-sky-100 dark:bg-sky-900/40", text: "text-sky-700 dark:text-sky-200" },
  { bg: "bg-rose-100 dark:bg-rose-900/40", text: "text-rose-700 dark:text-rose-200" },
  { bg: "bg-amber-100 dark:bg-amber-900/40", text: "text-amber-700 dark:text-amber-200" },
  { bg: "bg-emerald-100 dark:bg-emerald-900/40", text: "text-emerald-700 dark:text-emerald-200" },
  { bg: "bg-violet-100 dark:bg-violet-900/40", text: "text-violet-700 dark:text-violet-200" },
  { bg: "bg-teal-100 dark:bg-teal-900/40", text: "text-teal-700 dark:text-teal-200" },
  { bg: "bg-indigo-100 dark:bg-indigo-900/40", text: "text-indigo-700 dark:text-indigo-200" },
  { bg: "bg-orange-100 dark:bg-orange-900/40", text: "text-orange-700 dark:text-orange-200" },
];

function getCardColor(id: number) {
  return CARD_BG_COLORS[id % CARD_BG_COLORS.length];
}

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

  const hasRealImage = article.imageUrl && !article.imageUrl.includes("placehold.co");
  const cardColor = getCardColor(article.id);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700">
      <Link href={`/articles/${article.id}`}>
        {hasRealImage ? (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={article.imageUrl!}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          </div>
        ) : (
          <div className={`relative aspect-video overflow-hidden ${cardColor.bg} flex items-center justify-center p-6`}>
            <p className={`text-2xl sm:text-3xl font-bold text-center leading-tight ${cardColor.text}`}>
              {article.shortTitle || article.subCategory || article.category}
            </p>
          </div>
        )}
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {format(new Date(article.publishedAt), "MMM d, yyyy")}
          </span>
          {article.authorName && (
            <span className="text-xs text-gray-400 dark:text-gray-500">
              · {article.authorName}
            </span>
          )}
        </div>
        <Link href={`/articles/${article.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
            {article.title}
          </h3>
        </Link>
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
