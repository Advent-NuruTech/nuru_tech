"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Testimonial } from "@/lib/types/cms";
import FileUploader from "@/components/FileUploader";

const initialForm = {
  name: "",
  service: "",
  comment: "",
  rating: 5,
  imageUrl: "",
  website: "",
};

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const testimonialsQuery = query(
      collection(db, "testimonials"),
      where("approved", "==", true)
    );

    const unsubscribe = onSnapshot(testimonialsQuery, (snapshot) => {
      setTestimonials(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<Testimonial, "id">),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setMessage(payload.error || "Submission failed.");
        return;
      }
      setMessage("Submitted successfully. It will appear once approved.");
      setForm(initialForm);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-12 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto max-w-6xl space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-black text-neutral-900 dark:text-white">
            Testimonials
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Verified client feedback and your chance to share your experience.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-bold text-neutral-900 dark:text-white">
                  {item.name}
                </h2>
                <span className="text-amber-500">
                  {"★".repeat(item.rating || 5)}
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.service}</p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-200">{item.comment}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
            Share Your Testimonial
          </h2>
          <form onSubmit={submit} className="space-y-3">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              className="hidden"
              onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
            />
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Name">
                <input
                  value={form.name}
                  required
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className={inputClass}
                />
              </Field>
              <Field label="Service">
                <input
                  value={form.service}
                  required
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, service: event.target.value }))
                  }
                  className={inputClass}
                />
              </Field>
            </div>
            <Field label="Comment">
              <textarea
                value={form.comment}
                required
                rows={4}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, comment: event.target.value }))
                }
                className={`${inputClass} resize-none`}
              />
            </Field>
            <Field label="Rating">
              <input
                type="number"
                min={1}
                max={5}
                value={form.rating}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, rating: Number(event.target.value) }))
                }
                className={inputClass}
              />
            </Field>
            <Field label="Profile Image URL (optional)">
              <input
                value={form.imageUrl}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, imageUrl: event.target.value }))
                }
                className={inputClass}
              />
            </Field>
            <FileUploader
              folder="nurutech/testimonials"
              onUploaded={(url) => setForm((prev) => ({ ...prev, imageUrl: url }))}
            />

            {message && (
              <p className="rounded-xl bg-blue-50 px-3 py-2 text-sm text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Testimonial"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:ring-blue-900";
