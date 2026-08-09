"use client";

import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-rose-50 to-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[3px] sm:tracking-[8px] text-rose-500 font-semibold text-sm sm:text-base">
              {t("aboutEyebrow")}
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-5 leading-tight">
              {t("aboutTitle1")}
              <span className="block text-rose-500">
                {t("aboutTitle2")}
              </span>
            </h2>

            <p className="mt-8 text-gray-600 leading-9 text-lg">
              {t("aboutPara1")}
            </p>

            <p className="mt-6 text-gray-600 leading-9 text-lg">
              {t("aboutPara2")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <h3 className="text-4xl font-bold text-rose-500">
                  {t("aboutStat1Num")}
                </h3>
                <p className="text-gray-500 mt-2">
                  {t("aboutStat1Label")}
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <h3 className="text-4xl font-bold text-rose-500">
                  {t("aboutStat2Num")}
                </h3>
                <p className="text-gray-500 mt-2">
                  {t("aboutStat2Label")}
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <h3 className="text-4xl font-bold text-rose-500">
                  {t("aboutStat3Num")}
                </h3>
                <p className="text-gray-500 mt-2">
                  {t("aboutStat3Label")}
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <h3 className="text-4xl font-bold text-rose-500">
                  {t("aboutStat4Num")}
                </h3>
                <p className="text-gray-500 mt-2">
                  {t("aboutStat4Label")}
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-rose-100 p-8 flex gap-5 items-start hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Award
                className="text-rose-500 flex-shrink-0"
                size={44}
              />

              <div>
                <h3 className="text-2xl font-bold">
                  {t("aboutCard1Title")}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {t("aboutCard1Desc")}
                </p>
              </div>

            </div>

            <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-rose-100 p-8 flex gap-5 items-start hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Heart
                className="text-rose-500 flex-shrink-0"
                size={44}
              />

              <div>
                <h3 className="text-2xl font-bold">
                  {t("aboutCard2Title")}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {t("aboutCard2Desc")}
                </p>
              </div>

            </div>

            <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-rose-100 p-8 flex gap-5 items-start hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Sparkles
                className="text-rose-500 flex-shrink-0"
                size={44}
              />

              <div>
                <h3 className="text-2xl font-bold">
                  {t("aboutCard3Title")}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {t("aboutCard3Desc")}
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}