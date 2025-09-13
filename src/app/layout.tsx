import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UberRide - Your Ride, Your Way",
  description: "Get a ride in minutes with UberRide. Safe, reliable, and affordable transportation in your city. Book now and travel with confidence.",
  keywords: "ride sharing, taxi, transportation, uber, ride booking, car service",
  authors: [{ name: "UberRide Team" }],
  openGraph: {
    title: "UberRide - Your Ride, Your Way",
    description: "Get a ride in minutes with UberRide. Safe, reliable, and affordable transportation in your city.",
    type: "website",
    siteName: "UberRide",
  },
  twitter: {
    card: "summary_large_image",
    title: "UberRide - Your Ride, Your Way",
    description: "Get a ride in minutes with UberRide. Safe, reliable, and affordable transportation in your city.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}