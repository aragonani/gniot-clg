"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  const params = useSearchParams();
  const name = params.get("name") || "Student";

  useEffect(() => {
    // 🎊 Confetti burst
    // const duration = 2 * 1000;
    // const end = Date.now() + duration;

    // const run = () => {
    //   confetti({
    //     particleCount: 5,
    //     spread: 70,
    //     origin: { y: 0.6 },
    //   });

    //   if (Date.now() < end) {
    //     requestAnimationFrame(run);
    //   }
    // };

    // run();

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
    <div className="min-h-screen flex items-center justify-center px-4 
      bg-gradient-to-br from-[#eef6fb] via-[#f9fcff] to-[#e6f0f7]">

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white/80 backdrop-blur-xl 
        rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.12)]
        border border-white/40 p-8 sm:p-10 max-w-md w-full text-center"
      >
        {/* Glow Effect */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 
          bg-[#1e3a5f]/10 rounded-full blur-3xl" />

        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="flex justify-center mb-4"
        >
          <div className="bg-green-100 p-4 rounded-full shadow-inner">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1e3a5f] mb-2">
          Thank You, {name}!
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          Your application has been submitted successfully. <br />
          Our team will contact you within{" "}
          <span className="font-semibold text-[#1e3a5f]">24 hours</span>.
        </p>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="inline-block w-full 
              bg-linear-to-r from-[#1e3a5f] to-[#2b5c8a]
              text-white px-6 py-3 rounded-xl font-semibold
              shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>

        {/* Optional subtle footer */}
        <p className="text-xs text-gray-400 mt-6">
          We’re excited to help you start your journey 🚀
        </p>
      </motion.div>
    </div>
  );
}