"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-rose-50 via-white to-rose-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[3px] sm:tracking-[8px] text-rose-500 font-semibold text-sm sm:text-base">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-5">
            We'd Love
            <span className="block text-rose-500">
              To Welcome You
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            Visit Sri Devi Beauty Parlour for premium beauty services.
            Follow us on Instagram to see our latest bridal makeovers,
            hairstyles and beauty updates.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[35px] shadow-xl p-10 border border-rose-100"
          >

            <div className="flex items-start gap-5 mb-10">

              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center">
                <MapPin className="text-rose-500" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Address
                </h3>

                <p className="text-gray-600 mt-3 leading-8">
                  Vanapuram
                  <br />
                  Tiruvannamalai
                  <br />
                  Tamil Nadu
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center">
                <Clock className="text-rose-500" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-3 leading-8">
                  Every Day
                  <br />
                  8:00 AM – 9:00 PM
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[35px] bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white p-10 flex flex-col items-center justify-center text-center shadow-2xl"
          >

            <FaInstagram size={70} />

            <h3 className="text-4xl font-bold mt-6">
              Follow Us
            </h3>

            <p className="mt-6 leading-8 text-white/90">
              Discover our latest bridal makeup, beauty tips,
              hairstyles and salon updates on Instagram.
            </p>

            <a
              href="https://www.instagram.com/sridevi_beautyartist/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 px-8 py-4 rounded-full bg-white text-rose-500 font-bold hover:scale-105 transition duration-300"
            >
              @sridevi_beautyartist
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}