import ModalCancelOrder from "@/app/components/Orders/ModalCancelOrder";
import PaidLabel from "@/app/components/Orders/PaidLabel";
import PaymentSelector from "@/app/components/Orders/PaymentSelector";
import Link from "next/link";
import { FaArrowLeft, FaCcPaypal, FaCreditCard } from "react-icons/fa";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const tripId = resolvedParams.tripId;

  const fetchAllReservationUrl =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
      ? process.env.NEXT_PUBLIC_URL_DEV
      : process.env.NEXT_PUBLIC_URL_PROD;

  let order = null;

  try {
    const res = await fetch(`${fetchAllReservationUrl}/api/trip/${tripId}`);
    const json = await res.json();
    order = json.trip;
  } catch (err) {
    console.error(err);
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40 pt-24 px-4 md:px-6 flex items-center justify-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-red-200 flex flex-col gap-3 w-full max-w-xl">
          <p className="text-gray-900 text-xl font-semibold">
            Something went wrong while getting the data
          </p>
          <Link
            href="/my-orders"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-700 to-orange-500 hover:from-amber-800 hover:to-orange-600 text-white font-bold shadow-lg transition cursor-pointer text-lg"
          >
            <FaArrowLeft className="mb-[2px]" />
            Back to my reservations
          </Link>
        </div>
      </div>
    );
  } else {
    const isPastReservation = new Date(order.endDate) < new Date();

    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40 pt-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="bg-gradient-to-br from-amber-700 to-orange-500 text-white w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold leading-snug mb-6">
                Order <span className="text-amber-100">Details</span>
              </h1>

              <ul className="space-y-3 text-white/90 text-sm">
                <li>
                  <strong>Name:</strong> {order.names}
                </li>
                <li>
                  <strong>Email:</strong> {order.email}
                </li>
                <li>
                  <strong>Phone:</strong> {order.phone}
                </li>
                <li>
                  <strong>Address:</strong> {order.address}, {order.town},{" "}
                  {order.postCode}
                </li>
                <li>
                  <strong>Country:</strong> {order.selectedCountry}
                </li>
                <li>
                  <strong>Pickup:</strong> {order.pickupAddress}
                </li>
                <li className="flex items-center gap-3">
                  <strong>Payment method: {order.paymentMethod}</strong>
                  <PaidLabel isPaid={order.paid} />
                </li>
              </ul>
            </div>

            {!order.paid && !isPastReservation && (
              <div className="bg-white/10 p-4 mt-6 rounded-2xl border border-white/15">
                <PaymentSelector
                  tripPrice={order.priceTotalTrip}
                  email={order.email}
                  orderId={order._id}
                />
              </div>
            )}
            {!order.paid && isPastReservation && (
              <div className="bg-amber-100 text-amber-900 p-4 mt-6 rounded-2xl text-sm font-semibold">
                This reservation is in the past and can no longer be paid.
              </div>
            )}
            {order.paid && (
              <div className="flex gap-3 text-lg mt-10">
                <ModalCancelOrder orderId={tripId} />
                {/* <button className="w-1/2 bg-purple-400 py-1 px-2 rounded-lg cursor-pointer  hover:bg-purple-700">
                  Change Start Date
                </button> */}
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 p-8 space-y-6 text-sm text-gray-800">
            <div>
              <h2 className="text-xl font-bold mb-2">
                Trip Details
              </h2>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>Start:</strong>{" "}
                  {new Date(order.startDate).toLocaleDateString()}
                </li>
                <li>
                  <strong>End:</strong>{" "}
                  {new Date(order.endDate).toLocaleDateString()}
                </li>
                <li>
                  <strong>Days:</strong> {order.daysTrip}
                </li>
                <li>
                  <strong>Passengers:</strong> {order.numberPassenger}
                </li>
                <li>
                  <strong>Tuk-Tuks Needed:</strong> {order.tukTuksNeeded}
                </li>
                <li>
                  <strong>Trip Duration:</strong> {order.tripDuration} days
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">Pricing</h2>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>Price per Day:</strong> €{order.priceVehicleDay}
                </li>
                <li>
                  <strong>Total Trip Price:</strong> €{order.priceTotalTrip}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">Metadata</h2>
              <ul className="space-y-1 text-gray-500">
                <li>
                  <strong>Created:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </li>
                <li>
                  <strong>Last Updated:</strong>{" "}
                  {new Date(order.updatedAt).toLocaleString()}
                </li>
                <li>
                  <strong>Order ID:</strong> {order._id}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
