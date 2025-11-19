"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  FileText, 
  Cookie, 
  CreditCard, 
  AlertTriangle, 
  Clock,
  ArrowRight
} from "lucide-react";

export default function PoliciesPage() {
  const policies = [
    {
      title: "Terms and Conditions",
      description: "Rules and regulations for using our services, websites, and digital products.",
      icon: <FileText className="w-8 h-8" />,
      href: "policy/Terms_and_conditions",
      color: "from-blue-600 to-purple-600",
      badge: "Legal",
      lastUpdated: "17 Nov 2025",
      sections: ["Service Usage", "Intellectual Property", "Liability", "Governance"]
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, store, and protect your personal information and data.",
      icon: <Shield className="w-8 h-8" />,
      href: "policy/privacy_policy",
      color: "from-green-600 to-blue-600",
      badge: "Data Protection",
      lastUpdated: "17 Nov 2025",
      sections: ["Data Collection", "Usage", "Security", "Your Rights"]
    },
    {
      title: "Cookie Policy",
      description: "Information about cookies and tracking technologies we use on our platforms.",
      icon: <Cookie className="w-8 h-8" />,
      href: "/policy/Cookies",
      color: "from-amber-600 to-orange-600",
      badge: "Tracking",
      lastUpdated: "17 Nov 2025",
      sections: ["Cookie Types", "Management", "Preferences", "Third-Party"]
    },
    {
      title: "Refund and Cancellation Policy",
      description: "Our policies regarding payments, refunds, and project cancellations.",
      icon: <CreditCard className="w-8 h-8" />,
      href: "policy/Refund_and_Cancellation",
      color: "from-indigo-600 to-purple-600",
      badge: "Payments",
      lastUpdated: "17 Nov 2025",
      sections: ["Eligibility", "Non-Refundable", "Process", "Disputes"]
    },
    {
      title: "Disclaimer",
      description: "Limitations of liability and important legal disclaimers for our services.",
      icon: <AlertTriangle className="w-8 h-8" />,
      href: "policy/Disclaimer",
      color: "from-orange-600 to-red-600",
      badge: "Liability",
      lastUpdated: "17 Nov 2025",
      sections: ["No Warranty", "Third-Party", "Limitations", "AI Systems"]
    },
    {
      title: "Service Level Agreement",
      description: "Guaranteed service levels, support availability, and performance commitments.",
      icon: <Clock className="w-8 h-8" />,
      href: "policy/service_level_agreement",
      color: "from-teal-600 to-cyan-600",
      badge: "Service",
      lastUpdated: "17 Nov 2025",
      sections: ["Uptime", "Support", "Response Times", "Maintenance"]
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></span>
            Legal & Policy Documentation
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 mb-6 leading-tight">
            Policies
          </h1>
          
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-8 max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
  Comprehensive documentation of Advent NuruTech&apos;s policies, terms, and legal agreements. 
  Stay informed about how we protect your data, deliver our services, and ensure transparency.
</p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Last Comprehensive Update:</span>
                <span>17 November 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={policy.href}>
                <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${policy.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                        {policy.icon}
                      </div>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                        {policy.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{policy.title}</h3>
                    <p className="text-white/90 text-sm">{policy.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4 flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {policy.sections.map((section, sectionIndex) => (
                          <span 
                            key={sectionIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {section}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-neutral-700">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Updated {policy.lastUpdated}
                      </span>
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-3 transition-all">
                        View Policy
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Policy Updates & Changes
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              We regularly review and update our policies to ensure compliance with international standards, 
              improve transparency, and adapt to evolving technology and legal requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-semibold text-white mb-2">Regular Reviews</h3>
                <p className="text-purple-100 text-sm">
                  Policies reviewed quarterly for updates and improvements
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl mb-2">🔔</div>
                <h3 className="font-semibold text-white mb-2">Change Notifications</h3>
                <p className="text-purple-100 text-sm">
                  Significant changes communicated to active users
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-semibold text-white mb-2">Global Compliance</h3>
                <p className="text-purple-100 text-sm">
                  Designed to meet international standards and regulations
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-neutral-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Need Help?</h4>
            </div>
         <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
  If you have questions about any of our policies or need clarification on specific terms, 
  don&apos;t hesitate to reach out to our support team.
</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                href="/faq"
                className="px-6 py-3 border border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 font-semibold rounded-xl transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}