"use client";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin, FaBehanceSquare } from "react-icons/fa";

const Page = () => {
  console.log("Something wrong");

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("connected");
  };

  return (
    <section className="min-h-screen overflow-scroll bg-primary-50 py-20 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-primary-800 rounded-4xl shadow-xl overflow-hidden">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 p-10 text-neutral-50 space-y-8">
          <h2 className="text-4xl font-semibold leading-snug">
            Let’s talk <br />
            on something{" "}
            <span className="text-primary-100 font-bold">great</span> <br />
            together
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              📧 <span>contact@triptuk.com</span>
            </li>
            <li className="flex items-center gap-3">
              📞 <span>+94 76 540 7295</span>
            </li>
            <li className="flex items-center gap-3">
              📍 <span>Police Station Rd, Ella, Sri Lanka</span>
            </li>
          </ul>
          <div className="flex gap-5 text-primary-200 text-2xl pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaBehanceSquare />
            </a>
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 bg-white p-10 space-y-6">
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">
              I&apos;m interested in:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Renting Tuk Tuk",
                "Knowing The Company",
                "Preplaned Trip",
                "Other",
              ].map((label, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    i === 0
                      ? "bg-primary-600 text-white"
                      : "text-gray-600 border-gray-300 hover:bg-teal-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {/* End */}
            <div>
              <p className="text-sm font-semibold text-gray-600">Your name</p>
              <input
                type="text"
                placeholder="Jon Smith"
                className="w-full border-b-2 border-teal-600 outline-none py-1"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Your email</p>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full border-b border-gray-300 outline-none py-1"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">
                Your message
              </p>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                placeholder="Type your message here..."
              />
            </div>
          </div>

          <button
            onClick={handleSendMessage}
            className="w-full bg-primary-600 text-white py-3 rounded-full hover:bg-primary-700 transition cursor-pointer"
          >
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
