import orderConfirmationEmailTemplate from "@/app/components/emailTemplates/orderConfirmationEmailTemplate";
import { sendEmailClient } from "@/lib/sendEmailClient";

export async function POST(req) {
  const resData = await req.json();

  const result = await sendEmailClient({
    email: resData.email,
    reason: "Order successfully created",
    subject: "TripTuk - Order confirmation",
    html: orderConfirmationEmailTemplate(resData),
  });

  await sendEmailClient({
    email: "kristianhalachev0@gmail.com",
    reason: "A new Order was created",
    subject: "TripTuk - New order",
    html: orderConfirmationEmailTemplate(resData),
  });
  // await sendEmailClient({
  //   email: "Chamiduprasath@gmail.com",
  //   reason: "A new Order was created",
  //   html: orderConfirmationEmailTemplate(resData),
  // });

  return Response.json("Success sending a message");
}
