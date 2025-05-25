import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";

const FifthContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto md:gap-4 gap-8 px-3 flex">
      <div className="flex md:flex-row flex-col gap-6">
        <div className="text-lg md:text-xl text-gray-700 space-y-4 md:w-1/2 flex flex-col justify-center h-full">
          <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            About Triptuk
          </h3>
          <p>
            Triptuk was born from a friendship between two co-founders — one
            from Sri Lanka, the other from Bulgaria — united by a love for real,
            local travel.
          </p>
          <p>
            With over a decade of experience in tourism, we created Triptuk to
            offer more than transport — we offer local insight, warm
            hospitality, and a true taste of Sri Lanka.
          </p>
          <div className="w-52">
            <MainButton>Contact</MainButton>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-300">
            <Image
              src="/EditOnSamiKrisPhotoDone.jpg"
              alt="Founders of Triptuk smiling inside a tuk tuk"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Optional overlay badge */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md text-gray-800 text-sm md:text-base px-4 py-2 rounded-full shadow">
              Kris & Sami – Founders of Triptuk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthContactSection;
