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
      <ThirdSectionFeatures />
      <FourthSectionExpanders />
      <FifthContactSection />
    </div>
  );
}
