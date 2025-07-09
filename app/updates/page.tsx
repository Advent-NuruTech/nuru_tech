"use client";

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Image from "next/image";

// Firestore type
type Update = {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
};

export default function UpdatesPage() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchUpdates() {
      const snapshot = await getDocs(collection(db, "updates"));
      const fetched: Update[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Update, "id">),
      }));
      setUpdates(fetched);
    }
    fetchUpdates();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Official Updates
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {updates.map((update) => {
          const isExpanded = expandedIds.includes(update.id);
          const preview = update.summary.length > 250
            ? update.summary.slice(0, 250) + "..."
            : update.summary;

          return (
            <div
              key={update.id}
              id={update.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
          {update.imageUrl ? (
  <Image
    src={update.imageUrl}
    alt={update.title}
    width={600}
    height={300}
    className="w-full h-48 object-cover"
  />
) : (
  <div className="w-full h-48 bg-gradient-to-r from-sky-100 to-blue-200 flex items-center justify-center text-blue-600 font-semibold">
    No Image Available
  </div>
)}

              {/* Details */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {update.title}
                </h2>

                <p className="text-gray-700 text-sm whitespace-pre-line mb-4">
                  {isExpanded ? update.summary : preview}
                </p>

                {update.summary.length > 250 && (
                  <button
                    onClick={() => toggleExpand(update.id)}
                    className="text-blue-600 text-sm font-medium hover:underline self-start"
                  >
                    {isExpanded ? "Read Less ←" : "Read More →"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
