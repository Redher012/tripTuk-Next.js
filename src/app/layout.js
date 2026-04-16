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
        <script
          defer
          src="https://analytics.staydetails.com/script.js"
          data-website-id="97340bdc-fb4f-4e06-8910-3c27c47981c8"
        ></script>
        <div className="overflow-x-hidden min-h-screen flex flex-col">
          <PayPalProviderWrapper>
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </PayPalProviderWrapper>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
