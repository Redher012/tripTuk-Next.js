import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DEFAULT_ZOHO_HOST = "smtppro.zoho.eu";
const DEFAULT_ZOHO_PORT = 465;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { triptuk, name, message, email, reason, subject, html } = body || {};

    const user =
      process.env.ZOHO_USER?.trim() ||
      process.env.ZOHO_EMAIL?.trim() ||
      process.env.ZOHO_USERNAME?.trim();
    const pass =
      (process.env.ZOZO_PASS ||
        process.env.ZOHO_PASS ||
        process.env.ZOHO_PASSWORD ||
        process.env.ZOHO_SMTP_PASS)?.trim();

    if (!user || !pass) {
      console.error("sendEmail: missing ZOHO_USER/ZOZO_PASS (or ZOHO_PASS)");
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const host = process.env.ZOHO_SMTP_HOST?.trim() || DEFAULT_ZOHO_HOST;
    const port = Number(process.env.ZOHO_SMTP_PORT || DEFAULT_ZOHO_PORT);
    const secure =
      process.env.ZOHO_SMTP_SECURE === "false" ? false : port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const to = triptuk ? "kristianhalachev0@gmail.com" : email;
    if (!to) {
      return NextResponse.json(
        { success: false, error: "Missing recipient email." },
        { status: 400 }
      );
    }

    const finalSubject = subject || reason || "TripTuk message";

    const textFallback = `name: ${name || "Person Name"}
subject: ${reason || finalSubject}
email: ${email || "Persons Email"}
message: ${message || "Message from user"}`;

    const finalHtml =
      html ||
      `
        <p><strong>Name:</strong> ${escapeHtml(name || "")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "")}</p>
        <p><strong>Reason:</strong> ${escapeHtml(reason || "")}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(
          message || ""
        )}</pre>
      `;

    const info = await transporter.sendMail({
      from: `"TripTuk" <${user}>`,
      to,
      replyTo: email || undefined,
      subject: finalSubject,
      text: textFallback,
      html: finalHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("sendEmail: error", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
