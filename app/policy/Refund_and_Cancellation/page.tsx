"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, Phone, Globe, CreditCard, XCircle, CheckCircle, AlertCircle } from "lucide-react";

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
      title: "1. General Policy Overview",
      icon: <AlertCircle className="w-5 h-5" />,
      content: `
        Because our work involves custom digital development, design, and technical labor, Advent NuruTech maintains a strict but fair policy:

        ✅ Deposits are non-refundable
        ✅ Refunds are not issued for work already started, in progress, or completed
        ✅ Cancellations must be made in writing
      `
    },
    {
      title: "2. Payments & Deposits",
      icon: <CreditCard className="w-5 h-5" />,
      content: `
        2.1 Upfront Payment (Deposit)
        • All projects require a deposit before work begins.
        • Deposits are non-refundable under any circumstance because they cover:
          - Initial planning
          - Research and design
          - System setup
          - Server configurations
          - Reserved developer time

        2.2 Final Payments
        • The final balance must be cleared before handing over or deploying the project.
        • No refunds will be issued after project handover.
      `
    },
    {
      title: "3. Refund Eligibility",
      icon: <CheckCircle className="w-5 h-5" />,
      content: `
        A refund may only be considered under the following conditions:

        3.1 No Work Has Started
        • If the client requests a cancellation before any planning, research, design, or technical work has begun, a partial refund (excluding admin/processing fee) may be considered.

        3.2 Duplicate Payments
        • If you accidentally make a double payment, we will refund the extra amount.

        3.3 Service Unavailability (Very Rare)
        • If Advent NuruTech is unable to start the project due to internal issues, we will refund 100% of the deposit.
        • Note: This has never happened, but it is included for transparency.
      `
    },
    {
      title: "4. Non-Refundable Cases",
      icon: <XCircle className="w-5 h-5" />,
      content: `
        No refunds will be issued for:
        • Change of mind after work has started
        • Client delays causing discontinuation
        • Failure to provide required content
        • Failure to provide timely feedback
        • Scope changes after agreement
        • Third-party issues (hosting, domain, Firebase, WhatsApp API, Mpesa APIs, etc.)
        • Completed or partially completed work
        • Work paused for more than 30 days due to unresponsiveness
        • Abandoned or inactive projects
      `
    },
    {
      title: "5. Project Cancellation by the Client",
      icon: <AlertCircle className="w-5 h-5" />,
      content: `
        Clients may cancel a project at any time by sending a written request via:
        • Email
        • WhatsApp
        • Letter

        However:
        • Deposits will not be refunded
        • Payments for completed milestones will not be refunded
        • Any ongoing work will be halted immediately
        • If cancellation occurs after substantial work has been done, an additional fee may apply to cover labor already invested.
      `
    },
    {
      title: "6. Cancellation by Advent NuruTech",
      icon: <XCircle className="w-5 h-5" />,
      content: `
        We may cancel a project if:
        • Payments are not made on time
        • The client becomes unresponsive
        • The client violates terms or engages in unethical/illegal activity
        • The project compromises security or compliance

        In such cases:
        • No refunds will be given for completed work or deposits
        • Work done will not be handed over until pending balances are cleared
      `
    },
    {
      title: "7. Third-Party Fees",
      icon: <CreditCard className="w-5 h-5" />,
      content: `
        We do not refund costs paid to:
        • Domain providers
        • Hosting companies
        • Cloud providers (Firebase, Google Cloud)
        • SMS/WhatsApp API credits
        • Payment gateways
        • Licensing
        • AI API usage (OpenAI, etc.)

        These charges are controlled by external companies.
      `
    },
    {
      title: "8. Digital Products and Online Tools",
      icon: <CheckCircle className="w-5 h-5" />,
      content: `
        Products such as:
        • Templates
        • Digital files
        • Online courses
        • Software packages
        • AI tokens or agent setups

        Are not eligible for refunds once delivered due to their digital nature.
      `
    },
    {
      title: "9. Training Services",
      icon: <AlertCircle className="w-5 h-5" />,
      content: `
        Refunds are not provided for:
        • Missed sessions
        • Late attendance
        • Partial participation
        • Change of schedule by the client

        Sessions can be rescheduled with prior notice, subject to availability.
      `
    },
    {
      title: "10. Dispute Resolution",
      icon: <CheckCircle className="w-5 h-5" />,
      content: `
        If you believe you are owed a refund, contact us at:
        📧 adventnurutech@gmail.com
        📞 +254 759 1672 209

        We will investigate and reply within 5 business days.
      `
    },
    {
      title: "11. Policy Changes",
      icon: <AlertCircle className="w-5 h-5" />,
      content: `
        Advent NuruTech may update this policy at any time.
        Continued use of our services means acceptance of the updated version.
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
            Payment & Refund Policy
          </div>
          
          <h1 className="text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 leading-tight">
           Refund & Cancellation 
          </h1>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 leading-tight">
            Policy
          </h1>
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Thank you for choosing Advent NuruTech. This Refund and Cancellation Policy explains how cancellations, refunds, and project discontinuations are handled across all our services, including websites, apps, AI systems, chatbots, dashboards, training, and digital solutions.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Last Updated:</span>
                <span>17 November 2025</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg">
              <p className="text-indigo-800 dark:text-indigo-200 text-center font-medium">
                By purchasing or using our services, you agree to the terms below.
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
                      {section.icon}
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
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Policy Acknowledgment</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              This Refund & Cancellation Policy was last updated on November 17, 2025. By using our services, you acknowledge and agree to these terms. We recommend reviewing this policy periodically for updates.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}