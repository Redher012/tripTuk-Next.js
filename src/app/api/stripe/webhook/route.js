import { markOrderAsPaid } from "@/lib/orders";
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.TEST_STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");

  let rawBody;
  try {
    rawBody = await req.text();
  } catch (err) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed.", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // ✅ Handle only specific event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const orderId = session.metadata?.orderId;
    const paymentIntentId = session.payment_intent;
    const sessionId = session.id;

    let chargeId = null;

    try {
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      chargeId = intent.charges?.data?.[0]?.id || null;
    } catch (err) {
      console.error("❌ Failed to fetch payment intent:", err.message);
    }

    if (orderId) {
      console.log(
        "stripePaymentIntentId:",
        paymentIntentId,
        "stripeChargeId:",
        chargeId,
        "stripeSessionId:",
        sessionId
      );
      try {
        await markOrderAsPaid(orderId, {
          stripePaymentIntentId: paymentIntentId,
          stripeChargeId: chargeId,
          stripeSessionId: sessionId,
        });
        console.log("✅ Order marked as paid via Stripe webhook:", orderId);
      } catch (err) {
        console.error("❌ Failed to mark order as paid", err);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
      }
    } else {
      console.warn("⚠️ Webhook called without orderId in metadata");
    }
  }

  // ✅ ALWAYS return a response
  return NextResponse.json({ received: true });
}
