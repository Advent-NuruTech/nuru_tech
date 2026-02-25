import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import BlogCard from "./BlogCard";

type Blog = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
};

export default async function BlogPage() {
  // Fetch blogs from Firestore
  const snap = await getDocs(
    query(collection(db, "blog"), orderBy("createdAt", "desc"))
  );

  // Map docs to typed Blog objects
  const blogs: Blog[] = snap.docs.map(
    (doc: QueryDocumentSnapshot<DocumentData>) => ({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
      imageUrl: doc.data().imageUrl || doc.data().imageURL,
    })
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="mb-6 text-center text-4xl font-black">Our Blog</h1>

      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
