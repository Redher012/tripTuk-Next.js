import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-300 border-t border-gray-300 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto p-2 flex items-center justify-between md:flex-row flex-col md::gap-0 gap-3">
        <div className="flex md:flex-row flex-col  gap-2 items-center">
          <div className="cursor-pointer">
            <h2 className="text-primary-900 font-bold text-3xl">Triptuk</h2>
          </div>
          <p>© 2025 Triptuk. All rights reserved.</p>
        </div>
        <div className="flex md:flex-row md:justify-between flex-col lg:gap-6 md:gap-4 gap-2 text-gray-900 md:text-left text-center items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/order" className="hover:underline">
            Order a Drive
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Use
          </Link>
        </div>
        <p>Made with ❤️ in Sri Lanka & Bulgaria</p>
      </div>
    </footer>
  );
};

export default Footer;
