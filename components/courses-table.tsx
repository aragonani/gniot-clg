import React from "react";
import { Lock } from "lucide-react";

interface Props {
  handleOpenForm: (headingText?: string) => void;
}

const CoursesTable = ({ handleOpenForm }: Props) => {
  const courses = [
    { name: "B.Sc", fees: "₹8.1 Lakhs", eligibility: "10+2 with 45%", date: "5 Jan-31 Aug 2026" },
    { name: "BBA", fees: "₹4.5 Lakhs", eligibility: "10+2 with 50%", date: "5 Jan-31 Aug 2026" },
    { name: "B.Pharm", fees: "₹6.8 Lakhs", eligibility: "10+2 with 55%", date: "5 Jan-31 Aug 2026" },
    { name: "BE/B.Tech", fees: "₹11.2 Lakhs", eligibility: "10+2 with 55%", date: "5 Jan-31 Aug 2026" },
    { name: "BCA", fees: "₹3.9 Lakhs", eligibility: "10+2 with 50%", date: "5 Jan-31 Aug 2026" },
    { name: "Ph.D", fees: "₹2.1 Lakhs", eligibility: "Post Graduation", date: "1 Jan-23 Jan 2026" },
    { name: "MCA", fees: "₹3.5 Lakhs", eligibility: "Graduation with 50%", date: "5 Jan-31 Aug 2026" },
    { name: "GNM", fees: "₹2.1 Lakhs", eligibility: "10+2 with 40%", date: "5 Jan-31 Aug 2026" },
    { name: "M.Pharm", fees: "₹3.2 Lakhs", eligibility: "B.Pharm with 55%", date: "5 Jan-31 Aug 2026" },
  ];

  return (
    <section className="bg-[#f4f6f9] py-10 px-4">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-6">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        GNIOT University Noida Courses & Fees
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-2">
          Unlock full fee details by registering below
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5">

          <button
            onClick={() => handleOpenForm()}
            className="flex items-center justify-center gap-2 bg-[#1A7B96] hover:bg-[#166b82] text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            <Lock size={16} />
            Unlock Full Fee Details
          </button>

          <button
            onClick={() => handleOpenForm()}
            className="bg-[#fcc423] hover:bg-[#fbbe05] text-black font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Explore Scholarships
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">

            {/* Table Header */}
            <thead>
              <tr className="bg-[#1A7B96] text-white">
                <th className="px-6 py-4 text-sm font-semibold uppercase">Course</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase">Total Fees</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase">Eligibility</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase">Application Date</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
                    <span className="text-[#008DA8] font-bold cursor-pointer hover:underline">
                      {course.name}
                    </span>
                  </td>

                  {/* Fees */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 blur-sm select-none font-medium">
                        {course.fees}
                      </span>

                      <div className="group relative">
                        <Lock size={16} className="text-gray-400 cursor-pointer hover:text-[#008DA8]" />

                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap">
                          Register to unlock fees
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-700 text-sm">
                    {course.eligibility}
                  </td>

                  <td className="px-6 py-4 text-gray-700 text-sm">
                    {course.date}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleOpenForm(course.name)}
                      className="bg-[#fcc423] hover:bg-[#fbbe05] text-black text-xs font-bold py-2 px-5 rounded transition active:scale-95 shadow-sm"
                    >
                      Apply Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default CoursesTable;