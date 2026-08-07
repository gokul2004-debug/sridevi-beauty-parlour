"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-rose-50 via-pink-50 to-white overflow-hidden"
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
        <div className="text-center lg:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="uppercase tracking-[8px] text-rose-500 font-semibold"
          >
            Since 1999
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
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
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="mt-8 text-lg text-gray-600 leading-9 max-w-xl mx-auto lg:mx-0"
          >
            Discover luxury beauty care with over 25 years of experience.
            Bridal makeup, skincare, hair styling and complete beauty
            services designed to make every moment special.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap gap-5 mt-10 justify-center lg:justify-start"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.06, boxShadow: "0 20px 40px rgba(244,63,94,0.45)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold shadow-xl"
            >
              Explore Services
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, backgroundColor: "#f43f5e", color: "#fff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="px-8 py-4 rounded-full border-2 border-rose-500 text-rose-500 font-semibold"
            >
              Contact Us
            </motion.a>

          </motion.div>

        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[560px] aspect-square rounded-[40px] bg-white shadow-2xl border border-rose-100 flex flex-col items-center justify-center p-6 overflow-hidden">

            {/* Glow ring pulse behind logo */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 blur-3xl"
            />

            {/* BIG LOGO */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="relative z-10"
            >
              <Image
                src="/logo.png"
                alt="Sri Devi Beauty Parlour"
                width={380}
                height={380}
                className="object-contain w-[72%] h-auto mx-auto drop-shadow-xl"
                priority
              />
            </motion.div>

            <h2 className="relative z-10 mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Sri Devi
            </h2>

            <p className="relative z-10 tracking-[4px] sm:tracking-[6px] text-gray-500 mt-2 text-sm sm:text-base text-center">
              BEAUTY PARLOUR
            </p>

            <div className="relative z-10 mt-8 flex gap-6 sm:gap-12">

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
