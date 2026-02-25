"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "@/components/admin/OverviewTab";
import HeroTab from "@/components/admin/HeroTab";
import ServicesTab from "@/components/admin/ServicesTab";
import PortfolioTab from "@/components/admin/PortfolioTab";
import TestimonialsTab from "@/components/admin/TestimonialsTab";
import BlogTab from "@/components/admin/BlogTab";
import MediaTab from "@/components/admin/MediaTab";
import BookingsTab from "@/components/admin/BookingsTab";
import ContactsTab from "@/components/admin/ContactsTab";
import SettingsTab from "@/components/admin/SettingsTab";

export default function AdminDashboard() {
  const router = useRouter();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/admin/login");
        setLoadingAuth(false);
        return;
      }

      try {
        const allowlist = (process.env.NEXT_PUBLIC_ADMIN_EMAIL_ALLOWLIST || "")
          .split(",")
          .map((item) => item.trim().toLowerCase())
          .filter(Boolean);
        const emailAllowed = user.email
          ? allowlist.includes(user.email.toLowerCase())
          : false;

        const adminDoc = await getDoc(doc(db, "admins", user.uid));
        const roleAllowed =
          adminDoc.exists() &&
          (adminDoc.data().role === "admin" || adminDoc.data().role === "owner");

        if (allowlist.length > 0 && !emailAllowed && !roleAllowed) {
          await signOut(auth);
          router.replace("/admin/login");
          setLoadingAuth(false);
          return;
        }

        setIsVerified(true);
      } catch {
        setIsVerified(false);
        router.replace("/admin/login");
      } finally {
        setLoadingAuth(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loadingAuth) {
    return (
      <p className="mt-12 text-center text-neutral-600 dark:text-neutral-300">
        Checking admin session...
      </p>
    );
  }

  if (!isVerified) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black text-neutral-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Enterprise tab management for content, operations, and media.
          </p>
        </div>
        <button
          type="button"
          onClick={async () => {
            await signOut(auth);
            router.replace("/admin/login");
          }}
          className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <Tabs value={activeTab} defaultValue="overview" onValueChange={setActiveTab}>
        <TabsList className="mb-6 w-full overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="blog">Blog / Articles</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="hero">
          <HeroTab />
        </TabsContent>
        <TabsContent value="services">
          <ServicesTab />
        </TabsContent>
        <TabsContent value="portfolio">
          <PortfolioTab />
        </TabsContent>
        <TabsContent value="testimonials">
          <TestimonialsTab />
        </TabsContent>
        <TabsContent value="blog">
          <BlogTab />
        </TabsContent>
        <TabsContent value="media">
          <MediaTab />
        </TabsContent>
        <TabsContent value="bookings">
          <BookingsTab />
        </TabsContent>
        <TabsContent value="contacts">
          <ContactsTab />
        </TabsContent>
        <TabsContent value="settings">
          <SettingsTab />
        </TabsContent>
      </Tabs>
    </section>
  );
}
