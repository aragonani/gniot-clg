// "use client";

// import { useState } from "react";
// import { motion, useScroll} from "framer-motion";
// import { ArrowRight} from "lucide-react";
// import Image from "next/image";

// interface Props {
//      handleOpenForm: () => void;
// }

// export default function Header({handleOpenForm}: Props) {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [lastY, setLastY] = useState(0);
//   const { scrollY } = useScroll();



//   return (
//     <motion.header
//       animate={{ y: hidden ? -100 : 0 }}
//       transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 -mt-2 ${
//         scrolled
//           ? "bg-white/92 backdrop-blur-xl shadow-[0_2px_32px_rgba(0,100,143,0.10)] border-b border-[#00648f]/8"
//           : "bg-white/70 backdrop-blur-md"
//       }`}
//     >
//       {/* Top 3-px rainbow accent line */}
//       <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#00648f] via-[#fcc423] to-[#00648f]" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 sm:h-20">

      
//               {/* TO USE YOUR OWN LOGO IMAGE, replace the block below with: */}
//               <Image
//                 src="/gniot/gniot-logo.webp"
//                 alt="GNIOT Logo"
//                 width={160}
//                 height={48}
//                 className="h-10 sm:h-12 w-auto object-contain"
//                 priority
//               />
           

           
//           {/* ── CTA Button ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <motion.a
//               onClick={() => handleOpenForm()}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.96 }}
//               className="group relative inline-flex items-center gap-2 overflow-hidden
//                 rounded-xl px-5 py-2.5 sm:px-7 sm:py-3.5
//                 font-black text-sm text-[#001f2d]
//                 shadow-[0_4px_20px_rgba(252,196,35,0.32)]
//                 hover:shadow-[0_8px_30px_rgba(252,196,35,0.52)]
//                 transition-shadow duration-200 select-none"
//               style={{
//                 background: "linear-gradient(135deg, #fcc423 0%, #f5a800 100%)",
//               }}
//             >
//               {/* Shimmer on hover */}
//               <span
//                 className="pointer-events-none absolute inset-0
//                   translate-x-[-110%] group-hover:translate-x-[110%]
//                   transition-transform duration-500
//                   bg-linear-to-r from-transparent via-white/35 to-transparent
//                   skew-x-[-18deg]"
//               />

//               {/* Pulsing dot */}
//               <span className="relative flex h-2 w-2 shrink-0">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#001f2d] opacity-30" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-[#001f2d] opacity-60" />
//               </span>

//               <span className="relative hidden xs:inline sm:inline">Apply for 2026</span>
//               <span className="relative xs:hidden sm:hidden">Apply</span>

//               <ArrowRight className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
//             </motion.a>
//           </motion.div>

//         </div>
//       </div>
//     </motion.header>
//   );
// }


"use client";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

interface Props {
  handleOpenForm: () => void;
}

export default function Header({ handleOpenForm }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const { scrollY } = useScroll();

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
      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#00648f] via-[#fcc423] to-[#00648f]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Image
            src="/gniot/gniot-logo.webp"
            alt="GNIOT Logo"
            width={160}
            height={48}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* 📞 Mobile Call Button */}
            <motion.a
              href="tel:+917696376158"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="sm:hidden flex items-center justify-center
                w-10 h-10 rounded-full
                bg-[#00648f]/10 text-[#00648f]
                shadow-md active:scale-95 transition-all"
            >
              <Phone className="w-5 h-5" />
            </motion.a>

            {/* CTA Button */}
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
                {/* Shimmer */}
                <span
                  className="pointer-events-none absolute inset-0
                    translate-x-[-110%] group-hover:translate-x-[110%]
                    transition-transform duration-500
                    bg-linear-to-r from-transparent via-white/35 to-transparent
                    skew-x-[-18deg]"
                />

                {/* Dot */}
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
      </div>
    </motion.header>
  );
}