export default function PrivacyPolicyPage() {
  const lastUpdated = "May 20, 2026";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
            Advent Pro Privacy Policy
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Advent Pro is committed to protecting user privacy and maintaining a
            transparent experience for all users of the application.
          </p>

          <div className="mt-4 text-sm text-slate-500">
            Last Updated: {lastUpdated}
          </div>
        </div>

        <div className="space-y-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="mt-4 leading-8 text-slate-700">
              This Privacy Policy explains how Advent Pro collects, uses,
              stores, and protects information when users access the Advent Pro
              mobile application and related services.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              By using Advent Pro, users agree to the practices described in
              this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Information Collection</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Advent Pro is primarily designed to function offline and does not
              intentionally collect personally identifiable information from
              users.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The application currently does not:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
              <li>Sell user data</li>
              <li>Share personal information with third parties</li>
              <li>Use advertising trackers</li>
              <li>Require account registration</li>
              <li>Collect sensitive personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Local Device Storage</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Advent Pro may store certain information locally on the user’s
              device to improve performance, personalization, and offline
              functionality.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              This may include:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
              <li>Theme preferences</li>
              <li>Language preferences</li>
              <li>Saved reading positions</li>
              <li>Offline hymn and study resources</li>
              <li>App settings and customization preferences</li>
            </ul>

            <p className="mt-4 leading-8 text-slate-700">
              This information remains on the user’s device unless manually
              removed by the user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Permissions</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Advent Pro only requests permissions necessary for core
              application functionality and system-level features.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              The application does not intentionally request unnecessary access
              to sensitive device information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Internet Connectivity</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Some future features or updates may require internet access for
              optional online functionality, including content updates, cloud
              synchronization, notifications, or enhanced user experiences.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              If additional data collection practices are introduced in future
              versions, this Privacy Policy will be updated before those
              features are expanded publicly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Children’s Privacy</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Advent Pro does not knowingly collect personal information from
              children.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              If you believe that a child has provided personal information
              through the application, please contact us so appropriate action
              can be taken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Data Security</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Advent Pro takes reasonable measures to help protect application
              integrity and locally stored information.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              However, no method of electronic storage or internet transmission
              can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
            <p className="mt-4 leading-8 text-slate-700">
              This Privacy Policy may be updated periodically to reflect app
              improvements, legal requirements, or future feature additions.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Users are encouraged to review this page occasionally for any
              updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Contact Information</h2>
            <p className="mt-4 leading-8 text-slate-700">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or Advent Pro, you may contact the Advent Pro team
              through the application support channels or official contact
              information provided within the app listing.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
