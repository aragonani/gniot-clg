"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ArrowRight, Star, TrendingUp, Trophy, Medal } from "lucide-react";

const awards = [
  {
    rank: "A++",
    sup: "",
    description: "Ranked GIMS Amongst Top A++ India's Best B-Schools in Uttar Pradesh",
    source: "CAREERS360",
    sourceStyle: "careers",
    icon: <Star className="w-4 h-4" />,
    accent: "#fcc423",
  },
  {
    rank: "2",
    sup: "nd",
    description: "India's B-School of Excellence Rank 02 by",
    source: "GHRDC",
    sourceStyle: "ghrdc",
    icon: <Trophy className="w-4 h-4" />,
    accent: "#fcc423",
  },
  {
    rank: "BEST",
    sup: "",
    description: "Best B-School for Employability",
    source: "THE TIMES GROUP",
    sourceStyle: "times",
    icon: <Award className="w-4 h-4" />,
    accent: "#fcc423",
  },
  {
    rank: "19",
    sup: "th",
    description: "Ranked GIMS Amongst the top 19 Private B-Schools North Zone 2025",
    source: "Outlook",
    sourceStyle: "outlook",
    icon: <TrendingUp className="w-4 h-4" />,
    accent: "#fcc423",
  },
  {
    rank: "7",
    sup: "th",
    description: "07th Amongst Top B-Schools of Eminence, 2024",
    source: "EMINENCE",
    sourceStyle: "eminence",
    icon: <Medal className="w-4 h-4" />,
    accent: "#fcc423",
  },
  {
    rank: "20",
    sup: "",
    description: "Ranked GIMS Amongst Top 20 Private B-Schools, Delhi NCR",
    source: "THE WEEK",
    sourceStyle: "theweek",
    icon: <Trophy className="w-4 h-4" />,
    accent: "#fcc423",
  },
  {
    rank: "23",
    sup: "",
    description: "Ranked GIMS Amongst Top 23 B-Schools North Zone",
    source: "BW BUSINESSWORLD",
    sourceStyle: "bw",
    icon: <TrendingUp className="w-4 h-4" />,
    accent: "#fcc423",
  },
  {
    rank: "★",
    sup: "",
    description: "Awarded Promising B-School for Strong Industry Connect by Indian Institutional Ranking Framework (IIRF)",
    source: "IIRF",
    sourceStyle: "iirf",
    icon: <Award className="w-4 h-4" />,
    accent: "#fcc423",
  },
];

const sourceStyles: Record<string, string> = {
  careers:  "text-[#00648f] font-black tracking-tight text-sm border border-[#00648f]/30 px-3 py-1 rounded",
  ghrdc:    "text-[#00648f] font-black tracking-widest text-base",
  times:    "text-gray-700 font-bold text-xs border border-gray-300 px-3 py-1 rounded",
  outlook:  "text-red-600 font-black italic text-base border border-red-200 px-3 py-1 rounded",
  eminence: "text-[#00648f] font-bold text-xs tracking-widest",
  theweek:  "text-white font-black text-sm bg-red-600 px-3 py-1 rounded",
  bw:       "text-[#00648f] font-black text-xs tracking-wide",
  iirf:     "text-gray-600 font-bold text-xs border border-gray-200 px-3 py-1 rounded",
};


// SVG laurel wreath
function LaurelWreath({ rank, sup }: { rank: string; sup: string }) {
  return (
    <div className="relative flex items-center justify-center w-30 h-30 mx-auto">
      <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full" fill="none">
        {/* Left branch */}
        <g opacity="0.9">
          <ellipse cx="22" cy="60" rx="6" ry="11" fill="#fcc423" transform="rotate(-30 22 60)" />
          <ellipse cx="16" cy="48" rx="5" ry="10" fill="#f5a800" transform="rotate(-50 16 48)" />
          <ellipse cx="18" cy="72" rx="5" ry="10" fill="#fcc423" transform="rotate(-10 18 72)" />
          <ellipse cx="28" cy="40" rx="4" ry="9" fill="#f5a800" transform="rotate(-65 28 40)" />
          <ellipse cx="26" cy="82" rx="4" ry="9" fill="#fcc423" transform="rotate(10 26 82)" />
          <ellipse cx="36" cy="33" rx="4" ry="8" fill="#f5a800" transform="rotate(-78 36 33)" />
          <ellipse cx="36" cy="90" rx="4" ry="8" fill="#fcc423" transform="rotate(25 36 90)" />
          <ellipse cx="46" cy="28" rx="3" ry="7" fill="#f5a800" transform="rotate(-88 46 28)" />
          <ellipse cx="47" cy="96" rx="3" ry="7" fill="#fcc423" transform="rotate(38 47 96)" />
        </g>
        {/* Right branch (mirror) */}
        <g opacity="0.9" transform="scale(-1,1) translate(-120,0)">
          <ellipse cx="22" cy="60" rx="6" ry="11" fill="#fcc423" transform="rotate(-30 22 60)" />
          <ellipse cx="16" cy="48" rx="5" ry="10" fill="#f5a800" transform="rotate(-50 16 48)" />
          <ellipse cx="18" cy="72" rx="5" ry="10" fill="#fcc423" transform="rotate(-10 18 72)" />
          <ellipse cx="28" cy="40" rx="4" ry="9" fill="#f5a800" transform="rotate(-65 28 40)" />
          <ellipse cx="26" cy="82" rx="4" ry="9" fill="#fcc423" transform="rotate(10 26 82)" />
          <ellipse cx="36" cy="33" rx="4" ry="8" fill="#f5a800" transform="rotate(-78 36 33)" />
          <ellipse cx="36" cy="90" rx="4" ry="8" fill="#fcc423" transform="rotate(25 36 90)" />
          <ellipse cx="46" cy="28" rx="3" ry="7" fill="#f5a800" transform="rotate(-88 46 28)" />
          <ellipse cx="47" cy="96" rx="3" ry="7" fill="#fcc423" transform="rotate(38 47 96)" />
        </g>
        {/* Bottom tie */}
        <ellipse cx="60" cy="104" rx="6" ry="3" fill="#f5a800" />
      </svg>

      {/* Rank text */}
      <div className="relative z-10 text-center">
        <span
          className="font-black text-[#00648f] leading-none"
          style={{
            fontSize: rank.length > 3 ? "18px" : rank === "★" ? "30px" : "28px",
            letterSpacing: "-0.03em",
          }}
        >
          {rank}
          {sup && (
            <sup className="text-[13px] font-black align-super ml-0.5">{sup}</sup>
          )}
        </span>
      </div>
    </div>
  );
}

interface Props {
  handleOpenForm: (courseName?: string, headingText?: string) => void;
}

function AwardCard({ award, index }: { award: typeof awards[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4
        border border-[#e8f4f8] shadow-[0_4px_24px_rgba(0,100,143,0.07)]
        hover:shadow-[0_16px_48px_rgba(0,100,143,0.16)] hover:border-[#00648f]/20
        transition-shadow transition-border duration-300 cursor-default"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full bg-linear-to-r from-[#fcc423] to-[#f5a800] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon chip */}
      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#00648f]/8 flex items-center justify-center text-[#00648f] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {award.icon}
      </div>

      {/* Wreath */}
      <motion.div
        animate={inView ? { rotateY: [0, 8, -8, 0] } : {}}
        transition={{ duration: 1.2, delay: index * 0.07 + 0.3 }}
      >
        <LaurelWreath rank={award.rank} sup={award.sup} />
      </motion.div>

      {/* Description */}
      <p className="text-[13.5px] text-gray-600 leading-relaxed font-medium flex-1">
        {award.description}
      </p>

      {/* Source badge */}
      <div className="mt-auto pt-2 border-t border-gray-100 w-full flex justify-center">
        <span className={sourceStyles[award.sourceStyle] || "text-gray-500 font-bold text-sm"}>
          {award.source}
        </span>
      </div>
    </motion.div>
  );
}

export default function AwardsSection({handleOpenForm}: Props) {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-to-b from-[#f0fafb] via-white to-[#f0fafb]">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-0.5 bg-linear-to-r from-transparent via-[#fcc423]/40 to-transparent" />
        <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-radial-linear opacity-30"
          style={{ background: "radial-gradient(circle, rgba(0,100,143,0.06) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-20 -left-20 w-100 h-100 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(252,196,35,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ── Heading ── */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#00648f]/8 text-[#00648f] text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5 border border-[#00648f]/15">
            <Trophy className="w-3.5 h-3.5 text-[#fcc423]" />
            National Rankings & Awards
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-[#001f2d] tracking-tight leading-none mb-3">
            GIMS{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#00648f]">Awards</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#fcc423]/40 rounded-full z-0" />
            </span>
            {" "}&amp;{" "}
            <span className="text-[#00648f]">Recognitions</span>
          </h2>

          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Consistently ranked among India's finest business schools by the country's most credible rating bodies.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#fcc423]" />
            <div className="w-2 h-2 rounded-full bg-[#fcc423]" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#fcc423]" />
          </div>
        </motion.div>

        {/* ── Award Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {awards.map((award, i) => (
            <AwardCard key={i} award={award} index={i} />
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-r from-[#00648f] via-[#005a7e] to-[#003d57]" />
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, #fcc423 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 sm:px-12 py-10">
            {/* Left */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <Award className="w-5 h-5 text-[#fcc423]" />
                <span className="text-[#fcc423] text-sm font-bold uppercase tracking-widest">
                  MBA / PGDM Admissions 2026
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                Be Part of an Award-Winning Legacy
              </h3>
              <p className="text-white/65 text-sm leading-relaxed max-w-md">
                Join thousands of graduates who built their careers at one of India's most decorated B-Schools. Applications are open — secure your seat today.
              </p>
            </div>

            {/* Right — dual CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <motion.a
                href="#apply"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleOpenForm("", "Apply For 2026 Admissions")}
                className="inline-flex items-center justify-center gap-2 bg-[#fcc423] hover:bg-[#f5a800] text-[#001f2d] font-black text-sm px-8 py-4 rounded-xl shadow-[0_8px_28px_rgba(252,196,35,0.4)] hover:shadow-[0_12px_36px_rgba(252,196,35,0.55)] transition-all duration-200 whitespace-nowrap"
              >
                Apply Now — 2026 Batch
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#brochure"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleOpenForm("", "Download Brochure")}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 text-white font-bold text-sm px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-200 whitespace-nowrap backdrop-blur-sm"
              >
                Download Brochure
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}