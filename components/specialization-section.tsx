"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp, Globe, BarChart2, Cpu, Package, Rocket, Users,
  DollarSign, Settings, Monitor, Truck, ArrowRight, BookOpen, ChevronRight
} from "lucide-react";

const pgdm = [
  { label: "PGDM in Marketing",                             icon: <TrendingUp className="w-4 h-4" /> },
  { label: "PGDM in OB And HRM",                            icon: <Users className="w-4 h-4" /> },
  { label: "PGDM in Finance",                               icon: <DollarSign className="w-4 h-4" /> },
  { label: "PGDM in Artificial Intelligence & Business Analytics", icon: <Cpu className="w-4 h-4" /> },
  { label: "PGDM in International Business",                icon: <Globe className="w-4 h-4" /> },
  { label: "PGDM in Operations and Supply Chain Management",icon: <Package className="w-4 h-4" /> },
  { label: "PGDM in Entrepreneurship and New Age Start-ups",icon: <Rocket className="w-4 h-4" /> },
];

const mba = [
  { label: "MBA in Sales and Marketing",                    icon: <TrendingUp className="w-4 h-4" /> },
  { label: "MBA in Finance",                                icon: <DollarSign className="w-4 h-4" /> },
  { label: "MBA in HR",                                     icon: <Users className="w-4 h-4" /> },
  { label: "MBA in Operations",                             icon: <Settings className="w-4 h-4" /> },
  { label: "MBA in IT and Systems",                         icon: <Monitor className="w-4 h-4" /> },
  { label: "MBA in Logistics and Supply Chain Management",  icon: <Truck className="w-4 h-4" /> },
  { label: "MBA in International Business",                 icon: <Globe className="w-4 h-4" /> },
];

function SpecCard({
  item, index, color,
}: {
  item: { label: string; icon: React.ReactNode };
  index: number;
  color: "gold" | "blue";
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: color === "gold" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex items-center gap-3 px-4 py-3 rounded-xl cursor-default
        transition-all duration-200
        bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20"
    >
      {/* Colored left pip */}
      <div
        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
          ${color === "gold"
            ? "bg-[#fcc423]/15 text-[#fcc423] group-hover:bg-[#fcc423]/25"
            : "bg-[#60b8d4]/15 text-[#60b8d4] group-hover:bg-[#60b8d4]/25"
          }`}
      >
        {item.icon}
      </div>

      <span className="text-white/85 group-hover:text-white text-sm font-medium leading-snug transition-colors duration-200 flex-1">
        {item.label}
      </span>

      <motion.div
        animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        className={`shrink-0 ${color === "gold" ? "text-[#fcc423]" : "text-[#60b8d4]"}`}
      >
        <ChevronRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
}

function ProgramColumn({
  tag, title, items, color, delay,
}: {
  tag: string;
  title: string;
  items: typeof pgdm;
  color: "gold" | "blue";
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const accent = color === "gold" ? "#fcc423" : "#60b8d4";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 min-w-0"
    >
      {/* Column header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-4 h-4" style={{ color: accent }} />
          <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
            {items.length} Specializations
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight mb-3">
          <span style={{ color: accent }}>{tag}</span>{" "}
          <span className="text-white">SPECIALIZATIONS OFFERED</span>
        </h3>

        {/* Underline */}
        <div className="flex items-center gap-2">
          <div className="h-0.75 w-10 rounded-full" style={{ background: accent }} />
          <div className="h-0.75 w-4 rounded-full opacity-40" style={{ background: accent }} />
        </div>
      </div>

      {/* Items list */}
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <SpecCard key={i} item={item} index={i} color={color} />
        ))}
      </div>

      {/* Per-column CTA */}
      {/* <motion.a
        onClick={() => handleOpenForm()}
        whileHover={{ scale: 1.03, x: 4 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 mt-6 text-sm font-bold transition-all duration-200"
        style={{ color: accent }}
      >
        Explore {tag} Programs
        <ArrowRight className="w-4 h-4" />
      </motion.a> */}
    </motion.div>
  );
}

interface Props {
     handleOpenForm: () => void;
}

export default function SpecializationsSection({handleOpenForm}: Props) {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #1a3a5c 0%, #1e3f63 40%, #162f4e 100%)" }}
    >
      {/* Background texture dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(252,196,35,0.08) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(96,184,212,0.08) 0%, transparent 70%)" }} />
      {/* Divider line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/60 text-xs font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full">
            <BarChart2 className="w-3.5 h-3.5 text-[#fcc423]" />
            Industry-Aligned Programs
          </div>
        </motion.div>

        {/* ── Two columns ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <ProgramColumn tag="PGDM" title="PGDM" items={pgdm} color="gold" delay={0} />

          {/* Vertical divider */}
          <div className="hidden lg:block w-px self-stretch bg-linear-to-b from-transparent via-white/15 to-transparent shrink-0" />
          {/* Horizontal divider (mobile) */}
          <div className="lg:hidden h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />

          <ProgramColumn tag="MBA" title="MBA" items={mba} color="blue" delay={0.15} />
        </div>

        {/* ── Bottom CTA Banner ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 28 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
          {/* Banner bg */}
          <div className="absolute inset-0 bg-linear-to-r from-[#fcc423]/15 via-white/5 to-[#60b8d4]/15" />
          <div className="absolute inset-0 border border-white/12 rounded-2xl" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8">
            <div>
              <p className="text-[#fcc423] text-xs font-bold uppercase tracking-widest mb-1">
                Admissions Open · 2026 Batch
              </p>
              <h4 className="text-xl sm:text-2xl font-black text-white leading-snug">
                Not sure which specialization fits you?
              </h4>
              <p className="text-white/50 text-sm mt-1">
                Our counselors help you choose the right program for your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleOpenForm()}
                className="inline-flex items-center justify-center gap-2 bg-[#fcc423] hover:bg-[#f5a800] text-[#001f2d] font-black text-sm px-7 py-3.5 rounded-xl shadow-[0_6px_24px_rgba(252,196,35,0.35)] hover:shadow-[0_10px_32px_rgba(252,196,35,0.5)] transition-all duration-200 whitespace-nowrap"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="tel:+917696376158"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex sm:hidden items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white font-bold text-sm px-7 py-3.5 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-200 whitespace-nowrap"
              >
                Talk to a Counselor
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}