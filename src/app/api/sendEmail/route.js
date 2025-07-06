import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, message, email, reason, subject } = body;
  console.log(body);

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API || "API_KEY",
    url: "https://api.eu.mailgun.net",
  });
  try {
    const data = await mg.messages.create("mg.triptuk.com", {
      from: "Triptuk App <postmaster@mg.triptuk.com>",
      to: ["Kristiyan Halachev <office@triptuk.com>"],
      subject: subject ? subject : "New Email",
      text: `
      name: ${name ? name : "Person Name"}
      subject: ${reason ? reason : "Reason"}
      email: ${email ? email : "Persons Email"}
      message: ${message ? message : "Message from user"}
      `,
    });

    console.log(data);
    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
