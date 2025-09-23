import React from "react";

const TermsPage = async () => {
  const termsObject = [
    {
      title: "Terms and Conditions",
      paragraphs: [
        "Last updated: September 2025",
        "Welcome to Triptuk. By booking or using our services, you agree to these Terms and Conditions. Please read them carefully before making a reservation.",
      ],
    },
    {
      title: "1. Use of Service",
      points: [
        "Triptuk provides tuk tuk trip bookings in Sri Lanka.",
        "You must be at least 18 years old to make a booking.",
        "You agree to provide accurate and complete information during booking.",
      ],
    },
    {
      title: "2. Bookings and Payments",
      points: [
        "All bookings must be made through our website.",
        "Payments are processed securely by Stripe and PayPal.",
        "We do not store your full payment details.",
        "A booking is only confirmed once payment has been successfully received.",
      ],
    },
    {
      title: "3. Cancellations and Refunds",
      points: [
        "You may cancel your booking and request a refund up to 48 hours before the scheduled reservation date.",
        "Refunds will be issued through the same payment method used for booking.",
        "Cancellations made less than 48 hours before the trip are not eligible for a refund.",
      ],
    },
    {
      title: "4. User Responsibilities",
      points: [
        "You are responsible for arriving on time at the agreed pickup location.",
        "You must behave respectfully towards drivers and comply with local laws.",
        "Triptuk reserves the right to refuse service in cases of misconduct or unsafe behavior.",
      ],
    },
    {
      title: "5. Service Limitations",
      points: [
        "Trips are subject to availability and weather conditions.",
        "We cannot guarantee uninterrupted or error-free service.",
        "Delays may occur due to traffic, weather, or unforeseen circumstances.",
      ],
    },
    {
      title: "6. Liability",
      points: [
        "Triptuk is not liable for personal injury, loss, or damage unless caused by proven negligence on our part.",
        "We are not responsible for delays or cancellations due to events beyond our control (e.g., natural disasters, strikes, accidents).",
        "You are responsible for your personal belongings during the trip.",
      ],
    },
    {
      title: "7. Changes to Bookings",
      points: [
        "Minor changes to pickup time or location may be accommodated if requested at least 24 hours in advance.",
        "Significant changes may require a cancellation and new booking.",
      ],
    },
    {
      title: "8. Governing Law",
      paragraphs: [
        "These Terms and Conditions are governed by the laws of Sri Lanka. Any disputes will be resolved under Sri Lankan jurisdiction.",
      ],
    },
    {
      title: "9. Updates to Terms",
      paragraphs: [
        "We may update these Terms and Conditions from time to time. The latest version will always be available on our website.",
      ],
    },
    {
      title: "10. Contact Us",
      paragraphs: [
        "If you have any questions about these Terms and Conditions, please contact us:",
        "Triptuk",
        "📧 Email: office@triptuk.com",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 px-3 max-w-3xl mx-auto">
      {termsObject.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">
            {section.title}
          </h2>
          {section.paragraphs &&
            section.paragraphs.map((para, i) => (
              <p key={i} className="mb-2 text-gray-700 leading-relaxed">
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

export default TermsPage;
