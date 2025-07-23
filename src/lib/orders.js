import Order from "@/models/Order";
import connectDB from "./mongoose";

export async function markOrderAsPaid(orderId, stripeData = {}) {
  await connectDB();
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  order.paid = true;
  if (stripeData.stripePaymentIntentId)
    order.stripePaymentIntentId = stripeData.stripePaymentIntentId;
  if (stripeData.stripeChargeId)
    order.stripeChargeId = stripeData.stripeChargeId;
  if (stripeData.stripeSessionId)
    order.stripeSessionId = stripeData.stripeSessionId;

  console.log("Modified Order From markOrderAsPaid:", order);

  await order.save();
  return order;
}
