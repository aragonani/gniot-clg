"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const logos = [
  "/gniot/logo/aicte.webp",
  "/gniot/logo/aims.webp",
  "/gniot/logo/lsus.webp",
  "/gniot/logo/msme.webp",
  "/gniot/logo/naac.webp",
  "/gniot/logo/nhrd.webp",
  "/gniot/logo/xlri.webp",
  "/gniot/logo/yuva.webp",
];

const UniversityLogos = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
        
        {/* Heading — left side on md+, top on mobile */}
        <div className="shrink-0 px-6 md:px-10 text-center md:text-left md:w-56 lg:w-64">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug">
            Affliations, & Accreditation
          </h3>
          <div className="mt-2 w-10 h-1 bg-indigo-500 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Divider — vertical on md+, hidden on mobile */}
        <div className="hidden md:block shrink-0 w-px h-14 bg-gray-200 mx-4" />

        {/* Scrolling Logos */}
        <div className="relative flex-1 overflow-hidden w-full">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-12 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 md:gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 14,
            }}
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                 width={160}
                height={80}
                alt="Partner Logo"
                className="h-15 md:h-15 w-auto object-contain shrink-0 transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniversityLogos;