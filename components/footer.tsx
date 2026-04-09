


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
    <div className="text-white text-sm md:text-base sm:py-1 py-6"
     style={{ background: "linear-gradient(160deg, #001f2d 0%, #00304a 60%, #001825 100%)" }}>
      {/* SEO Keywords Section */}

        {/* Phone Number Section */}
      <div className="text-right font-semibold text-base md:text-lg pr-2">
        📞 Call us: <a href="tel:+917696376158" className="underline">+91 76963 76158</a>
      </div>


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
