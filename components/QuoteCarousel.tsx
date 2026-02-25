"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Testimonial } from "@/lib/types/cms";

const fallbackQuotes: Testimonial[] = [
  {
    id: "fallback-1",
    name: "Advent NuruTech",
    service: "Digital Strategy",
    comment: "We deliver end-to-end digital solutions with measurable impact.",
    rating: 5,
    approved: true,
  },
  {
    id: "fallback-2",
    name: "Client Team",
    service: "Web Platform",
    comment: "Responsive systems that scale cleanly across desktop and mobile.",
    rating: 5,
    approved: true,
  },
  {
    id: "fallback-3",
    name: "Operations Lead",
    service: "Automation",
    comment: "Their team reduced manual workload and improved delivery speed.",
    rating: 5,
    approved: true,
  },
];

function StarRow({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function QuoteCarousel() {
  const [items, setItems] = useState<Testimonial[]>(fallbackQuotes);

  useEffect(() => {
    const testimonialsQuery = query(
      collection(db, "testimonials"),
      where("approved", "==", true)
    );

    const unsubscribe = onSnapshot(
      testimonialsQuery,
      (snapshot) => {
        const list = snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<Testimonial, "id">),
        }));
        setItems(list.length > 0 ? list : fallbackQuotes);
      },
      () => setItems(fallbackQuotes)
    );

    return () => unsubscribe();
  }, []);

  const renderItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/95 p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900/95">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
          Client Testimonials
        </p>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          Verified
        </span>
      </div>

      <div className="marquee-container relative flex overflow-x-hidden">
        <div className="marquee-content flex min-w-full shrink-0 animate-marquee items-stretch gap-4">
          {renderItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="w-[82vw] max-w-sm shrink-0 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                {item.name} - {item.service}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                &ldquo;{item.comment}&rdquo;
              </p>
              <div className="mt-3">
                <StarRow rating={item.rating || 5} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
