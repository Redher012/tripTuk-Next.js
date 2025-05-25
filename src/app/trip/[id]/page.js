"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

const Page = () => {
  const params = useParams();
  const [trip, setTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedExpander, setSelectedExpander] = useState(0);

  useEffect(() => {
    async function fetchTrip() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/trip/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch trip data");
        const data = await res.json();
        setTrip(data.trip);
      } catch (error) {
        setError(error.useParams);
        console.error("Error fetching trip", error);
      } finally {
        setIsLoading(false);
      }
    }
    if (params?.id) {
      fetchTrip();
    }
  }, [params.id]);

  console.log(trip);

  if (isLoading) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
      </section>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-primary-50 px-3">
      <section className="max-w-7xl mx-auto flex md:flex-row flex-col gap-3">
        <div className="relative md:w-1/2 h-[900px]">
          <Image
            src={`${trip.image}`}
            alt={trip.shortDescription}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex  flex-col md:px-7 px-4 md:py-12 py-6 justify-around md:w-7/12 md:gap-0 gap-4">
          <p className="text-neutral-700 text-xl">{trip.triptype}</p>
          <h3 className="text-4xl font-semibold text-primary-900">
            {trip.name}
          </h3>
          <p className="text-xl">{trip.shortDescription}</p>
          <div className="flex items-end gap-1">
            <p className="text-6xl">{trip.currency + trip.price}</p>
            <p className="mb-1 text-xl"> /{trip.pricePer}</p>
          </div>
          <button
            onClick={() => console.log("working")}
            className="bg-purple-500 py-2 w-48 text-neutral-050 rounded-full text-lg hover:bg-purple-800 cursor-pointer z-20 font-semibold"
          >
            Book Trip
          </button>
          <p className="text-lg">
            <strong>Trip details:</strong>
            <br />
            {trip.longDescription}
          </p>
        </div>
      </section>
      {trip.routes && (
        <section className="max-w-7xl mx-auto pt-4">
          <h3 className="text-3xl py-3">Trip routes:</h3>
          <div className="flex flex-col gap-3">
            {trip.routes.map((route, i) => (
              <div
                key={route.label}
                className="bg-neutral-050 py-3 px-5 rounded-4xl cursor-pointer"
                style={{ boxShadow: "0px 0px 20px -4px #a3d9a5" }}
                onClick={() => setSelectedExpander(i)}
              >
                <div className="flex text-2xl items-center justify-between">
                  <h4 className="py-1 font-semibold">{route.label}</h4>
                  <div className="text-4xl">
                    {i === selectedExpander ? (
                      <IoIosArrowBack />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </div>
                </div>
                <AnimatePresence initial>
                  {i === selectedExpander && (
                    <motion.div
                      key="constnt"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden cursor-default"
                    >
                      <div className="h-[2px] w-full bg-primary-900 mb-3 rounded" />
                      <div className="grid md:grid-cols-2 gap-3">
                        {route.days.map((day) => (
                          <div
                            key={day.title}
                            className=" rounded-2xl p-2 flex flex-col gap-1"
                            style={{ boxShadow: "0px 0px 5px 0px #cfcfcf" }}
                          >
                            <div className="flex gap-2 text-lg font-semibold">
                              <h5>Day {day.day} -</h5>
                              <p>{day.title}</p>
                            </div>
                            <div className="flex gap-2 text-lg">
                              <label>Distance - </label>
                              <p>{day.distance}</p> -<p>{day.travelTime}</p>
                            </div>
                            <div>
                              <p>Highlights:</p>
                              {day.highlights.map((highLight) => (
                                <p key={highLight} className="">
                                  - {highLight}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
