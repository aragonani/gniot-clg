"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Akshita Sikka",
    package: "₹ 10.0 LPA",
    role: "HR",
    company: "Blackrock",
    batch: "MBA 2023",
    quote:
      "The skills and knowledge I gained at GNIOT have been instrumental in shaping my career. The constant support from faculty and peers made a huge difference.",
    initials: "AS",
    color: "#00648f",
  },
  {
    name: "Rahul Verma",
    package: "₹ 12.5 LPA",
    role: "Finance Analyst",
    company: "Goldman Sachs",
    batch: "MBA 2022",
    quote:
      "GNIOT gave me a platform to transform my ambitions into reality. The industry exposure and case-study driven curriculum prepared me for real-world challenges from day one.",
    initials: "RV",
    color: "#1a6b3c",
  },
  {
    name: "Priya Sharma",
    package: "₹ 9.5 LPA",
    role: "Marketing Manager",
    company: "Hindustan Unilever",
    batch: "PGDM 2023",
    quote:
      "The PGDM program at GNIOT is a complete package — from world-class faculty to exceptional placement support. It reshaped how I think about business and leadership.",
    initials: "PS",
    color: "#7c3a8c",
  },
  {
    name: "Arjun Mehta",
    package: "₹ 14.0 LPA",
    role: "Operations Lead",
    company: "Amazon",
    batch: "PGDM 2022",
    quote:
      "The global perspective and collaborative environment at GNIOT is unmatched. I built lifelong connections and a skill set that set me apart in every interview I attended.",
    initials: "AM",
    color: "#b45309",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number, direction: number) => {
    setDir(direction);
    setActive((next + testimonials.length) % testimonials.length);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDir(1);
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const t = testimonials[active];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.97 }),
  };

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#f0fafb] via-white to-[#eaf6fb]">
      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(0,100,143,0.08) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-16 right-1/4 w-80 h-80 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(252,196,35,0.10) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#00648f]/8 border border-[#00648f]/15 text-[#00648f] text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5">
            <Star className="w-3.5 h-3.5 text-[#fcc423] fill-[#fcc423]" />
            Alumni Voices
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#001f2d] tracking-tight leading-none">
            See What Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#00648f]">Graduates</span>
              <span className="absolute -bottom-1 left-0 w-full h-2.5 bg-[#fcc423]/35 rounded-full z-0" />
            </span>{" "}
            Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-[#fcc423]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#fcc423]" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-[#fcc423]" />
          </div>
        </motion.div>

        {/* Stars row */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#fcc423] fill-[#fcc423]" />
          ))}
        </div>

        {/* Card */}
        <div className="relative">
          {/* Nav buttons */}
          {["prev","next"].map((dir2) => (
            <button
              key={dir2}
              onClick={() => { const d = dir2 === "prev" ? -1 : 1; go(active + d, d); resetTimer(); }}
              className={`absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full
                bg-white border border-[#00648f]/15 shadow-md flex items-center justify-center
                text-[#00648f] hover:bg-[#00648f] hover:text-white hover:border-[#00648f]
                transition-all duration-200 hover:scale-110
                ${dir2 === "prev" ? "-left-5 sm:-left-6" : "-right-5 sm:-right-6"}`}
            >
              {dir2 === "prev"
                ? <ChevronLeft className="w-4 h-4" />
                : <ChevronRight className="w-4 h-4" />}
            </button>
          ))}

          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl shadow-[0_8px_48px_rgba(0,100,143,0.10)] border border-[#e8f4f8] overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">

                {/* Left accent panel */}
                <div className="md:w-56 shrink-0 flex flex-col items-center justify-center gap-4 p-8 md:p-10"
                  style={{ background: `linear-gradient(160deg, ${t.color}18 0%, ${t.color}08 100%)` }}
                >
                  {/* Avatar */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}cc 100%)` }}
                  >
                    {t.initials}
                  </div>

                  <div className="text-center">
                    <p className="font-black text-[#001f2d] text-base leading-tight">{t.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{t.batch}</p>
                  </div>

                  {/* Package chip */}
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl font-black" style={{ color: t.color }}>{t.package}</span>
                    <span className="text-xs text-gray-500 font-medium">CTC Package</span>
                  </div>

                  <div className="w-full h-px bg-gray-100" />

                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-700">{t.role}</p>
                    <p className="text-xs text-gray-500 mt-0.5">@ {t.company}</p>
                  </div>
                </div>

                {/* Right quote panel */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative">
                  {/* Big quote icon */}
                  <Quote
                    className="absolute top-8 right-8 w-16 h-16 opacity-[0.06] text-[#00648f]"
                    style={{ transform: "rotate(180deg)" }}
                  />

                  <Quote className="w-8 h-8 text-[#fcc423] mb-5 fill-[#fcc423]/20" />

                  <blockquote className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Divider + stars */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-[#fcc423]/40 to-transparent" />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#fcc423] fill-[#fcc423]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { go(i, i > active ? 1 : -1); resetTimer(); }}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 h-2.5 bg-[#00648f]"
                  : "w-2.5 h-2.5 bg-[#00648f]/25 hover:bg-[#00648f]/50"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-gray-400 mt-3 font-medium tracking-widest">
          {active + 1} / {testimonials.length}
        </p>

      </div>
    </section>
  );
}