"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-white/80 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <a href="#home" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <Image
              src="/logo.png"
              alt="Sri Devi Beauty Parlour"
              width={72}
              height={72}
              className="rounded-full"
            />
          </motion.div>

          <div>
            <h1 className="text-3xl font-black text-rose-500">
              Sri Devi
            </h1>
            <p className="text-xs tracking-[6px] text-gray-500">
              BEAUTY PARLOUR
            </p>
          </div>
        </a>

        <nav className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium hover:text-rose-500 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageToggle />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-white shadow-xl">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 border-b"
            >
              {item}
            </a>
          ))}
        </div>
      )}

    </header>
  );
}
