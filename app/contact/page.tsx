import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Get In Touch
        </h1>
        <p>We&apos;re here to help!</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="p-8 rounded-xl bg-white dark:bg-neutral-900 shadow-lg border border-gray-100 dark:border-neutral-800">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-purple-900 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 dark:text-purple-400"
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
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  nurutech36@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-purple-900 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 dark:text-purple-400"
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
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +254105178685
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-purple-900 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 dark:text-purple-400"
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
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Kisumu, Kenya
                </p>
                <p className="text-gray-600 dark:text-gray-300">Africa</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-neutral-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Business Hours
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex justify-between">
                <span>Sunday - Thursday</span>
                <span>6:00 PM- 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>6:00 PM - 12:PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>Closed,Sabbath day of rest</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-xl bg-white dark:bg-neutral-900 shadow-lg border border-gray-100 dark:border-neutral-800">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </div>

      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Not Sure Where to Start?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
          Schedule a free 30-minute consultation with our experts to discuss
          your project needs.
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
