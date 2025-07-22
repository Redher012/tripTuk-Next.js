import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PayPalProviderWrapper from "./components/PaypalProviderWrapper";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "TripTuk | Rent Tuk-tuk",
  description: "Rent a tuk tuk with driver",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon1.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "icon",
        url: "/icon0.svg",
        type: "image/svg+xml",
      },
      {
        rel: "icon",
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-screen">
      <head>
        <meta name="grammarly" content="false" />
      </head>
      <body className="overflow-x-hidden min-h-screen">
        <div className="overflow-hidden min-h-screen">
          <PayPalProviderWrapper>
            <Navigation />
            {children}
            <Footer />
          </PayPalProviderWrapper>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
