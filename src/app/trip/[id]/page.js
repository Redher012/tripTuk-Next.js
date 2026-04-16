import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  return {
    title: `Trip ${resolvedParams.id}`,
  };
}

const url =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? process.env.NEXT_PUBLIC_URL_DEV
    : process.env.NEXT_PUBLIC_URL_PROD;

const Page = async ({ params }) => {
  const res = await fetch(`${url}/api/trips`, {
    cache: "no-store",
  });

  const { id: tripId } = await params;

  if (!res.ok) return notFound();

  const trips = await res.json();
  const trip = await trips.filter((t) => t.id === tripId)[0];
  const restTrips = await trips.filter((t) => t.id !== tripId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40">
      <section className="relative pt-24 pb-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/service"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold mb-6 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to All Trips
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-100 p-3 md:p-4">
          <Image
            src={`${trip.image}`}
            alt={trip.shortDescription}
            width={1000}
            height={1200}
            className="w-full h-auto max-h-[760px] object-contain mx-auto rounded-2xl"
          />
            <div className="absolute top-6 right-6 bg-amber-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-xl text-lg">
              {trip.triptype === "flexible" ? "Flexible Plan" : "Preplanned Route"}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-md border border-amber-100">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{trip.triptype}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{trip.name}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{trip.shortDescription}</p>

              <div className="flex items-end gap-3 mb-8">
                <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent">
                  {trip.currency}
                  {trip.price}
                </span>
                <span className="text-2xl text-gray-500 mb-3">/{trip.pricePer}</span>
              </div>

              <Link
                href={`/trip/order/${trip.id}`}
                className="w-full group/btn bg-gradient-to-r from-amber-700 to-orange-500 hover:from-amber-800 hover:to-orange-600 text-white font-bold py-5 px-10 rounded-full text-xl shadow-xl transform transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-3"
              >
                Book This Trip
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Trip Details</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{trip.longDescription}</p>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
            <h3 className="font-bold text-xl text-gray-900 mb-4">Important Information</h3>
            <p className="text-gray-700 leading-relaxed">
              Accommodation is not included in the trip price - the cost covers only the tuk tuk and driver. If you have not planned your stays yet, we can recommend and help book options based on your budget and route.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pt-4 px-4 md:px-6">
        {trip.routes ? (
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Trip Routes</h3>
            {trip.routes.map((route, i) => (
              <div
                key={route.label}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">{route.label}</h4>
                  <span className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 px-4 py-2 rounded-full font-semibold">
                    {route.season}
                  </span>
                </div>

                <div className="h-1 w-full bg-gradient-to-r from-amber-700 to-orange-500 rounded-full mb-8" />
                <div className="grid md:grid-cols-2 gap-6">
                  {route.days.map((day) => (
                    <div
                      key={day.title}
                      className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-gradient-to-r from-amber-700 to-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                          {day.day}
                        </div>
                        <h4 className="font-bold text-lg text-gray-900 leading-tight">{day.title}</h4>
                      </div>

                      {(day.distance || day.travelTime) && (
                        <div className="flex gap-4 text-sm text-gray-600 mb-4">
                          {day.distance && <span>{day.distance}</span>}
                          {day.travelTime && <span>{day.travelTime}</span>}
                        </div>
                      )}

                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900">Highlights:</p>
                        {day.highlights.map((highLight) => (
                          <p key={highLight} className="text-gray-700 text-sm">
                            - {highLight}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h4 className="text-4xl font-bold text-gray-900 mb-8">Flexible Trip Details</h4>
            <div className="h-1 w-full bg-gradient-to-r from-amber-700 to-orange-500 rounded-full mb-8" />
            <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
              <p>
                With a Flexi Trip, you are in full control of your journey. Choose your pickup point during the next step. Colombo city, Colombo airport, and Ella are free of charge, while other locations are available for a small additional fee.
              </p>
              <p>
                Travel up to 12 hours per day with no strict distance limit. Your local driver-guide helps you discover hidden gems and avoid tourist traps for a smooth, safe, and unforgettable journey.
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 md:px-6">
        <h5 className="text-4xl font-bold text-gray-900 mb-8">More Trip Options</h5>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restTrips.slice(0, 3).map((t, i) => (
            <Link
              key={i}
              href={`/trip/${t.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-amber-100 hover:border-amber-300 h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {t.name}
                  </h3>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-2xl font-bold text-amber-700">
                      {t.currency}
                      {t.price}
                    </span>
                    <span className="text-sm text-gray-500">/{t.pricePer}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t.shortDescription}</p>
                </div>
                <span className="mt-4 w-full bg-gradient-to-r from-amber-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 text-sm text-center">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
