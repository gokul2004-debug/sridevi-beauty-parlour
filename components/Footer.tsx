import { MapPin, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-black text-white pt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}

        <div>

          <h2 className="text-4xl font-black text-rose-400">
            Sri Devi
          </h2>

          <p className="tracking-[6px] text-gray-400 mt-2">
            BEAUTY PARLOUR
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            Bringing beauty, confidence and elegance to every client
            with over 25 years of trusted experience.
          </p>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-2xl font-bold mb-8">
            Visit Us
          </h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center">
                <MapPin size={20} />
              </div>

              <div>

                <h4 className="font-semibold">
                  Address
                </h4>

                <p className="text-gray-400">
                  Vanapuram
                  <br />
                  Tiruvannamalai
                  <br />
                  Tamil Nadu
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center">
                <Clock size={20} />
              </div>

              <div>

                <h4 className="font-semibold">
                  Working Hours
                </h4>

                <p className="text-gray-400">
                  Every Day
                  <br />
                  8:00 AM – 9:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Instagram */}

        <div>

          <h3 className="text-2xl font-bold mb-8">
            Follow Us
          </h3>

          <p className="text-gray-400 leading-8 mb-8">
            Follow our Instagram to see bridal makeovers,
            beauty transformations and salon updates.
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
            © 2026 Sri Devi Beauty Parlour. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm">
            Crafted with ❤️ for Sri Devi Beauty Parlour
          </p>

        </div>

      </div>

    </footer>
  );
}