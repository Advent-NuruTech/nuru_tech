"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../lib/firebase"; // update relative path to your firebase.ts
import { onAuthStateChanged } from "firebase/auth";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    // Check if a user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to dashboard
        router.push("/admin/login/dashboard");
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, [router]);

  const handleLoginRedirect = () => {
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to Nurutech Admin Panel</h1>
      <p className="text-lg text-gray-700 mb-6">Please log in to access the dashboard.</p>

      <button
        onClick={handleLoginRedirect}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
}
