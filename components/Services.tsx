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

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    desc: "Professional haircuts, styling, straightening and smoothing.",
  },
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    desc: "Elegant bridal makeup for weddings and special occasions.",
  },
  {
    icon: Flower2,
    title: "Facials",
    desc: "Glow-enhancing facial treatments for healthy radiant skin.",
  },
  {
    icon: Brush,
    title: "Mehendi",
    desc: "Beautiful traditional and modern mehendi designs.",
  },
  {
    icon: Heart,
    title: "Hair Spa",
    desc: "Deep nourishment for silky, smooth and healthy hair.",
  },
  {
    icon: Gem,
    title: "Skin Care",
    desc: "Professional skincare treatments for every skin type.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-rose-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-rose-500 font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Beauty Services
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Experience premium beauty care with trusted professionals and
            high-quality products.
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
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
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
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}