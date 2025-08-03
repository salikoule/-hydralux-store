import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientLayout from "@/components/layout/ClientLayout";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HydraLux - Clean Living, Elevated | Premium Water Filtration",
  description: "Discover HydraLux premium water filtration products for home and outdoor use. From faucet filters to portable bottles, experience clean, pure water with sophisticated design.",
  keywords: "water filter, water filtration, clean water, portable filter, shower filter, bidet, HydraLux",
  authors: [{ name: "HydraLux" }],
  openGraph: {
    title: "HydraLux - Clean Living, Elevated",
    description: "Premium water filtration solutions for home and outdoor use",
    url: "https://hydralux.com",
    siteName: "HydraLux",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HydraLux - Clean Living, Elevated",
    description: "Premium water filtration solutions for home and outdoor use",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ClientLayout />
        </CartProvider>
      </body>
    </html>
  );
}
