"use client";

import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const services = [
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "Digital Marketing",
    "Consulting Services",
    "Tech Training",
    "Video Production",
    "Design Services",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setFeedback(payload.error || "Booking failed. Please retry.");
        return;
      }

      setFeedback("Booking submitted. We will confirm shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
        website: "",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.service &&
    formData.date &&
    formData.time;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-12 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-neutral-900 dark:text-white">Book Consultation</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Submit your preferred slot and we will follow up with confirmation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            value={formData.website}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Full Name *">
              <input name="name" value={formData.name} onChange={handleChange} required className={inputClass} />
            </Field>
            <Field label="Email *">
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className={inputClass} />
            </Field>
            <Field label="Phone *">
              <input name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} />
            </Field>
            <Field label="Service *">
              <select name="service" value={formData.service} onChange={handleChange} required className={inputClass}>
                <option value="">Select service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Date *">
              <input
                name="date"
                type="date"
                value={formData.date}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </Field>
            <Field label="Time *">
              <input name="time" type="time" value={formData.time} onChange={handleChange} required className={inputClass} />
            </Field>
          </div>

          <Field label="Project Details (Optional)">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </Field>

          {feedback && (
            <p className="mb-4 rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
              {feedback}
            </p>
          )}

          <button
            type="submit"
            disabled={!isFormValid || submitting}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:ring-blue-900";
