"use client";
import React, { useRef, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { sendEmailClient } from "@/lib/sendEmailClient";
import { FaEnvelope, FaPhone, FaLocationDot, FaCommentDots, FaPaperPlane } from "react-icons/fa6";
import { toast } from "react-toastify";

const Page = () => {
  const [reason, setReason] = useState("Order");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitCountRef = useRef(0);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    submitCountRef.current += 1;
    try {
      const result = await sendEmailClient({
        triptuk: true,
        name,
        email,
        message,
        reason,
        subject: "Message from contact form",
      });

      if (result.success) {
        toast.success("Message sent successfully.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send a message.");
      }
    } catch {
      toast.error("Failed to send a message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40 py-20 px-4 md:px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-amber-100">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-900">We&apos;re Here to Help</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Have questions about your Sri Lankan adventure? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-amber-700 to-amber-500 rounded-3xl p-8 md:p-10 text-white shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Let&apos;s talk on something <span className="text-amber-100">great</span> together
                </h2>
                <p className="text-amber-100/90 mb-10 text-lg">
                  Whether you&apos;re planning your first trip or need support during your journey, we&apos;re just a message away.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:office@triptuk.com" className="text-amber-100 hover:text-white transition-colors">
                        office@triptuk.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <FaPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:+94765407295" className="text-amber-100 hover:text-white transition-colors">
                        +94 76 540 7295
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <FaLocationDot className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-amber-100">Police Station Rd, Ella, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-4 text-lg">Follow Our Journey</p>
                <div className="flex gap-4 text-2xl">
                  <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-xl transition-all duration-300 hover:scale-110" aria-label="TripTuk on Facebook">
                    <FaFacebookSquare />
                  </a>
                  <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-xl transition-all duration-300 hover:scale-110" aria-label="TripTuk on Instagram">
                    <FaSquareInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-amber-100">
              <div className="flex items-center gap-3 mb-8">
                <FaCommentDots className="w-7 h-7 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">I&apos;m interested in:</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { name: "Renting Tuk Tuk", value: "Order" },
                    { name: "Knowing The Company", value: "Information" },
                    { name: "Preplanned Trip", value: "Preplanned Info" },
                    { name: "Cancel/Change Trip", value: "Change Trip" },
                    { name: "Other", value: "Other" },
                  ].map((label, i) => (
                    <button
                      key={i}
                      onClick={() => setReason(label.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border-2 cursor-pointer transition-all duration-300 ${
                        label.value === reason
                          ? "bg-gradient-to-r from-amber-700 to-amber-500 text-white border-transparent shadow-lg scale-105"
                          : "text-gray-700 border-gray-300 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      {label.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
            <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Your name <span className="text-red-500">*</span>
                  </p>
              <input
                type="text"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
              />
            </div>
            <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Your email <span className="text-red-500">*</span>
                  </p>
              <input
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
              />
            </div>
            <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Your message <span className="text-red-500">*</span>
                  </p>
              <textarea
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
              />
            </div>

          <button
            onClick={handleSendMessage}
            disabled={isSubmitting}
                  className="w-full group/btn bg-gradient-to-r from-amber-700 to-amber-500 hover:from-amber-800 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-full text-lg shadow-xl transform transition-all duration-300 hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-3"
          >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <FaPaperPlane className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  )}
          </button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
