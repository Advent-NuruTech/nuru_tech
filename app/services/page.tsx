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
      tech: ["Next.js", "React", "TypeScript", "GraphQL", "Supabase", "Firebase"]
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
      tech: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"]
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
      tech: ["Photoshop", "Illustrator", "InDesign", "Figma", "Canva", "After Effects"]
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
      tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Blender", "Audition"]
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
      tech: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Hootsuite", "Meta Business"]
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
      tech: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Hugging Face"]
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
      tech: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"]
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
      tech: ["JavaScript", "Python", "React", "AWS", "Figma", "Data Analysis"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Comprehensive Digital Solutions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From concept to execution, we provide end-to-end digital services to help your business thrive in the modern landscape.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl bg-white dark:bg-neutral-900 shadow-lg border border-gray-100 dark:border-neutral-800 flex flex-col h-full"
          >
            <div className="flex items-start mb-4">
              <div className="text-3xl mr-3">
                {service.title.split(' ')[0]}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {service.title.split(' ').slice(1).join(' ')}
                </h2>
                <p className="text-blue-600 dark:text-purple-400 font-medium text-sm">
                  {service.description}
                </p>
              </div>
            </div>
            
            <ul className="space-y-2 mb-4 flex-grow">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 mt-auto">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">TECHNOLOGIES WE USE</h3>
              <div className="flex flex-wrap gap-1.5">
                {service.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-neutral-800 text-xs rounded-full text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Our Development Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "Requirement analysis & planning" },
            { step: "02", title: "Design", desc: "UI/UX prototyping & architecture" },
            { step: "03", title: "Development", desc: "Agile implementation & testing" },
            { step: "04", title: "Deployment", desc: "Launch & continuous improvement" }
          ].map((item, index) => (
            <div key={index} className="text-center p-4">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-purple-900 flex items-center justify-center text-xl font-bold text-blue-600 dark:text-purple-400">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center bg-white dark:bg-neutral-900 rounded-xl p-12 shadow-lg border border-gray-100 dark:border-neutral-800">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you need a stunning website, powerful mobile app, or comprehensive digital strategy, we have the expertise to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/contact" 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
          >
            Get a Free Consultation
          </a>
          <a 
            href="/portfolio" 
            className="px-8 py-3 border border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all"
          >
            View Our Work
          </a>
        </div>
       <p>Let&apos;s build something amazing together!</p>
      </div>

    </div>
  );
}