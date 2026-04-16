"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Accordion = () => {
  const textExpanders = [
    {
      title: "Start Your Journey – 1-Day Tuk Tuk Adventure",
      content: `Even one day in Sri Lanka can feel unforgettable — if you spend it right. 
    You’ve come all this way, but without a local guide, you risk missing the real heartbeat of this island. 
    Our 1-day Tuk Tuk experience with a personal driver lets you dive into the culture, explore hidden gems, and taste authentic street food — all with zero stress. 
    Start your story today, and see what a single day of adventure can awaken in you.`,
      id: 1,
      shortTitle: "1 Day",
      highlight: "Quick Start",
    },
    {
      title: "2-3 Days – Escape the Ordinary",
      content: `Maybe you’ve seen the travel brochures — but they don’t show the winding back roads, jungle smiles, or secret waterfalls. 
    With 2–3 days, we go deeper. Your personal driver isn't just behind the wheel — he’s your cultural translator, your local insider, and your safety net. 
    Don’t just visit Sri Lanka. Live it, feel it, and return home with stories that don’t exist on Instagram.`,
      id: 2,
      shortTitle: "2-3 Days",
      highlight: "Popular Choice",
    },
    {
      title: "4-7 Days – Explore Like a Local",
      content: `Spend up to a week traveling with your own Tuk Tuk and driver, and you’ll begin to see Sri Lanka the way locals do — not through a tour bus window.
    Imagine waking up to the sound of waves in the south, grabbing tea in the hill country by noon, and dining roadside under palm trees by night.
    This isn’t a trip. It’s a personal transformation — fueled by freedom, guided by someone who knows the land inside and out.`,
      id: 3,
      shortTitle: "4-7 Days",
      highlight: "Best Value",
    },
    {
      title: "8-14 Days – Full Island Immersion",
      content: `Now we’re talking adventure. Two weeks in a private Tuk Tuk takes you from the ancient cities of the north to the vibrant beaches of the south. 
    Your driver becomes more than a guide — he’s a travel partner who opens doors you didn’t even know were there.
    We take care of everything — routes, comfort stops, safety — so you can lose yourself in the magic of Sri Lanka without getting lost.`,
      id: 4,
      shortTitle: "8-14 Days",
      highlight: "Most Complete",
    },
    {
      title: "15-20 Days – The Ultimate Sri Lankan Experience",
      content: `This is not a vacation — it’s a life chapter. Over 15 to 20 days, you’ll traverse every region, climate, and culture Sri Lanka has to offer.
    From wildlife safaris to ancient temples, from jungle trails to coastal sunsets, this is where your travel dreams and local life merge.
    You’ll leave not just relaxed, but renewed — with a head full of stories, and a heart full of connection.`,
      id: 5,
      shortTitle: "15-20 Days",
      highlight: "Ultimate Journey",
    },
  ];

  const [selectedExpander, setSelectedExpander] = useState(3);

  return (
    <div className="flex flex-col gap-4">
      {textExpanders.map((expand) => (
        <motion.div
          key={expand.id}
          initial={false}
          className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
            selectedExpander === expand.id
              ? "bg-white shadow-2xl ring-2 ring-amber-500"
              : "bg-white shadow-lg hover:shadow-xl"
          }`}
          onClick={() => setSelectedExpander(expand.id)}
        >
          <div className="p-6">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      selectedExpander === expand.id
                        ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {expand.highlight}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{expand.shortTitle}</h3>
                </div>
                <p className="text-gray-600 font-medium">{expand.title.split("–")[1]}</p>
              </div>
              <div
                className={`flex-shrink-0 transition-transform duration-300 ${
                  selectedExpander === expand.id ? "rotate-180" : ""
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    selectedExpander === expand.id
                      ? "bg-gradient-to-r from-amber-600 to-amber-500"
                      : "bg-amber-100"
                  }`}
                >
                  <IoIosArrowDown
                    className={`w-5 h-5 ${
                      selectedExpander === expand.id ? "text-white" : "text-amber-700"
                    }`}
                  />
                </div>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {selectedExpander === expand.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-amber-600 to-amber-500 my-4 rounded-full" />
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {expand.content}
                  </p>
                  <Link
                    href="/service"
                    className="mt-6 block w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-shadow text-center"
                  >
                    Select {expand.shortTitle} Package
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
