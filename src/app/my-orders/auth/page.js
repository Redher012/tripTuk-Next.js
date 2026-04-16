import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Order from "@/models/Order";
import connectDB from "@/lib/mongoose";
import Link from "next/link";
import PaidLabel from "@/app/components/Orders/PaidLabel";
import SetCookieClient from "@/lib/SetCookieClient";
import LogoutButton from "./LogoutButton";

const EMAIL_SECRET = process.env.EMAIL_SECRET;

export default async function AuthPage({ searchParams }) {
  const params = await searchParams;
  const token = params.token;
  let orders;
  let isLoading = true;
  let isError = false;

  try {
    const { email } = jwt.verify(token, EMAIL_SECRET);
    await connectDB();

    orders = await Order.find({ email }).lean();

    isLoading = false;
  } catch (err) {
    console.error("Failed to verify token", err);
    isError = true;
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40 pt-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto pt-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            Your Reservations
          </h1>
          <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-6 md:p-8">
            <h2 className="text-lg text-gray-700 mb-6">
              Your session has expired. Please log in again to view your reservations.
            </h2>
            <div className="text-right">
              <Link
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-orange-500 hover:from-amber-800 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition cursor-pointer w-full sm:w-auto"
                href="/my-orders"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40 pt-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto pt-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            Your Reservations
          </h1>
          <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-6 md:p-8">
            <h2 className="text-gray-700">Loading Orders...</h2>
          </div>
        </div>
      </div>
    );
  }

  const userName = ` ${orders[0]?.names || ""}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40 pt-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto pt-8 md:pt-12">
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            {`Hello${orders ? userName : ", "} That's Your Reservations:`}
          </h1>
          <LogoutButton />
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
          <SetCookieClient token={token} />
          {orders.map((order) => {
            const now = new Date();
            const isPast = new Date(order.endDate) < now;
            const label = isPast ? "Past" : "Upcoming";

            return (
              <div
                key={order._id}
                className="bg-white p-6 rounded-3xl shadow-xl border border-amber-100 transition-shadow hover:shadow-2xl"
              >
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-bold ${
                      isPast
                        ? "bg-amber-50 text-amber-800"
                        : "bg-gradient-to-r from-amber-600 to-amber-500 text-white"
                    }`}
                  >
                    {label}
                  </span>
                  <PaidLabel isPaid={order.paid} />
                </div>

                <p className="text-sm">
                  <b>Start:</b> {new Date(order.startDate).toLocaleDateString()}
                </p>
                <p className="text-sm">
                  <b>End:</b> {new Date(order.endDate).toLocaleDateString()}
                </p>
                <p className="text-sm">
                  <b>Passengers:</b> {order.passengersCount}
                </p>

                <div className="mt-4">
                  <a
                    href={`/my-orders/auth/order-info/${order._id}`}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2 rounded-full bg-gradient-to-r from-amber-700 to-orange-500 hover:from-amber-800 hover:to-orange-600 text-white font-bold shadow-lg transition text-sm"
                  >
                    Edit Reservation
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
