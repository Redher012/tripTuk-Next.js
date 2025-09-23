import React from "react";

const page = async () => {
  const privacyObject = [
    {
      title: "Privacy Policy",
      paragraphs: [
        "Last updated: September 2025",
        "Triptuk (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our services to book tuk tuk trips in Sri Lanka.",
        "By using our website and services, you agree to the terms of this Privacy Policy.",
      ],
    },
    {
      title: "1. Information We Collect",
      paragraphs: [
        "We may collect the following types of personal information:",
      ],
      points: [
        "Personal details: name, email, phone number, pickup location.",
        "Booking details: trip date, time, and destination.",
        "Payment details: payments are processed securely by Stripe and PayPal. We do not store your full card or banking information.",
        "Usage data: we use Umami analytics to understand basic website usage. We do not use cookies or tracking for advertising.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      paragraphs: ["We use your information to:"],
      points: [
        "Process and confirm bookings and payments.",
        "Communicate with you regarding trips (confirmations, updates, support).",
        "Improve our services and fix technical issues.",
        "Comply with legal and tax obligations (fraud prevention, record-keeping).",
      ],
    },
    {
      title: "3. How We Store and Protect Data",
      points: [
        "Your information is stored securely on our Ubuntu server with SSL encryption and restricted access (SSH key login only).",
        "Payment information is handled exclusively by Stripe and PayPal using their security standards.",
        "We take reasonable technical and organizational measures to protect your data from unauthorized access, loss, or misuse.",
      ],
    },
    {
      title: "4. Sharing of Data",
      paragraphs: [
        "We may share your information only in the following cases:",
      ],
      points: [
        "With Stripe and PayPal to process payments.",
        "With drivers/partners only for details necessary to complete your ride (e.g., your name and pickup location).",
        "With legal authorities, if required by law.",
        "We do not sell, rent, or trade your personal information with third parties.",
      ],
    },
    {
      title: "5. Cookies and Tracking",
      points: [
        "We do not use cookies or third-party advertising trackers.",
        "We use Umami analytics for basic, privacy-friendly website statistics. This does not identify you personally.",
      ],
    },
    {
      title: "6. Your Rights",
      paragraphs: [
        "Depending on your location (including under GDPR for EU users), you have the right to:",
      ],
      points: [
        "Request access to your personal data.",
        "Request correction or deletion of your data.",
        "Withdraw consent or object to certain uses of your data.",
        "Request a copy of your data in a portable format.",
        "To exercise these rights, please contact us at office@triptuk.com.",
      ],
    },
    {
      title: "7. International Users",
      paragraphs: [
        "If you are booking from outside Sri Lanka, please note that your information may be transferred to and stored in Sri Lanka and with our partners such as Stripe and PayPal. We ensure that your data is protected in line with this Privacy Policy.",
      ],
    },
    {
      title: "8. Data Retention",
      paragraphs: [
        "We keep booking information for 1 year to provide support and comply with tax/legal requirements. After this period, your personal data is deleted or anonymized.",
      ],
    },
    {
      title: "9. Updates to this Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The latest version will always be available on our website, and the “Last updated” date will reflect the changes.",
      ],
    },
    {
      title: "10. Contact Us",
      paragraphs: [
        "If you have any questions about this Privacy Policy or your personal data, please contact us:",
        "Triptuk",
        "📧 Email: office@triptuk.com",
      ],
    },
  ];
  return (
    <div className="min-h-screen pt-20 px-3 max-w-3xl mx-auto">
      {privacyObject.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-neutral-900">
            {section.title}
          </h2>
          {section.paragraphs &&
            section.paragraphs.map((para, i) => (
              <p key={i} className="mb-2 text-neutral-800 leading-relaxed">
                {para}
              </p>
            ))}
          {section.points && (
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default page;
