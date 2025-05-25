"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = () => {
  const textExpanders = [
    {
      title: "Start Your Journey – 1-Day Tuk Tuk Adventure",
      content: `Even one day in Sri Lanka can feel unforgettable — if you spend it right. 
    You’ve come all this way, but without a local guide, you risk missing the real heartbeat of this island. 
    Our 1-day Tuk Tuk experience with a personal driver lets you dive into the culture, explore hidden gems, and taste authentic street food — all with zero stress. 
    Start your story today, and see what a single day of adventure can awaken in you.`,
      id: 1,
    },
    {
      title: "2-3 Days – Escape the Ordinary",
      content: `Maybe you’ve seen the travel brochures — but they don’t show the winding back roads, jungle smiles, or secret waterfalls. 
    With 2–3 days, we go deeper. Your personal driver isn't just behind the wheel — he’s your cultural translator, your local insider, and your safety net. 
    Don’t just visit Sri Lanka. Live it, feel it, and return home with stories that don’t exist on Instagram.`,
      id: 2,
    },
    {
      title: "4-7 Days – Explore Like a Local",
      content: `Spend up to a week traveling with your own Tuk Tuk and driver, and you’ll begin to see Sri Lanka the way locals do — not through a tour bus window.
    Imagine waking up to the sound of waves in the south, grabbing tea in the hill country by noon, and dining roadside under palm trees by night.
    This isn’t a trip. It’s a personal transformation — fueled by freedom, guided by someone who knows the land inside and out.`,
      id: 3,
    },
    {
      title: "8-14 Days – Full Island Immersion",
      content: `Now we’re talking adventure. Two weeks in a private Tuk Tuk takes you from the ancient cities of the north to the vibrant beaches of the south. 
    Your driver becomes more than a guide — he’s a travel partner who opens doors you didn’t even know were there.
    We take care of everything — routes, comfort stops, safety — so you can lose yourself in the magic of Sri Lanka without getting lost.`,
      id: 4,
    },
    {
      title: "15-20 Days – The Ultimate Sri Lankan Experience",
      content: `This is not a vacation — it’s a life chapter. Over 15 to 20 days, you’ll traverse every region, climate, and culture Sri Lanka has to offer.
    From wildlife safaris to ancient temples, from jungle trails to coastal sunsets, this is where your travel dreams and local life merge.
    You’ll leave not just relaxed, but renewed — with a head full of stories, and a heart full of connection.`,
      id: 5,
    },
  ];

  const [selectedExpander, setSelectedExpander] = useState(1);

  return (
    <div
      className="md:w-1/2 flex flex-col gap-5 justify-center md:rounded-r-4xl  md:rounded-bl-none rounded-b-4xl p-5"
      style={{ boxShadow: "0px 0px 20px -4px #b1b1b1" }}
    >
      {textExpanders.map((expand) => (
        <div
          key={expand.id}
          className="border-b py-3 cursor-pointer"
          onClick={() => setSelectedExpander(expand.id)}
        >
          <div className="flex justify-between items-center text-xl font-semibold text-primary-800">
            {expand.title}
            <div>
              {selectedExpander === expand.id ? (
                <IoIosArrowBack />
              ) : (
                <IoIosArrowDown />
              )}
            </div>
          </div>
          {/* AnimatePresence */}
          <AnimatePresence initial>
            {selectedExpander === expand.id && (
              <motion.div
                key="constnt"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="h-[1px] w-full bg-primary-900 my-2" />
                <div>{expand.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
