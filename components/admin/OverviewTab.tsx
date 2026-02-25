"use client";

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import FileUploader from "@/components/FileUploader";
import {
  Card,
  Input,
  ListRow,
  TextArea,
  dangerLinkClass,
  primaryButtonClass,
} from "@/components/admin/AdminPrimitives";

type UpdateItem = {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
};

const initialForm = {
  title: "",
  summary: "",
  imageUrl: "",
};

export default function OverviewTab() {
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [counts, setCounts] = useState({
    services: 0,
    portfolio: 0,
    testimonials: 0,
    bookings: 0,
  });
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubs = [
      onSnapshot(collection(db, "updates"), (snapshot) => {
        setUpdates(
          snapshot.docs.map((entry) => ({
            id: entry.id,
            ...(entry.data() as Omit<UpdateItem, "id">),
          }))
        );
      }),
      onSnapshot(collection(db, "services"), (snapshot) =>
        setCounts((prev) => ({ ...prev, services: snapshot.size }))
      ),
      onSnapshot(collection(db, "portfolio"), (snapshot) =>
        setCounts((prev) => ({ ...prev, portfolio: snapshot.size }))
      ),
      onSnapshot(collection(db, "testimonials"), (snapshot) =>
        setCounts((prev) => ({ ...prev, testimonials: snapshot.size }))
      ),
      onSnapshot(collection(db, "bookings"), (snapshot) =>
        setCounts((prev) => ({ ...prev, bookings: snapshot.size }))
      ),
    ];

    return () => unsubs.forEach((unsubscribe) => unsubscribe());
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.title || !form.summary) return;
    setSaving(true);
    setStatus("");
    try {
      await addDoc(collection(db, "updates"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setForm(initialForm);
      setStatus("Update published successfully.");
    } catch {
      setStatus("Failed to publish update. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Metric label="Services" value={counts.services} />
        <Metric label="Portfolio" value={counts.portfolio} />
        <Metric label="Testimonials" value={counts.testimonials} />
        <Metric label="Bookings" value={counts.bookings} />
      </div>

      <Card title="Post Announcement">
        <form onSubmit={submit} className="space-y-3">
          <Input
            label="Title"
            value={form.title}
            required
            onChange={(value) => setForm((prev) => ({ ...prev, title: value }))}
          />
          <TextArea
            label="Summary"
            value={form.summary}
            required
            onChange={(value) => setForm((prev) => ({ ...prev, summary: value }))}
          />
          <Input
            label="Image URL"
            value={form.imageUrl}
            onChange={(value) => setForm((prev) => ({ ...prev, imageUrl: value }))}
          />
          <FileUploader
            folder="nurutech/updates"
            onUploaded={(url) => setForm((prev) => ({ ...prev, imageUrl: url }))}
          />
          {status && (
            <p className="rounded-xl bg-blue-50 px-3 py-2 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {status}
            </p>
          )}
          <button type="submit" className={primaryButtonClass} disabled={saving}>
            {saving ? "Publishing..." : "Publish Update"}
          </button>
        </form>
      </Card>

      <Card title="Recent Updates">
        <div className="space-y-2">
          {updates.slice(0, 10).map((item) => (
            <ListRow
              key={item.id}
              title={item.title}
              subtitle={item.summary.slice(0, 180)}
              actions={
                <button
                  type="button"
                  className={dangerLinkClass}
                  onClick={() => deleteDoc(doc(db, "updates", item.id))}
                >
                  Delete
                </button>
              }
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
      <p className="text-3xl font-black text-neutral-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
