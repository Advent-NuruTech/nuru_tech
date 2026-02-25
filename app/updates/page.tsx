"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Update = {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
};

export default function UpdatesPage() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "updates"), (snapshot) => {
      setUpdates(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<Update, "id">),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return updates.filter((item) =>
      [item.title, item.summary].join(" ").toLowerCase().includes(query)
    );
  }, [updates, search]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-12 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-black text-neutral-900 dark:text-white">Official Updates</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Latest announcements from Advent NuruTech.
          </p>
        </header>

        <div className="mb-6 flex justify-center">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search updates..."
            className="w-full max-w-lg rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((update) => {
            const isExpanded = expandedIds.includes(update.id);
            const preview =
              update.summary.length > 250
                ? `${update.summary.slice(0, 250)}...`
                : update.summary;
            return (
              <article
                key={update.id}
                id={update.id}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
              >
                {update.imageUrl ? (
                  <div className="relative h-48 w-full bg-neutral-100 p-2 dark:bg-neutral-800">
                    <Image
                      src={update.imageUrl}
                      alt={update.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-48 items-center justify-center bg-neutral-100 text-neutral-400 dark:bg-neutral-800">
                    No Image
                  </div>
                )}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{update.title}</h2>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {isExpanded ? update.summary : preview}
                  </p>
                  {update.summary.length > 250 && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(update.id)}
                      className="mt-3 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
