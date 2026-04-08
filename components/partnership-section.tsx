"use client";


import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const partnerLogos = [
  { name: "google", url: "/gniot/logo/google.webp" },
  { name: "microsoft", url: "/gniot/logo/microsoft.webp" },
  { name: "boa", url: "/gniot/logo/boa.webp" },
  { name: "ericsson", url: "/gniot/logo/ericsson.webp" },
  { name: "icici", url: "/gniot/logo/icici.webp" },
  { name: "deloitte", url: "/gniot/logo/deloitte.webp" },
  { name: "levis", url: "/gniot/logo/levis.webp" },
  { name: "accenture", url: "/gniot/logo/accenture.webp" },
  { name: "boat", url: "/gniot/logo/boat.webp" },
  { name: "UltraTech", url: "/gniot/logo/logo-4.webp" },
  { name: "Bosch", url: "/gniot/logo/logo-5.webp" },
  { name: "Infosys", url: "/gniot/logo/logo-6.webp" },
  { name: "TATA", url: "/gniot/logo/logo-7.webp" },
  { name: "MongoDB", url: "/gniot/logo/logo-8.webp" },
  { name: "IBM", url: "/gniot/logo/logo-9.webp" },
];

interface Props {
     handleOpenForm: () => void;
}
export default function PartnershipSection({handleOpenForm}: Props) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden ">
      
      <section className="py-8 md:py-24 bg-white md:bg-gray-50 px-4 ">
        <div className="max-w-6xl mx-auto relative flex flex-col items-center">
          
          {/* Blue Background Entrance */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute top-0 left-[350] w-3/4 h-100 bg-[#016590] -translate-x-1/3 -translate-y-12 rounded-sm z-0"
          ></motion.div>

          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start relative z-10">
            
            {/* LEFT SIDE: Image Block Slide In */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-full relative group bg-amber-300"
            >
              <div className="rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/gniot/partner-2.webp" 
                  className="w-full object-cover h-70 md:h-125" 
                  alt="Students using laptop" 
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="hidden md:block absolute -bottom-20"
              >
                <button onClick={() => handleOpenForm()} className="bg-[#fcc423] hover:bg-[#fbbe05] text-white px-8 py-3 rounded-sm font-bold flex items-center gap-2 shadow-xl transition-all active:scale-95">
                  APPLY NOW <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: Overlapping Partner Card Pop Up */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-7/12 -mt-20 lg:-ml-24 lg:mt-32 z-30 h-2/3"
            >
              <div className="bg-white p-6 md:p-4 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#333]  leading-tight">
                  Partnerships that Power Progress
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  We care for your future. That's why we collaborate with global industry leaders.
                </p>
                
                {/* 3x3 Logo Grid with Staggered Reveal */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-2 md:gap-3 "
                >
                  {partnerLogos.map((logo, i) => (
                    <motion.div 
                      key={i} 
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className=" border border-gray-100 rounded-sm flex items-center justify-center p-1 hover:border-[#003399]/30 transition-colors bg-white shadow-sm"
                    >
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        className="max-h-full max-w-full object-contain" 
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* MOBILE ACTION BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center gap-6 mt-12 md:hidden"
          >
            <button  onClick={() => handleOpenForm()} className="bg-[#e2a400] text-black font-bold px-8 py-3 rounded-sm flex items-center gap-2 shadow-md active:scale-95">
              APPLY NOW <ArrowRight size={18} />
            </button>
          </motion.div>

        </div>
      </section>
    </div>
  );
}