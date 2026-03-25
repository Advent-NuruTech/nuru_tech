"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaRocket,
  FaFolderOpen,
  FaBullhorn,
  FaStar,
  FaGift,
  FaCalendarAlt,
  FaPhone,
} from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home", icon: <FaHome className="h-4 w-4" /> },
  { href: "/services", label: "Services", icon: <FaRocket className="h-4 w-4" /> },
  

  { href: "/donate", label: "Donate", icon: <FaGift className="h-4 w-4" /> },
  { href: "/booking", label: "Booking", icon: <FaCalendarAlt className="h-4 w-4" /> },
  { href: "/contact", label: "Contact", icon: <FaPhone className="h-4 w-4" /> },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open
          ? "border-b border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-950"
          : "bg-white dark:bg-neutral-950"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
            <Image
              src="/assets/NuruTech Logo_ Radiant Innovation.png"
              alt="NuruTech Logo"
              fill
              className="object-contain transition group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-xl font-black text-neutral-900 dark:text-white">NuruTech</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Digital Innovation</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-cyan-600 text-white"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="cta-border-light rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="xl:hidden rounded-xl border border-neutral-300 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-900"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-neutral-700 transition dark:bg-neutral-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`mt-1.5 block h-0.5 w-6 bg-neutral-700 transition dark:bg-neutral-200 ${open ? "opacity-0" : ""}`} />
          <span className={`mt-1.5 block h-0.5 w-6 bg-neutral-700 transition dark:bg-neutral-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`xl:hidden fixed inset-0 z-50 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-slate-100 dark:bg-neutral-950" />
        <div className="animate-grid-pulse absolute inset-0 bg-[linear-gradient(to_right,#0f172a12_1px,transparent_1px),linear-gradient(to_bottom,#0f172a12_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff0e_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0e_1px,transparent_1px)]" />

        <div className="relative mx-auto flex h-full max-w-[1700px] flex-col px-6 py-6">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900">
                <Image
                  src="/assets/NuruTech Logo_ Radiant Innovation.png"
                  alt="NuruTech Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-neutral-900 dark:text-white">NuruTech</p>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
            >
              Close
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-4 text-base font-semibold transition ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-neutral-700 hover:bg-slate-50 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                }`}
              >
                <span className="rounded-lg bg-white/20 p-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-neutral-300 pt-6 dark:border-neutral-700">
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Build with world-class architecture
              </p>
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className="cta-border-light block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
