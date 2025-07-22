import connectDB from "@/lib/mongoose";
import Order from "@/models/Order";

export async function GET(request, context) {
  const { params } = await context;
  const resolvedParams = await params;
  const tripId = resolvedParams.id;
  let order = null;

  try {
    await connectDB();
    order = await Order.findById(tripId);
    console.log("Order:", order);
  } catch (err) {
    console.error(err);
  }

  return Response.json({
    trip: order,
  });
}
