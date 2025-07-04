import { markOrderAsPaid } from "@/lib/orders";
import Stripe from "stripe";

const stripe = new Stripe(process.env.TEST_STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json({ error: "Webhook eroor" }, { status: 400 });
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const orderId = session.metadata.orderId;
    try {
      await markOrderAsPaid(orderId);
      console.log("✅ Order Marked as paid from Stripe webhook", orderId);
    } catch (err) {
      console.error("❌ Failed to mark the order as paid", err);
    }
  }
}
