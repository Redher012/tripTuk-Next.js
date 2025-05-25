import Image from "next/image";
import Overlay from "../components/tripList/Overlay";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/trips", {
    cache: "no-store",
  });
  const trips = await res.json();

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
                <p className="text-6xl">{trip.currency + " " + trip.price}</p>
                <p className="mb-1 text-xl"> /{trip.pricePer}</p>
              </div>
              <button className="bg-purple-500 py-2 w-48 text-neutral-050 rounded-full text-lg hover:bg-purple-800 cursor-pointer z-20 font-semibold">
                Book Trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
