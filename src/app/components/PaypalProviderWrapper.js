"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalProviderWrapper({ children }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AUMaX4YR48Uh343IyDv4VRaUsEWEtYaedSQwK8HOYTK5V4Sqa4L_rBN3m7pMPAf_S0y1cBBGKslflqlM",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
