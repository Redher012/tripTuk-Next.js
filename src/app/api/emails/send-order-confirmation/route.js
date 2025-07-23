import orderConfirmationEmailTemplate from "@/app/components/emailTemplates/orderConfirmationEmailTemplate";
import { sendEmailClient } from "@/lib/sendEmailClient";

export async function POST(req) {
  const resData = await req.json();

  const result = await sendEmailClient({
    email: resData.email,
    reason: "Order successfully created",
    html: orderConfirmationEmailTemplate(resData),
  });
  // console.log("Data Result", result);

  return Response.json("Success sending a message");
}
