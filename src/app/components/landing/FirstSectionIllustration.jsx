import Image from "next/image";
import Link from "next/link";

const FirstSectionIllustration = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-24 sm:py-28 [@media(max-height:820px)]:py-20 [@media(max-height:700px)]:py-16">
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
      <div className="absolute top-20 sm:top-24 md:top-28 [@media(max-height:820px)]:top-16 w-full px-4 md:px-6 z-10">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="bg-yellow-400 text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold shadow-2xl text-sm sm:text-base">
            From EUR 70/day
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 md:px-6 max-w-7xl mx-auto z-10 pt-8 sm:pt-12 md:pt-16 [@media(max-height:820px)]:pt-6">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 [@media(max-height:820px)]:gap-3 [@media(max-height:700px)]:gap-2.5 md:w-8/12 lg:w-7/12">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-900">
              100% Local Drivers
            </span>
          </div>
          <h1 className="text-[clamp(2rem,6vw,5.5rem)] [@media(max-height:820px)]:text-[clamp(1.85rem,5.2vh,3.75rem)] font-bold text-white leading-[1.05] drop-shadow-2xl">
            Your Own Tuk Tuk.
            <br />
            <span className="text-yellow-400">Your Own Adventure.</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl [@media(max-height:820px)]:text-base [@media(max-height:700px)]:text-sm text-white/95 leading-relaxed max-w-2xl drop-shadow-lg">
            Skip the tourist traps. Experience the{" "}
            <span className="font-bold text-yellow-400">real Sri Lanka</span>{" "}
            with a private tuk tuk and personal local guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/service"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-3 px-8 sm:py-4 sm:px-10 [@media(max-height:700px)]:py-2.5 [@media(max-height:700px)]:px-6 rounded-full text-lg sm:text-xl [@media(max-height:700px)]:text-base shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 text-center"
            >
              Plan My Trip
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/service"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 [@media(max-height:700px)]:py-2.5 [@media(max-height:700px)]:px-6 rounded-full text-lg sm:text-xl [@media(max-height:700px)]:text-base border-2 border-white/50 transition-all duration-300 hover:border-white text-center"
            >
              View Tours
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4 [@media(max-height:820px)]:pt-1 text-sm sm:text-base text-white/90">
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
