"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaCode,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import type { HeroSettings } from "@/lib/types/cms";

const icons = [
  FaCode,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
  FaChartLine,
];

const positions = [
  { left: "6%", top: "14%" },
  { left: "14%", top: "70%" },
  { left: "28%", top: "22%" },
  { left: "40%", top: "78%" },
  { left: "58%", top: "16%" },
  { left: "74%", top: "72%" },
  { left: "84%", top: "32%" },
  { left: "92%", top: "64%" },
];

const flowSet = [...icons, ...icons];

export default function HeroSection({ hero }: { hero: HeroSettings }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const displayVideo = Boolean(hero.videoUrl) && !videoFailed;

  const bubbles = useMemo(
    () =>
      icons.map((Icon, index) => ({
        Icon,
        position: positions[index],
        delay: `${index * 0.25}s`,
      })),
    []
  );

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden rounded-[1rem] border border-neutral-200 bg-neutral-950 dark:border-neutral-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0e7490,_#111827_80%)] animate-gradient-shift" />

      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map(({ Icon, position, delay }, index) => (
          <div
            key={index}
            className="animate-float absolute text-cyan-100/20"
            style={{ ...position, animationDelay: delay }}
          >
            <div className="rounded-full border border-cyan-200/20 bg-cyan-500/10 p-3 backdrop-blur">
              <Icon className="h-6 w-6 md:h-8 md:w-8" />
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-20 z-[2]">
        <div className="marquee-container relative flex overflow-x-hidden">
          <div className="marquee-content flex min-w-full shrink-0 animate-marquee items-center gap-7 px-4">
            {flowSet.map((Icon, index) => (
              <span
                key={`flow-top-${index}`}
                className="rounded-full border border-cyan-200/20 bg-cyan-500/10 p-2.5 text-cyan-100/45"
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee-content flex min-w-full shrink-0 animate-marquee items-center gap-7 px-4"
          >
            {flowSet.map((Icon, index) => (
              <span
                key={`flow-top-dup-${index}`}
                className="rounded-full border border-cyan-200/20 bg-cyan-500/10 p-2.5 text-cyan-100/45"
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-20 left-0 right-0 z-[2]">
        <div className="marquee-container relative flex overflow-x-hidden">
          <div className="marquee-content flex min-w-full shrink-0 animate-marquee-reverse items-center gap-7 px-4">
            {flowSet.map((Icon, index) => (
              <span
                key={`flow-bottom-${index}`}
                className="rounded-full border border-blue-200/20 bg-blue-500/10 p-2 text-blue-100/45"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee-content flex min-w-full shrink-0 animate-marquee-reverse items-center gap-7 px-4"
          >
            {flowSet.map((Icon, index) => (
              <span
                key={`flow-bottom-dup-${index}`}
                className="rounded-full border border-blue-200/20 bg-blue-500/10 p-2 text-blue-100/45"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {displayVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-contain opacity-45 animate-ken-burns"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoFailed(true)}
        >
          <source src={hero.videoUrl} />
        </video>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#0e7490,_#111827_70%)] animate-gradient-rotate" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:44px_44px] animate-grid-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="animate-particle absolute h-1 w-1 rounded-full bg-white/30"
            style={{
              left: `${(index * 11) % 100}%`,
              top: `${(index * 13) % 100}%`,
              animationDelay: `${index * 0.28}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 animate-pulse-glow">
          Enterprise Technology Partner
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.1] text-white sm:text-6xl md:text-7xl">
          {hero.headline}
        </h1>
        <p className="mt-5 max-w-3xl text-base text-neutral-300 sm:text-lg md:text-xl">
          {hero.subtext}
        </p>

        <div className="mt-8 w-full max-w-3xl space-y-3">
          <Link
            href={hero.primaryCtaHref || "/services"}
            className="cta-border-light block w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-4 text-center text-base font-semibold text-neutral-950 transition hover:scale-[1.02]"
          >
            {hero.primaryCtaLabel || "Explore Services"}
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href={hero.secondaryCtaHref || "/booking"}
              className="cta-border-light rounded-xl border border-white/30 bg-white/5 px-4 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:scale-[1.02]"
              style={{ animationDelay: "0.45s" }}
            >
              {hero.secondaryCtaLabel || "Book Consultation"}
            </Link>
            <Link
              href="/contact"
              className="cta-border-light rounded-xl border border-white/25 bg-transparent px-4 py-4 text-center text-sm font-semibold text-white transition hover:scale-[1.02]"
              style={{ animationDelay: "0.9s" }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white/30">
              <div className="animate-scroll-indicator mt-1 h-2 w-1 rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
