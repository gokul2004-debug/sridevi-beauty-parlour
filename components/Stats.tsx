"use client";

import { motion } from "framer-motion";
import { Users, Award, Heart, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "1000+",
    title: "Happy Clients",
  },
  {
    icon: Award,
    number: "25+",
    title: "Years Experience",
  },
  {
    icon: Heart,
    number: "100%",
    title: "Customer Satisfaction",
  },
  {
    icon: Sparkles,
    number: "15+",
    title: "Beauty Services",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center border border-white/20"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-rose-500 shadow-lg">
                  <Icon size={38} />
                </div>

                <h3 className="text-5xl font-black text-white mt-8">
                  {item.number}
                </h3>

                <p className="text-white/90 mt-3 text-lg">
                  {item.title}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}