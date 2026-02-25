"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import FileUploader from "@/components/FileUploader";
import { Card, Input, TextArea, primaryButtonClass } from "@/components/admin/AdminPrimitives";
import type { HeroSettings } from "@/lib/types/cms";

const initialHero: HeroSettings = {
  id: "hero",
  headline: "Advent NuruTech",
  subtext: "Building world-class AI, web, and automation systems.",
  videoUrl: "",
  primaryCtaLabel: "Explore Services",
  primaryCtaHref: "/services",
  secondaryCtaLabel: "Book Consultation",
  secondaryCtaHref: "/booking",
};

export default function HeroTab() {
  const [hero, setHero] = useState<HeroSettings>(initialHero);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "settings", "hero"), (snapshot) => {
      if (!snapshot.exists()) return;
      setHero((prev) => ({ ...prev, ...(snapshot.data() as Partial<HeroSettings>) }));
    });
    return () => unsubscribe();
  }, []);

  const save = async () => {
    setSaving(true);
    setStatus("");
    try {
      await setDoc(
        doc(db, "settings", "hero"),
        {
          ...hero,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      setStatus("Hero section saved successfully.");
    } catch {
      setStatus("Failed to save hero section.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card title="Homepage Hero Configuration">
      <div className="space-y-3">
        <Input label="Headline" value={hero.headline} onChange={(value) => setHero((prev) => ({ ...prev, headline: value }))} />
        <TextArea label="Subtext" value={hero.subtext} onChange={(value) => setHero((prev) => ({ ...prev, subtext: value }))} />
        <Input label="Video URL" value={hero.videoUrl} onChange={(value) => setHero((prev) => ({ ...prev, videoUrl: value }))} />
        <FileUploader folder="nurutech/hero" accept="video/*,image/*" onUploaded={(url) => setHero((prev) => ({ ...prev, videoUrl: url }))} />
        <div className="grid gap-3 md:grid-cols-2">
          <Input label="Primary CTA Label" value={hero.primaryCtaLabel} onChange={(value) => setHero((prev) => ({ ...prev, primaryCtaLabel: value }))} />
          <Input label="Primary CTA Link" value={hero.primaryCtaHref} onChange={(value) => setHero((prev) => ({ ...prev, primaryCtaHref: value }))} />
          <Input label="Secondary CTA Label" value={hero.secondaryCtaLabel} onChange={(value) => setHero((prev) => ({ ...prev, secondaryCtaLabel: value }))} />
          <Input label="Secondary CTA Link" value={hero.secondaryCtaHref} onChange={(value) => setHero((prev) => ({ ...prev, secondaryCtaHref: value }))} />
        </div>
        {status && (
          <p className="rounded-xl bg-blue-50 px-3 py-2 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {status}
          </p>
        )}
        <button type="button" onClick={save} className={primaryButtonClass} disabled={saving}>
          {saving ? "Saving..." : "Save Hero Section"}
        </button>
      </div>
    </Card>
  );
}
