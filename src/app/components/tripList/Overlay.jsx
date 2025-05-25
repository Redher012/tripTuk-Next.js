"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Overlay = ({ tripId }) => {
  const router = useRouter();

  return (
    <div
      className="absolute top-0 left-0 bg-primary-300 w-full h-full z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
      onClick={() => router.push(`trip/${tripId}`)}
    />
  );
};

export default Overlay;
