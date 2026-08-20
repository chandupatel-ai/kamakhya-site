import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Kamakhya Interior Designs | Premium Interiors in Hyderabad & Telangana",
  description:
    "Kamakhya Interior Designs offers modular kitchens, TV units, wardrobes, false ceilings, and complete 2D/3D interior design services in Hyderabad and across Telangana. 50+ projects delivered in 2+ years.",
  keywords: [
    "interior designer Hyderabad",
    "interior designer Telangana",
    "modular kitchen Hyderabad",
    "false ceiling POP Gypsum PVC",
    "bedroom wardrobes",
    "Kamakhya Interior Designs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
