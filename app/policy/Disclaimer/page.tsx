"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, Phone, Globe, AlertTriangle, Shield, Cpu, Users } from "lucide-react";

export default function DisclaimerPage() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const sections = [
    {
      title: "1. General Information Disclaimer",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `
        All content provided by Advent NuruTech is for:
        • Informational purposes
        • Educational purposes
        • Service demonstration
        • Business support

        We strive for accuracy, but we make no guarantees regarding the completeness, reliability, or accuracy of information provided across any platform.

        Use our services at your own discretion and responsibility.
      `
    },
    {
      title: "2. No Professional Advice",
      icon: <Shield className="w-5 h-5" />,
      content: `
        Unless expressly specified:
        • Our content does not constitute legal advice
        • Our content does not constitute medical advice
        • Our content does not constitute financial advice
        • Our content does not constitute theological or spiritual authority

        Always consult a qualified professional for matters requiring certified expertise.
      `
    },
    {
      title: "3. Technology & System Limitations",
      icon: <Cpu className="w-5 h-5" />,
      content: `
        While we work to provide high-quality digital systems, we cannot guarantee:
        • Zero downtime
        • Error-free software
        • 100% accurate AI responses
        • Instant availability
        • Uninterrupted access to third-party integrations

        Technology has inherent limitations beyond our control.
      `
    },
    {
      title: "4. Third-Party Services Disclaimer",
      icon: <Users className="w-5 h-5" />,
      content: `
        Advent NuruTech may integrate with external systems such as:
        • Firebase
        • Google Cloud
        • OpenAI / AI tools
        • WhatsApp Business API
        • Hosting companies
        • Payment platforms (Mpesa, Bank transfers, Paybill)

        We do not control, endorse, or guarantee:
        • Their reliability
        • Their policies
        • Their uptime
        • Their pricing changes
        • Their data handling

        Any issues arising from third-party platforms are not the liability of Advent NuruTech.
      `
    },
    {
      title: "5. AI, Chatbots & Automation Disclaimer",
      icon: <Cpu className="w-5 h-5" />,
      content: `
        Our AI systems (text, voice, WhatsApp bots, web bots, assistants):
        • Provide automated responses
        • May occasionally generate inaccurate or incomplete information
        • Should not be used as the sole basis for sensitive decisions
        • Are not substitutes for human judgement

        We are not responsible for any actions taken based on AI-generated output.
      `
    },
    {
      title: "6. Client Content Disclaimer",
      icon: <Shield className="w-5 h-5" />,
      content: `
        All content supplied by clients (images, text, videos, logos, documents) is assumed to be lawfully owned.

        Advent NuruTech is not responsible for:
        • Copyrighted content given by clients
        • Illegal or unethical material supplied by clients
        • Misrepresentation within client-provided content

        Clients bear full responsibility for the legality of their materials.
      `
    },
    {
      title: "7. Business Performance Disclaimer",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `
        Digital systems (websites, apps, chatbots) can enhance business operations, but we do not guarantee:
        • Increased sales
        • Higher customer engagement
        • Specific financial outcomes
        • Search engine ranking results
        • Social media growth

        Performance depends on many variables beyond our control.
      `
    },
    {
      title: "8. Liability Limitation",
      icon: <Shield className="w-5 h-5" />,
      content: `
        Advent NuruTech shall not be liable for:
        • Loss of income
        • Loss of data
        • Downtime losses
        • Security breaches caused by client negligence
        • Misuse of systems by staff or third parties
        • Any indirect, incidental, or consequential damages

        Your use of our platform signifies agreement to these limitations.
      `
    },
    {
      title: "9. Updates to This Disclaimer",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `
        We may update this Disclaimer from time to time.
        Continued use of our services implies acceptance of updated terms.
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></span>
            Legal Disclaimer
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 mb-6 leading-tight">
            Disclaimer
          </h1>
          
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-8 max-w-4xl mx-auto">
           
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
  The information, products, and services provided by Advent NuruTech (&quot;we&quot;, &quot;our&quot;, &quot;the Company&quot;)on our website, applications, digital platforms, and through our communication channels are intended for general information and professional service delivery.
      </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Last Updated:</span>
                <span>17 November 2025</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <p className="text-orange-800 dark:text-orange-200 text-center font-medium">
                By using our services, you agree to this Disclaimer.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Sections */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="space-y-4">
            {sections.slice(0, 5).map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-orange-600 dark:text-orange-400">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  {openSections.includes(index) ? (
                    <ChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
                  )}
                </button>
                
                {openSections.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {sections.slice(5).map((section, index) => (
              <motion.div
                key={index + 5}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 5) * 0.1 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-amber-500"></div>
                
                <button
                  onClick={() => toggleSection(index + 5)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-red-600 dark:text-red-400">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  {openSections.includes(index + 5) ? (
                    <ChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
                  )}
                </button>
                
                {openSections.includes(index + 5) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative bg-gradient-to-br from-orange-600 via-red-600 to-amber-600 rounded-3xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              10. Contact Information
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              For questions or concerns regarding this Disclaimer:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Phone className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-orange-100">+254 759 1672 209</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Mail className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-orange-100">adventnurutech@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Globe className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <p className="text-orange-100">adventnurutech.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-neutral-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Important Notice</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              This Disclaimer was last updated on November 17, 2025. Please review these terms carefully before using our services. Your continued use constitutes acceptance of these terms.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}