"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYouPage() {
  const params = useSearchParams();
  const name = params.get("name") || "Student";

  useEffect(() => {
    // 🎊 Confetti burst
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const run = () => {
      confetti({
        particleCount: 5,
        spread: 70,
        origin: { y: 0.6 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(run);
      }
    };

    run();

    // ✅ GTM page view / conversion
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "thankyou_page_view",
        user_name: name,
      });
    }
  }, [name]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f8fb] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]
        border-2 border-[#1e3a5f] p-8 max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-3">
          🎉 Thank You, {name}!
        </h1>

        <p className="text-gray-600 text-sm mb-6">
          Your application has been submitted successfully.
          <br />
          Our team will contact you within 24 hours.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}