"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  getLanguage,
  type LanguageKey,
  type LanguageTheme,
} from "@/lib/languages";

type LanguageContextValue = {
  language: LanguageKey;
  theme: LanguageTheme;
  setLanguage: (key: LanguageKey) => void;
  hasChosen: boolean;
  openOnboarding: () => void;
  closeOnboarding: () => void;
  showOnboarding: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ulis.language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageKey>(DEFAULT_LANGUAGE);
  const [hasChosen, setHasChosen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageKey | null;
    if (stored && LANGUAGES.some((l) => l.key === stored)) {
      setLanguageState(stored);
      setHasChosen(true);
    } else {
      setShowOnboarding(true);
    }
  }, []);

  const setLanguage = (key: LanguageKey) => {
    setLanguageState(key);
    setHasChosen(true);
    setShowOnboarding(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, key);
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      theme: getLanguage(language),
      setLanguage,
      hasChosen: hydrated ? hasChosen : false,
      openOnboarding: () => setShowOnboarding(true),
      closeOnboarding: () => setShowOnboarding(false),
      showOnboarding: hydrated ? showOnboarding : false,
    }),
    [language, hasChosen, showOnboarding, hydrated],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div
        style={
          {
            "--accent": value.theme.accent,
            "--accent-soft": value.theme.accentSoft,
            "--accent-ink": value.theme.accentInk,
          } as React.CSSProperties
        }
        className="contents"
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
