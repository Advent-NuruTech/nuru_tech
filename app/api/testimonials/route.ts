import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { checkRateLimit, getClientIp } from "@/lib/security/rateLimit";

function clean(input: unknown, max = 500): string {
  return String(input ?? "")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = checkRateLimit(`${ip}:testimony`, 3, 60_000);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as {
      name?: string;
      service?: string;
      comment?: string;
      rating?: number;
      imageUrl?: string;
      website?: string;
    };

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const service = clean(body.service, 140);
    const comment = clean(body.comment, 3000);
    const rating = Math.max(1, Math.min(5, Number(body.rating || 5)));
    const imageUrl = clean(body.imageUrl, 600);

    if (!name || !service || !comment) {
      return NextResponse.json(
        { error: "Name, service, and testimonial are required." },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "testimonials"), {
      name,
      service,
      comment,
      rating,
      imageUrl: imageUrl || null,
      approved: false,
      createdAt: serverTimestamp(),
      source: "website_testimonial_form",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Testimonial submit error", error);
    return NextResponse.json(
      { error: "Failed to submit testimonial." },
      { status: 500 }
    );
  }
}
