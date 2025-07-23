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
    <td style="padding: 8px 0; color: #27ae60; font-weight: bold;">✓ PAID</td>
  </tr>`;

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - TripTuk</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f7f7f7;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
        <tr>
          <td style="background-color: #3f9142; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">TripTuk</h1>
          </td>
        </tr>
        <tr>
          <td style="background-color: #ffffff; padding: 30px;">
            <h2 style="margin-top: 0; color: #333333;">Hi ${
              orderData.names
            },</h2>
            <p style="font-size: 16px; line-height: 1.5; color: #333333;">
              Great news! Your TripTuk order has been <strong>created successfully</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.5; color: #333333;">
              Here are the details of your booking:
            </p>
            
            <!-- Order Summary Box -->
            <div style="background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #3f9142; font-size: 18px;">Order Summary</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold; width: 40%;">Order ID:</td>
                  <td style="padding: 8px 0; color: #333;">${orderData._id}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">Trip Duration:</td>
                  <td style="padding: 8px 0; color: #333;">${
                    orderData.tripDuration
                  } day(s)</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">Start Date:</td>
                  <td style="padding: 8px 0; color: #333;">${formatDate(
                    orderData.startDate
                  )}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">End Date:</td>
                  <td style="padding: 8px 0; color: #333;">${formatDate(
                    orderData.endDate
                  )}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">Passengers:</td>
                  <td style="padding: 8px 0; color: #333;">${
                    orderData.numberPassenger
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">TukTuks Needed:</td>
                  <td style="padding: 8px 0; color: #333;">${
                    orderData.tukTuksNeeded
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-weight: bold;">Payment Method:</td>
                  <td style="padding: 8px 0; color: #333;">${
                    orderData.paymentMethod
                  }</td>
                </tr>
                <tr style="border-top: 2px solid #3f9142;">
                  <td style="padding: 12px 0; color: #3f9142; font-weight: bold; font-size: 18px;">Total Price:</td>
                  <td style="padding: 12px 0; color: #3f9142; font-weight: bold; font-size: 18px;">$${
                    orderData.priceTotalTrip
                  }</td>
                </tr>
              <p style="text-align: center; margin: 30px 0;">
                <a href="${verifyUrl}" style="background-color: #57ae5b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; font-size: 16px;">
                  See Trip Status
                </a>
              </p>
              </table>
            </div>

            <!-- Delivery Details -->
            <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #3f9142; font-size: 18px;">Delivery Details</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Address:</strong> ${
                orderData.address
              }</p>
              <p style="margin: 5px 0; color: #333;"><strong>Town:</strong> ${
                orderData.town
              }</p>
              <p style="margin: 5px 0; color: #333;"><strong>Country:</strong> ${
                orderData.selectedCountry
              }</p>
              <p style="margin: 5px 0; color: #333;"><strong>Post Code:</strong> ${
                orderData.postCode
              }</p>
              <p style="margin: 5px 0; color: #333;"><strong>Phone:</strong> ${
                orderData.phone
              }</p>
            </div>

            <p style="font-size: 16px; line-height: 1.5; color: #333333;">
              We'll be in touch soon with more details about your TripTuk adventure. If you have any questions, feel free to contact us.
            </p>
            
            <p style="font-size: 16px; line-height: 1.5; color: #333333;">
              Safe travels,<br>The TripTuk Team
            </p>
          </td>
        </tr>
        <tr>
          <td style="background-color: #f7f7f7; padding: 20px; text-align: center; color: #888888; font-size: 12px;">
            <p>&copy; 2025 TripTuk. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

export default orderConfirmationEmailTemplate;
