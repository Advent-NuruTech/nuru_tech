import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/security/rateLimit";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
]);

function sanitizeFolder(input: string | null): string {
  if (!input) return "nurutech/uploads";
  return input.replace(/[^a-zA-Z0-9/_-]/g, "").slice(0, 80) || "nurutech/uploads";
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const rate = checkRateLimit(`${ip}:upload`, 10, 60_000);
    if (!rate.allowed) {
      return NextResponse.json(
        { error: "Too many uploads. Please wait and retry." },
        { status: 429 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file");
    const folder = sanitizeFolder(formData.get("folder")?.toString() || null);

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ error: "File too large. Max size is 10MB." }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const resourceType = file.type.startsWith("video/") ? "video" : "image";

    const uploadResult = await new Promise<{ secure_url: string; bytes: number }>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder,
            upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
            resource_type: resourceType,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result as { secure_url: string; bytes: number });
          }
        )
        .end(buffer);
    });

    return NextResponse.json({
      url: uploadResult.secure_url,
      size: uploadResult.bytes,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }
}
