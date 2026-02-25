"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { PortfolioItem } from "@/lib/types/cms";

const filters = [
  "All",
  "AI",
  "Web Apps",
  "E-commerce",
  "Automation",
  "Church Systems",
];

function getIndependentDomain(url?: string): string {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function looksLikeDomain(value: string): boolean {
  return /^[a-z0-9-]+(\.[a-z0-9-]+)+([/?#].*)?$/i.test(value.trim());
}

function normalizeExternalUrl(value?: string): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    return new URL(trimmed).toString();
  } catch {
    return looksLikeDomain(trimmed) ? `https://${trimmed}` : null;
  }
}

function getPortfolioLinks(item: PortfolioItem): {
  caseStudyHref: string | null;
  liveHref: string | null;
} {
  const liveHref = normalizeExternalUrl(item.liveUrl);
  if (liveHref) {
    return { caseStudyHref: `/portfolio/${item.id}`, liveHref };
  }

  const idAsDomain = looksLikeDomain(item.id)
    ? normalizeExternalUrl(item.id)
    : null;

  if (idAsDomain) {
    return { caseStudyHref: null, liveHref: idAsDomain };
  }

  return { caseStudyHref: `/portfolio/${item.id}`, liveHref: null };
}

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "portfolio"), (snapshot) => {
      setItems(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<PortfolioItem, "id">),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesFilter =
        activeFilter === "All" ||
        item.category === activeFilter ||
        item.tags?.includes(activeFilter);
      const matchesSearch = [item.name, item.category, item.shortDescription, (item.tech || []).join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [items, activeFilter, search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-12 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-black text-neutral-900 dark:text-white">Portfolio</h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            SaaS-grade case studies showcasing real delivery outcomes.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  activeFilter === filter
                    ? "bg-cyan-600 text-white"
                    : "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 md:w-72 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
          />
        </div>

        <div className="flex snap-x gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {filtered.map((item) => (
            (() => {
              const links = getPortfolioLinks(item);
              return (
                <article
                  key={item.id}
                  className="w-[88vw] max-w-sm shrink-0 snap-start overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:w-auto md:max-w-none md:shrink dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <div className="relative h-56 w-full bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={item.imageUrl || "/favicon.ico"}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                        {item.name}
                      </h2>
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
                        LIVE
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.shortDescription}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.category}</p>
                    {links.liveHref && (
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {getIndependentDomain(links.liveHref)}
                      </p>
                    )}
                    <p className="text-xs text-neutral-600 dark:text-neutral-300">
                      Tech: {(item.tech || []).join(", ")}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {(item.tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 px-2 py-1 dark:bg-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {links.caseStudyHref && (
                        <Link
                          href={links.caseStudyHref}
                          className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
                        >
                          View Case Study
                        </Link>
                      )}
                      {links.liveHref && (
                        <a
                          href={links.liveHref}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-red-700 hover:underline dark:text-red-300"
                        >
                          Visit Live
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })()
          ))}
        </div>
      </div>
    </div>
  );
}
