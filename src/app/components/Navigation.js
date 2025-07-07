"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navigation = () => {
  const pathname = usePathname();
  const [burgerNavOpen, setBurgerNavOpen] = useState(false);

  const router = useRouter();

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        burgerNavOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setBurgerNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burgerNavOpen]);

  return (
    <nav className="w-full absolute top-0 left-0 right-0 flex items-center justify-between p-2 max-w-7xl bg-transparent z-30">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <h2 className="text-primary-900 font-bold text-3xl">Triptuk</h2>
      </div>

      {/* Mobile menu toggle */}
      <div
        className="md:hidden absolute right-4 top-4 z-50 text-3xl cursor-pointer "
        onClick={() => setBurgerNavOpen(!burgerNavOpen)}
      >
        {burgerNavOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>

      {/* Nav menu */}
      <div
        ref={menuRef}
        className={clsx(
          "fixed top-0 right-0 h-screen w-3/5 sm:w-3/5 md:relative md:h-auto md:w-auto transition-all duration-300 ease-in-out",
          "md:translate-x-0 md:bg-transparent md:flex md:items-center",
          burgerNavOpen
            ? "translate-x-0 bg-white/80 backdrop-blur-md shadow-2xl border-l border-primary-100"
            : "translate-x-full"
        )}
      >
        <div className="flex flex-col md:flex-row md:gap-8 text-xl text-neutral-800 font-semibold pt-24 md:pt-0 ">
          {[
            { href: "/", label: "Home" },
            { href: "/service", label: "Service" },
            { href: "/contact", label: "Contact" },
            { href: "/my-orders", label: "My Trips" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "md:hover:text-purple-600 transition-colors duration-200 pl-6 md:pl-0 md:pr-0 pr-6 md:py-0 py-2 md-text-lg text-xl md:hover:bg-transparent hover:bg-primary-200",
                pathname === link.href &&
                  "text-primary-900 md:underline underline-offset-3 md:bg-transparent bg-primary-200"
              )}
              onClick={() => setBurgerNavOpen(false)} // close on click (mobile)
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
