"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../loading";

export default function EmailOnlyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthToken = async () => {
      const res = await fetch("/api/auth/check-session");
      const data = await res.json();
      // console.log(data);
      if (data.token) {
        router.push(`/my-orders/auth?token=${data.token}`);
      }
      setIsLoading(false);
    };
    checkAuthToken();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await fetch("/api/emails/send-login-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (result.ok) {
        toast.success("Email Sent Successfully");
        setStatus("success");
        setEmail("");
      } else {
        toast.error("Error sending an email");
        setStatus("Error sending an email");
      }
    } catch (error) {
      console.error("Failed to send a message", error);
      setStatus("Error sending an email");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="relative min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40 py-24 px-4 md:px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-10" />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-amber-100">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-900">Secure Reservation Access</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                My Trips
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Enter your booking email and we&apos;ll send a secure access link to view your reservations.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 bg-gradient-to-br from-amber-700 to-amber-500 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
                <h2 className="text-3xl font-bold mb-5">How it works</h2>
                <div className="space-y-4 text-amber-50/95">
                  <p>1. Add the same email you used when booking.</p>
                  <p>2. Open the secure link from your inbox.</p>
                  <p>3. View and manage upcoming or past trips.</p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/15 rounded-2xl p-4 text-center">
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-sm text-amber-100">Access</p>
                  </div>
                  <div className="bg-white/15 rounded-2xl p-4 text-center">
                    <p className="text-3xl font-bold">Secure</p>
                    <p className="text-sm text-amber-100">Magic Link</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-amber-100 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Find your reservations
                </h2>
                <p className="text-gray-600 mb-8">
                  We&apos;ll send login instructions straight to your email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-gradient-to-r from-amber-700 to-orange-500 hover:from-amber-800 hover:to-orange-600 text-white py-4 rounded-full font-semibold transition cursor-pointer shadow-lg"
                  >
                    {status === "loading" ? "Sending..." : "Find My Bookings"}
                  </button>

                  {status === "success" && (
                    <p className="text-green-600 text-sm mt-2">
                      Email sent successfully. Please check your inbox.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-sm mt-2">
                      Something went wrong. Try again later.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
