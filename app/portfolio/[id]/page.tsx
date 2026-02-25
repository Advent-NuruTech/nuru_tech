"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { PortfolioItem } from "@/lib/types/cms";

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

export default function PortfolioDetailPage() {
  const params = useParams<{ id: string }>();
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!params?.id) return;
      const snapshot = await getDoc(doc(db, "portfolio", params.id));
      if (snapshot.exists()) {
        setItem({
          id: snapshot.id,
          ...(snapshot.data() as Omit<PortfolioItem, "id">),
        });
      }
      setLoading(false);
    };
    load();
  }, [params?.id]);

  if (loading) {
    return <p className="p-10 text-center">Loading case study...</p>;
  }

  if (!item) {
    return (
      <div className="p-10 text-center">
        <p>Project not found.</p>
        <Link href="/portfolio" className="text-blue-600 underline">
          Back to portfolio
        </Link>
      </div>
    );
  }

  const liveHref =
    normalizeExternalUrl(item.liveUrl) ||
    (looksLikeDomain(item.id) ? normalizeExternalUrl(item.id) : null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-12 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto max-w-5xl">
        <Link
          href="/portfolio"
          className="text-sm font-semibold text-blue-600 dark:text-blue-300"
        >
          {"<-"} Back to portfolio
        </Link>
        <div className="mt-4 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
          <div className="relative h-72 w-full bg-neutral-100 dark:bg-neutral-800 md:h-[420px]">
            <Image
              src={item.imageUrl || "/favicon.ico"}
              alt={item.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="space-y-5 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h1 className="text-4xl font-black text-neutral-900 dark:text-white">
                {item.name}
              </h1>
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
                {item.status === "Live" ? "LIVE" : item.status}
              </span>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300">{item.shortDescription}</p>
            <div className="prose max-w-none dark:prose-invert">
              <p>{item.fullDescription || item.shortDescription}</p>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              <strong>Category:</strong> {item.category}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              <strong>Tech:</strong> {(item.tech || []).join(", ")}
            </p>
            {!!item.gallery?.length && (
              <div>
                <p className="mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Screenshots
                </p>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {item.gallery.map((url) => (
                    <div
                      key={url}
                      className="relative h-40 w-72 shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800"
                    >
                      <Image
                        src={url}
                        alt={`${item.name} screenshot`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {item.testimonial && (
              <blockquote className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                &ldquo;{item.testimonial}&rdquo;
              </blockquote>
            )}

            <div className="flex flex-wrap gap-3">
              {liveHref && (
                <>
                  <a
                    href={liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Visit Live Site
                  </a>
                  <span className="rounded-xl border border-red-300 px-4 py-2 text-xs font-semibold text-red-700 dark:border-red-800 dark:text-red-300">
                    {getIndependentDomain(liveHref)}
                  </span>
                </>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 dark:border-neutral-600 dark:text-neutral-200"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
