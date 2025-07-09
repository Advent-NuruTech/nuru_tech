import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function submitContact(form: {
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
}) {
  try {
    await addDoc(collection(db, "contacts"), {
      name: form.name,
      phone: form.phone,
      email: form.email,
      location: form.location,
      message: form.message,
      createdAt: Timestamp.now(),
    });
    console.log("✅ Contact form submitted successfully");
  } catch (err) {
    console.error("❌ Error saving contact form:", err);
    throw err; // Re-throw the error to handle it in the component
  }
}