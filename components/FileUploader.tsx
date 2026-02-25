"use client";

import { useRef, useState } from "react";
import { compressImage } from "@/lib/client/image";
import { uploadFileWithProgress } from "@/lib/client/upload";

type Props = {
  folder?: string;
  accept?: string;
  label?: string;
  onUploaded: (url: string) => void;
};

export default function FileUploader({
  folder = "nurutech/uploads",
  accept = "image/*",
  label = "Drag and drop an image, or click to upload",
  onUploaded,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [filename, setFilename] = useState("");

  const processFile = async (file: File) => {
    setError("");
    setUploading(true);
    setProgress(0);

    try {
      const optimized = await compressImage(file, { maxWidth: 1920, maxSizeMb: 1.5 });
      setFilename(optimized.name);
      if (optimized.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(optimized));
      }

      const url = await uploadFileWithProgress(optimized, {
        folder,
        onProgress: setProgress,
      });
      onUploaded(url);
      setProgress(100);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={async (event) => {
          const file = event.target.files?.[0];
          if (!file) return;
          await processFile(file);
        }}
      />

      <button
        type="button"
        className={`w-full rounded-2xl border-2 border-dashed p-6 text-left transition ${
          isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
            : "border-neutral-300 bg-white hover:border-blue-400 dark:border-neutral-700 dark:bg-neutral-900"
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={async (event) => {
          event.preventDefault();
          setIsDragging(false);
          const file = event.dataTransfer.files?.[0];
          if (!file) return;
          await processFile(file);
        }}
      >
        <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
          {label}
        </div>
        <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          Auto compression enabled. Max 10MB.
        </div>
      </button>

      {(uploading || progress > 0) && (
        <div className="space-y-1">
          <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-700">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            {uploading ? `Uploading ${filename || "file"}... ${progress}%` : "Upload complete"}
          </p>
        </div>
      )}

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Upload preview"
          className="h-40 w-full rounded-xl object-cover"
        />
      )}

      {error && (
        <p className="rounded-xl bg-red-50 p-2 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
