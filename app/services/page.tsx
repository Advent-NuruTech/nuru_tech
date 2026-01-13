"use client";

import { FaCode, FaPaintBrush, FaVideo, FaBullhorn, FaRobot, FaChartLine, FaGraduationCap } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Next-Gen Web Development",
      icon: <FaCode className="w-6 h-6 text-white" />,
      description: "Responsive, SEO-friendly websites built with modern tools",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Creative Design",
      icon: <FaPaintBrush className="w-6 h-6 text-white" />,
      description: "Branding, UI/UX, and digital graphics that impress",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Video Production",
      icon: <FaVideo className="w-6 h-6 text-white" />,
      description: "Professional videos for social media and business",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn className="w-6 h-6 text-white" />,
      description: "Grow your brand online with data-driven strategies",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      title: "AI & Automation",
      icon: <FaRobot className="w-6 h-6 text-white" />,
      description: "Smart solutions to automate and optimize your business",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Business Analytics",
      icon: <FaChartLine className="w-6 h-6 text-white" />,
      description: "Insights and analytics to drive smarter decisions",
      gradient: "from-gray-500 to-blue-500",
    },
    {
      title: "Tech Training",
      icon: <FaGraduationCap className="w-6 h-6 text-white" />,
      description: "Upskill your team with practical tech knowledge",
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Simple, effective, and innovative digital solutions for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-6 flex flex-col items-start hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${service.gradient}`}
              >
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
