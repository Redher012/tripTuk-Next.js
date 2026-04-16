import Image from "next/image";
import Overlay from "../components/tripList/Overlay";
import Link from "next/link";

export default async function Page() {
  const url =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
      ? process.env.NEXT_PUBLIC_URL_DEV
      : process.env.NEXT_PUBLIC_URL_PROD;

  const res = await fetch(`${url}api/trips`, {
    cache: "no-store",
  });
  console.log("res", res);
  const trips = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40">
      <section className="relative pt-28 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-500/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-amber-100">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-900">All Trips Include Local Driver</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            Our Tuk Tuk Trips
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Choose your adventure. Every journey is tailored to help you discover the{" "}
            <span className="font-bold text-amber-700">authentic Sri Lanka</span>.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 pt-10">
        <div className="grid gap-8">
        {trips.map((trip, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row cursor-pointer border border-amber-100 hover:border-amber-300 relative"
          >
            <Overlay tripId={trip.id} />
            <div className="relative md:w-2/5 h-[360px] md:h-auto overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
              <Image
                src={trip.image}
                alt={trip.name}
                fill
                className="w-full h-full object-cover md:object-contain p-0 md:p-4 lg:p-6 transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-amber-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">
                {trip.triptype === "flexible" ? "Flexible" : "Preplanned"}
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-10 md:w-3/5">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-amber-700 to-orange-500" />
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{trip.triptype}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors">
                  {trip.name}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{trip.shortDescription}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-end gap-2">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent">
                    {trip.currency}
                    {trip.price}
                  </span>
                  <span className="text-xl text-gray-500 mb-2">/{trip.pricePer}</span>
                </div>

                <Link
                  href={`/trip/${trip.id}`}
                  className="group/btn flex items-center gap-2 bg-gradient-to-r from-amber-700 to-orange-500 hover:from-amber-800 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 z-20"
                >
                  View Details
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <div className="bg-gradient-to-r from-amber-700 to-orange-500 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Not Sure Which Trip to Choose?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Let us help you plan the perfect Sri Lankan adventure</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-700 font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
