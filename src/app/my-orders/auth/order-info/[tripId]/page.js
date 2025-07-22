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
      <div className="min-h-screen bg-primary-50 pt-24 px-3 flex items-center justify-center">
        <div className="bg-red-400 p-8 rounded-2xl flex flex-col gap-3">
          <p className=" text-neutral-050 text-xl">
            Something went wrong while getting the data
          </p>
          <Link
            href="/my-orders"
            className="bg-neutral-050 p-3 rounded-xl text-center flex items-center justify-center gap-2 text-lg hover:bg-primary-100 cursor-pointer"
          >
            <FaArrowLeft className="mb-[2px]" />
            Back to my reservations
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-green-50 pt-24 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
          {/* Left Section */}
          <div className="bg-green-900 text-white w-full md:w-1/2 p-8">
            <h1 className="text-3xl font-semibold leading-snug mb-6">
              Order <span className="text-green-300">Details</span>
            </h1>

            <ul className="space-y-3 text-green-100 text-sm">
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
            {!order.paid && (
              <div className="bg-neutral-050 p-3 mt-3 rounded-lg">
                <PaymentSelector
                  tripPrice={order.priceTotalTrip}
                  email={order.email}
                  orderId={order._id}
                />
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 p-8 space-y-6 text-sm text-gray-800">
            <div>
              <h2 className="text-xl font-medium mb-1">Trip Details</h2>
              <ul className="space-y-1">
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
              <h2 className="text-lg font-medium mb-1">Pricing</h2>
              <ul className="space-y-1">
                <li>
                  <strong>Price per Day:</strong> €{order.priceVehicleDay}
                </li>
                <li>
                  <strong>Total Trip Price:</strong> €{order.priceTotalTrip}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-1">Metadata</h2>
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
