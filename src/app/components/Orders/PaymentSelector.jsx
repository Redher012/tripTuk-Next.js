"use client";
import React, { useState } from "react";
import { FaCcPaypal, FaCreditCard } from "react-icons/fa";

const PaymentSelector = ({ tripPrice, email, orderId }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleCreateOrder = async () => {
    if (paymentMethod === "card") {
      try {
        const resStripe = await fetch("/api/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            priceTotalTrip: tripPrice,
            email,
            orderId,
          }),
        });

        const dataOrder = await resStripe.json();

        if (resStripe.ok && dataOrder.sessionUrl) {
          window.location.href = dataOrder.sessionUrl;
        } else {
          alert("Stripe session failed.");
          console.error(dataOrder);
        }
      } catch (err) {
        console.error("Error starting Stripe Checkout", err);
        alert("Something went wrong!");
      }
    } else if (paymentMethod === "payPal") {
      setPayPalOpen(true);
    } else {
      alert("Invalid payment method");
    }
  };

  return (
    <>
      <div className="">
        <p className="font-semibold text-gray-700 py-2">Payment Method:</p>
        <div className="grid grid-cols-2 gap-2 text-4xl text-gray-700">
          <div
            className={`flex items-center justify-center border-2 gap-2 border-primary-500 rounded cursor-pointer hover:bg-primary-600 ${
              paymentMethod === "card" && "bg-primary-500 text-gray-50"
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <FaCreditCard />
            <p className="text-lg">Card</p>
          </div>
          <div
            className={`flex items-center justify-center gap-2 py-2 border-2 border-primary-500 rounded cursor-pointer hover:bg-primary-600 ${
              paymentMethod === "payPal" && "bg-primary-500 text-gray-50"
            }`}
            onClick={() => setPaymentMethod("payPal")}
          >
            <FaCcPaypal />
            <p className="text-lg">PayPal</p>
          </div>
        </div>
      </div>
      <div className="pt-6 ">
        <button
          onClick={handleCreateOrder}
          className="w-full bg-purple-300 py-3 text-xl cursor-pointer rounded font-semibold text-neutral-050 hover:bg-purple-700"
        >
          Pay My Ride
        </button>
      </div>
    </>
  );
};

export default PaymentSelector;
