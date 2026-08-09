"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/context/translations";

const gallery: { titleKey: TranslationKey; image: string }[] = [
  { titleKey: "galleryBridal", image: "/images/bridal.jpg" },
  { titleKey: "galleryHair", image: "/images/hair.jpg" },
  { titleKey: "gallerySkin", image: "/images/skincare.jpg" },
  { titleKey: "galleryFacial", image: "/images/facial.jpg" },
  { titleKey: "galleryMehendi", image: "/images/mehendi.jpg" },
  { titleKey: "galleryParty", image: "/images/party.jpg" },
];

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[8px] text-rose-500 font-semibold text-sm sm:text-base">
            {t("galleryEyebrow")}
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-5">
            {t("galleryTitle")}
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {t("galleryDesc")}
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl group"
            >

              <Image
                src={item.image}
                alt={t(item.titleKey)}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <h3 className="text-3xl font-bold text-white">
                  {t(item.titleKey)}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}