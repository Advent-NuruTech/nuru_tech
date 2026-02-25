"use client";

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Testimonial } from "@/lib/types/cms";
import FileUploader from "@/components/FileUploader";
import {
  Card,
  Input,
  ListRow,
  TextArea,
  actionLinkClass,
  dangerLinkClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/components/admin/AdminPrimitives";

const initialForm = {
  name: "",
  service: "",
  comment: "",
  imageUrl: "",
  rating: 5,
  approved: true,
};

export default function TestimonialsTab() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "testimonials"), (snapshot) => {
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
    if (!form.name || !form.service || !form.comment) return;
    setSaving(true);
    setStatus("");

    const payload = {
      ...form,
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "testimonials", editingId), payload);
        setEditingId(null);
        setStatus("Testimonial updated successfully.");
      } else {
        await addDoc(collection(db, "testimonials"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        setStatus("Testimonial added successfully.");
      }
      setForm(initialForm);
    } catch {
      setStatus("Failed to save testimonial.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card title={editingId ? "Edit Testimonial" : "Add Testimonial"}>
        <form onSubmit={submit} className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2">
            <Input
              label="Client Name"
              value={form.name}
              required
              onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
            />
            <Input
              label="Service"
              value={form.service}
              required
              onChange={(value) => setForm((prev) => ({ ...prev, service: value }))}
            />
          </div>
          <TextArea
            label="Comment"
            value={form.comment}
            required
            onChange={(value) => setForm((prev) => ({ ...prev, comment: value }))}
          />
          <Input
            label="Image URL"
            value={form.imageUrl}
            onChange={(value) => setForm((prev) => ({ ...prev, imageUrl: value }))}
          />
          <FileUploader
            folder="nurutech/testimonials"
            onUploaded={(url) => setForm((prev) => ({ ...prev, imageUrl: url }))}
          />
          <div className="grid gap-3 md:grid-cols-2">
            <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Rating
              <input
                type="number"
                min={1}
                max={5}
                value={form.rating}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, rating: Number(event.target.value) }))
                }
                className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm dark:border-neutral-600 dark:bg-neutral-800"
              />
            </label>
            <label className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              <input
                type="checkbox"
                checked={form.approved}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, approved: event.target.checked }))
                }
              />
              Approved
            </label>
          </div>
          <div className="flex gap-2">
            <button type="submit" className={primaryButtonClass} disabled={saving}>
              {saving
                ? "Saving..."
                : editingId
                ? "Update Testimonial"
                : "Add Testimonial"}
            </button>
            {editingId && (
              <button
                type="button"
                className={secondaryButtonClass}
                onClick={() => {
                  setEditingId(null);
                  setForm(initialForm);
                }}
              >
                Cancel
              </button>
            )}
          </div>
          {status && (
            <p className="rounded-xl bg-blue-50 px-3 py-2 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {status}
            </p>
          )}
        </form>
      </Card>

      <Card title="Testimonial Queue">
        <div className="space-y-2">
          {testimonials.map((item) => (
            <ListRow
              key={item.id}
              title={`${item.name} - ${item.service}`}
              subtitle={`${item.comment.slice(0, 170)} (${item.rating}/5)`}
              actions={
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={actionLinkClass}
                    onClick={() => {
                      setEditingId(item.id);
                      setForm({
                        name: item.name,
                        service: item.service,
                        comment: item.comment,
                        imageUrl: item.imageUrl || "",
                        rating: item.rating || 5,
                        approved: Boolean(item.approved),
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className={actionLinkClass}
                    onClick={() =>
                      updateDoc(doc(db, "testimonials", item.id), {
                        approved: !item.approved,
                      })
                    }
                  >
                    {item.approved ? "Unapprove" : "Approve"}
                  </button>
                  <button
                    type="button"
                    className={dangerLinkClass}
                    onClick={() => deleteDoc(doc(db, "testimonials", item.id))}
                  >
                    Delete
                  </button>
                </div>
              }
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
