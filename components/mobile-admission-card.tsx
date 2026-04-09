"use client";

import {
  Lock,
  Download,
  BadgeCent,
  MessageSquareText,
  University,
  Bell,
  CheckCircle2,
} from "lucide-react";

interface Props {
  handleOpenForm: (courseName?: string, headingText?: string) => void;
}

export default function MobileAdmissionCard({handleOpenForm}: Props) {
  // return (
  //   <div className="sm:hidden min-h-screen bg-[#2C6E8E] flex items-center justify-center px-4">
  //     <div className="w-full max-w-sm text-center text-white">

  //       {/* Badge */}
  //       <div className="inline-block bg-[#3E7F9D] text-xs font-semibold px-4 py-2 rounded-full mb-6">
  //         ADMISSIONS OPEN FOR 2026
  //       </div>

  //       {/* Title */}
  //       <h1 className="text-2xl font-bold mb-3">
  //         GNIOT Noida
  //       </h1>

  //       {/* Description */}
  //       <p className="text-sm text-white/80 mb-6 leading-relaxed">
  //         Compare courses, fees, placements & more. Get free expert guidance to make the right choice.
  //       </p>

  //       {/* Apply Button */}
  //       <button className="w-full flex flex-col items-center justify-center bg-[#FF8C2A] rounded-full py-1 mb-4 shadow-md">
  //         <div className="flex items-center gap-2 font-semibold">
  //           <CheckCircle size={18} />
  //           APPLY NOW!
  //         </div>
  //         <span className="text-xs opacity-90">
  //           Check your eligibility
  //         </span>
  //       </button>

  //       {/* Buttons List */}

  //       {/* Unlock Fee */}
  //       <button className="w-3/4 mx-auto flex items-center gap-3 border border-white/30 rounded-full py-3 px text-base font-medium mb-3">
  //         <Lock size={18} className="opacity-80" />
  //         Unlock Full Fee Details
  //       </button>

  //       {/* Scholarships */}
  //       <button className="w-fit mx-auto flex items-center gap-3 border border-white/30 rounded-full py-3 px-4 text-base font-medium mb-3">
  //         <Gift size={18} className="opacity-80" />
  //         Explore Scholarships
  //       </button>

  //       {/* Counselling */}
  //       <button className="w-fit mx-auto flex items-center gap-3 border border-white/30 rounded-full py-3 px-4 text-base font-medium mb-3">
  //         <MessageSquare size={18} className="opacity-80" />
  //         Get Free Counselling
  //       </button>

  //       {/* Brochure */}
  //       <button className="w-fit mx-auto flex items-center gap-3 border border-white/30 rounded-full py-3 px-4 text-base font-medium mb-3">
  //         <Download size={18} className="opacity-80" />
  //         Download Brochure
  //       </button>

  //       {/* Admission Process */}
  //       <button className="w-fit mx-auto flex items-center gap-3 border border-white/30 rounded-full py-3 px-4 text-base font-medium">
  //         <Building2 size={18} className="opacity-80" />
  //         Admission Process
  //       </button>

  //     </div>
  //   </div>
  // );

  return(
    <section className="bg-[#2C6E8E] text-white pt-16 py-4 px-6 font-sans lg:hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Admission Badge */}
        <div className="bg-[#337CA1] border border-[#5293B3] text-sm px-5 py-1.5 rounded-full mb-5 tracking-wide font-medium -mt-10">
          ADMISSIONS OPEN FOR 2026
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-6xl font-bold mb-3">
          GNIOT Greater Noida
        </h1>

        {/* Subheading */}
        <p className="text-base text-[12px] md:text-lg text-gray-100 max-w-3xl mb-12   px-6 leading-relaxed ">
          Compare courses, fees, placements & more. Get free expert guidance to
          make the right choice.
        </p>

        {/* Main CTA Button */}
        <button
          onClick={() => handleOpenForm()}
          className="bg-[#FE7E1F] hover:bg-[#E56F16] flex items-center gap-2 px-5 py-2 rounded-full shadow-lg transition-all active:scale-95 mb-5  -mt-8"
        >
          <CheckCircle2 size={24} className="opacity-90" />
          <div className="text-left">
            <div className="font-extrabold text-[12px] leading-tight">
              APPLY NOW!
            </div>
            <div className="text-[10px] font-medium opacity-80">
              Check your eligibility
            </div>
          </div>
        </button>

        {/* Lower Info Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Pill 1 */}
          <div className="flex items-center gap-2.5 bg-[#1C688D] border border-[#4082A2] hover:bg-[#195F81] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Unlock For Full Fee Details")}>
            <Lock size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Unlock Full Fee Details</span>
          </div>

          {/* Pill 2 */}
          <div className="flex items-center gap-2.5 bg-[#1C688D] border border-[#4082A2] hover:bg-[#195F81] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Apply For Upto 100% Scholarships")}>
            <BadgeCent size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Explore Scholarships</span>
          </div>

          
          <div className="flex items-center gap-2.5 bg-[#1C688D] border border-[#4082A2] hover:bg-[#195F81] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Get Free Counselling")}>
            <MessageSquareText size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Get Free Counselling</span>
          </div>

           <div className="flex items-center gap-2.5 bg-[#1C688D] border border-[#4082A2] hover:bg-[#195F81] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Download GNIOT Brochure")}>
           
            <Download   size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Download Brochure</span>
          </div>

             <div className="flex items-center gap-2.5 bg-[#1C688D] border border-[#4082A2] hover:bg-[#195F81] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Unlock For Admission Process")}>
           
            <University   size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Admission Process</span>
          </div>
        

          {/* Pill 4 */}
          <div className="flex items-center gap-3 bg-[#1C688D] border border-[#4082A2] hover:bg-[#195F81] px-5 py-2.5 rounded-full cursor-pointer transition-all shadow-md group" onClick={() => handleOpenForm("", "Register For Alerts")}>
            {/* Icon - Group hover par thoda scale hoga */}
            <Bell
              size={18}
              className="text-white opacity-90 group-hover:scale-110 transition-transform"
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-white">
              <span className="font-semibold text-sm tracking-wide">
                Register for alerts
              </span>
              <span className="text-white/70 text-[11px] font-light italic">
                (Never miss deadlines)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}