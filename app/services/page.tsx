export default function ServicesPage() {
  const services = [
    {
      title: "🌐 Next-Gen Web Development",
      description: "Elevate your digital presence with cutting-edge web solutions",
      details: [
        "Responsive, SEO-optimized websites built with Next.js 14+",
        "Tailwind CSS for pixel-perfect, customizable designs",
        "Headless CMS integration (Sanity, Contentful, Strapi)",
        "E-commerce solutions (Shopify, WooCommerce, custom)",
        "Web performance optimization & Core Web Vitals improvement",
        "Progressive Web Apps (PWA) for app-like experience",
        "Web3 & blockchain integration (Ethereum, Solana)"
      ],
      tech: ["Next.js", "React", "TypeScript", "GraphQL", "Supabase", "Firebase"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "📱 Cross-Platform Mobile Development",
      description: "Seamless mobile experiences across all devices",
      details: [
        "Native iOS (SwiftUI) and Android (Kotlin) development",
        "Cross-platform apps with React Native & Flutter",
        "Offline-first applications with robust sync capabilities",
        "Biometric authentication & advanced security features",
        "AR/VR integration (ARKit, ARCore, WebXR)",
        "IoT and wearable device integration",
        "App Store & Play Store deployment support"
      ],
      tech: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "🎨 Creative Design Services",
      description: "Visual storytelling that captivates your audience",
      details: [
        "Brand identity design (logos, color schemes, typography)",
        "Print design (posters, flyers, brochures, business cards)",
        "Digital graphics (social media assets, banners, ads)",
        "Photo editing & retouching",
        "Infographic design for complex data visualization",
        "Packaging design & labeling",
        "Illustration & digital art"
      ],
      tech: ["Photoshop", "Illustrator", "InDesign", "Figma", "Canva", "After Effects"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "🎬 Video Production & Editing",
      description: "Professional video content that tells your story",
      details: [
        "Corporate video production",
        "Product demo videos",
        "Social media video content (TikTok, Reels, Shorts)",
        "Video editing & post-production",
        "Motion graphics & animation",
        "Color correction & grading",
        "Audio enhancement & sound design"
      ],
      tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Blender", "Audition"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "📈 Digital Marketing Solutions",
      description: "Data-driven strategies to grow your business",
      details: [
        "SEO optimization & content strategy",
        "Social media marketing & management",
        "PPC advertising (Google Ads, Meta Ads)",
        "Email marketing campaigns",
        "Content marketing & blogging",
        "Influencer marketing strategies",
        "Conversion rate optimization"
      ],
      tech: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Hootsuite", "Meta Business"],
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      title: "🤖 AI & Automation Solutions",
      description: "Transform your business with intelligent automation",
      details: [
        "Custom LLM integration (GPT-4, Claude, Gemini)",
        "Computer vision & image recognition systems",
        "Predictive analytics & data modeling",
        "AI-powered chatbots & virtual assistants",
        "Document processing & intelligent data extraction",
        "Recommendation engines & personalization systems",
        "RPA (Robotic Process Automation) implementation"
      ],
      tech: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Hugging Face"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "🚀 Digital Transformation Consulting",
      description: "Strategic guidance for your technology journey",
      details: [
        "Tech stack evaluation & modernization plans",
        "Cloud migration strategy (AWS, GCP, Azure)",
        "DevOps & CI/CD pipeline implementation",
        "Microservices architecture design",
        "Legacy system modernization",
        "Data strategy & analytics implementation",
        "Team augmentation & tech leadership"
      ],
      tech: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"],
      gradient: "from-gray-500 to-blue-500"
    },
    {
      title: "🎓 Tech Training & Mentorship",
      description: "Empower your team with cutting-edge skills",
      details: [
        "Web development bootcamps (Frontend & Backend)",
        "Mobile app development courses",
        "UI/UX design workshops",
        "Digital marketing training",
        "Data science & AI fundamentals",
        "Cloud computing certification prep",
        "Corporate training programs"
      ],
      tech: ["JavaScript", "Python", "React", "AWS", "Figma", "Data Analysis"],
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
            Comprehensive Digital Services
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mb-6 leading-tight">
            Build The Future
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to execution, we provide end-to-end digital services to transform your ideas into exceptional digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col h-full"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    {service.title.split(' ')[0]}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1 leading-tight">
                      {service.title.split(' ').slice(1).join(' ')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 mr-3 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Technologies */}
                <div className="pt-4 border-t border-gray-100 dark:border-neutral-700 mt-auto">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-xs rounded-full text-gray-700 dark:text-gray-300 font-medium hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A streamlined approach that ensures quality, efficiency, and outstanding results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "Deep dive into requirements, planning, and architecture design" },
              { step: "02", title: "Design & Prototyping", desc: "UI/UX design, wireframing, and interactive prototyping" },
              { step: "03", title: "Development & Testing", desc: "Agile development with continuous integration and testing" },
              { step: "04", title: "Launch & Growth", desc: "Deployment, monitoring, and continuous improvement" }
            ].map((item, index) => (
              <div key={index} className="group text-center p-6 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-neutral-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 group-hover:from-purple-500 group-hover:to-pink-500 flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need a stunning website, powerful mobile app, or comprehensive digital strategy, we have the expertise to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                Get a Free Consultation
              </a>
              <a 
                href="/faq" 
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                FAQ
              </a>
            </div>
          <p className="text-blue-200 text-lg font-medium">
  Let&apos;s build something amazing together! 🚀
</p>
          </div>
        </div>
      </div>
    </div>
  );
}