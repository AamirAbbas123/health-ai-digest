import { getCategoryColor } from "@/lib/categories";

export default function CategoryBadge({ category }: { category: string }) {
  const colors = getCategoryColor(category);
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}
    >
      {category}
    </span>
  );
}
