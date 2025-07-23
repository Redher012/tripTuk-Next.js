"use client";

import { useState } from "react";
import { sendEmailClient } from "@/lib/sendEmailClient"; // same helper you already created

export default function EmailOnlyForm() {
  const [email, setEmail] = useState("kristianhalachev0@gmail.com");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await fetch("/api/emails/send-login-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      // if (result.success) {
      //   alert("Email Sent Successfully");
      // } else {
      //   alert("Error sending an email");
      // }
    } catch (error) {
      console.error("Failed to send a message", error);
    }

    // if (result.success) {
    //   setStatus("success");
    //   setEmail("");
    // } else {
    //   setStatus("error");
    // }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary-50 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-primary-900">
          Let&apos;s find your <span className="text-primary-400">trips</span>
        </h2>
        <p className="text-gray-600">
          Drop your email below and we’ll send you instructions there.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full border-b-2 border-primary-400 focus:outline-none py-2 px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary-600 hover:bg-primary-800 text-white py-3 rounded-full font-semibold transition cursor-pointer"
          >
            {status === "loading" ? "Sending..." : "Find My Bookings"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm mt-2">
              Thanks! We’ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm mt-2">
              Something went wrong. Try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
