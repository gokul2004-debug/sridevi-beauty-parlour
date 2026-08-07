"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState("EN");

  return (
    <button
      onClick={() => setLang(lang === "EN" ? "தமிழ்" : "EN")}
      className="px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
    >
      {lang}
    </button>
  );
}