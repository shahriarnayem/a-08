import "./globals.css";

export const metadata = {
  title: {
    default: "TileMuse — Curated Tile Gallery",
    template: "%s | TileMuse",
  },
  description:
    "Explore ceramic, marble, mosaic, and patterned tiles in a curated modern gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}