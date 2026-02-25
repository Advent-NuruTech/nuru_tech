"use client";

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
      <h2 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function ListRow({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-800">
      <div className="min-w-[220px] flex-1">
        <p className="font-semibold text-neutral-900 dark:text-white">{title}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{subtitle}</p>
      </div>
      <div>{actions}</div>
    </div>
  );
}

export function Input({
  label,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
      {label}
      <input
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass}
      />
    </label>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
      {label}
      <textarea
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className={`${inputClass} resize-none`}
      />
    </label>
  );
}

export const inputClass =
  "mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:ring-blue-900";
export const primaryButtonClass =
  "rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:from-blue-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60";
export const secondaryButtonClass =
  "rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-800";
export const actionLinkClass =
  "text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300";
export const dangerLinkClass =
  "text-sm font-semibold text-red-600 hover:underline dark:text-red-300";
