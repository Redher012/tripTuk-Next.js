import Order from "@/models/Order";
import connectDB from "./mongoose";

export async function markOrderAsPaid(orderId, additionalData = {}) {
  await connectDB();
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  order.paid = true;
  if (
    additionalData.stripePaymentIntentId ||
    additionalData.stripeChargeId ||
    additionalData.stripeSessionId
  ) {
    if (additionalData.stripePaymentIntentId) {
      order.stripePaymentIntentId = additionalData.stripePaymentIntentId;
    }
    if (additionalData.stripeSessionId) {
      order.stripeSessionId = additionalData.stripeSessionId;
    }
    order.paypalOrderId = null;
    order.paypalCaptureId = null;
    order.paypalPaymentStatus = null;
    order.paymentMethod = "card";
  }

  if (
    additionalData.paypalOrderId ||
    additionalData.paypalCaptureId ||
    additionalData.paypalPaymentStatus
  ) {
    if (additionalData.paypalOrderId)
      order.paypalOrderId = additionalData.paypalOrderId;
    if (additionalData.paypalCaptureId)
      order.paypalCaptureId = additionalData.paypalCaptureId;
    if (additionalData.paypalPaymentStatus)
      order.paypalPaymentStatus = additionalData.paypalPaymentStatus;
    order.stripePaymentIntentId = null;
    order.stripeSessionId = null;
    order.paymentMethod = "paypal";
  }

  await order.save();
  return order;
}
