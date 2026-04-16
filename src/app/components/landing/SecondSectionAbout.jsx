import Image from "next/image";
import Link from "next/link";

const SecondSectionAbout = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/40 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-10" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full font-bold mb-4">
            Why Choose TripTuk?
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Adventure Meets{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Authenticity
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/TukTukService.png"
                alt="Tuk tuk service in Sri Lanka"
                width={900}
                height={1200}
                className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-amber-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Not Just a Ride - It&apos;s Your{" "}
              <span className="text-amber-600">Personal Journey</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Forget cookie-cutter tours. With TripTuk, you get a private tuk tuk,
              a trusted local driver-guide, and the freedom to explore Sri Lanka
              your way.
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-900 mb-1">100% Local Expertise</h4>
                <p className="text-gray-600">
                  Your driver knows hidden gems, secret spots, and authentic experiences.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-900 mb-1">Total Flexibility</h4>
                <p className="text-gray-600">
                  Change plans on the fly. This is your adventure, on your schedule.
                </p>
              </div>
            </div>
            <Link
              href="/service"
              className="inline-block group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSectionAbout;
