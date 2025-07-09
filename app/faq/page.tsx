"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide Web Development, Mobile App Development, AI Integration, IT Consultancy, and Digital Transformation services.",
    link: "/services",
  },
  {
    question: "How can I contact NuruTech?",
    answer:
      "You can reach us via the contact form on the Contact page, or by calling the number or emailing the address listed at the bottom of our site.",
    link: "/contact",
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Absolutely. We offer 24/7 support plans, including maintenance, bug fixes, and performance optimizations.",
  },
  {
    question: "Can you work with small businesses or startups?",
    answer:
      "Yes! Whether you're a startup or a large enterprise, we tailor solutions that fit your specific goals and budget.",
  },
  {
    question: "Do you build e-commerce platforms?",
    answer:
      "Yes, we develop custom, scalable e-commerce platforms with payment integrations and inventory management.",
  },
  {
    question: "Are your solutions mobile-friendly?",
    answer:
      "All of our websites and applications are responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern tech stacks like React, Next.js, Firebase, Tailwind CSS, Node.js, and AI/ML APIs.",
  },
];

export default function FAQPage() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
      {showMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-6 py-3 rounded shadow-md z-50 transition-all duration-300 ease-in-out">
          🙏 Thank you for visiting our FAQ page. We’re grateful you chose NuruTech!
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-600"
            >
              <button
                onClick={() => toggleAnswer(idx)}
                className="text-left w-full text-xl font-semibold text-gray-800 mb-2 focus:outline-none"
              >
                {faq.question}
              </button>

              {expanded === idx && (
                <p className="text-gray-600 mt-2">
                  {faq.answer}
                  {faq.link && (
                    <span className="block mt-2">
                      <Link
                        href={faq.link}
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        Learn more here
                      </Link>
                    </span>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          Still have a question?{" "}
          <a href="/contact" className="text-blue-600 underline hover:text-blue-800">
            Contact us here
          </a>
        </div>
      </div>
    </div>
  );
}
