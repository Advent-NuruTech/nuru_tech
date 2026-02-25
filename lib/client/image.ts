const MB = 1024 * 1024;

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export async function compressImage(
  file: File,
  options: { maxWidth?: number; maxSizeMb?: number } = {}
): Promise<File> {
  if (!file.type.startsWith("image/")) return file;

  const maxWidth = options.maxWidth ?? 1920;
  const maxSizeMb = options.maxSizeMb ?? 1.6;
  if (file.size <= maxSizeMb * MB) return file;

  const src = await fileToDataUrl(file);
  const img = await loadImage(src);

  const ratio = Math.min(1, maxWidth / img.width);
  const width = Math.round(img.width * ratio);
  const height = Math.round(img.height * ratio);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) return file;
  context.drawImage(img, 0, 0, width, height);

  let quality = 0.86;
  let compressed = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", quality)
  );

  while (compressed && compressed.size > maxSizeMb * MB && quality > 0.45) {
    quality -= 0.08;
    compressed = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", quality)
    );
  }

  if (!compressed) return file;
  return new File([compressed], file.name.replace(/\.\w+$/, ".jpg"), {
    type: "image/jpeg",
    lastModified: Date.now(),
  });
}
