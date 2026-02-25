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
import type { BlogArticle } from "@/lib/types/cms";
import FileUploader from "@/components/FileUploader";
import RichTextEditor from "@/components/RichTextEditor";
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
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  tags: "",
  imageUrl: "",
};

function parseList(input: string): string[] {
  return input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function BlogTab() {
  const [blogs, setBlogs] = useState<BlogArticle[]>([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blog"), (snapshot) => {
      setBlogs(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<BlogArticle, "id">),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return blogs.filter((item) =>
      [item.title, item.slug, item.excerpt, (item.tags || []).join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [blogs, search]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.title || !form.content) return;
    setSaving(true);
    setStatus("");

    const payload = {
      title: form.title,
      slug:
        form.slug ||
        form.title
          .toLowerCase()
          .replace(/[^a-z0-9\\s-]/g, "")
          .replace(/\\s+/g, "-"),
      excerpt: form.excerpt,
      content: form.content,
      imageUrl: form.imageUrl,
      tags: parseList(form.tags),
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "blog", editingId), payload);
        setEditingId(null);
        setStatus("Article updated successfully.");
      } else {
        await addDoc(collection(db, "blog"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        setStatus("Article published successfully.");
      }
      setForm(initialForm);
    } catch {
      setStatus("Failed to save article.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card title={editingId ? "Edit Article" : "Create Article"}>
        <form onSubmit={submit} className="space-y-3">
          <Input
            label="Title"
            value={form.title}
            required
            onChange={(value) => setForm((prev) => ({ ...prev, title: value }))}
          />
          <Input
            label="Slug"
            value={form.slug}
            onChange={(value) => setForm((prev) => ({ ...prev, slug: value }))}
          />
          <TextArea
            label="Excerpt"
            value={form.excerpt}
            onChange={(value) => setForm((prev) => ({ ...prev, excerpt: value }))}
          />
          <Input
            label="Tags (comma separated)"
            value={form.tags}
            onChange={(value) => setForm((prev) => ({ ...prev, tags: value }))}
          />
          <Input
            label="Featured Image URL"
            value={form.imageUrl}
            onChange={(value) => setForm((prev) => ({ ...prev, imageUrl: value }))}
          />
          <FileUploader
            folder="nurutech/blog"
            onUploaded={(url) => setForm((prev) => ({ ...prev, imageUrl: url }))}
          />
          <div>
            <span className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Content
            </span>
            <RichTextEditor
              value={form.content}
              onChange={(value) => setForm((prev) => ({ ...prev, content: value }))}
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className={primaryButtonClass} disabled={saving}>
              {saving
                ? "Saving..."
                : editingId
                ? "Update Article"
                : "Publish Article"}
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

      <Card title="Articles">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search title, slug, tags"
          className={inputClass}
        />
        <div className="mt-3 space-y-2">
          {filtered.map((item) => (
            <ListRow
              key={item.id}
              title={item.title}
              subtitle={item.excerpt || item.slug}
              actions={
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={actionLinkClass}
                    onClick={() => {
                      setEditingId(item.id);
                      setForm({
                        title: item.title,
                        slug: item.slug,
                        excerpt: item.excerpt,
                        content: item.content,
                        tags: (item.tags || []).join(", "),
                        imageUrl: item.imageUrl || "",
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className={dangerLinkClass}
                    onClick={() => deleteDoc(doc(db, "blog", item.id))}
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
