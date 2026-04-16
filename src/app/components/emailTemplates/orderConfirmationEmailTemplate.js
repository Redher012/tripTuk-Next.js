const orderConfirmationEmailTemplate = (orderData) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const verifyUrl = `${
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
      ? process.env.NEXT_PUBLIC_URL_DEV
      : process.env.NEXT_PUBLIC_URL_PROD
  }/my-orders/auth/order-info/${orderData._id}`;

  const paymentStatusRow = `
  <tr>
    <td style="padding: 8px 0; color: #666; font-weight: bold;">Payment Status:</td>
    <td style="padding: 8px 0; color: #b45309; font-weight: bold;">✓ PAID</td>
  </tr>`;

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - TripTuk</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #fafaf9;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
        <tr>
          <td style="background-color: #b45309; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">TripTuk</h1>
          </td>
        </tr>
        <tr>
          <td style="background-color: #ffffff; padding: 30px;">
            <h2 style="margin-top: 0; color: #111827;">Hi ${
              orderData.names
            },</h2>
            <p style="font-size: 16px; line-height: 1.5; color: #374151;">
              Great news! Your TripTuk order has been <strong>created successfully</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.5; color: #374151;">
              Here are the details of your booking:
            </p>
            
            <!-- Order Summary Box -->
            <div style="background-color: #ffffff; border: 1px solid #fef3c7; border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #b45309; font-size: 18px;">Order Summary</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 40%;">Order ID:</td>
                  <td style="padding: 8px 0; color: #111827;">${orderData._id}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Trip Duration:</td>
                  <td style="padding: 8px 0; color: #111827;">${
                    orderData.tripDuration
                  } day(s)</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Start Date:</td>
                  <td style="padding: 8px 0; color: #111827;">${formatDate(
                    orderData.startDate
                  )}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">End Date:</td>
                  <td style="padding: 8px 0; color: #111827;">${formatDate(
                    orderData.endDate
                  )}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Passengers:</td>
                  <td style="padding: 8px 0; color: #111827;">${
                    orderData.numberPassenger
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">TukTuks Needed:</td>
                  <td style="padding: 8px 0; color: #111827;">${
                    orderData.tukTuksNeeded
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Payment Method:</td>
                  <td style="padding: 8px 0; color: #111827;">${
                    orderData.paymentMethod
                  }</td>
                </tr>
                <tr style="border-top: 2px solid #b45309;">
                  <td style="padding: 12px 0; color: #b45309; font-weight: bold; font-size: 18px;">Total Price:</td>
                  <td style="padding: 12px 0; color: #b45309; font-weight: bold; font-size: 18px;">$${
                    orderData.priceTotalTrip
                  }</td>
                </tr>
              <p style="text-align: center; margin: 30px 0;">
                <a href="${verifyUrl}" style="background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px;">
                  See Trip Status
                </a>
              </p>
              </table>
            </div>

            <!-- Delivery Details -->
            <div style="background-color: #ffffff; border: 1px solid #fef3c7; border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #b45309; font-size: 18px;">Delivery Details</h3>
              <p style="margin: 5px 0; color: #374151;"><strong>Address:</strong> ${
                orderData.address
              }</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Town:</strong> ${
                orderData.town
              }</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Country:</strong> ${
                orderData.selectedCountry
              }</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Post Code:</strong> ${
                orderData.postCode
              }</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> ${
                orderData.phone
              }</p>
            </div>

            <p style="font-size: 16px; line-height: 1.5; color: #374151;">
              We'll be in touch soon with more details about your TripTuk adventure. If you have any questions, feel free to contact us.
            </p>
            
            <p style="font-size: 16px; line-height: 1.5; color: #374151;">
              Safe travels,<br>The TripTuk Team
            </p>
          </td>
        </tr>
        <tr>
          <td style="background-color: #fafaf9; padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
            <p>&copy; 2025 TripTuk. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

export default orderConfirmationEmailTemplate;
