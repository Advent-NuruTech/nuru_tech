import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { checkRateLimit, getClientIp } from "@/lib/security/rateLimit";

function clean(input: unknown, max = 4000): string {
  return String(input ?? "")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = checkRateLimit(`${ip}:contact`, 5, 60_000);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      location?: string;
      message?: string;
      website?: string;
    };

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const phone = clean(body.phone, 50);
    const location = clean(body.location, 140);
    const message = clean(body.message, 4000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "contacts"), {
      name,
      email,
      phone,
      location,
      message,
      createdAt: serverTimestamp(),
      source: "website_contact_form",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submit error", error);
    return NextResponse.json(
      { error: "Failed to submit contact form." },
      { status: 500 }
    );
  }
}
