// components/QuoteCarousel.tsx
"use client";

import { useEffect, useState } from 'react';

const quotes = [
  {
    id: 1,
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    role: "Founder of WordPress"
  },
  {
    id: 2,
    text: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
    role: "Theoretical Physicist"
  },
  {
    id: 3,
    text: "Any sufficiently advanced technology is equivalent to magic.",
    author: "Arthur C. Clarke",
    role: "Science Fiction Writer"
  },
  {
    id: 4,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    role: "Co-founder of Apple"
  },
  {
    id: 5,
    text: "The digital revolution is far more significant than the invention of writing or even of printing.",
    author: "Douglas Engelbart",
    role: "Computer Pioneer"
  },
  {
    id: 6,
    text: "We are changing the world with technology.",
    author: "Bill Gates",
    role: "Co-founder of Microsoft"
  },
  {
    id: 7,
    text: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    author: "Larry Page",
    role: "Co-founder of Google"
  },
  {
    id: 8,
    text: "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart.",
    author: "Steve Jobs",
    role: "Co-founder of Apple"
  },
  {
    id: 9,
    text: "The great growling engine of change – technology.",
    author: "Alvin Toffler",
    role: "Futurist & Writer"
  },
  {
    id: 10,
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist"
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