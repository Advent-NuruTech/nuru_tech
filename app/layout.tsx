import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NuruTech Solutions",
  description: "Empowering businesses with smart technology.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        <Header />
        <main className="flex-grow px-4 sm:px-6 md:px-8 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
