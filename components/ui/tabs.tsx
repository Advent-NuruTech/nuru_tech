"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from "react";

type TabsContextValue = {
  value: string;
  setValue: (next: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within <Tabs>");
  }
  return context;
}

export function Tabs({
  children,
  defaultValue,
  value,
  onValueChange,
  className = "",
}: {
  children: ReactNode;
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value ?? internalValue;

  const setValue = (next: string) => {
    if (onValueChange) {
      onValueChange(next);
      return;
    }
    setInternalValue(next);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex flex-wrap gap-2 rounded-2xl bg-neutral-100 p-2 dark:bg-neutral-800 ${className}`}
      role="tablist"
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className = "",
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const { value: activeValue, setValue } = useTabsContext();
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      onClick={() => setValue(value)}
      role="tab"
      aria-selected={isActive}
      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
        isActive
          ? "bg-white text-neutral-900 shadow dark:bg-neutral-700 dark:text-white"
          : "text-neutral-600 hover:bg-white/70 dark:text-neutral-300 dark:hover:bg-neutral-700/60"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className = "",
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const { value: activeValue } = useTabsContext();
  if (activeValue !== value) return null;
  return <div className={className}>{children}</div>;
}
