import Link from "next/link";

export default function LegacyBlogManagerPage() {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-700 dark:bg-neutral-900">
      <h1 className="text-3xl font-black text-neutral-900 dark:text-white">
        Blog Manager Moved
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">
        Manage blog articles from the new admin dashboard tabs.
      </p>
      <Link
        href="/admin/login/dashboard"
        className="mt-5 inline-block rounded-xl bg-cyan-600 px-5 py-2 font-semibold text-white"
      >
        Open Dashboard
      </Link>
    </div>
  );
}
