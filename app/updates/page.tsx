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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
            Latest News & Updates
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mb-6 leading-tight">
            Official Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest news, announcements, and developments from NuruTech.
          </p>
        </div>

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
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col h-full"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                {/* Image */}
                {update.imageUrl ? (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={update.imageUrl}
                      alt={update.title || "Update Image"}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-4xl mb-2 opacity-50">📄</div>
                      <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                        No Image Available
                      </p>
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {update.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line mb-4 leading-relaxed flex-grow">
                    {isExpanded ? update.summary : preview}
                  </p>

                  {update.summary.length > 250 && (
                    <button
                      onClick={() => toggleExpand(update.id)}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-3 transition-all duration-200 self-start group/button mt-auto"
                    >
                      {isExpanded ? (
                        <>
                          <span>Read Less</span>
                          <svg className="w-4 h-4 group-hover/button:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Read More</span>
                          <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Stay Connected
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Never miss an important update. Follow us for the latest news and announcements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}