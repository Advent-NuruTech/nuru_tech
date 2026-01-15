// components/QuoteCarousel.tsx
"use client";

import { useEffect, useState } from 'react';
const quotes = [
  {
    id: 1,
    text: "We deliver end-to-end digital age solutions",
    author: "Advent Nurutech",
    role: "Services"
  },
  {
    id: 2,
    text: "Our solutions are built to work seamlessly across mobile, tablet, and desktop—ensuring consistent experiences everywhere.",
    author: "Advent NuruTech",
    role: "Responsive Design"
  },
  {
    id: 3,
    text: "We partner with startups, small businesses, and enterprises—crafting solutions that align with goals, scale, and budget.",
    author: "Advent NuruTech",
    role: "Partnerships"
  },
  {
    id: 4,
    text: "From simple websites to complex applications, we deliver with clear timelines and transparent processes.",
    author: "Advent NuruTech",
    role: "Project Delivery"
  },
  {
    id: 5,
    text: "We build scalable e-commerce platforms with secure payments,smart inventory management,and growth-focused analytics.",
    author: "Advent NuruTech",
    role: "E-Commerce"
  },
  {
    id: 6,
    text: "Our technology stack is modern and future-ready—React, Next.js, TypeScript, Python, AI APIs, and cloud platforms.",
    author: "Advent NuruTech",
    role: "Technology"
  },
  {
    id: 7,
    text: "Support doesn’t end at launch. We provide continuous maintenance, optimization, and 24/7 technical support.",
    author: "Advent NuruTech",
    role: "Support & Maintenance"
  },
  {
    id: 8,
    text: "We integrate seamlessly with existing systems and modernize legacy platforms through smart digital transformation.",
    author: "Advent NuruTech",
    role: "Digital Transformation"
  },
  {
    id: 9,
    text: "Every project is designed for performance, security, and long-term sustainability.",
    author: "Advent NuruTech",
    role: "Quality Assurance"
  },
  {
    id: 10,
    text: "We don’t just build products—we build digital foundations that help brands grow and thrive.",
    author: "Advent NuruTech",
    role: "Our Commitment"
  }
];


export default function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardPosition = (index: number) => {
    const total = quotes.length;
    const relativeIndex = (index - currentIndex + total) % total;
    
    switch (relativeIndex) {
      case 0: // Current card
        return "opacity-100 scale-100 translate-x-0 z-30 cursor-grab";
      case 1: // Next card
        return "opacity-70 scale-90 translate-x-20 md:translate-x-40 rotate-2 z-20 cursor-pointer";
      case total - 1: // Previous card
        return "opacity-70 scale-90 -translate-x-20 md:-translate-x-40 -rotate-2 z-20 cursor-pointer";
      default:
        return "opacity-0 scale-75 translate-x-0 z-10 pointer-events-none";
    }
  };

  return (
    <div 
      className="max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-48 md:h-40">
        {quotes.map((quote, index) => (
          <div
            key={quote.id}
            onClick={() => goToSlide(index)}
            className={`absolute inset-0 transform transition-all duration-700 ease-in-out ${getCardPosition(index)}`}
          >
            <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 dark:border-neutral-700/50 mx-auto max-w-2xl h-full flex flex-col justify-center hover:shadow-3xl transition-shadow duration-300">
             <div className="text-2xl md:text-3xl font-light text-gray-800 dark:text-white mb-4 leading-tight">
  {`"${quote.text}"`}
</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                — {quote.author}, <span className="text-gray-500 dark:text-gray-400">{quote.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              index === currentIndex 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8" 
                : "bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-400"
            }`}
            aria-label={`View quote ${index + 1}: ${quotes[index].text}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1">
        <div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isPaused ? '100%' : `${(currentIndex + 1) * (100 / quotes.length)}%` 
          }}
        />
      </div>
    </div>
  );
}