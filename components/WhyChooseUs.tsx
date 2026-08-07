"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Gem,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "25+ Years Experience",
    desc: "Trusted beauty services with decades of expertise.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    desc: "We use high-quality beauty products for the best results.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Care",
    desc: "Every customer receives individual attention and care.",
  },
  {
    icon: Gem,
    title: "Affordable Luxury",
    desc: "Premium beauty services at reasonable prices.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-28 bg-gradient-to-b from-white via-rose-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-rose-500 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Experience Beauty
            <span className="block text-rose-500">
              Like Never Before
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            We combine experience, quality products and personalized
            care to make every visit memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                  boxShadow: "0 25px 50px rgba(244,63,94,0.2)",
                  transition: { type: "spring", stiffness: 300, damping: 18 },
                }}
                className="bg-white rounded-3xl shadow-xl border border-rose-100 p-8 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg"
                >
                  <Icon size={38} />
                </motion.div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
