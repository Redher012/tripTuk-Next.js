import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";

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
    <section className="realative min-h-screen flex md:items-center md:pt-0 pt-36">
      <div className="absolute inset-0">
        <Image
          src="/Depositphotos_379922742_XL.jpg"
          className="md:block hidden"
          alt="welcomePiture"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <Image
          src="/MobileFirsSection.jpg"
          className="md:hidden"
          alt="welcomePiture"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="relative w-full px-3 md:pt-10">
        <div className=" max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 lg: md:w-5/12">
            <h1 className="md:text-7xl text-6xl font-bold text-primary-900">
              Explore Beyond the Guidebook
            </h1>
            <h2 className="text-2xl ">
              Ride with a local, go off the map, and discover the real Sri
              Lanka.
            </h2>
            <div className="">
              <MainButton>Start Exploring</MainButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSectionIllustration;
