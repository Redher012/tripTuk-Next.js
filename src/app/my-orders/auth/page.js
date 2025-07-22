import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Order from "@/models/Order";
import connectDB from "@/lib/mongoose";
import Link from "next/link";
import PaidLabel from "@/app/components/Orders/PaidLabel";

const EMAIL_SECRET = process.env.EMAIL_SECRET;

export default async function AuthPage({ searchParams }) {
  const token = searchParams.token;
  let orders;
  let isLoading = true;
  let isError = false;

  try {
    const { email } = jwt.verify(token, EMAIL_SECRET);

    await connectDB();

    orders = await Order.find({ email }).lean();

    // (await cookies()).set("auth_email", email, {
    //   httpOnly: true,
    //   secure: true,
    //   path: "/",
    //   maxAge: 3600,
    // });
    isLoading = false;
  } catch (err) {
    console.error("Failed to verify token", err);
    isError = true;
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-primary-50 pt-20 px-2">
        <h1 className="text-2xl font-semibold">Your Reservations</h1>
        <div className="flex h-full w-full pt-20 items-center justify-center">
          <div className="max-w-xl bg-neutral-050 p-5 rounded-2xl shadow-lg shadow-primary-200/20">
            <h2 className="py-4 text-lg">
              Your Session has expired, please click the link bellow and log in
              again.
            </h2>
            <div className="text-right py-4">
              <Link
                className="bg-primary-600 text-xl text-neutral-050 px-4 py-2 rounded-full hover:bg-primary-800 cursor-pointer"
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
      <div className="min-h-screen bg-primary-50 pt-20 px-2">
        <h1 className="text-2xl font-semibold">Your Reservations</h1>
        <div className="flex h-full w-full pt-20 items-center justify-center">
          <h2>Loading Orders...</h2>
        </div>
      </div>
    );
  }

  const userName = ` ${orders[0]?.names || ""}`;

  return (
    <div className="min-h-screen bg-primary-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-left">{`Hello${
          orders ? userName : ", "
        }That's Your Reservations:`}</h1>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => {
            const now = new Date();
            const isPast = new Date(order.endDate) < now;
            const label = isPast ? "Past" : "Upcoming";

            return (
              <div
                key={order._id}
                className="bg-white p-4 rounded-xl shadow border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      isPast
                        ? "bg-gray-200 text-gray-700"
                        : "bg-blue-100 text-blue-800"
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
                    className="inline-block text-sm text-blue-600 hover:underline"
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
