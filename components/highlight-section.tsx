"use client";

import {
  IndianRupee,
  Trophy,
  Globe,
  FileText,
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  UserCheck,
} from "lucide-react";

type CardProps = {
  icon: any;
  value: string;
  label: string;
};

const placementData: CardProps[] = [
  { icon: IndianRupee, value: "7.25 LPA", label: "Average Package" },
  { icon: Trophy, value: "27.25 LPA", label: "Highest Package (Domestic)" },
  { icon: Globe, value: "70.00 LPA", label: "Highest Package (International)" },
  { icon: FileText, value: "1600+", label: "Placement Offers" },
  { icon: Building2, value: "800+", label: "Companies Visited" },
];

const instituteData: CardProps[] = [
  { icon: GraduationCap, value: "20,500+", label: "Proud Alumni" },
  { icon: Briefcase, value: "11,900+", label: "Successful Placements" },
  { icon: Users, value: "10,000+", label: "Students" },
  { icon: UserCheck, value: "510+", label: "Faculty Members" },
];

function Card({ icon: Icon, value, label }: CardProps) {
  return (
    <div
      className="
      bg-[#3F5AA9] text-white rounded-[18px]
      shadow-[0_10px_25px_rgba(0,0,0,0.15)]
      flex flex-col items-center justify-center text-center
      h-42.5 px-6
      transition-transform duration-300 hover:scale-105
    "
    >
      <Icon size={34} strokeWidth={2} className="mb-3" />

      <h3 className="text-[22px] font-semibold tracking-wide">
        {value}
      </h3>

      <p className="text-[13px] mt-1 opacity-90 leading-tight">
        {label}
      </p>
    </div>
  );
}

export default function HighlightsSection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#f4b400]" />

      {/* Diagonal Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, transparent 50%, #d89c00 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">

        {/* ===== Placement ===== */}
        <h2 className="text-center text-[30px] md:text-[34px] font-bold text-[#1e293b] mb-12">
          Recent Placement Highlights
        </h2>

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-6 
          mb-20
        ">
          {placementData.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>

        {/* ===== Institute ===== */}
        <h2 className="text-center text-[30px] md:text-[34px] font-bold text-[#1e293b] mb-12">
          Institute Highlights
        </h2>

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-6
        ">
          {instituteData.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}