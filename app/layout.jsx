import "./globals.css";

import { Toaster } from "sonner";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: {
    default: "TileMuse",
    template: "%s | TileMuse",
  },

  description:
    "Discover ceramic, marble, mosaic and decorative tile inspiration.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Footer />

        <Toaster
          position="top-right"
          richColors
          closeButton
        />

      </body>
    </html>
  );
}