"use client";

import Link from "next/link";
import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-950 text-neutral-200 dark:border-neutral-700">
      <div className="mx-auto grid max-w-[1700px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div>
          <h3 className="text-2xl font-black text-white">NuruTech</h3>
          <p className="mt-3 text-sm text-neutral-400">
            Secure, scalable AI and web solutions for modern organizations.
          </p>
        </div>

        <div>
          
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
         
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/policy">Policies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Connect</h4>
          <p className="mt-3 text-sm text-neutral-400">Kisumu, Kenya</p>
          <p className="text-sm text-neutral-400">adventnurutech@gmail.com</p>
          <p className="text-sm text-neutral-400">+254 105 178 685</p>
          <div className="mt-4 flex gap-2">
            {[
              { href: "#", icon: FaFacebookF },
              { href: "#", icon: FaLinkedinIn },
              { href: "#", icon: FaInstagram },
              { href: "#", icon: FaYoutube },
              { href: "https://wa.me/254105178685", icon: FaWhatsapp },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-neutral-700 bg-neutral-900 p-2 text-neutral-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between gap-4 px-4 py-4 text-sm text-neutral-400 sm:px-6 lg:px-10">
          <p>© {year} Advent NuruTech. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-3 py-1.5 text-xs font-semibold text-neutral-200 transition hover:border-cyan-400"
          >
            Back to top <FaArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
