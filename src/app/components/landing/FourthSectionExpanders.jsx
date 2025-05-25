import Image from "next/image";
import React from "react";
import Accordion from "./Accordion";

const FourthSectionExpanders = () => {
  return (
    <section className="py-24 bg-transparent max-w-7xl mx-auto flex md:flex-row flex-col md:gap-4 gap-8 px-3">
      <div className="md:w-1/2 flex flex-col">
        <div className="w-full lg:h-[600px] md:h-[720px] h-[600px] relative overflow-hidden">
          <Image
            src="/forthSection.jpg"
            alt="Lady on the side of a tuk tuk in Galle Sri Lanka"
            fill
            className="md:rounded-l-4xl md:rounded-tr-none rounded-t-4xl transition-transform duration-500 hover:scale-105"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <Accordion />
    </section>
  );
};

export default FourthSectionExpanders;
