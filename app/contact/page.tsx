import ContactForm from "@/components/ContactForm";
import WhatsAppBubble from "@/components/WhatsAppBubble"; 
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
            Let&apos;s Build Together
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s start a conversation about your next project.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {/* Contact Information Card */}
          <div className="lg:col-span-1">
            <div className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start group/item">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl mr-4 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Email Us
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        nurutech36@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start group/item">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl mr-4 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Call Us
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                        +254 105 178 685
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start group/item">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl mr-4 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Visit Us
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        Kisumu, Kenya
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Africa
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-neutral-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                    Business Hours
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-neutral-700/50 hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-200">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Sunday - Thursday</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">6:00 PM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-neutral-700/50 hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-200">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Friday</span>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">6:00 PM - 12:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-neutral-700/50 hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-200">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Saturday</span>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold">Closed - Sabbath</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-2">
            <div className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-2xl mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Fill out the form below and we&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a free 30-minute consultation with our experts to discuss your project needs and get a personalized roadmap.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/booking"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                Book a Free Consultation
              </a>
              <a
                href="/faq"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        <WhatsAppBubble />
        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚀",
              title: "Quick Response",
              description: "We typically reply within 2-4 hours during business days"
            },
            {
              icon: "💬",
              title: "24/6 Support",
              description: "Emergency support available for existing clients"
            },
            {
              icon: "🌍",
              title: "Global Reach",
              description: "Serving clients worldwide with remote collaboration"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}