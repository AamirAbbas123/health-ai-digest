export const CATEGORIES = [
  "Clinical AI",
  "Drug Discovery",
  "Medical Imaging",
  "AI Ethics",
  "Wearables & Diagnostics",
  "Policy & Regulation",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Clinical AI": { bg: "bg-blue-100 dark:bg-blue-900/40", text: "text-blue-700 dark:text-blue-300", border: "border-blue-400" },
  "Drug Discovery": { bg: "bg-emerald-100 dark:bg-emerald-900/40", text: "text-emerald-700 dark:text-emerald-300", border: "border-emerald-400" },
  "Medical Imaging": { bg: "bg-purple-100 dark:bg-purple-900/40", text: "text-purple-700 dark:text-purple-300", border: "border-purple-400" },
  "AI Ethics": { bg: "bg-amber-100 dark:bg-amber-900/40", text: "text-amber-700 dark:text-amber-300", border: "border-amber-400" },
  "Wearables & Diagnostics": { bg: "bg-rose-100 dark:bg-rose-900/40", text: "text-rose-700 dark:text-rose-300", border: "border-rose-400" },
  "Policy & Regulation": { bg: "bg-teal-100 dark:bg-teal-900/40", text: "text-teal-700 dark:text-teal-300", border: "border-teal-400" },
};

export function getCategoryColor(category: string) {
  return CATEGORY_COLORS[category] ?? { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-700 dark:text-gray-300", border: "border-gray-400" };
}
