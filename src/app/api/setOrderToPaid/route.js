import connectDB from "@/lib/mongoose";
import { markOrderAsPaid } from "@/lib/orders";
import Order from "@/models/Order";

export async function POST(req) {
  try {
    const body = await req.json();
    const id = body.orderId;
    let origin = req.headers.get("origin");

    if (!origin) {
      const referer = req.headers.get("referer");
      if (referer) {
        try {
          origin = new URL(referer).origin;
        } catch (error) {}
      }
    }

    await markOrderAsPaid(id);

    console.log("origin", origin);

    return Response.json({ success: true, origin: origin }, { status: 201 });
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
