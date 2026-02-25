"use client";

import { useMemo, useState } from "react";

export default function ExpandableCardText({
  text,
  wordLimit = 80,
  className = "",
}: {
  text: string;
  wordLimit?: number;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const words = useMemo(
    () => text.trim().split(/\s+/).filter(Boolean),
    [text]
  );
  const needsToggle = words.length > wordLimit;
  const preview = needsToggle ? `${words.slice(0, wordLimit).join(" ")}...` : text;

  return (
    <div>
      <p className={className}>{expanded ? text : preview}</p>
      {needsToggle && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 text-xs font-semibold text-cyan-700 hover:underline dark:text-cyan-300"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
