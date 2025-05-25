import Image from "next/image";

import FirstSectionIllustration from "./components/landing/FirstSectionIllustration";
import SecondSectionAbout from "./components/landing/SecondSectionAbout";
import ThirdSectionFeatures from "./components/landing/ThirdSectionFeatures";
import FourthSectionExpanders from "./components/landing/FourthSectionExpanders";
import FifthContactSection from "./components/landing/FifthContactSection";

export default function Home() {
  return (
    <div>
      <FirstSectionIllustration />
      <SecondSectionAbout />
      <div className="w-full bg-neutral-050 py-16">
        <ThirdSectionFeatures />
      </div>
      <FourthSectionExpanders />
      <div className="w-full bg-neutral-050 py-24">
        <FifthContactSection />
      </div>
    </div>
  );
}
