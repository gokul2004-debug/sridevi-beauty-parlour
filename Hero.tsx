"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-rose-50 via-pink-50 to-white overflow-hidden pt-28 pb-16 lg:pt-20 lg:pb-0"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-300/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-300/20 rounded-full blur-[120px]" />

      {/* Decorative Icon */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-24 left-10 text-rose-300"
      >
        <Sparkles size={50} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="uppercase tracking-[4px] sm:tracking-[8px] text-rose-500 font-semibold"
          >
            Since 1999
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mt-6 text-gray-900"
          >
            Beauty
            <span className="block text-rose-500">
              Redefined
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-8 text-lg text-gray-600 leading-9 max-w-xl"
          >
            Discover luxury beauty care with over 25 years of experience.
            Bridal makeup, skincare, hair styling and complete beauty
            services designed to make every moment special.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold shadow-xl hover:scale-105 transition"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-rose-500 text-rose-500 font-semibold hover:bg-rose-500 hover:text-white transition"
            >
              Contact Us
            </a>

          </motion.div>

        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .4 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] aspect-square rounded-[40px] bg-white shadow-2xl border border-rose-100 flex flex-col items-center justify-center p-6">

            {/* BIG LOGO */}
            <Image
              src="/logo.png"
              alt="Sri Devi Beauty Parlour"
              width={380}
              height={380}
              className="object-contain w-32 sm:w-48 md:w-[220px] h-auto"
              priority
            />

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Sri Devi
            </h2>

            <p className="tracking-[3px] sm:tracking-[6px] text-gray-500 mt-2 text-xs sm:text-base">
              BEAUTY PARLOUR
            </p>

            <div className="mt-5 sm:mt-8 flex gap-6 sm:gap-12">

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-500">
                  25+
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Years
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-500">
                  1000+
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Clients
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}