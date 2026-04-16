import Image from "next/image";
import React from "react";
import Accordion from "./Accordion";

const FourthSectionExpanders = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/40 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-2 rounded-full font-bold mb-4">
            Choose Your Adventure
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How Long Will You{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Explore?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From quick getaways to epic journeys, every trip is tailored to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative order-2 lg:order-1">
            <div className="sticky top-8 space-y-6">
              <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/forthSection.jpg"
                  alt="Traveler experiencing Sri Lanka in a tuk tuk"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="relative h-[14.5rem] rounded-3xl overflow-hidden shadow-xl hidden lg:block">
                <Image
                  src="/popedJpgOfTouristOnAripInSriLanka.jpeg"
                  alt="Tuk tuk front view"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSectionExpanders;
