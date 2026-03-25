import React from "react";

const trainingModules = [
  {
    id: "ai-01",
    title: "AI Mastery: Claude, ChatGPT & Grok",
    description: "Deep-dive into prompt engineering and agent creation. Learn to use Claude 3.5 for coding, ChatGPT for strategy, and Grok for real-time data.",
    image: "https://images.unsplash.com/photo-1675557009875-436f0978964e?q=80&w=1200",
    tools: ["Prompt Engineering", "Agentic Workflows", "Model Selection"]
  },
  {
    id: "prod-02",
    title: "NotebookLM & Google Workspace",
    description: "Transform how you handle information. Use NotebookLM to chat with your documents and Google Workspace for seamless cloud collaboration.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
    tools: ["Data Synthesis", "Docs & Sheets Automation", "Drive Mgmt"]
  },
  {
    id: "pro-03",
    title: "Manus & Anti-Gravity Workflows",
    description: "Operate like a pro with 'Manus' level efficiency. Learn the 'Anti-Gravity' philosophy to automate mundane tasks and focus on high-leverage work.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    tools: ["Anti-Gravity Methods", "Manus Pro", "System Design"]
  },
  {
    id: "dev-04",
    title: "Coding with AI (Cursor & Claude)",
    description: "Learn to build software at 10x speed. Master the art of 'AI-Pair Programming' using specialized coding LLMs and modern tech stacks.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200",
    tools: ["Cursor.ai", "Claude Code", "Deployment"]
  }
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Education Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-widest backdrop-blur-md">
            Future-Proof Your Team
          </span>
          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            MODERN <span className="text-blue-300">STACK</span> TRAINING
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Don't just use AI—master it. We provide professional training in the tools that are redefining productivity in 2026.
          </p>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="container mx-auto max-w-6xl px-4 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold dark:text-white underline decoration-blue-500 underline-offset-8">
          The Curriculum
        </h2>
        
        <div className="space-y-20">
          {trainingModules.map((module, index) => (
            <div key={module.id} className="flex flex-col gap-10 lg:flex-row">
              <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-3xl lg:w-96">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 rounded-lg bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  Module 0{index + 1}
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">{module.title}</h3>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  {module.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {module.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-neutral-300 bg-white px-4 py-1 text-sm font-medium dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certification Callout */}
      <section className="container mx-auto mb-24 max-w-5xl rounded-[3rem] bg-neutral-900 p-12 text-center text-white dark:bg-blue-600">
        <h2 className="text-3xl font-bold">Become a Pro User</h2>
        <p className="mt-4 text-blue-100">
          Our training includes hands-on workshops and real-world project simulations.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-white px-8 py-4 font-bold text-neutral-900 transition hover:bg-neutral-200">
            Book Team Training
          </button>
          <button className="rounded-full border border-white/30 px-8 py-4 font-bold transition hover:bg-white/10">
            View Syllabus
          </button>
        </div>
      </section>
    </div>
  );
}