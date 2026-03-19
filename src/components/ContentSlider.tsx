"use client";

import { useContentLevel } from "@/context/ContentLevelContext";

const labels = ["Full Article", "Summary", "Quick Read"];

export default function ContentSlider() {
  const { level, setLevel } = useContentLevel();

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="range"
          min={1}
          max={3}
          step={1}
          value={level}
          onChange={(e) => setLevel(parseInt(e.target.value) as 1 | 2 | 3)}
          className="content-slider w-full h-2 rounded-full appearance-none cursor-pointer
            bg-gray-200 dark:bg-gray-700"
        />
        <div className="flex justify-between mt-2">
          {labels.map((label, i) => (
            <button
              key={label}
              onClick={() => setLevel((i + 1) as 1 | 2 | 3)}
              className={`text-xs font-medium transition-colors ${
                level === i + 1
                  ? "text-primary-500 dark:text-primary-400"
                  : "text-gray-400 dark:text-gray-500"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
