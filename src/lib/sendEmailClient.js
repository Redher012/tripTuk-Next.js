export async function sendEmailClient({ name, email, message, reason }) {
  try {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, reason }),
    });

    const data = await res.json();
    return { success: data.success, data };
  } catch (err) {
    console.error("Error sending message:", err);
    return { success: false, error: err };
  }
}
