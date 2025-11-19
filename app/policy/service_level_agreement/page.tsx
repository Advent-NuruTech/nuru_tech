"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, Phone, Globe, Shield, Clock, Wrench, AlertTriangle, CheckCircle, Server } from "lucide-react";

export default function SLAPage() {
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
      title: "1. Purpose of the SLA",
      icon: <CheckCircle className="w-5 h-5" />,
      content: `
        This SLA ensures:
        • Clear service expectations
        • Reliable system performance
        • Defined communication flow
        • Transparent maintenance procedures
        • Guaranteed support availability

        Our mission is to maintain high-quality, secure, and efficient digital systems.
      `
    },
    {
      title: "2. Scope of Services Covered",
      icon: <Server className="w-5 h-5" />,
      content: `
        This SLA applies to ALL products provided by Advent NuruTech, including:
        • Websites & web apps
        • Mobile apps
        • Admin dashboards
        • AI chatbots (WhatsApp, Web, SMS)
        • Custom software
        • Automation systems
        • Cloud integrations (Firebase, Google Cloud, APIs)
        • Hosting, domain support, and maintenance
      `
    },
    {
      title: "3. Service Availability Guarantee (Uptime)",
      icon: <Clock className="w-5 h-5" />,
      content: `
        For systems hosted and maintained by Advent NuruTech, we commit to:
        ✅ 99% Monthly Uptime Guarantee

        This uptime includes:
        • Website availability
        • Server uptime
        • Database responsiveness
        • Chatbot & API accessibility

        Excludes downtime caused by:
        • Client-hosted servers
        • Third-party failures (Google Cloud, Firebase, WhatsApp API, Mpesa API, Host Services)
        • Scheduled maintenance
        • Force majeure events
      `
    },
    {
      title: "4. Support Availability",
      icon: <Wrench className="w-5 h-5" />,
      content: `
        Advent NuruTech provides support through:
        📞 Phone
        📧 Email
        💬 WhatsApp
        🛠 Ticket/Support System (for enterprise clients)

        Support Hours:
        • Monday – Friday: 8:00 AM – 9:00 PM
        • Saturday: 8:00 AM – 6:00 PM
        • Sunday & Holidays: Emergency support only
      `
    },
    {
      title: "5. Response & Resolution Times",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `
        We prioritize issues based on severity:

        Critical
        • System down, major failure, payment issues, admin locked out
        • Response Time: 1 hour
        • Resolution Time: 4–12 hours

        High
        • Key feature broken, login issues
        • Response Time: 2–4 hours
        • Resolution Time: 12–48 hours

        Medium
        • Visual bugs, slow system, minor feature issue
        • Response Time: Same day
        • Resolution Time: 1–3 business days

        Low
        • UI improvements, small text changes, minor updates
        • Response Time: 24 hours
        • Resolution Time: 3–7 business days

        Resolution time may extend depending on complexity.
      `
    },
    {
      title: "6. Maintenance & Updates",
      icon: <Wrench className="w-5 h-5" />,
      content: `
        6.1 Scheduled Maintenance
        • We may perform scheduled maintenance to:
          - Upgrade servers
          - Improve security
          - Add new features
          - Fix bugs
          - Update libraries
        • We will notify clients at least 24 hours in advance.

        6.2 Emergency Maintenance
        • Performed without notice only when necessary (security, server risk, urgent bugs).
      `
    },
    {
      title: "7. Client Responsibilities",
      icon: <CheckCircle className="w-5 h-5" />,
      content: `
        To ensure optimal service, clients must:
        • Provide accurate information and content
        • Pay project and maintenance fees on time
        • Not share admin credentials with unauthorized persons
        • Report issues promptly
        • Follow security guidelines provided
        • Avoid illegal or harmful use of the system
        • Keep backups of personal content (if desired)
      `
    },
    {
      title: "8. Backup & Data Protection",
      icon: <Shield className="w-5 h-5" />,
      content: `
        Advent NuruTech maintains:
        ✅ Automated Daily Backups (for hosted systems)
        ✅ Secure storage & encryption
        ✅ Recovery options in case of system failure

        Backups are stored for 7–30 days, depending on the service plan.

        For client-hosted servers, backup responsibility lies with the client.
      `
    },
    {
      title: "9. Third-Party Services Limitation",
      icon: <Server className="w-5 h-5" />,
      content: `
        Advent NuruTech integrates external systems such as:
        • Google Cloud
        • Firebase
        • OpenAI
        • WhatsApp API
        • Payment gateways (Mpesa, Bank, Paybill)
        • Hosting providers

        We do not guarantee the uptime or performance of these services.
        Any outages caused by these providers are outside the SLA.
      `
    },
    {
      title: "10. Change Requests & System Enhancements",
      icon: <Wrench className="w-5 h-5" />,
      content: `
        • Small corrections (typos, small UI fixes, minor logic tweaks) are covered.
        • Major upgrades, new features, redesigns, or structural changes are billed separately.
        • Requests must be submitted in writing.
      `
    },
    {
      title: "11. Security Commitment",
      icon: <Shield className="w-5 h-5" />,
      content: `
        We implement strong security standards, including:
        • HTTPS/SSL
        • Encrypted databases
        • Access control
        • Regular updates
        • Vulnerability checks

        Clients must also secure their passwords and user accounts.
      `
    },
    {
      title: "12. Penalties or Compensation",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `
        If uptime falls below 99% due to our internal issue, the client is entitled to:
        • Extended maintenance period
        OR
        • Partial service credit on the next billing cycle

        Direct monetary refunds are not issued unless previously agreed.
      `
    },
    {
      title: "13. Termination of SLA",
      icon: <CheckCircle className="w-5 h-5" />,
      content: `
        This agreement may be terminated if:
        • Payment is overdue
        • The client violates Terms & Conditions
        • The client engages in illegal activity
        • The client becomes unresponsive for 30+ days
        • Both parties mutually agree

        Upon termination:
        • Access may be suspended
        • Pending fees must be cleared
        • Files may be handed over depending on the contract
      `
    },
    {
      title: "14. SLA Updates",
      icon: <Clock className="w-5 h-5" />,
      content: `
        We reserve the right to update this SLA at any time.
        Changes will be posted with the updated date.

        Continued use of our services means acceptance of the modifications.
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></span>
            Service Level Agreement
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mb-6 leading-tight">
            SLA
          </h1>
          
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              This Service Level Agreement (&quot;SLA&quot;) outlines the level of service Advent NuruTech (&quot;we&quot;, &quot;our&quot;, &quot;the Company&quot;) will provide to clients (&quot;you&quot;, &quot;your&quot;) for digital products, systems, and services delivered by Advent NuruTech.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Last Updated:</span>
                <span>17 November 2025</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg">
              <p className="text-teal-800 dark:text-teal-200 text-center font-medium">
                This SLA forms part of the general Terms & Conditions.
              </p>
            </div>
          </div>
        </div>

        {/* SLA Sections */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="space-y-4">
            {sections.slice(0, 7).map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-teal-600 dark:text-teal-400">
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
            {sections.slice(7).map((section, index) => (
              <motion.div
                key={index + 7}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 7) * 0.1 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                
                <button
                  onClick={() => toggleSection(index + 7)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-600 dark:text-cyan-400">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  {openSections.includes(index + 7) ? (
                    <ChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
                  )}
                </button>
                
                {openSections.includes(index + 7) && (
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
          transition={{ delay: 0.7 }}
          className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 rounded-3xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              15. Contact Information
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              For support, concerns, or emergencies:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
             
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Phone className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-teal-100">+254 759 1672 209</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Mail className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-teal-100">adventnurutech@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Globe className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <p className="text-teal-100">adventnurutech.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Commitment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-neutral-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Our Service Commitment</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              This Service Level Agreement was last updated on November 17, 2025. We are committed to providing reliable, secure, and high-performance digital services with transparent communication and guaranteed support availability.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}