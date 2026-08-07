"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i * 80) % 1600,
  duration: 12 + (i % 5),
  delay: i * 0.4,
}));

export default function FloatingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: -100,
            x: petal.x,
            rotate: 0,
            opacity: 0.3,
          }}
          animate={{
            y: "110vh",
            rotate: 360,
            x: petal.x + 40,
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          className="absolute text-2xl"
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}