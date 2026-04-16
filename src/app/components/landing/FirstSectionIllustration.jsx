import Image from "next/image";
import Link from "next/link";

const FirstSectionIllustration = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/Depositphotos_379922742_XL.jpg"
          alt="Tuk tuk driving through Sri Lankan landscape"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/MobileLongFirst.jpg"
          alt="Tuk tuk driving through Sri Lankan landscape"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      <div className="absolute top-24 md:top-32 right-4 md:right-12 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-2xl">
        From EUR 70/day
      </div>
      <div className="relative w-full px-4 md:px-6 max-w-7xl mx-auto z-10 pt-20">
        <div className="flex flex-col gap-8 md:w-8/12 lg:w-7/12">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-900">
              100% Local Drivers
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-2xl">
            Your Own Tuk Tuk.
            <br />
            <span className="text-yellow-400">Your Own Adventure.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl drop-shadow-lg">
            Skip the tourist traps. Experience the{" "}
            <span className="font-bold text-yellow-400">real Sri Lanka</span>{" "}
            with a private tuk tuk and personal local guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/service"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-10 rounded-full text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 text-center"
            >
              Plan My Trip
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/service"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold py-4 px-10 rounded-full text-xl border-2 border-white/50 transition-all duration-300 hover:border-white text-center"
            >
              View Tours
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-white/90">
            <p className="font-semibold">4.9 Rating</p>
            <p className="font-semibold">500+ Happy Travelers</p>
            <p className="font-semibold">10+ Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSectionIllustration;
