"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, Phone, Globe, Shield, Lock, Eye, Database } from "lucide-react";

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
      title: "1. Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: `
        We may collect the following information depending on the service you use:

        1.1 Personal Information
        • Full name
        • Email address
        • Phone number
        • Business details
        • Physical location or address (optional)
        • Usernames or account IDs

        1.2 Technical Data
        • IP address
        • Device type and operating system
        • Browser type
        • App usage data
        • Access times and pages viewed

        1.3 Account Information
        For services like websites, dashboards, and chatbots:
        • Login details
        • Activity logs
        • Preferences
        • Uploaded files or media

        1.4 Payment Information
        • Mpesa transaction details
        • Bank transfer confirmations
        • Invoice records
        (Note: We do not store debit/credit card numbers.)

        1.5 Communication Data
        • WhatsApp messages (integrations)
        • Emails
        • Chats with AI or support
        • Feedback and survey responses

        1.6 Content You Provide
        • Images
        • Videos
        • Business content
        • Product information
        • Any data supplied for project development
      `
    },
    {
      title: "2. How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: `
        We use collected information to provide high-quality services, including:

        2.1 To Deliver Our Services
        • Build websites, apps, chatbots, and AI tools
        • Set up accounts and user systems
        • Maintain and improve platform functionality

        2.2 To Communicate With You
        • Project updates
        • Technical support
        • Billing and payment notices
        • Alerts and notifications

        2.3 To Improve Performance
        • Monitor system metrics
        • Enhance user experience
        • Fix bugs and improve design

        2.4 For Security
        • Verify identity
        • Detect fraud or misuse
        • Protect data integrity

        2.5 Legal Compliance
        • Respond to legal requests
        • Maintain business records
      `
    },
    {
      title: "3. Legal Basis for Processing",
      icon: <Shield className="w-5 h-5" />,
      content: `
        We process your information based on:
        • Your consent
        • Contractual obligations
        • Legitimate business interests
        • Compliance with the law

        (For International Compliance)
      `
    },
    {
      title: "4. Sharing Your Information",
      icon: <Lock className="w-5 h-5" />,
      content: `
        We do not sell or rent your personal data.

        We may share data only with:
        • Trusted service providers (hosting, Firebase, WhatsApp API, payment gateways)
        • Developers within Advent NuruTech involved in your project
        • Legal authorities when required by law
        • Third-party integrations necessary to deliver your system

        All third parties are required to follow strict data protection rules.
      `
    },
    {
      title: "5. Data Storage & Retention",
      icon: <Database className="w-5 h-5" />,
      content: `
        We store your data securely for as long as:
        • You use our services
        • Your account is active
        • Required for legal or business purposes

        Once data is no longer needed, we securely delete or anonymize it.
      `
    },
    {
      title: "6. How We Protect Your Data",
      icon: <Shield className="w-5 h-5" />,
      content: `
        We implement strong security measures including:
        • Encrypted connections (HTTPS, SSL)
        • Secure database practices
        • Password hashing
        • Limited access control
        • Regular system audits
        • Compliance with privacy laws

        However, no digital system is 100% secure. Users are encouraged to use strong passwords and secure their accounts.
      `
    },
    {
      title: "7. Your Rights",
      icon: <Eye className="w-5 h-5" />,
      content: `
        Depending on your region, you may have these rights:
        • Access your data
        • Correct inaccurate information
        • Request deletion
        • Limit processing
        • Withdraw consent
        • Receive a copy of your data

        To exercise these rights, contact us at adventnurutech@gmail.com
      `
    },
    {
      title: "8. Cookies & Tracking Technologies",
      icon: <Lock className="w-5 h-5" />,
      content: `
        We may use:
        • Cookies
        • Analytics tools
        • Session tracking

        These help us improve performance and personalize user experience.
        You can disable cookies in your browser settings.
      `
    },
    {
      title: "9. WhatsApp, AI & Chatbot Privacy",
      icon: <Database className="w-5 h-5" />,
      content: `
        When using Advent NuruTech chatbots:

        We may process:
        • Chat messages
        • Names or profile data
        • User behavior (optional)

        AI models may temporarily process your inputs to generate responses but do not store conversations permanently, unless explicitly stated for personalized services.
      `
    },
    {
      title: "10. Third-Party Services",
      icon: <Shield className="w-5 h-5" />,
      content: `
        Our systems may integrate with external tools such as:
        • OpenAI
        • Firebase
        • Google Cloud
        • WhatsApp Business API
        • Payment APIs
        • Hosting servers

        These third parties have their own privacy policies.
        We are not responsible for how they handle data, but we choose reputable providers.
      `
    },
    {
      title: "11. Children's Privacy",
      icon: <Lock className="w-5 h-5" />,
      content: `
        Our services are not intended for children under 13 unless part of a supervised educational program.
        We do not knowingly collect data from children.
      `
    },
    {
      title: "12. International Data Transfers",
      icon: <Globe className="w-5 h-5" />,
      content: `
        If your data is transferred outside Kenya, we ensure adequate protection by using:
        • Encrypted systems
        • Verified secure servers
        • Contractual safeguards
      `
    },
    {
      title: "13. Changes to This Privacy Policy",
      icon: <Eye className="w-5 h-5" />,
      content: `
        We may update this Privacy Policy at any time.
        Revised updates will be posted on our website with the date above.
        Continued use of our services means you accept the changed policy.
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
            Privacy & Data Protection
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 leading-tight">
          Privacy Policy
          </h1>
          
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Advent NuruTech (&quot;we&quot;, &quot;our&quot;, or &quot;the Company&quot;) is committed to protecting the privacy of our clients, users, and visitors. This Privacy Policy explains how we collect, use, store, protect, and share your information when you use any of our services.
           </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Last Updated:</span>
                <span>17 November 2025</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg">
              <p className="text-indigo-800 dark:text-indigo-200 text-center font-medium">
                By accessing or using our platforms, you agree to the practices outlined in this Privacy Policy.
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
              14. Contact Information
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
               If you have questions, requests, or concerns about your privacy, contact us:
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
              <Shield className="w-5 h-5 text-green-600" />
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Your Privacy Matters</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                This Privacy Policy was last updated on November 17, 2025. We regularly review and update our privacy practices to ensure compliance with international standards and protect your data.
           </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}