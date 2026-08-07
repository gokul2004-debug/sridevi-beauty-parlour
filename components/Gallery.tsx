"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    title: "Bridal Makeup",
    image: "/images/bridal.jpg",
  },
  {
    title: "Hair Styling",
    image: "/images/hair.jpg",
  },
  {
    title: "Skin Care",
    image: "/images/skincare.jpg",
  },
  {
    title: "Facial",
    image: "/images/facial.jpg",
  },
  {
    title: "Mehendi",
    image: "/images/mehendi.jpg",
  },
  {
    title: "Party Makeup",
    image: "/images/party.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-rose-500 font-semibold">
            Gallery
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Our Beautiful Work
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A glimpse of our bridal makeup, hairstyles, skin care and
            beauty transformations.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl group"
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <h3 className="text-3xl font-bold text-white">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}