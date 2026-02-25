"use client";

import { useEffect, useMemo, useState } from "react";
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
import type { PortfolioItem } from "@/lib/types/cms";
import FileUploader from "@/components/FileUploader";
import {
  Card,
  Input,
  ListRow,
  TextArea,
  actionLinkClass,
  dangerLinkClass,
  inputClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/components/admin/AdminPrimitives";

const initialForm = {
  name: "",
  category: "Web Apps",
  shortDescription: "",
  fullDescription: "",
  tech: "",
  tags: "",
  imageUrl: "",
  gallery: "",
  liveUrl: "",
  githubUrl: "",
  status: "Live" as "Live" | "In Development",
  testimonial: "",
};

function parseList(input: string): string[] {
  return input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function PortfolioTab() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "portfolio"), (snapshot) => {
      setPortfolio(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<PortfolioItem, "id">),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return portfolio.filter((item) =>
      [item.name, item.category, item.shortDescription, (item.tags || []).join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [portfolio, search]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name || !form.shortDescription) return;
    setSaving(true);
    setStatus("");

    const payload = {
      name: form.name,
      category: form.category,
      shortDescription: form.shortDescription,
      fullDescription: form.fullDescription,
      tech: parseList(form.tech),
      tags: parseList(form.tags),
      imageUrl: form.imageUrl,
      gallery: parseList(form.gallery),
      liveUrl: form.liveUrl,
      githubUrl: form.githubUrl,
      status: form.status,
      testimonial: form.testimonial,
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "portfolio", editingId), payload);
        setEditingId(null);
        setStatus("Portfolio item updated successfully.");
      } else {
        await addDoc(collection(db, "portfolio"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        setStatus("Portfolio item added successfully.");
      }
      setForm(initialForm);
    } catch {
      setStatus("Failed to save portfolio item.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card title={editingId ? "Edit Portfolio Item" : "Create Portfolio Item"}>
        <form onSubmit={submit} className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2">
            <Input
              label="Project Name"
              value={form.name}
              required
              onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
            />
            <Input
              label="Category"
              value={form.category}
              required
              onChange={(value) =>
                setForm((prev) => ({ ...prev, category: value }))
              }
            />
          </div>
          <TextArea
            label="Short Description"
            value={form.shortDescription}
            required
            onChange={(value) =>
              setForm((prev) => ({ ...prev, shortDescription: value }))
            }
          />
          <TextArea
            label="Full Description"
            value={form.fullDescription}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, fullDescription: value }))
            }
          />
          <div className="grid gap-3 md:grid-cols-2">
            <Input
              label="Tech Stack (comma separated)"
              value={form.tech}
              onChange={(value) => setForm((prev) => ({ ...prev, tech: value }))}
            />
            <Input
              label="Tags (comma separated)"
              value={form.tags}
              onChange={(value) => setForm((prev) => ({ ...prev, tags: value }))}
            />
          </div>
          <Input
            label="Live URL"
            value={form.liveUrl}
            onChange={(value) => setForm((prev) => ({ ...prev, liveUrl: value }))}
          />
          <Input
            label="GitHub URL"
            value={form.githubUrl}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, githubUrl: value }))
            }
          />
          <Input
            label="Main Image URL"
            value={form.imageUrl}
            onChange={(value) => setForm((prev) => ({ ...prev, imageUrl: value }))}
          />
          <TextArea
            label="Gallery URLs (comma separated)"
            value={form.gallery}
            onChange={(value) => setForm((prev) => ({ ...prev, gallery: value }))}
          />
          <FileUploader
            folder="nurutech/portfolio"
            label="Upload screenshot and append to gallery"
            onUploaded={(url) =>
              setForm((prev) => ({
                ...prev,
                gallery: prev.gallery ? `${prev.gallery}, ${url}` : url,
              }))
            }
          />
          <FileUploader
            folder="nurutech/portfolio"
            onUploaded={(url) => setForm((prev) => ({ ...prev, imageUrl: url }))}
          />
          <TextArea
            label="Client Testimonial (optional)"
            value={form.testimonial}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, testimonial: value }))
            }
          />
          <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            Status
            <select
              className={inputClass}
              value={form.status}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  status: event.target.value as "Live" | "In Development",
                }))
              }
            >
              <option value="Live">Live</option>
              <option value="In Development">In Development</option>
            </select>
          </label>
          <div className="flex gap-2">
            <button type="submit" className={primaryButtonClass} disabled={saving}>
              {saving
                ? "Saving..."
                : editingId
                ? "Save Portfolio"
                : "Add Portfolio"}
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

      <Card title="Portfolio Items">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by project, category, tags"
          className={inputClass}
        />
        <div className="mt-3 space-y-2">
          {filtered.map((item) => (
            <ListRow
              key={item.id}
              title={`${item.name} (${item.status})`}
              subtitle={`${item.category} - ${item.shortDescription}`}
              actions={
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={actionLinkClass}
                    onClick={() => {
                      setEditingId(item.id);
                      setForm({
                        name: item.name,
                        category: item.category,
                        shortDescription: item.shortDescription,
                        fullDescription: item.fullDescription,
                        tech: (item.tech || []).join(", "),
                        tags: (item.tags || []).join(", "),
                        imageUrl: item.imageUrl,
                        gallery: (item.gallery || []).join(", "),
                        liveUrl: item.liveUrl || "",
                        githubUrl: item.githubUrl || "",
                        status: item.status,
                        testimonial: item.testimonial || "",
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className={dangerLinkClass}
                    onClick={() => deleteDoc(doc(db, "portfolio", item.id))}
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
