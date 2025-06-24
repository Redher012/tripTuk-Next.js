import connectDB from "@/lib/mongoose";
import Order from "@/models/Order";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    console.log(body);
    const order = await Order.create(body);
    return Response.json({ success: true, order }, { status: 201 });
  } catch (error) {
    console.error("[ORDER_CREATE_ERROR]", error);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
