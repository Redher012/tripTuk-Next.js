export const verificationEmailTemplate = (name, verifyUrl) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Log in to TripTuk</title>
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
            <h2 style="margin-top: 0; color: #333333;">Hi ${name},</h2>
            <p style="font-size: 16px; line-height: 1.5; color: #333333;">
              You're just one click away from hitting the road.
            </p>
            <p style="font-size: 16px; line-height: 1.5; color: #333333;">
              Click the button below to log in to your <strong>TripTuk</strong> account and view your bookings:
            </p>
            <p style="text-align: center; margin: 30px 0;">
              <a href="${verifyUrl}" style="background-color: #57ae5b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; font-size: 16px;">
                View My Trips
              </a>
            </p>
            <p style="font-size: 16px; line-height: 1.5; color: #333333;">
              If you didn’t request this email, feel free to ignore it. This login link will expire shortly for your security.
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
