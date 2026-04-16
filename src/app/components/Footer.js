import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-3xl font-extrabold text-amber-400 mb-3">TripTuk</p>
            <p className="text-gray-300 leading-relaxed">
              Private tuk tuk adventures across Sri Lanka with trusted local
              drivers, flexible routes, and authentic experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-amber-300 transition-colors">
                Home
              </Link>
              <Link href="/service" className="block text-gray-300 hover:text-amber-300 transition-colors">
                Trips
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-amber-300 transition-colors">
                Contact
              </Link>
              <Link href="/my-orders" className="block text-gray-300 hover:text-amber-300 transition-colors">
                My Trips
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <a href="mailto:office@triptuk.com" className="block hover:text-amber-300 transition-colors">
                office@triptuk.com
              </a>
              <a href="tel:+94765407295" className="block hover:text-amber-300 transition-colors">
                +94 76 540 7295
              </a>
              <p>Ella, Sri Lanka</p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} TripTuk. All rights reserved.</p>
          <a
            href="https://appstetic.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            Design &amp; Development - Appstetic
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
