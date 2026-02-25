import type { Metadata } from "next";
import type { ReactNode } from "react";
import AppShell from "@/components/AppShell";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adventnurutech.xyz"),
  title: {
    default: "Advent NuruTech | Design. Develop. Deploy.",
    template: "%s | Advent NuruTech",
  },
  description:
    "Advent NuruTech builds secure, scalable AI and web platforms for businesses and communities.",
  keywords: [
    "Advent NuruTech",
    "AI solutions",
    "Web development",
    "Automation",
    "Cloud systems",
  ],
  openGraph: {
    title: "Advent NuruTech | Design. Develop. Deploy.",
    description:
      "Secure, scalable AI and web platforms built for performance and growth.",
    url: "https://adventnurutech.xyz",
    siteName: "Advent NuruTech",
    type: "website",
    images: [{ url: "/favicon.ico", width: 200, height: 200, alt: "Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advent NuruTech",
    description: "Secure, scalable AI and web platforms built for growth.",
    images: ["/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
