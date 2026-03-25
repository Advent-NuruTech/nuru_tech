"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

interface EnhancedService {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "automation" | "creative" | "training";
  slug: string;
  order?: number;
}

// 🔁 Fallback (used if Firebase fails or data is bad)
const fallbackServices: EnhancedService[] = [
  {
    id: "1",
    title: "School & Hospital Management",
    description: "Robust ERP systems for institutional efficiency and data security.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    category: "web",
    slug: "/services/web-development",
    order: 1,
  },
  {
    id: "2",
    title: "E-commerce & Booking Systems",
    description: "Scalable platforms for hotels, restaurants, and retail outlets.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    category: "web",
    slug: "/services/web-development",
    order: 2,
  },
  {
    id: "3",
    title: "WhatsApp Business Assistants",
    description: "AI-driven automation for personal and business WhatsApp accounts.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800",
    category: "automation",
    slug: "/services/ai-automation",
    order: 3,
  },
  {
    id: "4",
    title: "Modern Tech Stack Training",
    description: "Master Google Workspace, ChatGPT, Claude, and NotebookLM.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    category: "training",
    slug: "/services/training",
    order: 4,
  },
  {
    id: "5",
    title: "Video & Graphic Design",
    description: "Promotional videos and professional banners that grab attention.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    category: "creative",
    slug: "/services/creative-studio",
    order: 5,
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState<EnhancedService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const snapshot = await getDocs(collection(db, "services"));

        const cleaned: EnhancedService[] = snapshot.docs
          .map((doc) => {
            const data = doc.data();

            return {
              id: doc.id,
              title: data.title || "Untitled",
              description: data.description || "No description available",
              image:
                data.image ||
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800",
              category: (data.category || "").toLowerCase(),
              slug: data.slug || "/services",
              order: data.order || 0,
            };
          })
          // ✅ remove invalid entries
          .filter(
            (s) =>
              ["web", "automation", "creative", "training"].includes(s.category)
          )
          .sort((a, b) => a.order - b.order);

        setServices(cleaned.length ? cleaned : fallbackServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const renderServiceSection = (category: string, title: string) => {
    const filtered = services.filter((s) => s.category === category);

    if (!filtered.length) return null;

    return (
      <section className="mb-20">
        <h2 className="mb-8 text-2xl md:text-3xl font-black border-l-4 border-blue-600 pl-4 dark:text-white">
          {title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <Link
              key={service.id}
              href={service.slug}
              className="group rounded-2xl overflow-hidden border bg-white dark:bg-neutral-900 dark:border-neutral-800 hover:shadow-xl transition"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold dark:text-white group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading services...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950">
      {/* Header */}
      <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt=""
        />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-6xl font-black text-white">
            ROBUST <span className="text-blue-500">SERVICES</span>
          </h1>
          <p className="mt-4 text-sm md:text-lg text-neutral-300">
            Engineered solutions across Web, AI, Creative & Training.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {renderServiceSection("web", "Web Development & Systems")}
        {renderServiceSection("automation", "AI & Business Automation")}
        {renderServiceSection("creative", "Creative Studio & Media")}
        {renderServiceSection("training", "Modern Tech Training")}
      </main>

      {/* CTA */}
      <section className="text-center py-16 bg-white dark:bg-neutral-900 border-t dark:border-neutral-800">
        <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
          Need a custom solution?
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Let’s build something powerful together.
        </p>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          GET IN TOUCH
        </button>
      </section>
    </div>
  );
}