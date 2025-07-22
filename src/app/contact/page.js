"use client";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { sendEmailClient } from "@/lib/sendEmailClient";

const Page = () => {
  const [reason, setReason] = useState("Order");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const result = await sendEmailClient({
      triptuk: true,
      name,
      email,
      message,
      reason,
      subject: "Message from contact form",
    });

    if (result.success) {
      alert("Message Sent");
    } else {
      alert("Failed to send a message");
    }
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
          <div className="flex gap-5 text-primary-200 text-3xl pt-4">
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
                { name: "Renting Tuk Tuk", value: "Order" },
                { name: "Knowing The Company", value: "Information" },
                { name: "Preplaned Trip", value: "Prepland Info" },
                { name: "Cancel/Change Trip", value: "Change Trip" },
                { name: "Other", value: "Other" },
              ].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setReason(label.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer ${
                    label.value === reason
                      ? "bg-primary-600 text-white"
                      : "text-gray-600 border-gray-300 hover:bg-teal-100"
                  }`}
                >
                  {label.name}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b-2 border-teal-600 outline-none py-1"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Your email</p>
              <input
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
