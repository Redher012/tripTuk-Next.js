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

  const drawerRef = useRef(null);

  useEffect(() => {
    if (!burgerNavOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setBurgerNavOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [burgerNavOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Trips" },
    { href: "/contact", label: "Contact" },
    { href: "/my-orders", label: "My Trips" },
  ];

  const isLinkActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-amber-100 rounded-2xl shadow-lg">
        <div className="px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-amber-700">
              TripTuk
            </h2>
          </div>

      {/* Mobile menu toggle */}
          <div
            className="md:hidden text-3xl cursor-pointer text-amber-700"
            onClick={() => setBurgerNavOpen(!burgerNavOpen)}
          >
            {burgerNavOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </div>

      {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300",
                    isLinkActive(link.href)
                      ? "bg-amber-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-amber-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer (modal) */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 z-[60] transition-opacity duration-200",
          burgerNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!burgerNavOpen}
        onClick={() => setBurgerNavOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40" />

        <aside
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={clsx(
            "absolute right-0 top-0 h-full w-[84vw] max-w-sm bg-white shadow-2xl border-l border-amber-100",
            "transform transition-transform duration-300 ease-out",
            burgerNavOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col">
            <div className="px-5 py-5 flex items-center justify-between border-b border-amber-100">
              <span className="text-lg font-extrabold tracking-tight text-amber-700">
                TripTuk
              </span>
              <button
                type="button"
                className="text-2xl text-amber-700 p-2 -m-2"
                onClick={() => setBurgerNavOpen(false)}
                aria-label="Close menu"
              >
                <RxCross1 />
              </button>
            </div>

            <div className="p-5 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-3 rounded-2xl text-base font-semibold transition-colors",
                    isLinkActive(link.href)
                      ? "bg-amber-600 text-white"
                      : "text-gray-800 hover:bg-amber-50"
                  )}
                  onClick={() => setBurgerNavOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navigation;
