"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// --- Animated Counter Component ---
function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  // FIX: Change margin from -100px to something smaller like -20px or -10% for mobile reliability
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function AcademicsSection() {
  const stats = [
    { label: "Years of Educational Excellence", value: 55, suffix: "+" },
    { label: "Alumni Base", value: 1, suffix: " Million+" },
    { label: "International Collaborations", value: 50, suffix: "+" },
    { label: "NAAC Accredited", value: 0, suffix: "A+", isText: true },
    { label: "Pool of Academicians", value: 5000, suffix: "+" },
    { label: "Industry Oriented Professional Programmes", value: 70, suffix: "+" },
    { label: "Indian States & Union Territories Represented", value: 25, suffix: "+" },
    { label: "Continents Engaged In Our Global Endeavour", value: 4, suffix: "+" },
  ];

  return (
    // Changed py-5 to py-12 to give more room on scroll
    <section className="bg-[#016590] text-white py-12 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-10 overflow-hidden">
      
      {/* Left: Student Image */}
      <div className="lg:w-1/4 hidden lg:block">
        <img 
          src="/gniot/lady.webp" 
          alt="Student" 
          className="max-h-125 object-contain"
        />
      </div>

      {/* Middle: Stats Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/3 bg-[#d1dbe8] rounded-3xl py-6 text-slate-800 shadow-2xl"
      >
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-6">Do You Know?</h2>
        <div className="grid grid-cols-2 border-t border-slate-300">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`p-4 md:p-6 flex flex-col items-center text-center border-b border-slate-300 ${
                idx % 2 === 0 ? 'border-r' : ''
              }`}
            >
              <span className="text-2xl md:text-3xl font-black text-[#016590]">
                {stat.isText ? (
                  stat.suffix
                ) : (
                  <>
                    <Counter value={stat.value} />
                    {stat.suffix}
                  </>
                )}
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase mt-2 leading-tight tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Academics That Empower</h3>
          <p className="text-sm md:text-base text-blue-100 opacity-90 leading-relaxed">
            NAAC A+ accredited and ranked among the Top 50 universities in India, 
            we offer a flexible CBCS-based curriculum across 70+ industry oriented 
            programmes.
          </p>
        </div>

        <div className="space-y-5">
          <FeatureItem 
            title="Global Learning Experience"
            desc="Students from 25+ Indian states & UTs and engagement across 4+ continents."
          />
          <FeatureItem 
            title="Industry-Focused Outcomes"
            desc="Programmes designed with industry relevance and career readiness."
          />
          <FeatureItem 
            title="Innovation & Research"
            desc="Driven by DSIR-recognised research and academic milestones."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4 group">
      <CheckCircle2 className="w-6 h-6 text-white mt-1 shrink-0 group-hover:scale-110 transition-transform" />
      <div>
        <h4 className="font-bold text-lg md:text-xl">{title}</h4>
        <p className="text-sm text-blue-100 opacity-80">{desc}</p>
      </div>
    </div>
  );
}