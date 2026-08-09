"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, TranslationKey } from "./translations";

type Language = "en" | "ta";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ta" : "en"));
  };

  const t = (key: TranslationKey): string => {
    return translations[key]?.[lang] ?? translations[key]?.en ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
