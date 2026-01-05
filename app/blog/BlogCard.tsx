"use client";

import { useState } from "react";

type Blog = {
  id: string;
  title: string;
  content: string;
  imageURL?: string;
};

function getWordCount(html: string) {
  return html.replace(/<[^>]*>/g, "").trim().split(/\s+/).length;
}

function getPreview(html: string, limit = 60) {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/);
  return words.slice(0, limit).join(" ") + "...";
}

export default function BlogCard({ blog }: { blog: Blog }) {
  const [expanded, setExpanded] = useState(false);

  const wordCount = getWordCount(blog.content);
  const needsReadMore = wordCount > 60;

  return (
    <div className="mb-10 border-b pb-6">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>

      {blog.imageURL && (
        <img
          src={blog.imageURL}
          alt={blog.title}
          className="w-full h-auto object-contain rounded-lg mb-4"
          loading="lazy"
        />
      )}

      <div className="prose max-w-none">
        {expanded || !needsReadMore ? (
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        ) : (
          <p>{getPreview(blog.content)}</p>
        )}
      </div>

      {needsReadMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-blue-600 font-medium hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
