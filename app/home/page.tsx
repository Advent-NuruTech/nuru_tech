import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import UpdateCard from "@/components/UpdateCard";

// ✅ Step 1: Define the expected shape of each update
type Update = {
  id: string;
  title: string;
  summary: string;
};

export default async function HomePage() {
  // ✅ Step 2: Get Firestore docs and cast them to the right type
  const snapshot = await getDocs(collection(db, "updates"));
  const updates: Update[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Update, "id">),
  }));

  return (
    <section className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to NuruTech Solutions</h1>
      <p className="mb-6">Innovative tech services tailored for your growth.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Latest Updates</h2>
      <div className="grid gap-4">
        {updates.map((update) => (
          <UpdateCard
            key={update.id}
            id={update.id}
            title={update.title}
            summary={update.summary}
          />
        ))}
      </div>
    </section>
  );
}
