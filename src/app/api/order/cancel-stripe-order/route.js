import connectDB from "@/lib/mongoose";
import Order from "@/models/Order";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeKey =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? process.env.TEST_STRIPE_SECRET_KEY
    : process.env.LIVE_STRIPE_SECRET_KEY;
const stripe = new Stripe(stripeKey);

export async function POST(req) {
  try {
    const body = await req.json();
    const { orderId } = body;
    await connectDB();

    const reservation = await Order.findById(orderId);

    if (!reservation) {
      return NextResponse.json(
        { error: "Reservation not found" },
        { status: 404 }
      );
    }

    if (!reservation.stripePaymentIntentId) {
      console.log("NoStripePayment");
      return NextResponse.json(
        { error: "No Stripe payment found" },
        { status: 404 }
      );
    }

    if (!reservation.paid) {
      console.log("Order NOT PAID");
      return NextResponse.json(
        { error: "Reservation is not paid" },
        { status: 404 }
      );
    }

    // Issue the refund;
    const refund = await stripe.refunds.create({
      payment_intent: reservation.stripePaymentIntentId,
    });

    reservation.paid = false;
    // reservation.status = "canceled"
    await reservation.save();

    // Send cancelation email

    const currentUrl =
      process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_URL_DEV
        : process.env.NEXT_PUBLIC_URL_PROD;

    try {
      const res = await fetch(
        `${currentUrl}/api/emails/send-cancel-confirmation`,
        {
          method: "POST",
          body: JSON.stringify({ email: reservation.email }),
        }
      );
      const dataEmail = await res.json();
      console.log("Data form client", dataEmail);
    } catch (err) {
      console.error("Error sending a message");
    }

    return NextResponse.json({ success: true, refund });
  } catch (err) {
    console.error("Refund error", err);
    return NextResponse.json(
      { error: "Internal error Stripe Cancelation" },
      { status: 500 }
    );
  }
}
