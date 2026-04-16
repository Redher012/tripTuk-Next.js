import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaCheck, FaUsers, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const FifthContactSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-4">
            Meet the Team
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Story Behind <span className="text-yellow-400">TripTuk</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Born from friendship, built on trust, dedicated to authentic travel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">10+ Years in Tourism</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold">
                Two Cultures.
                <br />
                <span className="text-yellow-400">One Mission.</span>
              </h3>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                TripTuk was born from an unlikely friendship between{" "}
                <span className="font-bold text-white">Sami from Sri Lanka</span> and{" "}
                <span className="font-bold text-white">Kris from Bulgaria</span>, two travelers who shared a
                vision: to show the world the <span className="text-yellow-400">real Sri Lanka</span>.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                With over a decade of experience in tourism, we&apos;ve built TripTuk to be more than
                just transportation. We offer <span className="font-bold text-white">local insight and warm hospitality</span>.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-4">Why Travelers Choose Us:</h4>
              <div className="space-y-3">
                {[
                  "Trusted by 500+ international travelers",
                  "Personally vetted drivers & vehicles",
                  "Deep local knowledge & connections",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="bg-green-500 p-1 rounded-full">
                      <FaCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Get in Touch
              </Link>
              <Link
                href="/contact"
                className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MdOutlineEmail className="w-5 h-5" />
                Email Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/EditOnSamiKrisPhotoDone.jpg"
                alt="Founders of Triptuk - Kris and Sami"
                width={900}
                height={1200}
                className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <FaUsers className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Kris & Sami</p>
                      <p className="text-gray-600 text-sm">Co-Founders of TripTuk</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    &quot;We created TripTuk to share our love for Sri Lanka with the world.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white text-gray-900 rounded-2xl p-4 shadow-2xl hidden lg:block">
              <div className="text-3xl font-bold text-orange-500">4.9★</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl p-4 shadow-2xl hidden lg:block">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthContactSection;
