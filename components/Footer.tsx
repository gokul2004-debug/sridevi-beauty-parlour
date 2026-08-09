"use client";

import { MapPin, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-black text-white pt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}

        <div>

          <h2 className="text-4xl font-black text-rose-400">
            {t("heroBrand")}
          </h2>

          <p className="tracking-[6px] text-gray-400 mt-2">
            {t("heroBrandSub")}
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            {t("footerTagline")}
          </p>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-2xl font-bold mb-8">
            {t("footerVisitUs")}
          </h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center">
                <MapPin size={20} />
              </div>

              <div>

                <h4 className="font-semibold">
                  {t("footerAddressLabel")}
                </h4>

                <p className="text-gray-400">
                  {t("contactAddress").split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center">
                <Clock size={20} />
              </div>

              <div>

                <h4 className="font-semibold">
                  {t("footerHoursLabel")}
                </h4>

                <p className="text-gray-400">
                  {t("contactHours").split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Instagram */}

        <div>

          <h3 className="text-2xl font-bold mb-8">
            {t("footerFollowUs")}
          </h3>

          <p className="text-gray-400 leading-8 mb-8">
            {t("footerFollowDesc")}
          </p>

          <a
            href="https://www.instagram.com/sridevi_beautyartist/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 transition duration-300 font-semibold"
          >
            <FaInstagram size={22} />
            @sridevi_beautyartist
          </a>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 mt-16">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">
            {t("footerCopyright")}
          </p>

          <p className="text-gray-600 text-sm">
            {t("footerCredit")}
          </p>

        </div>

      </div>

    </footer>
  );
}