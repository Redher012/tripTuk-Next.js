import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { triptuk, name, message, email, reason, subject, html } = body;
  console.log(body);

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API || "API_KEY",
    url: "https://api.eu.mailgun.net",
  });

  try {
    const mailOptions = {
      from: "Triptuk App <postmaster@mg.triptuk.com>",
      to: [`Kristiyan Halachev <${triptuk ? "office@triptuk.com" : email}>`],
      subject: subject || "New Email",
    };

    if (html) {
      mailOptions.html = html;
    } else {
      mailOptions.text = `name: ${name || "Person Name"}
         subject: ${reason || "Reason"}
         email: ${email || "Persons Email"}
         message: ${message || "Message from user"}
        `;
    }

    const data = await mg.messages.create("mg.triptuk.com", mailOptions);

    console.log(data);
    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
