"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ContentLevel = 1 | 2 | 3;

interface ContentLevelContextType {
  level: ContentLevel;
  setLevel: (level: ContentLevel) => void;
}

const ContentLevelContext = createContext<ContentLevelContextType>({
  level: 1,
  setLevel: () => {},
});

export function ContentLevelProvider({ children }: { children: ReactNode }) {
  const [level, setLevelState] = useState<ContentLevel>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("contentLevel");
    if (stored) {
      const parsed = parseInt(stored);
      if (parsed >= 1 && parsed <= 3) {
        setLevelState(parsed as ContentLevel);
      }
    }
    setMounted(true);
  }, []);

  const setLevel = (newLevel: ContentLevel) => {
    setLevelState(newLevel);
    localStorage.setItem("contentLevel", String(newLevel));
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ContentLevelContext.Provider value={{ level, setLevel }}>
      {children}
    </ContentLevelContext.Provider>
  );
}

export function useContentLevel() {
  return useContext(ContentLevelContext);
}
