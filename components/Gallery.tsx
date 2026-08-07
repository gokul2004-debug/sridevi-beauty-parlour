"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    title: "Bridal Makeup",
    image: "https://picsum.photos/seed/bridal-makeup-glow/800/1000",
  },
  {
    title: "Hair Styling",
    image: "https://picsum.photos/seed/hair-styling-salon/800/1000",
  },
  {
    title: "Skin Care",
    image: "https://picsum.photos/seed/skin-care-glow/800/1000",
  },
  {
    title: "Facial",
    image: "https://picsum.photos/seed/facial-spa-glow/800/1000",
  },
  {
    title: "Mehendi",
    image: "https://picsum.photos/seed/mehendi-henna-art/800/1000",
  },
  {
    title: "Party Makeup",
    image: "https://picsum.photos/seed/party-makeup-look/800/1000",
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
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
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