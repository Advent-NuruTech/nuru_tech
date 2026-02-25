// components/UpdateCard.tsx
import Link from "next/link";

interface UpdateCardProps {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
}

export default function UpdateCard({ id, title, summary, imageUrl }: UpdateCardProps) {
  return (
    <Link href={`/updates#${id}`}>
      <div className="bg-white rounded shadow hover:shadow-lg p-4 transition-all">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="mb-4 h-40 w-full rounded bg-neutral-100 object-contain p-2"
          />
        )}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{summary}</p>
        <span className="mt-2 inline-block text-blue-500 hover:underline">
          Read More {"->"}
        </span>
      </div>
    </Link>
  );
}
