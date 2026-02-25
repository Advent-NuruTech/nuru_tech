export async function submitContact(form: {
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
  website?: string;
}) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...form,
      website: "",
    }),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error || "Failed to submit contact form.");
  }
}
