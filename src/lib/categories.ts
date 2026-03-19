// Color palette for auto-assignment based on string hash
const COLOR_PALETTE = [
  { bg: "bg-blue-100 dark:bg-blue-900/40", text: "text-blue-700 dark:text-blue-300", border: "border-blue-400", gradient: "from-blue-500 to-blue-600", accent: "#3B82F6", light: "bg-blue-50 dark:bg-blue-950/30" },
  { bg: "bg-emerald-100 dark:bg-emerald-900/40", text: "text-emerald-700 dark:text-emerald-300", border: "border-emerald-400", gradient: "from-emerald-500 to-emerald-600", accent: "#10B981", light: "bg-emerald-50 dark:bg-emerald-950/30" },
  { bg: "bg-purple-100 dark:bg-purple-900/40", text: "text-purple-700 dark:text-purple-300", border: "border-purple-400", gradient: "from-purple-500 to-purple-600", accent: "#8B5CF6", light: "bg-purple-50 dark:bg-purple-950/30" },
  { bg: "bg-amber-100 dark:bg-amber-900/40", text: "text-amber-700 dark:text-amber-300", border: "border-amber-400", gradient: "from-amber-500 to-amber-600", accent: "#F59E0B", light: "bg-amber-50 dark:bg-amber-950/30" },
  { bg: "bg-rose-100 dark:bg-rose-900/40", text: "text-rose-700 dark:text-rose-300", border: "border-rose-400", gradient: "from-rose-500 to-rose-600", accent: "#F43F5E", light: "bg-rose-50 dark:bg-rose-950/30" },
  { bg: "bg-teal-100 dark:bg-teal-900/40", text: "text-teal-700 dark:text-teal-300", border: "border-teal-400", gradient: "from-teal-500 to-teal-600", accent: "#14B8A6", light: "bg-teal-50 dark:bg-teal-950/30" },
  { bg: "bg-cyan-100 dark:bg-cyan-900/40", text: "text-cyan-700 dark:text-cyan-300", border: "border-cyan-400", gradient: "from-cyan-500 to-cyan-600", accent: "#06B6D4", light: "bg-cyan-50 dark:bg-cyan-950/30" },
  { bg: "bg-indigo-100 dark:bg-indigo-900/40", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-400", gradient: "from-indigo-500 to-indigo-600", accent: "#6366F1", light: "bg-indigo-50 dark:bg-indigo-950/30" },
  { bg: "bg-orange-100 dark:bg-orange-900/40", text: "text-orange-700 dark:text-orange-300", border: "border-orange-400", gradient: "from-orange-500 to-orange-600", accent: "#F97316", light: "bg-orange-50 dark:bg-orange-950/30" },
  { bg: "bg-pink-100 dark:bg-pink-900/40", text: "text-pink-700 dark:text-pink-300", border: "border-pink-400", gradient: "from-pink-500 to-pink-600", accent: "#EC4899", light: "bg-pink-50 dark:bg-pink-950/30" },
  { bg: "bg-lime-100 dark:bg-lime-900/40", text: "text-lime-700 dark:text-lime-300", border: "border-lime-400", gradient: "from-lime-500 to-lime-600", accent: "#84CC16", light: "bg-lime-50 dark:bg-lime-950/30" },
  { bg: "bg-violet-100 dark:bg-violet-900/40", text: "text-violet-700 dark:text-violet-300", border: "border-violet-400", gradient: "from-violet-500 to-violet-600", accent: "#8B5CF6", light: "bg-violet-50 dark:bg-violet-950/30" },
  { bg: "bg-sky-100 dark:bg-sky-900/40", text: "text-sky-700 dark:text-sky-300", border: "border-sky-400", gradient: "from-sky-500 to-sky-600", accent: "#0EA5E9", light: "bg-sky-50 dark:bg-sky-950/30" },
  { bg: "bg-fuchsia-100 dark:bg-fuchsia-900/40", text: "text-fuchsia-700 dark:text-fuchsia-300", border: "border-fuchsia-400", gradient: "from-fuchsia-500 to-fuchsia-600", accent: "#D946EF", light: "bg-fuchsia-50 dark:bg-fuchsia-950/30" },
];

// Stable hash from string to pick a consistent color
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

export function getAutoColor(name: string) {
  const index = hashString(name) % COLOR_PALETTE.length;
  return COLOR_PALETTE[index];
}

// For sub-categories, use a different offset so they don't match parent
export function getSubColor(name: string) {
  const index = (hashString(name) + 3) % COLOR_PALETTE.length;
  return COLOR_PALETTE[index];
}

// Legacy exports for backwards compatibility
export const CATEGORIES = [] as const;
export type Category = string;
export const CATEGORY_ICONS: Record<string, string> = {};
export const CATEGORY_DESCRIPTIONS: Record<string, string> = {};

export function getCategoryColor(category: string) {
  return getAutoColor(category);
}
