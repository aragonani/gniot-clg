


// function Footer() {

import Link from "next/link";

    

//     const footer = [
//   "gim application",
//   "gims application",
//   "gim application form",
//   "gim pgdm application",
//   "gim admission application form",
//   "gim applications",
//   "gim admission",
//   "gims greater noida admission",
//   "gniot pgdm",
//   "gniot admission",
//     ];

//   return (
//     <div className="text-white text-sm md:text-base sm:py-1 py-6"
//      style={{ background: "linear-gradient(160deg, #001f2d 0%, #00304a 60%, #001825 100%)" }}>
//       {/* SEO Keywords Section */}

//         {/* Phone Number Section */}
//       <div className="text-right font-semibold text-base md:text-lg pr-2">
//         📞 Call us: <a href="tel:+917696376158" className="underline">+91 76963 76158</a>
//       </div>


//       {/* <div className="px-4 py-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-3 md:gap-x-4 md:gap-y-2 text-xs md:text-sm text-left md:text-left">
//           {footer.map((text: string, index: number) => (
//             <span key={index} className="flex items-center gap-2">
//               {text}
//               {index !== footer.length - 1 && (
//                 <span className="hidden md:inline">|</span>
//               )}
//             </span>
//           ))}
//         </div>
//       </div> */}

//       {/* Copyright Section */}
//       <div className="text-center pt-2 pb-16 lg:py-3 border-t border-white/20 ">
//         Copyright All Right Reserved 2026
//       </div>
//     </div>
//   );
// }

// export default Footer;


function Footer() {
  return (
    <div
      className="text-white text-sm md:text-base sm:py-1 py-6"
      style={{
        background:
          "linear-gradient(160deg, #001f2d 0%, #00304a 60%, #001825 100%)",
      }}
    >
      {/* Phone Number Section */}
      <div className="text-right font-semibold text-base md:text-lg pr-2">
        📞 Call us:{" "}
        <a href="tel:+917696376158" className="underline">
          +91 76963 76158
        </a>
      </div>

      {/* Links Section */}
      <div className="text-center mt-4 space-x-4 text-sm md:text-base">
        <Link href="/gniot/privacy-policy" className="underline hover:text-gray-300">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link href="/gniot/refund-policy" className="underline hover:text-gray-300">
          Refund & Payment Policy
        </Link>
        <span>|</span>
        <Link href="/gniot/terms-conditions" className="underline hover:text-gray-300">
          Terms & Conditions
        </Link>
      </div>

      {/* Disclaimer Section */}
      <div className="text-center text-xs md:text-sm px-4 mt-4 leading-relaxed text-gray-300">
        <p>
          <strong>Disclaimer :</strong> This is a marketing/partner page for lead
          registration. We do not guarantee admission.
        </p>
        <p className="mt-1">
          <strong>Google Transparency Note :</strong> All submitted information
          will be shared with the official admissions team for further
          processing. This page fully complies with Google’s Misrepresentation
          and Unacceptable Business Practices policies.
        </p>
      </div>

      {/* Copyright Section */}
      <div className="text-center pt-4 pb-16 lg:py-3 border-t border-white/20 mt-4">
        Copyright All Right Reserved 2026
      </div>
    </div>
  );
}

export default Footer;