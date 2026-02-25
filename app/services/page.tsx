import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { ServiceItem } from "@/lib/types/cms";

const fallbackServices: Omit<ServiceItem, "id">[] = [
  {
    title: "Next-Gen Web Development",
    description: "Responsive, SEO-ready systems built with modern stacks.",
    icon: "FaCode",
    order: 1,
  },
  {
    title: "AI & Automation",
    description: "Automate workflows and unlock data-driven decision pipelines.",
    icon: "FaRobot",
    order: 2,
  },
  {
    title: "Business Analytics",
    description: "Dashboards and observability for faster strategic execution.",
    icon: "FaChartLine",
    order: 3,
  },
];

export default async function ServicesPage() {
  const snapshot = await getDocs(collection(db, "services"));
  const services = snapshot.docs.map((entry) => ({
    id: entry.id,
    ...(entry.data() as Omit<ServiceItem, "id">),
  }));
  const data = services.length
    ? services.sort((a, b) => (a.order || 0) - (b.order || 0))
    : fallbackServices.map((item, index) => ({ ...item, id: `fallback-${index}` }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 py-12 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-black text-neutral-900 dark:text-white">Our Services</h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Scalable services engineered for speed, reliability, and growth.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((service) => (
            <article
              key={service.id}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
            >
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{service.title}</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
