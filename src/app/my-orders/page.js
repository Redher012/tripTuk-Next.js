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
      console.log(result);
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
        <section className="min-h-screen flex items-center justify-center bg-primary-50 px-4">
          <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg p-8 space-y-6">
            <h2 className="text-3xl font-bold text-primary-900">
              Let&apos;s find your{" "}
              <span className="text-primary-400">trips</span>
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
                  An Email was sent to you. Please check your inbox.
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
      )}
    </>
  );
}
