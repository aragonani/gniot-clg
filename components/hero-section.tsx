"use client";

import { useEffect, useRef } from "react";
import RegisterForm from "./register-form";
import "../app/hero.css";

const stats = [
  { value: "500+", label: "Recruiters", icon: "🏢" },
  { value: "100%", label: "Placement Assistance", icon: "🎯" },
  { value: "26 LPA", label: "Max Package", icon: "💰" },
  { value: "20+", label: "Years of Excellence", icon: "🏆" },
];

const accreditations = [
  { name: "AIMS", shortName: "AIMS", color: "#e8f4f8" },
  { name: "AICTE", shortName: "AICTE", color: "#fff3e0" },
  { name: "YUVA", shortName: "YUVA", color: "#e8f5e9" },
  { name: "NHRD", shortName: "NHRD", color: "#f3e5f5" },
  { name: "UGC-NAAC", shortName: "NAAC", color: "#fce4ec" },
];

export default function HeroSection() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (orb1.current) {
        orb1.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="hero-section">
      {/* Decorative background */}
      <div className="hero-bg">
        <div ref={orb1} className="orb orb-1" />
        <div ref={orb2} className="orb orb-2" />
        <div className="grid-overlay" />
      </div>

      <div className="hero-inner">
        {/* ─── Left Column ─── */}
        <div className="hero-left">
          {/* Eyebrow */}
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            GNIOT University · Since 2001
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Join India&apos;s Next{" "}
            <span className="highlight">Generation</span>{" "}
            of Business Leaders
          </h1>

          <p className="hero-sub">
            A transformative UG & PG experience built on 20+ years of forging industry-ready leaders. 
            Your ambition deserves the best launchpad.
          </p>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Accreditations */}
          <div className="accred-block">
            <p className="accred-title">Accreditations & Associations</p>
            <div className="accred-badges">
              {accreditations.map((a) => (
                <div key={a.name} className="accred-badge" title={a.name}>
                  <span className="accred-short">{a.shortName}</span>
                </div>
              ))}
              <div className="accred-more">Approved</div>
            </div>
          </div>

          {/* Trust line */}
          <div className="trust-line">
            <div className="trust-avatars">
              {["A","R","S","K"].map((l, i) => (
                <div key={i} className="avatar" style={{ zIndex: 4 - i, background: ["#00648f","#fcc423","#00a8c6","#f5a800"][i], color: i === 1 || i === 3 ? "#003850" : "#fff" }}>{l}</div>
              ))}
            </div>
            <p>
              <strong>12,000+ alumni</strong> across Fortune 500 companies
            </p>
          </div>
        </div>

        {/* ─── Right Column (Form) ─── */}
        <div className="hero-right">
          <RegisterForm />
        </div>
      </div>

    
    </section>
  );
}