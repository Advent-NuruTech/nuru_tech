import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⚡ STRONG SEO METADATA FOR ADVENT NURUTECH
export const metadata = {
  title: "Advent Nurutech – Design. Develop. Deploy | Ethical AI, Web & Automation Solutions",
  description:
    "Advent Nurutech empowers businesses, ministries, and communities with ethical technology — including AI chatbots, web & mobile development, automation, cloud tools, digital literacy, church systems, and more.",
  keywords: [
    "Advent Nurutech",
    "Nurutech Kenya",
    "AI Kenya",
    "Web Development Kenya",
    "Automation solutions",
    "Chatbot development",
    "Next.js developer Kenya",
    "Tech for ministries",
    "SDA digital tools",
    "E-commerce Kenya",
      "virtual assistant kenya",
  ],
  authors: [{ name: "Advent Nurutech" }],
  creator: "Advent Nurutech",
  publisher: "Advent Nurutech",

  // Favicon / Logo
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // OpenGraph for social media
  openGraph: {
    title: "Advent Nurutech – Design. Develop. Deploy",
    description:
      "Transforming businesses and ministries through ethical, modern, and intelligent technology solutions.",
    url: "https://adventnurutech.xyz",
    siteName: "Advent NuruTech",
    images: [
      {
        url: "/favicon.ico", // your official logo
        width: 200,
        height: 200,
        alt: "Advent NuruTech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Advent NuruTech – Design. Develop. Deploy",
    description:
      "Transforming businesses and ministries through ethical, modern, and intelligent technology solutions.",
    images: ["/favicon.ico"],
    creator: "@AdventNuruTech",
  },

  // SEO for mobile & canonical
  metadataBase: new URL("https://adventnurutech.xyz"),
};

// LAYOUT
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        <Header />

        <main className="flex-grow px-4 sm:px-6 md:px-8 py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
