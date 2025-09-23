import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
const stripeKey =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? process.env.TEST_STRIPE_SECRET_KEY
    : process.env.LIVE_STRIPE_SECRET_KEY;
const stripe = new Stripe(stripeKey);

export async function POST(request) {
  const body = await request.json();
  const { priceTotalTrip, email, orderId } = body;

  try {
    const origin = request.headers.get("origin");

    if (!origin) {
      throw new Error("Missing origin header");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      metadata: {
        orderId: orderId,
      },
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Triptuk Booking",
            },
            unit_amount: Math.round(priceTotalTrip * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ sessionUrl: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error creating Stripe session" },
      { status: 500 }
    );
  }
}
