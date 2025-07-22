"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalProviderWrapper({ children }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAY_PAL_CLIENTID,
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
