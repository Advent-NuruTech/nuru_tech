"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { SiteSettings } from "@/lib/types/cms";
import { Card, Input, inputClass, primaryButtonClass } from "@/components/admin/AdminPrimitives";

const initialSettings: SiteSettings = {
  id: "site",
  siteName: "Advent NuruTech",
  supportEmail: "nurutech36@gmail.com",
  supportPhone: "+254 105 178 685",
  defaultTheme: "light",
};

export default function SettingsTab() {
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "settings", "site"), (snapshot) => {
      if (!snapshot.exists()) return;
      setSettings((prev) => ({ ...prev, ...(snapshot.data() as Partial<SiteSettings>) }));
    });
    return () => unsubscribe();
  }, []);

  const save = async () => {
    setSaving(true);
    setStatus("");
    try {
      await setDoc(
        doc(db, "settings", "site"),
        { ...settings, updatedAt: serverTimestamp() },
        { merge: true }
      );
      setStatus("Settings saved successfully.");
    } catch {
      setStatus("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card title="Global Site Settings">
      <div className="space-y-3">
        <Input
          label="Site Name"
          value={settings.siteName}
          onChange={(value) => setSettings((prev) => ({ ...prev, siteName: value }))}
        />
        <Input
          label="Support Email"
          value={settings.supportEmail}
          onChange={(value) =>
            setSettings((prev) => ({ ...prev, supportEmail: value }))
          }
        />
        <Input
          label="Support Phone"
          value={settings.supportPhone}
          onChange={(value) =>
            setSettings((prev) => ({ ...prev, supportPhone: value }))
          }
        />
        <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Default Theme
          <select
            className={inputClass}
            value={settings.defaultTheme}
            onChange={(event) =>
              setSettings((prev) => ({
                ...prev,
                defaultTheme: event.target.value as "light" | "dark",
              }))
            }
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        {status && (
          <p className="rounded-xl bg-blue-50 px-3 py-2 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {status}
          </p>
        )}
        <button type="button" onClick={save} className={primaryButtonClass} disabled={saving}>
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </Card>
  );
}
