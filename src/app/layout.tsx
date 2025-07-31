import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome Plumbing | 24/7 Emergency Plumbing Services",
  description: "Professional plumbing services available 24/7. Expert technicians, upfront pricing, and 100% satisfaction guarantee. Emergency repairs, drain cleaning, water heaters, and more.",
  keywords: "plumbing, emergency plumber, drain cleaning, water heater, leak repair, 24/7 plumbing, licensed plumber",
  authors: [{ name: "Awesome Plumbing" }],
  openGraph: {
    title: "Awesome Plumbing | 24/7 Emergency Plumbing Services",
    description: "Professional plumbing services available 24/7. Expert technicians, upfront pricing, and 100% satisfaction guarantee.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awesome Plumbing | 24/7 Emergency Plumbing Services",
    description: "Professional plumbing services available 24/7. Expert technicians, upfront pricing, and 100% satisfaction guarantee.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
