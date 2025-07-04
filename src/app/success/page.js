import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-primary-100  to-primary-500 px-3 py-36">
      <div className="bg-neutral-50 p-12 rounded-4xl shadow-xl max-w-lg  mx-auto">
        <div className="flex flex-col items-center gap-5 text-center">
          <div>
            <h2 className="text-primary-900 font-bold text-5xl">Triptuk</h2>
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
            <h2 className="text-4xl font-semibold">Payment Successful</h2>
            <p className="text-lg">
              Thank you for your purchase with Triptuk. Your trip is planned you
              can find more information in the email sent to you.
            </p>
          </>

          <Link
            className="bg-primary-700 hover:bg-purple-900 text-neutral-050 py-2 px-4 rounded-full text-2xl cursor-pointer w-full text-center"
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
