"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
    >
      {lang === "en" ? "தமிழ்" : "EN"}
    </button>
  );
}