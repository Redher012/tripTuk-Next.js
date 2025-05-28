import Overlay from "@/app/components/tripList/Overlay";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: `Trip ${params.id}`,
  };
}

const Page = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/trips`, {
    cache: "no-store",
  });

  const { id: tripId } = await params;

  if (!res.ok) return notFound();

  const trips = await res.json();
  const trip = await trips.filter((t) => t.id === tripId)[0];
  const restTrips = await trips.filter((t) => t.id !== tripId);

  console.log(restTrips);

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
        <div className="flex  flex-col lg:px-7 md:px-2 lg:py-6 justify-center md:w-7/12  lg:gap-5 md:gap-3 gap-4">
          <p className="text-neutral-700 text-xl">{trip.triptype}</p>
          <h3 className="text-5xl font-semibold text-primary-900">
            {trip.name}
          </h3>
          <p className="text-2xl">{trip.shortDescription}</p>
          <div className="flex items-end gap-1">
            <p className="text-6xl">{trip.currency + trip.price}</p>
            <p className="mb-1 text-xl"> /{trip.pricePer}</p>
          </div>
          <button className="bg-purple-500 py-2 w-48 text-neutral-050 rounded-full text-lg hover:bg-purple-800 cursor-pointer z-20 font-semibold">
            Book Trip
          </button>
          <p className="text-lg">
            <strong>Trip details:</strong>
            <br />
            {trip.longDescription}
          </p>
          <p className="text-lg">
            <strong>Additional:</strong>
            <br />
            Accommodation is not included in the trip price — the cost covers
            only the tuk tuk drive. If you haven&apos;t planned your stays yet,
            we’d be happy to help! We can recommend budget, mid-range, or luxury
            accommodation options at any of the destinations on your route. We
            can also assist with the booking to make your trip even smoother.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto pt-4">
        <h3 className="text-3xl py-3">Trip routes:</h3>
        {trip.routes ? (
          <div className="flex flex-col gap-3">
            {trip.routes.map((route, i) => (
              <div
                key={route.label}
                className="bg-neutral-050 py-3 px-5 rounded-4xl cursor-pointer"
                style={{ boxShadow: "0px 0px 20px -4px #a3d9a5" }}
                // onClick={() => setSelectedExpander(i)}
              >
                <div className="flex text-2xl items-center justify-between">
                  <h4 className="py-1 font-semibold">{route.label}</h4>
                  {/* <div className="text-4xl">
                    {i === selectedExpander ? (
                      <IoIosArrowBack />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </div> */}
                </div>
                {/* <AnimatePresence initial> */}
                {/* {i === selectedExpander && ( */}
                <div
                // key="constnt"
                // initial={{ height: 0, opacity: 0 }}
                // animate={{ height: "auto", opacity: 1 }}
                // exit={{ height: 0, opacity: 0 }}
                // transition={{ duration: 0.3, ease: "easeInOut" }}
                // className="overflow-hidden cursor-default"
                >
                  <div className="h-[2px] w-full bg-primary-900 mb-3 rounded" />
                  <div className="grid md:grid-cols-2 gap-3">
                    {route.days.map((day) => (
                      <div
                        key={day.title}
                        className=" rounded-2xl p-2 flex flex-col gap-1 z-40"
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
                </div>
                {/* )} */}
                {/* </AnimatePresence> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-neutral-050 py-3 px-5 rounded-4xl flex flex-col">
            <h4 className="py-1 font-semibold text-2xl ">Flexible Trip</h4>
            <div className="h-[2px] w-full bg-primary-900 mb-3 rounded" />
            <div className="grid grid-cols-2 gap-6 text-lg text-ellipsis">
              <p>
                With a Flexi Trip, you’re in full control of your journey.
                Choose your pickup point during the next step—Colombo (city or
                airport) and Ella are free of charge, while other locations are
                available for a small additional fee. Whether you want to fully
                customize your route or tweak one of our preplanned journeys,
                this option gives you the freedom to explore Sri Lanka your way.
              </p>
              <p>
                Travel up to 12 hours per day with no limit on distance. Your
                local driver-guide will help you uncover hidden gems, steer
                clear of tourist traps, and experience Sri Lanka like a local.
                With years of experience behind the tuk-tuk handlebars, fluent
                English, and a friendly attitude, your chauffeur ensures a safe,
                smooth, and unforgettable journey.
              </p>
            </div>
          </div>
        )}
      </section>
      <section className="max-w-7xl mx-auto py-16">
        <h5 className="text-3xl py-3">More Trip Options</h5>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
          {restTrips.map((t, i) => (
            <div
              key={i}
              className="rounded-4xl overflow-hidden flex flex-col bg-white shadow-sm relative group cursor-pointer"
            >
              <Overlay tripId={t.id} />
              <div className="h-[500px] w-full relative">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between bg-neutral-050 py-4 px-3 flex-1">
                <div className="flex flex-col gap-2">
                  <h4 className="text-primary-900 font-semibold text-lg">
                    {t.name}
                  </h4>
                  <div className="flex items-end gap-1 text-lg">
                    <p className="text-2xl">
                      {t.currency}
                      {t.price}
                    </p>
                    <p>/{t.pricePer}</p>
                  </div>
                  <div className="h-[2px] w-full bg-primary-900 rounded-4xl" />
                  <p className="text-sm text-neutral-700">
                    {t.shortDescription}
                  </p>
                </div>
                <button className="bg-purple-500 py-2 px-5 text-neutral-050 rounded-full hover:bg-purple-800 cursor-pointer z-20 mt-4">
                  Book Trip
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
