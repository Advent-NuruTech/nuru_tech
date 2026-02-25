"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { MediaAsset } from "@/lib/types/cms";
import FileUploader from "@/components/FileUploader";
import {
  Card,
  Input,
  ListRow,
  dangerLinkClass,
  inputClass,
  primaryButtonClass,
} from "@/components/admin/AdminPrimitives";

const initialForm = {
  title: "",
  type: "image" as "image" | "video",
  url: "",
};

export default function MediaTab() {
  const [media, setMedia] = useState<MediaAsset[]>([]);
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "media"), (snapshot) => {
      setMedia(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<MediaAsset, "id">),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.title || !form.url) return;
    setSaving(true);
    setStatus("");
    try {
      await addDoc(collection(db, "media"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setForm(initialForm);
      setStatus("Media item added successfully.");
    } catch {
      setStatus("Failed to add media item.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card title="Media Library Upload">
        <form onSubmit={submit} className="space-y-3">
          <Input
            label="Title"
            value={form.title}
            required
            onChange={(value) => setForm((prev) => ({ ...prev, title: value }))}
          />
          <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            Asset Type
            <select
              className={inputClass}
              value={form.type}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  type: event.target.value as "image" | "video",
                }))
              }
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </label>
          <Input
            label="Asset URL"
            value={form.url}
            required
            onChange={(value) => setForm((prev) => ({ ...prev, url: value }))}
          />
          <FileUploader
            folder="nurutech/media"
            accept={form.type === "video" ? "video/*" : "image/*"}
            onUploaded={(url) => setForm((prev) => ({ ...prev, url }))}
          />
          {status && (
            <p className="rounded-xl bg-blue-50 px-3 py-2 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {status}
            </p>
          )}
          <button type="submit" className={primaryButtonClass} disabled={saving}>
            {saving ? "Saving..." : "Add To Media Library"}
          </button>
        </form>
      </Card>

      <Card title="All Media">
        <div className="space-y-2">
          {media.map((item) => (
            <ListRow
              key={item.id}
              title={item.title}
              subtitle={`${item.type.toUpperCase()} - ${item.url}`}
              actions={
                <button
                  type="button"
                  className={dangerLinkClass}
                  onClick={() => deleteDoc(doc(db, "media", item.id))}
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
