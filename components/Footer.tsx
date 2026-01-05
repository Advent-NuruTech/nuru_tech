"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "#" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" }
  ];

  const services = [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile Apps", href: "/services#mobile" },
    { name: "AI Solutions", href: "/services#ai" },
    { name: "Digital Marketing", href: "/services#marketing" },
    { name: "Consulting", href: "/services#consulting" },
    { name: "Training", href: "/services#training" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 border-t border-gray-700/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                NuruTech
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Empowering businesses with cutting-edge digital solutions and innovative technology.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-2 block transform hover:bg-white/5 rounded-lg px-2 py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-2 block transform hover:bg-white/5 rounded-lg px-2 py-1"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">Kisumu, Kenya - Africa</span>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:nurutech36@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                    nurutech36@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+254105178685" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                    +254 105 178 685
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61576843971047", color: "from-blue-500 to-blue-600" },
                    { icon: FaTwitter, href: "#", color: "from-cyan-500 to-blue-500" },
                    { icon: FaLinkedinIn, href: "#", color: "from-blue-600 to-blue-700" },
                    { icon: FaInstagram, href: "#", color: "from-pink-500 to-purple-500" },
                    { icon: FaYoutube, href: "https://www.youtube.com/@NuruTech-h5d", color: "from-red-500 to-red-600" },
                    { icon: FaWhatsapp, href: "https://wa.me/254105178685", color: "from-green-500 to-emerald-500" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 backdrop-blur-sm`}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {year} Advent NuruTech. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Empowering you with smart technology solutions.
              </p>
            </div>

            {/* Blessing Note */}
            <div className="text-center">
              <p className="text-sm text-gray-300 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                🙏 God bless you for visiting us. Maranatha
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 backdrop-blur-sm border border-white/10 group"
            >
              <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              Ready to start your next project? Let&apos;s talk!
            </p>
            <div className="flex gap-3">
              <a 
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get Started
              </a>
              <a 
                href="/services"
                className="px-6 py-2 border border-white/20 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}