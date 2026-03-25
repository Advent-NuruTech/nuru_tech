import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";

const webServices = [
  {
    id: "hms-01",
    title: "Hospital Management Systems",
    description: "Full-scale ERPs for healthcare: patient records, billing, pharmacy integration, and doctor scheduling.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
    features: ["HIPAA Compliance", "Telemedicine Ready", "Inventory Tracking"]
  },
  {
    id: "sms-02",
    title: "School Management Systems",
    description: "Cloud-based portals for student grading, fee management, attendance, and parent-teacher communication.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
    features: ["Student Portals", "LMS Integration", "Auto-Report Cards"]
  },
  {
    id: "min-03",
    title: "Ministry & Govt Portals",
    description: "High-security websites designed for government agencies and ministries with public service integration.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200",
    features: ["G2C Services", "Public Announcements", "Document Repositories"]
  },
  {
    id: "eco-04",
    title: "E-commerce & Booking",
    description: "Advanced retail platforms, hotel reservation engines, and restaurant table booking systems.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200",
    features: ["Payment Gateways", "Real-time Booking", "Inventory Sync"]
  },
  {
    id: "brand-05",
    title: "Personal Brand & Landing Pages",
    description: "High-conversion landing pages and professional portfolios for speakers, CEOs, and influencers.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200",
    features: ["SEO Optimized", "Fast Loading", "Lead Capture"]
  }
];

export default async function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-neutral-900">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000" 
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          alt="Web Development Background"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-black md:text-7xl tracking-tighter">
            NEXT-GEN <span className="text-blue-500">SYSTEMS</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-xl text-neutral-300">
            Building robust, scalable digital infrastructure for institutions and global brands.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto max-w-7xl px-4 py-24">
        <div className="grid gap-16">
          {webServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col gap-12 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-neutral-200 shadow-2xl dark:border-neutral-800">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Premium Solution</span>
                <h2 className="mt-4 text-4xl font-bold">{service.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-medium">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-10 rounded-full bg-neutral-900 px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-blue-500">
                  Consult for Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Callout */}
      <section className="bg-neutral-50 py-20 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold">Our Modern Tech Stack</h3>
          <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
             <span className="text-xl font-bold">React / Next.js</span>
             <span className="text-xl font-bold">Node.js</span>
             <span className="text-xl font-bold">PostgreSQL</span>
             <span className="text-xl font-bold">Firebase</span>
             <span className="text-xl font-bold">Tailwind CSS</span>
          </div>
        </div>
      </section>
    </div>
  );
}