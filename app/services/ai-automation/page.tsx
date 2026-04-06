import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { db } from "@/lib/firebase";

const aiServices = [
  {
    id: "wa-01",
    title: "WhatsApp Personal & Business Assistants",
    description: "Automate your customer service or personal scheduling. We build intelligent bots that handle inquiries, bookings, and follow-ups 24/7 directly on WhatsApp.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200",
    tags: ["Auto-Reply", "CRM Integration", "Lead Gen"]
  },
  {
    id: "llm-02",
    title: "Custom LLM Implementations",
    description: "Harness the power of ChatGPT, Claude, and Gemini tuned to your specific business data. We build private interfaces for data analysis and content generation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    tags: ["Claude 3.5", "GPT-4o", "Private Data"]
  },
  {
    id: "flow-03",
    title: "Workflow Automations",
    description: "Connect your entire app stack. We automate repetitive tasks between Google Workspace, Slack, and your custom databases to save hundreds of hours.",
    image: "https://images.unsplash.com/photo-1518433278988-d9bca1a840d2?q=80&w=1200",
    tags: ["Zero Human Entry", "API Hooks", "Error-Free"]
  },
  {
    id: "data-04",
    title: "Predictive Analytics Dashboards",
    description: "Turn your raw data into visual foresight. We build custom dashboards that use AI to predict trends and optimize your inventory or staffing.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200",
    tags: ["Real-time Data", "BI Tools", "Forecasting"]
  }
];

export default async function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-blue-500">
      {/* Dynamic Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] bg-blue-600/20 blur-[120px] rounded-full" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            The Future of Efficiency
          </div>
          <h1 className="text-5xl font-black md:text-8xl tracking-tight">
            INTELLIGENT <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">AUTOMATION</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400">
            Stop doing manual work. We deploy autonomous agents and custom AI pipelines that work while you sleep.
          </p>
        </div>
      </section>

      {/* AI Service Cards */}
      <section className="container mx-auto max-w-7xl px-4 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {aiServices.map((service) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 transition-all hover:border-blue-500/50"
            >
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="mt-auto">
                 <Link href="/contact">
  <button className="flex items-center gap-2 font-bold text-blue-400 transition hover:text-blue-300">
    Deploy this Agent 
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  </button>
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Banner */}
      <section className="border-y border-neutral-800 bg-neutral-900/50 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
            Native Integration with
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-12 text-2xl font-black text-neutral-700">
            <span>OPENAI</span>
            <span>ANTHROPIC</span>
            <span>GOOGLE AI</span>
            <span>META</span>
            <span>X.AI (GROK)</span>
          </div>
        </div>
      </section>
    </div>
  );
}