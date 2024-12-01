import React from "react";
import type { Metadata } from "next";
import "./globals.css";

// eslint-disable-next-line camelcase
import { Host_Grotesk } from "next/font/google";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-host-grotesk",
  preload: false,
});

export const metadata: Metadata = {
  title: "Vanni Looks",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
