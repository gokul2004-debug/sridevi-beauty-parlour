"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  Gem,
  Heart,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/context/translations";

const featureKeys: TranslationKey[] = [
  "bridalFeature1",
  "bridalFeature2",
  "bridalFeature3",
  "bridalFeature4",
  "bridalFeature5",
  "bridalFeature6",
];

export default function BridalShowcase() {
  const { t } = useLanguage();
  return (
    <section
      id="bridal"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-rose-100 via-pink-50 to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-rose-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[3px] sm:tracking-[8px] text-rose-500 font-semibold text-sm sm:text-base">
            {t("bridalEyebrow")}
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-5 leading-tight">
            {t("bridalTitle1")}
            <span className="block text-rose-500">
              {t("bridalTitle2")}
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            {t("bridalDesc")}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {featureKeys.map((key, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md"
              >
                <CheckCircle className="text-rose-500" size={20} />
                <span>{t(key)}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold shadow-xl hover:scale-105 transition"
          >
            {t("bridalBookBtn")}
          </a>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-md rounded-[40px] bg-white shadow-2xl border border-rose-100 p-10">

            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-xl">
              <Crown size={55} />
            </div>

            <h3 className="text-3xl font-bold text-center mt-8">
              {t("bridalCardTitle")}
            </h3>

            <p className="text-center text-gray-500 mt-4 leading-8">
              {t("bridalCardDesc")}
            </p>

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="text-center">
                <Sparkles className="mx-auto text-rose-500" size={32} />
                <p className="text-sm mt-2">{t("bridalGlow")}</p>
              </div>

              <div className="text-center">
                <Gem className="mx-auto text-rose-500" size={32} />
                <p className="text-sm mt-2">{t("bridalLuxury")}</p>
              </div>

              <div className="text-center">
                <Heart className="mx-auto text-rose-500" size={32} />
                <p className="text-sm mt-2">{t("bridalCare")}</p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}