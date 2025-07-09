"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "updates"), {
        title,
        summary,
        imageUrl: imageUrl || null,
        createdAt: serverTimestamp(),
      });

      setMessage("✅ Update posted successfully!");
      setTitle("");
      setSummary("");
      setImageUrl("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to post update.");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Admin Dashboard – Post Update
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          type="text"
          placeholder="Update Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <textarea
          placeholder="Summary (can be long)"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
          rows={6}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Posting..." : "Post Update"}
        </button>

        {message && <p className="text-center text-sm mt-2">{message}</p>}
      </form>
    </section>
  );
}
