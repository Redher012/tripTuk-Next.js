import orderCancelationTemplate from "@/app/components/emailTemplates/orderCancelation";
import orderCancelationTemlate from "@/app/components/emailTemplates/orderCancelation";
import orderConfirmationEmailTemplate from "@/app/components/emailTemplates/orderConfirmationEmailTemplate";
import { sendEmailClient } from "@/lib/sendEmailClient";

export async function POST(req) {
  const data = await req.json();
  console.log("Data From Cancel Email", data);

  const result = await sendEmailClient({
    email: data.email,
    reason: "Order canceled successfully",
    subject: "TripTuk - Order canceled",
    html: orderCancelationTemplate(),
  });
  const result2 = await sendEmailClient({
    email: "office@triptuk.com",
    reason: `${data.email} Order was canceled canceled`,
    subject: "TripTuk - Order canceled (admin)",
    html: orderCancelationTemplate(data.email),
  });
  const result3 = await sendEmailClient({
    email: data.email,
    reason: `${data.email} Order was canceled canceled`,
    subject: "TripTuk - Order canceled",
    html: orderCancelationTemplate(data.email),
  });

  return Response.json("Success sending a message");
}
