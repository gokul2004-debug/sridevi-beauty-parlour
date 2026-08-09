"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Heart,
  Brush,
  Flower2,
  Gem,
} from "lucide-react";
import { useLanguage, } from "@/context/LanguageContext";
import type { TranslationKey } from "@/context/translations";

const services: { icon: any; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: Scissors, titleKey: "service1Title", descKey: "service1Desc" },
  { icon: Sparkles, titleKey: "service2Title", descKey: "service2Desc" },
  { icon: Flower2, titleKey: "service3Title", descKey: "service3Desc" },
  { icon: Brush, titleKey: "service4Title", descKey: "service4Desc" },
  { icon: Heart, titleKey: "service5Title", descKey: "service5Desc" },
  { icon: Gem, titleKey: "service6Title", descKey: "service6Desc" },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-rose-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[8px] text-rose-500 font-semibold text-sm sm:text-base">
            {t("servicesEyebrow")}
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            {t("servicesTitle")}
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {t("servicesDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white rounded-3xl shadow-xl p-8 border border-rose-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {t(service.titleKey)}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {t(service.descKey)}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}