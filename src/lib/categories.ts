// Level 1 (Categories) - Muted, professional backgrounds with dark readable text
const LEVEL1_PALETTE = [
  { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-800 dark:text-blue-200", border: "border-blue-300", bar: "bg-blue-500", badge: "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200" },
  { bg: "bg-teal-50 dark:bg-teal-950/40", text: "text-teal-800 dark:text-teal-200", border: "border-teal-300", bar: "bg-teal-500", badge: "bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200" },
  { bg: "bg-indigo-50 dark:bg-indigo-950/40", text: "text-indigo-800 dark:text-indigo-200", border: "border-indigo-300", bar: "bg-indigo-500", badge: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200" },
  { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-800 dark:text-emerald-200", border: "border-emerald-300", bar: "bg-emerald-500", badge: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200" },
  { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-800 dark:text-amber-200", border: "border-amber-300", bar: "bg-amber-500", badge: "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200" },
  { bg: "bg-slate-50 dark:bg-slate-950/40", text: "text-slate-800 dark:text-slate-200", border: "border-slate-300", bar: "bg-slate-500", badge: "bg-slate-100 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200" },
];

// Level 2 (Sub-topics) - Slightly warmer tones, still readable
const LEVEL2_PALETTE = [
  { bg: "bg-sky-50 dark:bg-sky-950/40", text: "text-sky-800 dark:text-sky-200", border: "border-sky-300", bar: "bg-sky-500", badge: "bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200" },
  { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-800 dark:text-rose-200", border: "border-rose-300", bar: "bg-rose-500", badge: "bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200" },
  { bg: "bg-violet-50 dark:bg-violet-950/40", text: "text-violet-800 dark:text-violet-200", border: "border-violet-300", bar: "bg-violet-500", badge: "bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-200" },
  { bg: "bg-cyan-50 dark:bg-cyan-950/40", text: "text-cyan-800 dark:text-cyan-200", border: "border-cyan-300", bar: "bg-cyan-500", badge: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200" },
  { bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-800 dark:text-orange-200", border: "border-orange-300", bar: "bg-orange-500", badge: "bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200" },
  { bg: "bg-lime-50 dark:bg-lime-950/40", text: "text-lime-800 dark:text-lime-200", border: "border-lime-300", bar: "bg-lime-500", badge: "bg-lime-100 dark:bg-lime-900/50 text-lime-800 dark:text-lime-200" },
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getAutoColor(name: string) {
  const index = hashString(name) % LEVEL1_PALETTE.length;
  return LEVEL1_PALETTE[index];
}

export function getSubColor(name: string) {
  const index = hashString(name) % LEVEL2_PALETTE.length;
  return LEVEL2_PALETTE[index];
}

// Legacy exports
export const CATEGORIES = [] as const;
export type Category = string;
export const CATEGORY_ICONS: Record<string, string> = {};
export const CATEGORY_DESCRIPTIONS: Record<string, string> = {};

export function getCategoryColor(category: string) {
  return getAutoColor(category);
}
