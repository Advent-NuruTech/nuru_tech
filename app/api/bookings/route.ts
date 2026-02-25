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
    const limit = checkRateLimit(`${ip}:booking`, 4, 60_000);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "Too many booking attempts. Try again in a minute." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      service?: string;
      date?: string;
      time?: string;
      message?: string;
      website?: string;
    };

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const payload = {
      name: clean(body.name, 120),
      email: clean(body.email, 180),
      phone: clean(body.phone, 50),
      service: clean(body.service, 120),
      date: clean(body.date, 20),
      time: clean(body.time, 20),
      message: clean(body.message, 2000),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.service || !payload.date || !payload.time) {
      return NextResponse.json(
        { error: "Please complete all required booking fields." },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "bookings"), {
      ...payload,
      status: "Pending",
      createdAt: serverTimestamp(),
      source: "website_booking_form",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Booking submit error", error);
    return NextResponse.json(
      { error: "Booking submission failed." },
      { status: 500 }
    );
  }
}
