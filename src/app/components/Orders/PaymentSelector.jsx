"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useEffect, useRef, useState } from "react";
import { FaCcPaypal, FaCreditCard } from "react-icons/fa";
import { toast } from "react-toastify";

const PaymentSelector = ({ tripPrice, getOrderDetails, orderId, email }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [payPalOpen, setPayPalOpen] = useState(false);

  const idRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    if (orderId) idRef.current = orderId;
    if (email) emailRef.current = email;
  }, [orderId, email]);

  const createOrderAndGetDetails = async () => {
    const result = await getOrderDetails?.();
    if (!result) return;
    const { orderId, email } = result;

    idRef.current = orderId;
    emailRef.current = email;
  };

  const handleCreateOrder = async () => {
    if (getOrderDetails) {
      await createOrderAndGetDetails();
    }

    if (!idRef.current || !emailRef.current) {
      toast.error("Order or email missing.");
      return;
    }

    if (paymentMethod === "card") {
      try {
        const resStripe = await fetch("/api/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            priceTotalTrip: tripPrice,
            email: emailRef.current,
            orderId: idRef.current,
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
      {/* <div className="">
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
      </div> */}
      <div className="pt-6 ">
        <button
          onClick={handleCreateOrder}
          className="w-full bg-purple-300 py-3 text-xl cursor-pointer rounded font-semibold text-neutral-050 hover:bg-purple-700"
        >
          Pay My Ride
        </button>
      </div>
      {payPalOpen && (
        <div className="fixed bg-neutral-400/70 w-screen h-full left-0 top-0 flex items-center justify-center px-3">
          <div
            id="paypal-button-container"
            className="bg-neutral-050 w-xl p-6 rounded-4xl"
          >
            <h2 className="text-3xl text-neutral-900 font-bold mb-4 py-2">
              Pay with PayPal
            </h2>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: tripPrice.toFixed(2),
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                try {
                  const details = await actions.order.capture();
                  toast.success("Payment successful");

                  const paypalCaptureId =
                    details.purchase_units?.[0]?.payments?.captures?.[0]?.id;
                  const paypalOrderId = data.orderID;

                  // Send Info To backend
                  const resSetPaid = await fetch("/api/order/setOrderToPaid", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      orderId: idRef.current,
                      paypalOrderId,
                      paypalCaptureId,
                      paypalPaymentStatus: details.status || "COMPLETED",
                    }),
                  });
                  6;

                  if (!resSetPaid.ok) {
                    console.error("Failed to update order payment status");
                  }

                  window.location.href = `${window.location.origin}/success`;
                } catch (error) {
                  console.error(
                    "Error during PayPal payment processing",
                    error
                  );
                  toast.error("Something went wrong after payment.");
                }
              }}
              onError={(err) => {
                console.error("PayPal Checkout Error:", err);
                window.location.href = `${window.location.origin}/cancel`;
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentSelector;
