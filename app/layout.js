import { Footer } from "../components/shared/footer";
import { Navbar } from "../components/shared/navbar";
import "./globals.css";

export const metadata = {
  title: {
    default: "TileMuse — Curated Tile Gallery",
    template: "%s | TileMuse",
  },
  description:
    "Explore ceramic, marble, mosaic, porcelain, and patterned tiles in a curated modern gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}