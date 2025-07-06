import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";
import Link from "next/link";

const FirstSectionIllustration = () => {
  const abTestText = [
    {
      headlines: [
        "Travel Like You Belong",
        "Your Adventure, Our Road",
        "Explore Beyond the Guidebook",
        "See Sri Lanka Through Local Eyes",
      ],
      SubheadlineOptions: [
        "Private Tuk Tuk with a personal driver. No stress, just freedom",
        "The best stories happen off the main road.",
        "We don't do tours. We do real.",
      ],
      CTAOptions: [
        "Start Your Journey",
        "Ride With Us",
        "Book Your Tuk Tuk",
        "See the Routes",
      ],
    },
  ];
  return (
    <section className="realative md:min-h-screen h-[900px] flex md:items-center md:pt-0 pt-32">
      <div className="inset-0">
        <Image
          src="/Depositphotos_379922742_XL.jpg"
          className="md:block hidden"
          alt="welcomePiture"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <Image
          src="/MobileLongFirst.jpg"
          className="md:hidden"
          alt="welcomePiture"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="absolute md:bg-gradient-to-r top-0 left-o w-full h-full from-white/80 to-transparent to-60% " />

      <div className="relative w-full px-3 md:pt-10">
        <div className=" max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 lg: md:w-5/12">
            <h1 className="md:text-7xl text-6xl font-bold text-primary-900">
              Explore Beyond the Guidebook
            </h1>
            <h2 className="text-2xl">
              Ride with a local, go off the map, and discover the real Sri
              Lanka.
            </h2>
            <Link
              href="/service"
              className="bg-purple-400 hover:bg-purple-900 text-neutral-050 py-2 px-4 rounded-full text-2xl cursor-pointer w-full text-center"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSectionIllustration;
