// "use client";

// import { motion } from "framer-motion";
// import {
//   MapPin, Phone, Mail, ExternalLink,
//   Facebook, Twitter, Instagram, Linkedin, Youtube,
//   GraduationCap, ArrowRight,
// } from "lucide-react";

// const quickLinks = [
//   { label: "About GNIOT", href: "#" },
//   { label: "Admissions 2026", href: "#" },
//   { label: "Programs Offered", href: "#" },
//   { label: "Faculty & Research", href: "#" },
//   { label: "Campus Life", href: "#" },
//   { label: "Placements", href: "#" },
// ];

// const programs = [
//   { label: "MBA", href: "#" },
//   { label: "PGDM", href: "#" },
//   { label: "BBA", href: "#" },
//   { label: "B.Tech", href: "#" },
//   { label: "MCA", href: "#" },
//   { label: "Ph.D Programs", href: "#" },
// ];

// const socials = [
//   { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
//   { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
//   { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
//   { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
//   { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden"
//       style={{ background: "linear-gradient(160deg, #001f2d 0%, #00304a 60%, #001825 100%)" }}
//     >
//       {/* Top glow line */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fcc423]/50 to-transparent" />

//       {/* BG texture */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
//         style={{
//           backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* ── Pre-footer CTA strip ── */}
//       <div className="relative border-b border-white/8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-xl bg-[#fcc423]/15 flex items-center justify-center">
//               <GraduationCap className="w-5 h-5 text-[#fcc423]" />
//             </div>
//             <div>
//               <p className="text-white font-bold text-base leading-tight">Ready to take the next step?</p>
//               <p className="text-white/50 text-xs">MBA & PGDM Admissions 2026 are open</p>
//             </div>
//           </div>
//           <motion.a
//             href="#apply"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center gap-2 bg-[#fcc423] hover:bg-[#f5a800] text-[#001f2d] font-black text-sm px-6 py-3 rounded-xl shadow-[0_4px_20px_rgba(252,196,35,0.3)] transition-all duration-200 whitespace-nowrap"
//           >
//             Apply Now <ArrowRight className="w-4 h-4" />
//           </motion.a>
//         </div>
//       </div>

//       {/* ── Main footer grid ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//         {/* Brand col */}
//         <div className="sm:col-span-2 lg:col-span-1">
//           <div className="flex items-center gap-2.5 mb-5">
//             <div className="w-9 h-9 rounded-lg bg-[#fcc423] flex items-center justify-center flex-shrink-0">
//               <GraduationCap className="w-5 h-5 text-[#001f2d]" />
//             </div>
//             <div>
//               <p className="text-white font-black text-lg leading-none">GNIOT</p>
//               <p className="text-white/40 text-[10px] leading-none mt-0.5 tracking-widest uppercase">Greater Noida</p>
//             </div>
//           </div>

//           <p className="text-white/50 text-sm leading-relaxed mb-6">
//             Greater Noida Institute of Technology — shaping industry-ready professionals with world-class education, research, and values since 2001.
//           </p>

//           {/* Socials */}
//           <div className="flex gap-2.5 flex-wrap">
//             {socials.map((s) => (
//               <motion.a
//                 key={s.label}
//                 href={s.href}
//                 aria-label={s.label}
//                 whileHover={{ scale: 1.15, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-8 h-8 rounded-lg bg-white/8 hover:bg-[#00648f] border border-white/10 hover:border-[#00648f] text-white/60 hover:text-white flex items-center justify-center transition-all duration-200"
//               >
//                 {s.icon}
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <p className="text-white font-bold text-sm uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
//             <span className="w-4 h-px bg-[#fcc423] inline-block" />
//             Quick Links
//           </p>
//           <ul className="flex flex-col gap-2.5">
//             {quickLinks.map((l) => (
//               <li key={l.label}>
//                 <a
//                   href={l.href}
//                   className="group flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-150"
//                 >
//                   <ChevronRight className="w-3.5 h-3.5 text-[#fcc423] opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Programs */}
//         <div>
//           <p className="text-white font-bold text-sm uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
//             <span className="w-4 h-px bg-[#fcc423] inline-block" />
//             Programs
//           </p>
//           <ul className="flex flex-col gap-2.5">
//             {programs.map((p) => (
//               <li key={p.label}>
//                 <a
//                   href={p.href}
//                   className="group flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-150"
//                 >
//                   <ChevronRight className="w-3.5 h-3.5 text-[#fcc423] opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
//                   {p.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <p className="text-white font-bold text-sm uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
//             <span className="w-4 h-px bg-[#fcc423] inline-block" />
//             Contact Us
//           </p>
//           <ul className="flex flex-col gap-4">
//             <li className="flex items-start gap-3">
//               <div className="w-7 h-7 rounded-md bg-[#00648f]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
//                 <MapPin className="w-3.5 h-3.5 text-[#fcc423]" />
//               </div>
//               <span className="text-white/55 text-sm leading-relaxed">
//                 Knowledge Park II, Greater Noida,<br />Uttar Pradesh — 201 306
//               </span>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="w-7 h-7 rounded-md bg-[#00648f]/25 flex items-center justify-center flex-shrink-0">
//                 <Phone className="w-3.5 h-3.5 text-[#fcc423]" />
//               </div>
//               <a href="tel:+911204567890" className="text-white/55 hover:text-white text-sm transition-colors">
//                 +91 120 456 7890
//               </a>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="w-7 h-7 rounded-md bg-[#00648f]/25 flex items-center justify-center flex-shrink-0">
//                 <Mail className="w-3.5 h-3.5 text-[#fcc423]" />
//               </div>
//               <a href="mailto:admissions@gniot.net" className="text-white/55 hover:text-white text-sm transition-colors break-all">
//                 admissions@gniot.net
//               </a>
//             </li>
//             <li className="flex items-center gap-3">
//               <div className="w-7 h-7 rounded-md bg-[#00648f]/25 flex items-center justify-center flex-shrink-0">
//                 <ExternalLink className="w-3.5 h-3.5 text-[#fcc423]" />
//               </div>
//               <a href="https://www.gniot.net" target="_blank" rel="noreferrer"
//                 className="text-white/55 hover:text-white text-sm transition-colors">
//                 www.gniot.net
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* ── Bottom bar ── */}
//       <div className="border-t border-white/8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-white/35 text-xs text-center sm:text-left">
//             © {new Date().getFullYear()} GNIOT — Greater Noida Institute of Technology. All rights reserved.
//           </p>
//           <div className="flex items-center gap-4">
//             {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
//               <a key={item} href="#" className="text-white/35 hover:text-white/70 text-xs transition-colors">
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // Need to import ChevronRight separately since it's used in link list
// function ChevronRight({ className }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M9 18l6-6-6-6" />
//     </svg>
//   );
// }



function Footer() {
    

    const footer = [
  "gim application",
  "gims application",
  "gim application form",
  "gim pgdm application",
  "gim admission application form",
  "gim applications",
  "gim admission",
  "gims greater noida admission",
  "gniot pgdm",
  "gniot admission",
    ];

  return (
    <div className="text-white text-sm md:text-base"
     style={{ background: "linear-gradient(160deg, #001f2d 0%, #00304a 60%, #001825 100%)" }}>
      {/* SEO Keywords Section */}

      <div className="px-4 py-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-3 md:gap-x-4 md:gap-y-2 text-xs md:text-sm text-left md:text-left">
          {footer.map((text: string, index: number) => (
            <span key={index} className="flex items-center gap-2">
              {text}
              {index !== footer.length - 1 && (
                <span className="hidden md:inline">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center pt-2 pb-16 lg:py-3 border-t border-white/20 ">
        Copyright All Right Reserved 2026
      </div>
    </div>
  );
}

export default Footer;
