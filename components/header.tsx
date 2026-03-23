"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import Image from "next/image";

interface Props {
     handleOpenForm: () => void;
}

export default function Header({handleOpenForm}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (y) => {
//     setScrolled(y > 20);
//     setHidden(y > lastY && y > 80);
//     setLastY(y);
//   });

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 -mt-2 ${
        scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-[0_2px_32px_rgba(0,100,143,0.10)] border-b border-[#00648f]/8"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      {/* Top 3-px rainbow accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#00648f] via-[#fcc423] to-[#00648f]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* ── Logo ── */}
          {/* <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 shrink-0 group"
          > */}
            
              {/* TO USE YOUR OWN LOGO IMAGE, replace the block below with: */}
              <Image
                src="/gniot/gniot-logo.webp"
                alt="GNIOT Logo"
                width={160}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
           

            {/* Icon mark */}
            {/* <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
              <div className="absolute inset-0 rounded-[10px] bg-linear-to-br from-[#00648f] to-[#004260]
                shadow-[0_4px_16px_rgba(0,100,143,0.30)] group-hover:shadow-[0_6px_22px_rgba(0,100,143,0.45)]
                transition-shadow duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              </div> */}
              {/* Gold pip */}
              {/* <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#fcc423]
                border-2 border-white shadow-sm" />
            </div> */}

            {/* Wordmark */}
            {/* <div className="flex flex-col justify-center leading-none gap-0.5">
              <span className="font-black text-[#001f2d] text-[20px] sm:text-[23px] tracking-[-0.04em]"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                GNIOT
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#00648f] tracking-[0.2em] uppercase">
                Greater Noida
              </span>
            </div>
          </motion.a> */}

          {/* ── CTA Button ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              onClick={() => handleOpenForm()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden
                rounded-xl px-5 py-2.5 sm:px-7 sm:py-3.5
                font-black text-sm text-[#001f2d]
                shadow-[0_4px_20px_rgba(252,196,35,0.32)]
                hover:shadow-[0_8px_30px_rgba(252,196,35,0.52)]
                transition-shadow duration-200 select-none"
              style={{
                background: "linear-gradient(135deg, #fcc423 0%, #f5a800 100%)",
              }}
            >
              {/* Shimmer on hover */}
              <span
                className="pointer-events-none absolute inset-0
                  translate-x-[-110%] group-hover:translate-x-[110%]
                  transition-transform duration-500
                  bg-linear-to-r from-transparent via-white/35 to-transparent
                  skew-x-[-18deg]"
              />

              {/* Pulsing dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#001f2d] opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#001f2d] opacity-60" />
              </span>

              <span className="relative hidden xs:inline sm:inline">Apply for 2026</span>
              <span className="relative xs:hidden sm:hidden">Apply</span>

              <ArrowRight className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </motion.header>
  );
}