import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amit-cafe.vercel.app"),
  title: {
    default: "Amit Cafe | A little cup of peace.",
    template: "%s | Amit Cafe",
  },
  description: "A little cup of peace. A Portland-inspired cafe concept for specialty coffee, desserts, and quiet luxury.",
  applicationName: "Amit Cafe",
  openGraph: {
    title: "Amit Cafe | A little cup of peace.",
    description: "A little cup of peace. A Portland-inspired cafe concept for specialty coffee, desserts, and quiet luxury.",
    url: "https://amit-cafe.vercel.app",
    siteName: "Amit Cafe",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/amit-cafe/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amit Cafe — A little cup of peace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Cafe | A little cup of peace.",
    description: "A little cup of peace. A Portland-inspired cafe concept for specialty coffee, desserts, and quiet luxury.",
    images: ["/images/amit-cafe/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
