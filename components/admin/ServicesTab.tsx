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
import type { ServiceItem } from "@/lib/types/cms";
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

const initialForm = { title: "", description: "" };

export default function ServicesTab() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "services"), (snapshot) => {
      setServices(
        snapshot.docs.map((entry) => ({
          id: entry.id,
          ...(entry.data() as Omit<ServiceItem, "id">),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.title || !form.description) return;

    setSaving(true);
    setStatus("");

    const payload = {
      title: form.title,
      description: form.description,
      order: services.length,
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "services", editingId), payload);
        setEditingId(null);
        setStatus("Service updated successfully.");
      } else {
        await addDoc(collection(db, "services"), payload);
        setStatus("Service added successfully.");
      }

      setForm(initialForm);
    } catch {
      setStatus("Failed to save service.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card title={editingId ? "Edit Service" : "Add Service"}>
        <form onSubmit={submit} className="space-y-3">
          <Input
            label="Service Title"
            value={form.title}
            required
            onChange={(value) =>
              setForm((prev) => ({ ...prev, title: value }))
            }
          />

          <TextArea
            label="Description"
            value={form.description}
            required
            onChange={(value) =>
              setForm((prev) => ({ ...prev, description: value }))
            }
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className={primaryButtonClass}
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update Service"
                : "Add Service"}
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

      <Card title="Services List">
        <div className="space-y-2">
          {services.map((item) => (
            <ListRow
              key={item.id}
              title={item.title}
              subtitle={item.description}
              actions={
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={actionLinkClass}
                    onClick={() => {
                      setEditingId(item.id);
                      setForm({
                        title: item.title,
                        description: item.description,
                      });
                    }}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className={dangerLinkClass}
                    onClick={() =>
                      deleteDoc(doc(db, "services", item.id))
                    }
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