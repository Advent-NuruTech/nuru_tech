"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <main className="mx-auto min-h-screen w-full max-w-[1700px] px-4 py-4 sm:px-6 lg:px-10">
        {children}
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto min-h-[calc(100vh-160px)] max-w-[1700px] px-4 pb-8 pt-20 sm:px-6 sm:pt-[5.5rem] lg:px-10 lg:pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
}
