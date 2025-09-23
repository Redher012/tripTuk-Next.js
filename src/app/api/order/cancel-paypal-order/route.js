const PAYPAL_CLIENT = process.env.NEXT_PUBLIC_PAY_PAL_CLIENTID_SANDBOX;
const PAYPAL_SECRET = process.env.PAY_PAL_SECRET_SANDBOX;

async function getPayPalAccessToken() {
  const credentials = Buffer.from(`${PAYPAL_CLIENT}:${PAYPAL_SECRET}`).toString(
    "base64"
  );

  const res = await fetch("https://api-m.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  return data.access_token;
}

async function refundCapture(captureId, token) {
  const res = await fetch(
    `https://api-m.paypal.com/v2/payments/captures/${captureId}/refund`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );

  const data = await res.json();
  return { status: res.status, data };
}

export async function POST(req) {
  try {
    await connectDB();
    const { orderId } = await req.json();

    const order = await Order.findById(orderId);
    if (!order || !order.paypalCaptureId) {
      return NextResponse.json(
        { error: "Order or PayPal capture ID not found" },
        { status: 404 }
      );
    }

    const accessToken = await getPayPalAccessToken();
    const { status, data } = await refundCapture(
      order.paypalCaptureId,
      accessToken
    );

    if (status === 201) {
      order.paid = false;
      order.paypalPaymentStatus = "REFUNDED";
      await order.save();
      return NextResponse.json({ success: true, refund: data });
    } else {
      return NextResponse.json(
        { error: "Refund failed", details: data },
        { status }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
