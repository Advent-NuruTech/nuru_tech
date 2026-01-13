"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DonatePage() {
  const [isSdkReady, setIsSdkReady] = useState(false);

  useEffect(() => {
    // Avoid loading multiple times
    if ((window as any).paypal) {
      setIsSdkReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAApZrBVTfNVwHFwzrZEo47wWtKCtdAUuQQa-zk-Ve4X-sl-e4JNweys0wBWIFz0jGJn8zxLgXR6fLtHBA&components=hosted-buttons&currency=USD";
    script.async = true;
    script.onload = () => setIsSdkReady(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isSdkReady) return;

    // Render PayPal hosted button
    const container = document.getElementById("paypal-container");
    if (container && (window as any).paypal) {
      try {
        // Clear previous renders
        container.innerHTML = "";

        // @ts-ignore
        (window as any).paypal.HostedButtons({
          hostedButtonId: "97A38BP4PYLES",
          style: {
            layout: "horizontal", // horizontal layout
            shape: "rect",
            color: "gold",
            label: "donate",
          },
        }).render("#paypal-container");
      } catch (error) {
        console.error("PayPal render error:", error);
      }
    }
  }, [isSdkReady]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <motion.header
        className="py-12 text-center bg-[#0D3B66] dark:bg-[#1a1a1a] text-white"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Advent NuruTech</h1>
        <p className="mt-3 text-lg md:text-xl">
          Secure Payments & Support for Businesses and Well-Wishers
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        className="flex-1 max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl mt-10 mb-12 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0D3B66] dark:text-[#FFD700] text-center mb-6">
          Support Our Mission
        </h2>
      

        {/* Donation Button */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div
            id="paypal-container"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="bg-[#0D3B66] dark:bg-[#1a1a1a] text-white py-6 text-center transition-colors duration-300"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm md:text-base">
          Payments are securely processed via PayPal. No financial info is stored
          by Advent NuruTech.
        </p>
   
      </motion.footer>
    </div>
  );
}
