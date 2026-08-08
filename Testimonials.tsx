"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Happy Bride",
    review:
      "Amazing bridal makeup! I felt confident and beautiful throughout my wedding day. Thank you for making my day special.",
  },
  {
    name: "Regular Customer",
    review:
      "Professional service, friendly staff and a relaxing atmosphere. My favourite beauty parlour for years.",
  },
  {
    name: "Satisfied Client",
    review:
      "Excellent skincare and hair care services. Highly recommended for anyone looking for quality beauty treatments.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-rose-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[3px] sm:tracking-[8px] text-rose-500 font-semibold text-sm sm:text-base">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-5">
            What Our
            <span className="block text-rose-500">
              Clients Say
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            The trust and satisfaction of our clients inspire us to
            deliver exceptional beauty services every day.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-[30px] shadow-xl border border-rose-100 p-8 relative"
            >

              <Quote
                size={50}
                className="text-rose-200 absolute top-6 right-6"
              />

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-rose-500">
                  Verified Customer
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}