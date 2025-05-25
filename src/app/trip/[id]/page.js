"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  return <div className="min-h-screen pt-16">Trip ID: {params.id}</div>;
};

export default Page;
