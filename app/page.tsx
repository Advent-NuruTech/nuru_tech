import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
           Advent NuruTech
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Innovative tech services tailored for your growth. We empower  with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      {updates.length > 0 && (
        <section className="py-16 px-4 bg-white dark:bg-neutral-900">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                Latest Updates
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay informed with our latest news, product updates, and technology insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {updates.slice(0, 6).map((update) => (
                <div
                  key={update.id}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-neutral-700 group flex flex-col h-full"
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                    {update.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                    {update.summary}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/updates#${update.id}`}
                      className="text-blue-600 dark:text-purple-400 inline-flex items-center text-sm font-medium hover:underline"
                    >
                      View Full Update
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {updates.length > 6 && (
              <div className="text-center mt-12">
                <Link
                  href="/updates"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  View All Updates
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-neutral-950">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Why Choose NuruTech?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional value through our unique approach to technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-neutral-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Fast & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300">Quick turnaround times with reliable, high-quality solutions that scale with your business.</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-neutral-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Experienced professionals dedicated to delivering innovative solutions tailored to your needs.</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-neutral-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Round-the-clock support to ensure your systems run smoothly and efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



