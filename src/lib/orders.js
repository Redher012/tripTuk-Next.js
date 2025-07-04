import Order from "@/models/Order";
import connectDB from "./mongoose";

export async function markOrderAsPaid(orderId) {
  await connectDB();
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");
  order.paid = true;
  await order.save();

  return order;
}
