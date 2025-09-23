import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto py-4 px-3 flex justify-between md:flex-row md:gap-0 gap-5 flex-col items-center text-center md:text-left">
        {/* Logo + Copy */}
        <div className="flex flex-col items-center md:items-start gap-2 ">
          <h2 className="text-primary-900 font-bold text-2xl">Triptuk</h2>
          <p>© {new Date().getFullYear()} Triptuk. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row md:justify-center items-center lg:gap-3 gap-5">
          <div className="flex lg:gap-3 md:gap-2 md:flex-col lg:flex-row flex-row gap-3">
            <Link href="/" className="hover:text-primary-600 transition">
              Home
            </Link>
            <Link href="/contact" className="hover:text-primary-600 transition">
              Contact
            </Link>
          </div>
          <div className="flex lg:gap-3 md:gap-2 md:flex-col lg:flex-row flex-row gap-3">
            <Link href="/service" className="hover:text-primary-600 transition">
              Order a Drive
            </Link>
            <Link
              href="/my-orders"
              className="hover:text-primary-600 transition"
            >
              Your Orders
            </Link>
          </div>
          <div className="flex lg:gap-3 md:gap-2 md:flex-col lg:flex-row flex-row gap-3">
            <Link
              href="/privacy-policy"
              className="hover:text-primary-600 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-600 transition">
              Terms of Use
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-gray-700">Made with ❤️</p>
          <p>Sri Lanka & Bulgaria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
