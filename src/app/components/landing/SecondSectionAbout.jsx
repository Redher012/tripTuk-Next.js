import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";

const SecondSectionAbout = () => {
  const abTesting = [
    {
      titles: [
        "Your Personal Tuk Tuk & Chauffeur",
        "Travel Stress-Free with a Local Guide",
      ],
      subTitle: [
        "Skip the hassle, skip the crowds. Ride with a trusted local who knows the shortcuts, the secret spots, and how to make your journey smooth from start to finish. Your private Tuk Tuk and personal driver turn every mile into a memory",
        "  Getting around in a new country can be overwhelming — but not with us. Your private Tuk Tuk and trusted driver will handle the details, while you sit back and enjoy the ride. Friendly, flexible, and fully focused on your safety and comfort.",
      ],
      cta: ["Book My Ride", "Let’s Go on a Trip"],
    },
  ];
  return (
    <section className="py-24 relative flex md:flex-row flex-col  md:gap-4 gap-8 px-3 max-w-7xl mx-auto  ">
      <div className="relative md:w-1/2 w-full md:h-[650px] h-[600px] overflow-hidden">
        <Image
          src="/TukTukService.png"
          alt="ServiceDescriptin"
          fill
          className="md:rounded-l-4xl md:rounded-tr-none rounded-t-4xl transition-transform duration-500 hover:scale-105"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className=" flex flex-col gap-10 md:w-1/2 text-neutral-900  md:text-left text-center justify-center ">
        <h2 className="xl:text-7xl md:text-5xl text-5xl font-bold text-primary-900">
          Unlock <strong> Real </strong> Sri Lanka
        </h2>
        <div className="w-full h-[2px] bg-primary-900" />
        <p className="md:text-2xl text-xl md:mx-0 mx-auto">
          Tourists see landmarks. Travelers live the journey. With your own Tuk
          Tuk and local driver-guide, you’ll explore beyond the usual routes —
          from jungle paths to coastal towns. No guesswork. Just pure freedom,
          local stories, and unforgettable trip.
        </p>
        <div className="w-64">
          <MainButton>Start My Adventure</MainButton>
        </div>
      </div>
    </section>
  );
};

export default SecondSectionAbout;
