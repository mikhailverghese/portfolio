import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Space_Grotesk, Syne } from "next/font/google";

import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mikhail Verghese — Building the things I wish existed",
  description:
    "Analytics engineer and product-minded builder. Case studies in software, data, and interaction design.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full scroll-smooth`}
    >
      <body id="top" className="min-h-full bg-void text-bone antialiased">
        {/* global film grain */}
        <div
          aria-hidden
          className="noise-overlay pointer-events-none fixed inset-0 z-[90] opacity-60"
        />
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
