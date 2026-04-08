import { useEffect, useState } from "react";
import { Tag, Clock } from "lucide-react";

interface Props {
     handleOpenForm: () => void;
     isTimer: boolean;
     isPaused: boolean;
}

const OfferSection = ({ handleOpenForm, isTimer, isPaused }: Props) => {
  const [showBar, setShowBar] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes = 600 sec

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // show after 200px scroll
      if (window.scrollY > 200) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, timeLeft]);

  // Format mm:ss
  const formatTime = (seconds: any) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  if (isPaused) return null;

  return (
    <>
      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-2 flex items-center justify-between lg:hidden z-50">
          {/* Left section */}
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-[#374c89]" />
                <span className="text-[#374c89] font-bold text-lg">
                  Scholarship
                </span>{" "}
                <span className="text-gray-500">upto 100%</span>
                
              </div>
             

              {isTimer && (
                <div className="flex items-center gap-1 text-sm text-gray-800">
                  <Clock className="w-4 h-4 text-[#374c89]" />
                  Offer ends in{" "}
                  <span className="font-bold text-lg">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right button */}
          <button
            className="bg-linear-to-r from-[#374c89] to-[#4866bf] text-white px-4 py-2 rounded-base font-semibold text-lg md:text-xl shadow-md"
            onClick={() => handleOpenForm()}
          >
            Apply Now
          </button>
        </div>
      )}
    </>
  );
};

export default OfferSection;
