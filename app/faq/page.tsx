"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide comprehensive digital solutions including Web Development, Mobile App Development, AI Integration, Creative Design, Video Production, and Digital Transformation services.",
    link: "/services",
    category: "Services",
    icon: "🚀",
  },
  {
    question: "How can I contact NuruTech?",
    answer:
      "You can reach us via our contact form, email at nurutech36@gmail.com, or call us at +254 105 178 685. We&apos;re available Sunday-Thursday 6:00 PM - 6:00 PM.",
    link: "/contact",
    category: "General",
    icon: "📞",
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Absolutely! We offer comprehensive 24/7 support plans including maintenance, bug fixes, performance optimizations, and continuous improvement services.",
    category: "Support",
    icon: "🔧",
  },
  {
    question: "Can you work with small businesses or startups?",
    answer:
      "Yes! We specialize in working with businesses of all sizes. Whether you&apos;re a startup or a large enterprise, we tailor solutions that fit your specific goals and budget requirements.",
    category: "Partnership",
    icon: "💼",
  },
  {
    question: "Do you build e-commerce platforms?",
    answer:
      "Yes, we develop custom, scalable e-commerce platforms with secure payment integrations, inventory management, and advanced analytics to help grow your online business.",
    category: "Development",
    icon: "🛒",
  },
  {
    question: "Are your solutions mobile-friendly?",
    answer:
      "All of our websites and applications are fully responsive and optimized for mobile, tablet, and desktop devices, ensuring seamless user experiences across all platforms.",
    category: "Development",
    icon: "📱",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern tech stacks including React, Next.js, TypeScript, Node.js, Python, AI/ML APIs, and cloud platforms like AWS and Firebase to build robust solutions.",
    category: "Technology",
    icon: "⚡",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
    category: "Process",
    icon: "⏱️",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, we offer flexible maintenance packages including security updates, performance monitoring, content updates, and technical support to keep your digital products running smoothly.",
    category: "Support",
    icon: "🛡️",
  },
  {
    question: "Can you work with existing designs or systems?",
    answer:
      "Absolutely! We can work with your existing designs, integrate with current systems, or help modernize your legacy applications with our digital transformation expertise.",
    category: "Partnership",
    icon: "🎨",
  },
];

const categories = ["All", "Services", "Development", "Support", "Partnership", "Technology", "Process", "General"];

export default function FAQPage() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (previousPath.current === "/faq" && pathname !== "/faq") {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }
    previousPath.current = pathname;
  }, [pathname]);

  const toggleAnswer = (idx: number) => {
    setExpanded((prev) => (prev === idx ? null : idx));
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900">
      {/* Success Message */}
      {showMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 transition-all duration-300 ease-in-out backdrop-blur-sm border border-green-200/20">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🎉</div>
            <div>
              <div className="font-bold">Thank you for visiting!</div>
              <div className="text-sm text-green-100">We&apos;re grateful you chose NuruTech!</div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
            Frequently Asked Questions
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mb-6 leading-tight">
            Find Your Answers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get quick answers to common questions about our services, process, and partnership opportunities.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-6 mb-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                  faq.category === "Services"
                    ? "from-blue-500 to-cyan-500"
                    : faq.category === "Development"
                    ? "from-purple-500 to-pink-500"
                    : faq.category === "Support"
                    ? "from-green-500 to-emerald-500"
                    : faq.category === "Partnership"
                    ? "from-orange-500 to-red-500"
                    : faq.category === "Technology"
                    ? "from-indigo-500 to-purple-500"
                    : faq.category === "Process"
                    ? "from-yellow-500 to-amber-500"
                    : "from-gray-500 to-blue-500"
                }`}
              ></div>

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{faq.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-xs rounded-full text-gray-600 dark:text-gray-400 font-medium">
                        {faq.category}
                      </span>
                    </div>

                    <button onClick={() => toggleAnswer(idx)} className="text-left w-full focus:outline-none">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {faq.question}
                      </h3>
                    </button>

                    {expanded === idx && (
                      <div className="mt-4 space-y-3 animate-fadeIn">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                        {faq.link && (
                          <Link
                            href={faq.link}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 group/link"
                          >
                            <span>Learn more</span>
                            <svg
                              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => toggleAnswer(idx)}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-neutral-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all duration-200 group/button"
                  >
                    <svg
                      className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
                        expanded === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our team is here to help you with personalized answers and solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                Contact Us Directly
              </Link>
              <a
                href="mailto:nurutech36@gmail.com"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: "24/6", label: "Support Available" },
            { number: "2-4h", label: "Average Response Time" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "+", label: "Projects Completed" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
