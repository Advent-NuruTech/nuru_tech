"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, Phone, Globe, Cookie, Shield, BarChart3, Settings, Eye } from "lucide-react";

export default function CookiePolicyPage() {
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
      title: "1. What Are Cookies?",
      icon: <Cookie className="w-5 h-5" />,
      content: `
        Cookies are small text files stored on your device (computer, mobile phone, tablet) to help websites remember information about your visit.

        Cookies improve your browsing experience by:
        • Remembering your preferences
        • Keeping you logged in
        • Enhancing page performance
        • Providing analytics and security
      `
    },
    {
      title: "2. Types of Cookies We Use",
      icon: <Settings className="w-5 h-5" />,
      content: `
        Advent NuruTech uses different types of cookies based on functionality:

        2.1 Essential (Strictly Necessary) Cookies
        • These cookies are required for the website and dashboards to function properly.
        • They enable:
          - Login authentication
          - Page navigation
          - Security & access control
          - User session maintenance
        • You cannot disable these cookies, as they are critical for system operation.

        2.2 Performance & Analytics Cookies
        • These cookies help us understand how users interact with our platform.
        • They allow us to track:
          - Page visits
          - Traffic sources
          - User behavior patterns
          - Feature engagement
        • This data helps us improve performance and usability.
        • Examples include:
          - Google Analytics
          - Firebase Analytics
          - Custom analytics tools

        2.3 Functionality Cookies
        • These cookies remember your preferences, such as:
          - Language selection
          - Saved settings
          - Display preferences
          - User interface customizations
        • They improve your personalized experience.

        2.4 Advertising & Marketing Cookies (Optional)
        • These cookies help us deliver relevant ads or promotional content.
        • We may use them to:
          - Track ad performance
          - Measure campaign results
          - Optimize marketing strategies
        • These cookies are optional and may require user consent depending on your region.

        2.5 Third-Party Cookies
        • Our platform may include cookies placed by trusted partners such as:
          - Google
          - Firebase
          - Hosting providers
          - Payment gateways (Mpesa integrations)
          - OpenAI / chatbot systems
          - Embedded content (videos, maps)
        • We do not control third-party cookie behavior, but we only integrate reputable providers.
      `
    },
    {
      title: "3. Why We Use Cookies",
      icon: <BarChart3 className="w-5 h-5" />,
      content: `
        Advent NuruTech uses cookies for the following purposes:
        • Enhance website performance
        • Improve user experience
        • Secure account sessions
        • Analyze usage and traffic
        • Personalize content
        • Enable login and authentication
        • Support AI and chatbot functionalities
        • Provide dashboard features
        • Offer relevant marketing communication
      `
    },
    {
      title: "4. How You Can Manage Cookies",
      icon: <Settings className="w-5 h-5" />,
      content: `
        You have control over your cookie preferences.

        4.1 Browser Settings
        • You can block or delete cookies through your browser:
          - Chrome
          - Firefox
          - Safari
          - Brave
          - Edge
          - Opera
        • Blocking some cookies may affect website functionality.

        4.2 Cookie Banner/Preferences
        • If available, use the cookie settings popup on our website to:
          - Accept all cookies
          - Reject non-essential cookies
          - Customize preferences

        4.3 Opt-Out Tools
        • For advertising cookies, you may opt-out through tools like:
          - Google Ads Settings
          - YourOnlineChoices
          - Network Advertising Initiative
      `
    },
    {
      title: "5. Data Collected Through Cookies",
      icon: <Eye className="w-5 h-5" />,
      content: `
        Cookies may collect:
        • Device information
        • Session duration
        • IP address
        • Browser type
        • Pages visited
        • App interactions
        • User settings
        • Authentication tokens

        We do not store sensitive data such as passwords or payment information in cookies.
      `
    },
    {
      title: "6. How Long Cookies Are Stored",
      icon: <Shield className="w-5 h-5" />,
      content: `
        Cookies may be stored for:
        • Session cookies: Deleted when you close your browser
        • Persistent cookies: Stay on your device for a set period
        • Third-party cookies: Follow their own retention schedules

        We use reasonable durations based on necessity and legal requirements.
      `
    },
    {
      title: "7. Changes to This Cookie Policy",
      icon: <Cookie className="w-5 h-5" />,
      content: `
        We may update this Cookie Policy at any time.
        Changes will be posted on this page with an updated date above.
        Continued use of our services means you accept the revised policy.
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></span>
            Cookie & Tracking Policy
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-6 leading-tight">
            Cookie Policy
          </h1>
          
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 p-8 max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
  This Cookie Policy explains how Advent NuruTech (&quot;we&quot;, &quot;our&quot;, &quot;the Company&quot;) uses cookies and similar tracking technologies when you visit our website, platforms, dashboards, or applications.
</p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Last Updated:</span>
                <span>17 November 2025</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-amber-800 dark:text-amber-200 text-center font-medium">
                By using our services, you agree to our use of cookies as described in this policy.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Sections */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="space-y-4">
            {sections.slice(0, 4).map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-amber-600 dark:text-amber-400">
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
            {sections.slice(4).map((section, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 4) * 0.1 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                
                <button
                  onClick={() => toggleSection(index + 4)}
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
                  {openSections.includes(index + 4) ? (
                    <ChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
                  )}
                </button>
                
                {openSections.includes(index + 4) && (
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

        {/* Cookie Types Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            {
              icon: "🔒",
              title: "Essential Cookies",
              description: "Required for basic functionality",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: "📊",
              title: "Analytics Cookies",
              description: "Help us improve performance",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: "⚙️",
              title: "Functionality Cookies",
              description: "Remember your preferences",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: "🎯",
              title: "Marketing Cookies",
              description: "Optional advertising cookies",
              color: "from-orange-500 to-red-500"
            }
          ].map((type, index) => (
            <div key={index} className="text-center p-6 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white text-2xl`}>
                {type.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{type.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{type.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-3xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              8. Contact Information
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              If you have questions about our Cookie Policy or data practices, contact us at:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Phone className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-amber-100">+254 759 1672 209</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Mail className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-amber-100">adventnurutech@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Globe className="flex-shrink-0 text-white" size={20} />
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <p className="text-amber-100">adventnurutech.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Browser Settings Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-neutral-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Cookie Management</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
              You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies, though this may affect website functionality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["Chrome", "Firefox", "Safari", "Edge", "Brave"].map((browser) => (
                <span key={browser} className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">
                  {browser}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}