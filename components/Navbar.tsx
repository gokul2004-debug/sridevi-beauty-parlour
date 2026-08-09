"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "navHome", href: "home" },
    { key: "navAbout", href: "about" },
    { key: "navServices", href: "services" },
    { key: "navContact", href: "contact" },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-white/80 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

       <a href="#home" className="flex items-center gap-3">

        <Image
           src="/logo.png"
           alt="Sri Devi Beauty Parlour"
           width={60}
           height={60}
           className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px]"
        />

        <div>
          <h1 className="text-lg sm:text-xl md:text-3xl font-black text-rose-500">
              {t("heroBrand")}
          </h1>

          <p className="text-[9px] sm:text-[10px] md:text-xs tracking-[2px] sm:tracking-[4px] md:tracking-[6px] text-gray-500">
             {t("heroBrandSub")}
          </p>
        </div>

       </a>

        <nav className="hidden md:flex gap-8">

          {links.map((item) => (

            <a
              key={item.key}
              href={`#${item.href}`}
              className="font-medium hover:text-rose-500 transition"
            >
              {t(item.key)}
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

          {links.map((item)=>(

            <a
              key={item.key}
              href={`#${item.href}`}
              className="block px-6 py-4 border-b"
            >
              {t(item.key)}
            </a>

          ))}

        </div>

      )}

    </header>
  );
}