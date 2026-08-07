"use client";

import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-rose-50 to-white"
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
            <p className="uppercase tracking-[8px] text-rose-500 font-semibold">
              About Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-5 leading-tight">
              25+ Years of
              <span className="block text-rose-500">
                Beauty Excellence
              </span>
            </h2>

            <p className="mt-8 text-gray-600 leading-9 text-lg">
              Sri Devi Beauty Parlour has proudly served women in
              Vanapuram and nearby areas for over 25 years. We believe
              every woman deserves to look and feel beautiful,
              confident and elegant.
            </p>

            <p className="mt-6 text-gray-600 leading-9 text-lg">
              From bridal makeup to skincare, hair styling,
              facials, mehendi and complete beauty care,
              we deliver every service with passion,
              professionalism and personal attention.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <h3 className="text-4xl font-bold text-rose-500">
                  25+
                </h3>
                <p className="text-gray-500 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <h3 className="text-4xl font-bold text-rose-500">
                  1000+
                </h3>
                <p className="text-gray-500 mt-2">
                  Happy Clients
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <h3 className="text-4xl font-bold text-rose-500">
                  100%
                </h3>
                <p className="text-gray-500 mt-2">
                  Premium Care
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <h3 className="text-4xl font-bold text-rose-500">
                  ★ 5.0
                </h3>
                <p className="text-gray-500 mt-2">
                  Customer Love
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
                  25+ Years Experience
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Trusted by generations of women for bridal makeup,
                  beauty treatments and personalized salon care.
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
                  Customer First
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Every client receives personal attention,
                  professional care and a relaxing salon experience.
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
                  Premium Products
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  We use trusted beauty products and modern techniques
                  to deliver safe, beautiful and long-lasting results.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}