import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RG Plumbing Heating & Renewables | Professional Services",
  description: "Professional plumbing, heating, and renewable energy services. Expert technicians, upfront pricing, and 100% satisfaction guarantee. Emergency repairs, boiler installation, heat pumps, and more.",
  keywords: "plumbing, heating, renewables, emergency plumber, boiler installation, heat pump, drain cleaning, water heater, leak repair, 24/7 plumbing, licensed plumber, renewable energy",
  authors: [{ name: "RG Plumbing Heating & Renewables" }],
  openGraph: {
    title: "RG Plumbing Heating & Renewables | Professional Services",
    description: "Professional plumbing, heating, and renewable energy services. Expert technicians, upfront pricing, and 100% satisfaction guarantee.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RG Plumbing Heating & Renewables | Professional Services",
    description: "Professional plumbing, heating, and renewable energy services. Expert technicians, upfront pricing, and 100% satisfaction guarantee.",
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
