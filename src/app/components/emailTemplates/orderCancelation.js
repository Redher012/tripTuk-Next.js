const orderCancelationTemplate = (email) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Cancellation - TripTuk</title>
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
            <h2 style="margin-top: 0; color: #111827;">Hi,</h2>
            <p style="font-size: 16px; line-height: 1.5; color: #374151;">
              ${
                email ? email : "Your"
              } TripTuk order has been <strong>successfully cancelled</strong>.
            </p>
            
            <!-- Refund Information -->
            <div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #92400e; font-size: 18px;">💰 Refund Information</h3>
              <p style="margin: 5px 0; color: #92400e; font-size: 16px; font-weight: bold;">
                Your refund will be processed within <strong>10 business days</strong>.
              </p>
              <p style="margin: 5px 0; color: #92400e; font-size: 14px;">
                Please note that depending on your bank or card provider, it may take an additional 2–5 business days for the refund to appear in your account.
              </p>
            </div>

            <p style="font-size: 16px; line-height: 1.5; color: #374151;">
              If you have any questions about your cancellation or refund, please don't hesitate to contact our customer support team.
            </p>
            
            <p style="font-size: 16px; line-height: 1.5; color: #374151;">
              We hope to serve you again in the future,<br>The TripTuk Team
            </p>

            <p style="text-align: center; margin: 30px 0;">
              <a href="https://triptuk.com/contact" style="background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px;">
                Contact Support
              </a>
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

export default orderCancelationTemplate;
