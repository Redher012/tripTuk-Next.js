"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="z-10 w-full absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-between p-2 max-w-7xl bg-transparent">
      <div className="cursor-pointer">
        <h2 className="text-primary-900 font-bold text-3xl">Triptuk</h2>
      </div>
      <div className="flex h-full md:gap-8 gap-4 text-lg text-neutral-700 font-semibold">
        <Link
          className={clsx(
            "hover:text-purple-500 underline-offset-2",
            pathname === "/" && "text-primary-900"
          )}
          href="/"
        >
          Home
        </Link>
        <Link
          className={clsx(
            "hover:text-purple-500 underline-offset-2",
            pathname === "/service" && "text-primary-900"
          )}
          href="/service"
        >
          Sevice
        </Link>
        <Link
          className={clsx(
            "hover:text-purple-500 underline-offset-2",
            pathname === "/contact" && "text-primary-900"
          )}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
