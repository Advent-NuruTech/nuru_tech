import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { ServiceItem } from "@/lib/types/cms";
import Link from "next/link";

// Extended interface to handle images, categories, and custom links
interface EnhancedService extends ServiceItem {
  image: string;
  category: 'web' | 'automation' | 'creative' | 'training';
  slug: string;
}

const fallbackServices: Omit<EnhancedService, "id">[] = [
  {
    title: "School & Hospital Management",
    description: "Robust ERP systems for institutional efficiency and data security.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    category: "web",
    slug: "/services/web-development",
    order: 1,
  },
  {
    title: "E-commerce & Booking Systems",
    description: "Scalable platforms for hotels, restaurants, and retail retail outlets.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    category: "web",
    slug: "/services/web-development",
    order: 2,
  },
  {
    title: "WhatsApp Business Assistants",
    description: "AI-driven automation for personal and business WhatsApp accounts.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800",
    category: "automation",
    slug: "/services/ai-automation",
    order: 3,
  },
  {
    title: "Modern Tech Stack Training",
    description: "Master Google Workspace, ChatGPT, Claude, and NotebookLM.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    category: "training",
    slug: "/services/training",
    order: 4,
  },
  {
    title: "Video & Graphic Design",
    description: "Promotional videos and professional banners that grab attention.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    category: "creative",
    slug: "/services/creative-studio",
    order: 5,
  }
];

export default async function ServicesPage() {
  const snapshot = await getDocs(collection(db, "services"));
  const services = snapshot.docs.map((entry) => ({
    id: entry.id,
    ...(entry.data() as Omit<EnhancedService, "id">),
  }));

  const data = services.length
    ? services.sort((a, b) => (a.order || 0) - (b.order || 0))
    : fallbackServices.map((item, index) => ({ ...item, id: `fallback-${index}` }));

  const renderServiceSection = (category: string, title: string) => (
    <section className="mb-24">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-black tracking-tight border-l-8 border-blue-600 pl-6 dark:text-white">
          {title}
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.filter(s => s.category === category).map((service) => (
          <Link 
            key={service.id} 
            href={service.slug || `/services/${service.category}`}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-neutral-200 bg-white transition-all hover:-translate-y-2 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-6">
                <span className="text-white font-bold flex items-center gap-2">
                  View Full Service <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950">
      {/* Dynamic Header with Background Image */}
      <header className="relative flex h-[50vh] items-center justify-center overflow-hidden bg-neutral-900 text-center">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000" 
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          alt="Services Header Background"
        />
        <div className="relative z-10 px-4">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">Our Expertise</span>
          <h1 className="mt-4 text-6xl font-black text-white md:text-8xl tracking-tighter">
            ROBUST <span className="text-blue-500">SERVICES</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-300">
            Engineered solutions across Web Development, AI Automation, Creative Design, and Tech Training.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto max-w-7xl px-4 py-24">
        {renderServiceSection('web', 'Web Development & Systems')}
        {renderServiceSection('automation', 'AI & Business Automation')}
        {renderServiceSection('creative', 'Creative Studio & Media')}
        {renderServiceSection('training', 'Modern Tech Training')}
      </main>

      {/* Global CTA */}
      <section className="bg-white py-20 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="text-center">
          <h2 className="text-4xl font-bold dark:text-white">Need a custom solution?</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">Our engineers are ready to build your next project.</p>
          <button className="mt-8 rounded-full bg-blue-600 px-12 py-4 font-black text-white hover:bg-blue-700 transition">
            GET IN TOUCH
          </button>
        </div>
      </section>
    </div>
  );
}