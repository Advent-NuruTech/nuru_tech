"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

interface Update {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  message: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Edit states
  const [editingId, setEditingId] = useState<string | null>(null);

  // Firestore data
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [updates, setUpdates] = useState<Update[]>([]);

  // Auth check
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsVerified(true);
      } else {
        router.replace("/admin/login");
      }
      setLoadingAuth(false);
    });

    return () => unsubscribeAuth();
  }, [router]);

  // Firestore realtime sync
  useEffect(() => {
    const unsubscribeContacts = onSnapshot(collection(db, "contacts"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Contact, "id">),
      }));
      setContacts(data);
    });

    const unsubscribeUpdates = onSnapshot(collection(db, "updates"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Update, "id">),
      })) as Update[];
      setUpdates(data);
    });

    return () => {
      unsubscribeContacts();
      unsubscribeUpdates();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (editingId) {
        const updateRef = doc(db, "updates", editingId);
        await updateDoc(updateRef, {
          title,
          summary,
          imageUrl: imageUrl || null,
        });
        setMessage("✅ Update edited successfully!");
        setEditingId(null);
      } else {
        await addDoc(collection(db, "updates"), {
          title,
          summary,
          imageUrl: imageUrl || null,
          createdAt: serverTimestamp(),
        });
        setMessage("✅ Update posted successfully!");
      }

      setTitle("");
      setSummary("");
      setImageUrl("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to post/update.");
    }

    setLoading(false);
  };

  const startEditing = (update: Update) => {
    setEditingId(update.id);
    setTitle(update.title);
    setSummary(update.summary);
    setImageUrl(update.imageUrl || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setSummary("");
    setImageUrl("");
  };

  const deleteContact = async (id: string) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (err) {
      console.error("Failed to delete contact:", err);
    }
  };

  const deleteUpdate = async (id: string) => {
    try {
      await deleteDoc(doc(db, "updates", id));
    } catch (err) {
      console.error("Failed to delete update:", err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("nurutech_admin");
    router.replace("/admin/login");
  };

  if (loadingAuth) {
    return <p className="text-center mt-10 text-gray-600">Checking authentication...</p>;
  }

  if (!isVerified) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Header + Logout */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-800">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Post/Update Form */}
      <div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h3 className="text-xl font-semibold text-blue-700">
            {editingId ? "Edit Update" : "Post New Update"}
          </h3>
          <input
            type="text"
            placeholder="Update Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            placeholder="Summary (can be long)"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            rows={4}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              {loading ? "Processing..." : editingId ? "Save Changes" : "Post Update"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            )}
          </div>
          {message && <p className="text-center text-sm mt-2">{message}</p>}
        </form>
      </div>

      {/* Contact Messages */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-green-700">Client Messages</h3>
        {contacts.length === 0 ? (
          <p className="text-gray-600">No contacts yet.</p>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white p-4 rounded shadow flex justify-between items-start"
              >
                <div>
                  <p><strong>Name:</strong> {contact.name}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Phone:</strong> {contact.phoneNumber}</p>
                  <p><strong>Location:</strong> {contact.location}</p>
                  <p className="mt-2 text-sm text-gray-700">{contact.message}</p>
                </div>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Posted Updates */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-purple-700">Posted Updates</h3>
        {updates.length === 0 ? (
          <p className="text-gray-600">No updates posted.</p>
        ) : (
          <div className="space-y-4">
            {updates.map((update) => (
              <div
                key={update.id}
                className="bg-white p-4 rounded shadow flex justify-between items-start"
              >
                <div>
                  <p className="font-bold text-lg">{update.title}</p>
                  <p className="text-sm text-gray-700">{update.summary}</p>
                  {update.imageUrl && (
                    <Image
                      src={update.imageUrl}
                      alt="Update"
                      width={160}
                      height={96}
                      className="mt-2 rounded object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => startEditing(update)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUpdate(update.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
