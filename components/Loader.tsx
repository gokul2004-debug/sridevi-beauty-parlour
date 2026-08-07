"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-rose-100 via-white to-pink-100 pointer-events-none"
    >
      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="w-24 h-24 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white flex items-center justify-center text-5xl mx-auto shadow-2xl"
        >
          ✿
        </motion.div>

        <h1 className="mt-8 text-4xl font-bold text-rose-600">
          Sri Devi
        </h1>

        <p className="tracking-[6px] text-gray-600 mt-2">
          BEAUTY PARLOUR
        </p>

      </div>
    </motion.div>
  );
}