"use client";
import Image from "next/image";
import Overlay from "../components/tripList/Overlay";

const Page = () => {
  const trips = [
    {
      id: "flexi",
      name: "Flexible Trip With Tuk Tuk and Driver",
      triptype: "flexible",
      price: 70,
      pricePer: "day/vehicle",
      shortDescription:
        "Plan your own route and pace — perfect for digital nomads and adventurers who value freedom.",
      longDescription:
        "The Flexible Trip is designed for travelers who want to craft their own Sri Lankan journey. Rent a tuk-tuk per day and choose where to go, when to stop, and how fast you move. Whether you're exploring ancient ruins, remote surf spots, or hidden mountain trails, this option puts you in control. Includes full support, documentation, and route suggestions if needed.",
      image: "/flexiTripTukProduct.png",
      currency: "€",
    },
    {
      id: "7",
      name: "7 Day Trip With Tuk Tuk and Driver",
      triptype: "prepland",
      price: 70 * 7,
      pricePer: "trip",
      shortDescription:
        "A week-long island adventure starting in Colombo — ride worry-free with our expert local support.",
      longDescription:
        "Experience the ultimate freedom of exploring Sri Lanka over 7 unforgettable days. Start your journey in Colombo and cruise along coastal roads, through tea plantations, and into lush jungle landscapes. We provide reliable tuk-tuks, full support, and suggested routes so you can focus on the adventure. Ideal for first-time visitors looking for a week of exploration without stress.",
      image: "/editedtriptukProduct.png",
      currency: "€",
    },

    {
      id: "14",
      name: "14 Day Trip With Tuk Tuk and Driver",
      triptype: "prepland",
      price: 70 * 14,
      pricePer: "trip",
      shortDescription:
        "Two weeks of immersive travel across Sri Lanka’s top destinations and hidden gems.",
      longDescription:
        "Take your time to dive deep into the heart of Sri Lanka. Our 14 Day Trip covers a curated route across coastlines, highlands, cultural heritage sites, and nature reserves. You’ll have ample time to relax, explore, and even get off the beaten path. With a tuk-tuk as your trusty ride and our team behind you, it’s the perfect mix of freedom and support for the curious traveler.",
      image: "/14dayTrip.png",
      currency: "€",
    },
    {
      name: "20 Day Trip With Tuk Tuk and Driver",
      triptype: "prepland",
      price: 70 * 20,
      pricePer: "trip",
      shortDescription:
        "The ultimate Sri Lankan journey — perfect for explorers who want to see it all, at their own pace.",
      longDescription:
        "Our 20 Day Trip is the most complete way to experience Sri Lanka by tuk-tuk. From surfing the south coast to hiking in the Hill Country and discovering UNESCO World Heritage sites in the north, you’ll have the time and flexibility to do it all. Ideal for adventurous couples, long-term travelers, or creators looking to document an incredible journey. Includes route plans, full guidance, and 24/7 assistance.",
      image: "/20DayTripTukTuk.png",
      currency: "€",
    },
  ];

  return (
    <section className="min-h-screen pt-16 px-3 bg-primary-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 py-3">
        <h2 className="text-4xl font-semibold ">Our tuk tuk trips</h2>
        {trips.map((trip, i) => (
          <div
            key={i}
            className="bg-white rounded-4xl overflow-hidden flex md:flex-row flex-col cursor-pointer relative group"
            style={{ boxShadow: "0px 0px 20px -4px #a3d9a5" }}
          >
            <Overlay tripId={trip.id} />
            <div className="relative md:w-1/3 h-[520px] bg-primary-50">
              <Image
                src={trip.image}
                alt={trip.name}
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
                <p className="mb-1 text-xl">/{trip.pricePer}</p>
              </div>
              <button
                onClick={() => console.log("working")}
                className="bg-purple-500 py-2 w-48 text-neutral-050 rounded-full text-lg hover:bg-purple-800 cursor-pointer z-20 font-semibold"
              >
                Book Trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
