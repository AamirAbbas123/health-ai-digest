"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
  truncate?: number; // max chars, 0 = no truncation
}

export default function MarkdownContent({ content, truncate }: Props) {
  const text = truncate && content.length > truncate
    ? content.slice(0, truncate) + "..."
    : content;

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:text-base prose-h2:font-bold prose-h2:mt-4 prose-h2:mb-2 prose-h3:text-sm prose-h3:font-semibold prose-h3:mt-3 prose-h3:mb-1 prose-p:text-sm prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-1.5 prose-ul:text-sm prose-ul:my-1.5 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-li:my-0.5 prose-strong:text-gray-800 dark:prose-strong:text-gray-200 prose-em:text-gray-600 dark:prose-em:text-gray-400">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {text}
      </ReactMarkdown>
    </div>
  );
}
