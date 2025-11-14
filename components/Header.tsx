"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/services", label: "Services", icon: "🚀" },
    { href: "/updates", label: "Updates", icon: "📢" },
    { href: "/contact", label: "Contact", icon: "📞" },
    { href: "/faq", label: "FAQ", icon: "❓" },
    { href: "/booking", label: "Booking", icon: "📅" }

  ];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white dark:bg-neutral-900 shadow-lg border-b border-gray-200 dark:border-neutral-700"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group relative"
            onClick={() => setActiveLink("/")}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/assets/NuruTech Logo_ Radiant Innovation.png"
                alt="NuruTech Logo"
                fill
                className="rounded-2xl object-contain group-hover:scale-110 transition-all duration-300 group-hover:rotate-3"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                NuruTech
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">
                Digital Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                  activeLink === item.href
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-neutral-800/50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm opacity-70">{item.icon}</span>
                  {item.label}
                </span>

                {activeLink === item.href && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Get Started</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "mb-1.5"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 transition-transform duration-500 ease-out z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-red-500 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col space-y-2 px-6 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveLink(item.href);
              }}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 group ${
                activeLink === item.href
                  ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-neutral-800"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 mt-6"
          >
            <span>🎯</span>
            <span>Start Your Project</span>
          </Link>
        </nav>

        {/* Mobile Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-neutral-700">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
              Ready to transform your digital presence?
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
             Let&apos;s build something amazing together! 🚀
</p>
          </div>
        </div>
      </div>
    </header>
  );
}
