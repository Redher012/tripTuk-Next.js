import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-stone-50 via-white to-amber-50/40 px-4 py-24">
      <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl max-w-xl mx-auto border border-amber-100">
        <div className="flex flex-col items-center gap-5 text-center">
          <div>
            <h2 className="text-gray-900 font-bold text-5xl">Triptuk</h2>
          </div>

          <>
            <Image
              src="/paymentSuccessfulll.png"
              // "/unsuccessfulPaymentPng.png"
              alt="Payment successfull"
              width={300}
              height={100}
              className="py-4"
            />
            <h2 className="text-4xl font-bold text-gray-900">
              Payment Successful
            </h2>
            <p className="text-lg text-gray-600">
              Thank you for your purchase with Triptuk. Your trip is planned you
              can find more information in the email sent to you.
            </p>
          </>

          <Link
            className="w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-xl text-xl font-semibold transition-colors"
            href={"/"}
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
