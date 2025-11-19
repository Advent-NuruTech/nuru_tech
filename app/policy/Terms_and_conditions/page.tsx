"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, Phone, Globe, CreditCard } from "lucide-react";

export default function RefundPolicyPage() {
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
      title: "1. Definitions",
      content: `
        "Client/User" – Any individual or business using Advent NuruTech products or services.

        "Services" – Includes web development, app development, AI chatbot solutions, digital tools, content creation, consultancy, training, and any other offered service.

        "Platform" – Advent NuruTech websites, apps, dashboards, chatbots, systems, and tools.

        "Agreement" – These Terms & Conditions.
      `
    },
    {
      title: "2. Use of Our Services",
      content: `
        By using our platform or hiring our services, you agree that:

        • You will use our services lawfully and ethically.
        • You will not misuse, hack, or attempt unauthorized access to any system.
        • You will provide accurate and up-to-date information where required.
        • We reserve the right to suspend or terminate access for violations.
      `
    },
    {
      title: "3. Service Delivery & Project Terms",
      content: `
        3.1 Scope of Work
        • All projects will follow a mutually agreed proposal, quotation, or written agreement.
        • Any additional features requested after agreement may attract extra fees.

        3.2 Timelines
        Project timelines depend on:
        • Client responsiveness
        • Availability of required content (photos, texts, product list, media)
        • Technical complexity
        • Delays caused by the client extend the timeline accordingly.

        3.3 Payments
        • Payment terms will be clearly stated in the official quotation.
        • Deposits are non-refundable.
        • Work begins only after the required upfront payment is made.
        • Completed work will be handed over after final payment.

        3.4 Refund Policy
        Due to the nature of digital services:
        • No refunds are provided for work already started, delivered, or deployed.
        • Refunds may be considered only if no work has been initiated.
      `
    },
    {
      title: "4. Client Responsibilities",
      content: `
        The client agrees to:
        • Provide all necessary materials (logos, text, images, business details).
        • Respond promptly to communication.
        • Review drafts and provide feedback on time.
        • Ensure that all content provided does not violate copyright or any laws.

        Advent NuruTech is not liable for copyrighted or illegal content supplied by the client.
      `
    },
    {
      title: "5. Intellectual Property & Ownership",
      content: `
        5.1 Ownership Rights
        Unless agreed otherwise in writing:
        • All source code, backend structures, AI prompts, and proprietary systems remain the property of Advent NuruTech.
        • The client receives a license to use the final product for their business.

        5.2 Client Content
        Content provided by the client remains theirs. We only use it to deliver the project.

        5.3 Portfolio Rights
        Advent NuruTech may showcase completed work in portfolios or case studies unless the client requests otherwise in writing.
      `
    },
    {
      title: "6. Hosting, Third-Party Tools & Integrations",
      content: `
        Some services may use third-party tools such as:
        • Firebase
        • WhatsApp API
        • Hosting providers
        • Payment APIs (Mpesa, Bank, Paybill)
        • OpenAI and other AI systems

        We are not responsible for downtime, price changes, or service failures caused by third-party providers.
      `
    },
    {
      title: "7. Maintenance & Support",
      content: `
        Maintenance is only included if stated in the agreement.
        Otherwise, support or updates after project completion are billed separately.
      `
    },
    {
      title: "8. Limitations of Liability",
      content: `
        Advent NuruTech will not be liable for:
        • Loss of data due to client mishandling
        • Misuse of the platform by staff or third parties
        • Losses caused by cyber-attacks beyond our control
        • Business losses or revenue loss from system downtime
        • Third-party service failures

        Clients are encouraged to maintain secure passwords and follow recommended safety practices.
      `
    },
    {
      title: "9. Termination",
      content: `
        We may suspend or terminate services if:
        • The client violates the Terms & Conditions
        • Payments are not made
        • Client engages in abusive or unethical behavior
        • Illegal activities are detected

        Upon termination, all unpaid balances remain due.
      `
    },
    {
      title: "10. Confidentiality",
      content: `
        We maintain strict confidentiality of all client data.
        However, we may disclose information if required by law or to protect against fraud or security threats.
      `
    },
    {
      title: "11. Communications",
      content: `
        By using our services, you consent to receive important service-related updates via:
        • Email
        • WhatsApp
        • SMS
        • Phone calls
        • In-app notifications
      `
    },
    {
      title: "12. Governing Law",
      content: `
        These Terms & Conditions follow the laws of Kenya and applicable international digital service regulations.
      `
    },
    {
      title: "13. Updates to Terms",
      content: `
        Advent NuruTech may update these Terms at any time.
        Continued use of our services means you accept the updated version.
      `
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></span>
            Legal Documentation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 leading-tight">
             Terms & Conditions
          </h1>
          
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Welcome to Advent NuruTech. These Terms and Conditions outline the rules and regulations for using our websites, mobile applications, software products, chatbot services, AI tools, and any digital or physical services provided by Advent NuruTech (&quot;we&quot;, &quot;our&quot;, &quot;the Company&quot;).
           </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Last Updated:</span>
                <span>17 November 2025</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg">
              <p className="text-indigo-800 dark:text-indigo-200 text-center font-medium">
                  By accessing or using our services, you agree to these Terms & Conditions. If you disagree with any part, you may not use our services.
             </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="space-y-4">
            {sections.slice(0, 6).map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-indigo-600 dark:text-indigo-400">
                     
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
            {sections.slice(6).map((section, index) => (
              <motion.div
                key={index + 6}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 6) * 0.1 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                <button
                  onClick={() => toggleSection(index + 6)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-purple-600 dark:text-purple-400">
                    
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  {openSections.includes(index + 6) ? (
                    <ChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
                  )}
                </button>
                
                {openSections.includes(index + 6) && (
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
          className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              12. Contact Information
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              For questions or issues regarding this policy:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Phone className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-indigo-100">+254 759 1672 209</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Mail className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-indigo-100">adventnurutech@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Globe className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <p className="text-indigo-100">adventnurutech.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        

       

        {/* Final Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-neutral-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Terms & Conditions Acknowledgment</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
             These Terms & Conditions were last updated on November 17, 2025 and are effective immediately.
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}