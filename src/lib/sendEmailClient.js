export async function sendEmailClient({
  triptuk,
  name,
  email,
  message,
  reason,
  html,
}) {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
          ? process.env.NEXT_PUBLIC_URL_DEV
          : process.env.NEXT_PUBLIC_URL_PROD
      }/api/sendEmail`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ triptuk, name, email, message, reason, html }),
      }
    );

    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    console.error("Error sending message:", err);
    return { success: false, error: err };
  }
}
