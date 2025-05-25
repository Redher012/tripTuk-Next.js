import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { GiPathDistance } from "react-icons/gi";
import { GrSchedules } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineRollback } from "react-icons/ai";
import Image from "next/image";
import MainButton from "../MainButton";

const ThirdSectionFeatures = () => {
  const serviceFeatures = [
    {
      icon: <FaRegCalendarAlt />,
      name: "duration",
      description: "1 - 14 days",
    },
    {
      icon: <LuUsers />,
      name: "passegers",
      description: "1 - 2 person per vehicle",
    },
    {
      icon: <GiPathDistance />,
      name: "max distance",
      description: "no limit",
    },
    {
      icon: <GrSchedules />,
      name: "rout planning",
      description: "preplanned / flexible",
    },
    {
      icon: <SlLocationPin />,
      name: "starting point",
      description: "where requested",
    },
    {
      icon: <AiOutlineRollback />,
      name: "refund policy",
      description: "24 hours earlierdays",
    },
  ];

  return (
    <section className="w-full relative overflow-visible">
      <div className="px-3 flex md:gap-4 gap-8 md:flex-row flex-col max-w-7xl mx-auto">
        <div
          className="md:w-1/2 p-5 flex flex-col justify-around md:rounded-l-4xl md:rounded-tr-none rounded-t-4xl gap-5 z-20 bg-neutral-050"
          style={{ boxShadow: "0px 0px 20px -4px #b1b1b1" }}
        >
          <div className="flex justify-between items-center w-full ">
            <h3 className="text-3xl font-semibold text-primary-900">
              Private tuk-tuk with tour guide/driver
            </h3>
            <div className="flex flex-col items-center relative">
              <p className="text-5xl bg-primary-100 py-4 px-6 rounded-full">
                €70
              </p>
              <label className="absolute -bottom-3 bg-primary-500 rounded-full py-1 px-3 text-primary-50">
                per day
              </label>
            </div>
          </div>
          <div className="h-[2px] w-full bg-primary-900" />
          <p className="text-lg leading-5 text-neutral-800">
            We will save you time and hustle, by providing you with a smooot
            journey around the island.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 xl:py-6">
            {serviceFeatures.map((service, index) => (
              <div className="flex items-center gap-3" key={index}>
                <div className="text-4xl text-primary-700">{service.icon}</div>
                <div>
                  <p className="text-xl font-bold">{service.name}</p>
                  <label>{service.description}</label>
                </div>
              </div>
            ))}
          </div>
          <MainButton>Let&apos;s go on a trip</MainButton>
        </div>
        <div className="relative md:w-1/2 lg:h-[600px] md:h-[720px] h-[600px] overflow-hidden">
          <Image
            src="/sction2tukTuk.jpg"
            alt="thirdSection Descrition"
            fill
            className="object-cover md:rounded-r-4xl md:rounded-bl-none rounded-b-4xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSectionFeatures;
