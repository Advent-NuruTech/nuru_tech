import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import QuoteCarousel from "@/components/QuoteCarousel";

type Update = {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
};

export default async function HomePage() {
  const snapshot = await getDocs(collection(db, "updates"));
  const updates: Update[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Update, "id">),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section with Rotating Quotes */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-purple-900/20 py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/4 right-20 w-24 h-24 bg-purple-400 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-indigo-400 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
          <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-pink-400 rounded-full blur-3xl animate-pulse-slow delay-1500"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Innovating Tomorrow, Today
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6 leading-tight">
            Advent NuruTech
          </h1>
          
          {/* Rotating Quotes Carousel */}
          <div className="max-w-4xl mx-auto mb-8">
            <QuoteCarousel />
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with <span className="font-semibold text-blue-600 dark:text-blue-400">cutting-edge technology solutions</span> that drive growth, innovation, and digital transformation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:from-blue-700 hover:to-purple-700"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="/contact"
              className="group px-8 py-4 border-2 border-gray-300 dark:border-neutral-600 text-gray-800 dark:text-white font-semibold rounded-xl hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105 transform hover:border-blue-500 dark:hover:border-purple-500 hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-neutral-800"></div>
                ))}
              </div>
              <span>Trusted by 500+ Companies</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-neutral-600"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>99.9% Uptime Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-neutral-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Why Choose NuruTech?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              We deliver exceptional value through our unique approach to technology solutions, 
              combining innovation with reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Fast & Reliable",
                description: "Quick turnaround times with reliable, high-quality solutions that scale with your business needs and growth.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Expert Team",
                description: "Experienced professionals dedicated to delivering innovative solutions tailored to your specific requirements.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z",
                title: "24/6 Support",
                description: "Round-the-clock support to ensure your systems run smoothly and efficiently at all times.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-neutral-700 hover:border-transparent relative overflow-hidden"
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-white dark:from-neutral-700 dark:to-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-neutral-700">
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "99.9%", label: "Uptime Record" },
              { number: "10+", label: "Team Experts" },
              { number: "24/6", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Section with Horizontal Scrolling */}
      {updates.length > 0 && (
        <section className="py-20 px-4 bg-gray-50 dark:bg-neutral-950 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                LATEST NEWS
              </div>
              <Link href="/updates">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 hover:scale-105 transform transition-transform duration-300">
                  Latest Updates
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                Stay informed with our latest news, product updates, and technology insights that drive innovation.
              </p>
            </div>

            {/* Horizontal Scrolling Container */}
            <div className="relative">
              <div className="flex overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 dark:scrollbar-track-neutral-800 snap-x snap-mandatory scroll-smooth gap-6 px-4">
                {updates.slice(0, 6).map((update) => (
                  <div
                    key={update.id}
                    className="w-80 flex-shrink-0 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-neutral-700 group flex flex-col h-full hover:scale-105 transform snap-start relative overflow-hidden"
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {update.imageUrl && (
                      <div className="mb-4 rounded-xl overflow-hidden relative">
                        <Image 
                          src={update.imageUrl} 
                          alt={update.title}
                          width={320}
                          height={192}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2 relative z-10">
                      {update.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow relative z-10">
                      {update.summary}
                    </p>

                    <div className="mt-auto pt-4 relative z-10">
                      <Link
                        href={`/updates#${update.id}`}
                        className="inline-flex items-center text-blue-600 dark:text-purple-400 text-sm font-semibold hover:underline group/link"
                      >
                        View Full Update
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {updates.slice(0, Math.min(4, updates.length)).map((_, index) => (
                  <button
                    key={index}
                    className="w-3 h-3 rounded-full bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {updates.length > 6 && (
              <div className="text-center mt-12">
                <Link
                  href="/updates"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all font-semibold group hover:scale-105 transform"
                >
                  View All Updates
                  <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform <br />Your Business?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses that trust NuruTech for their digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="/services"
              className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Additional Trust Elements */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>50% discount Setup Fees</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}