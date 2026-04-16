import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { GiPathDistance } from "react-icons/gi";
import { GrSchedules } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineRollback } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";

const ThirdSectionFeatures = () => {
  const tripDetails = [
    {
      icon: <FaRegCalendarAlt />,
      name: "Duration",
      description: "1 - 20 days",
    },
    {
      icon: <LuUsers />,
      name: "Passengers",
      description: "1 - 2 per vehicle",
    },
    {
      icon: <GiPathDistance />,
      name: "Max Distance",
      description: "No limit",
    },
    {
      icon: <GrSchedules />,
      name: "Route Planning",
      description: "Preplanned / Flexible",
    },
    {
      icon: <SlLocationPin />,
      name: "Starting Point",
      description: "Where requested",
    },
    {
      icon: <AiOutlineRollback />,
      name: "Refund Policy",
      description: "24 hours earlier",
    },
  ];

  const inclusions = [
    "Private tuk tuk for entire trip",
    "Experienced local driver-guide",
    "Fuel & vehicle maintenance",
    "Flexible daily itinerary",
    "Parking & road fees",
    "24/7 customer support",
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-4">
            Pricing & Packages
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            One Simple Price.
            <br />
            <span className="text-yellow-400">Unlimited Possibilities.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just transparent pricing for unforgettable adventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-3 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 text-gray-900 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-8 border-b-2 border-gray-200">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Private Tuk Tuk Experience</h3>
                <p className="text-gray-600 text-lg">All-inclusive daily rate</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-end gap-2">
                  <span className="text-6xl md:text-7xl font-bold text-orange-500">EUR 70</span>
                  <span className="text-2xl text-gray-500 mb-2">/day</span>
                </div>
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mt-2">
                  Best Value Guarantee
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-6">What&apos;s Included:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <IoCheckmarkSharp className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-6">Trip Details:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {tripDetails.map((detail) => (
                  <div key={detail.name} className="flex flex-col gap-2">
                    <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-500 text-2xl">
                      {detail.icon}
                    </div>
                    <p className="font-bold text-gray-900">{detail.name}</p>
                    <p className="text-sm text-gray-600">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/service"
              className="group block w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-5 rounded-2xl text-xl shadow-xl transform transition-all duration-300 hover:scale-[1.01] text-center"
            >
              Book Your Adventure Now
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative h-64 lg:h-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/sction2tukTuk.jpg"
                alt="Tuk tuk adventure in Sri Lanka"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl">Experience the Freedom</p>
                <p className="text-white/90">Your private tuk tuk adventure awaits</p>
              </div>
            </div>
            <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl group hidden lg:block">
              <Image
                src="/Depositphotos_247033086_XL.jpg"
                alt="Sri Lankan landscapes"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300">Happy Travelers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">4.9★</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-300">Local Drivers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSectionFeatures;
