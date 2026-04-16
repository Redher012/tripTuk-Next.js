import { verificationEmailTemplate } from "@/app/components/emailTemplates/confirmEmail";
import { sendEmailClient } from "@/lib/sendEmailClient";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
const EMAIL_SECRET = process.env.EMAIL_SECRET;

export async function POST(req) {
  const { email } = await req.json();

  const token = jwt.sign({ email }, EMAIL_SECRET, { expiresIn: "15d" });

  const loginLink = `${
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
      ? process.env.NEXT_PUBLIC_URL_DEV
      : process.env.NEXT_PUBLIC_URL_PROD
  }my-orders/auth?token=${token}`;

  const result = await sendEmailClient({
    email: email,
    subject: "Login to Triptuk",
    reason: "Login to TripTuk",
    html: verificationEmailTemplate(email, loginLink),
  });

  if (result.success) {
    return NextResponse.json(
      { success: true, result: result, loginLink: loginLink },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { success: false, error: result?.data?.error || "Email send failed" },
      { status: 500 }
    );
  }
}
