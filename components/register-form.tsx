// "use client";

// import { useState } from "react";
// import "../app/hero.css";

// const courses = [
//   "B.Tech - Computer Science & Engineering",
//   "B.Tech - Artificial Intelligence",
//   "B.Tech - Artificial Intelligence & Machine Learning",
//   "B.Tech - Artificial Intelligence & Data Science",
//   "B.Tech - Cyber Security",
//   "B.Tech - Data Science",
//   "B.Tech - Information Technology",
//   "B.Tech - Electronics & Communication Engineering",
//   "B.Tech - Mechanical Engineering",
//   "B.Tech - Civil Engineering",
//   "B.Tech - Electrical Engineering",

//   "BCA (Bachelor of Computer Applications)",
//   "BBA (Bachelor of Business Administration)",
//   "B.Com (Bachelor of Commerce)",
//   "B.Com (Hons.)",
//   "B.Sc (Computer Science)",
//   "B.Sc Nursing",
//   "B.Pharm (Bachelor of Pharmacy)",

//   "MBA (Master of Business Administration)",
//   "PGDM (Post Graduate Diploma in Management)",
//   "MCA (Master of Computer Applications)",
//   "M.Tech (Master of Technology)",

//   "BCA + MCA (Integrated)",
//   "BBA + MBA (Integrated)",

//   "BA LLB",
//   "LLB",
//   "GNM (General Nursing & Midwifery)",
//   "D.Pharm (Diploma in Pharmacy)",
// ];

// const cities = [
//   "Delhi NCR",
//   "Mumbai",
//   "Bengaluru",
//   "Faridabad",
//   "Ghaziabad",
//   "Meerut",
//   "Aligarh",
//   "Agra",
//   "Hyderabad",
//   "Chennai",
//   "Pune",
//   "Kolkata",
//   "Ahmedabad",
//   "Jaipur",
//   "Lucknow",
//   "Gurugram",
//   "Noida",
//   "Chandigarh",
//   "Bhopal",
//   "Indore",
// ];

// interface Props {
//   formHeading?: string;
// }
// export default function RegisterForm({formHeading}: Props) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     course: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [focused, setFocused] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(false);
//     try {
//       const res = await fetch("/api/send-lead", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (!res.ok) throw new Error();
//       setSubmitted(true);
//     } catch {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="register-form-card flex flex-col items-center justify-center min-h-120 text-center px-6">
//         <div className="success-icon mb-6">
//           <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
//             <circle cx="32" cy="32" r="32" fill="#fcc423" fillOpacity="0.15" />
//             <circle cx="32" cy="32" r="24" fill="#fcc423" fillOpacity="0.25" />
//             <path
//               d="M20 33l9 9 15-18"
//               stroke="#fcc423"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//         <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
//         <p className="text-white/70 text-sm leading-relaxed">
//           Our admissions team will reach out to you within 24 hours.
//         </p>
//         <button
//           onClick={() => {
//             setSubmitted(false);
//             setForm({ name: "", email: "", phone: "", city: "", course: "" });
//           }}
//           className="mt-8 text-xs text-[#fcc423] underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity"
//         >
//           Submit another enquiry
//         </button>

//         <style jsx>{`
//           @keyframes pop-in {
//             0% {
//               transform: scale(0.5);
//               opacity: 0;
//             }
//             70% {
//               transform: scale(1.1);
//             }
//             100% {
//               transform: scale(1);
//               opacity: 1;
//             }
//           }
//           .success-icon {
//             animation: pop-in 0.5s ease forwards;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   const fields = [
//     { name: "name", placeholder: "Full Name", type: "text", icon: "👤" },
//     { name: "email", placeholder: "Email Address", type: "email", icon: "✉️" },
//     { name: "phone", placeholder: "Phone Number", type: "tel", icon: "📞" },
//   ];

//   return (
//     <div className="register-form-card">
//       {/* Header */}
//       <div className="form-header">
//         <div className="badge">{formHeading ? `${formHeading} Admissions 2026` : "UG / PG Admissions 2026"}</div>
//         <h2 className="form-title">Start Your Journey</h2>
//         <p className="form-subtitle">
//           Fill in the details — we'll take it from here.
//         </p>
//       </div>

//       {/* Fields */}
//       <div className="fields-stack">
//         {fields.map((f) => (
//           <div
//             key={f.name}
//             className={`field-wrap ${focused === f.name ? "field-focused" : ""}`}
//           >
//             <span className="field-icon">{f.icon}</span>
//             <input
//               name={f.name}
//               type={f.type}
//               placeholder={f.placeholder}
//               value={(form as Record<string, string>)[f.name]}
//               onChange={(e) => {
//                 if (f.name === "phone") {
//                   // Allow only digits & max 10 length
//                   const value = e.target.value.replace(/\D/g, "").slice(0, 12);
//                   setForm({ ...form, phone: value });
//                 } else {
//                   handleChange(e);
//                 }
//               }}
//               onFocus={() => setFocused(f.name)}
//               onBlur={() => setFocused(null)}
//               autoComplete="off"
//             />
          
//           </div>
          
//         ))}

//         {/* City */}
//         <div
//           className={`field-wrap ${focused === "city" ? "field-focused" : ""}`}
//         >
//           <span className="field-icon">📍</span>
//           <select
//             name="city"
//             value={form.city}
//             onChange={handleChange}
//             onFocus={() => setFocused("city")}
//             onBlur={() => setFocused(null)}
//           >
//             <option value="" disabled>
//               Select City
//             </option>
//             {cities.map((c) => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>
//         </div>

//         {/* Course */}
//         <div
//           className={`field-wrap ${focused === "course" ? "field-focused" : ""}`}
//         >
//           <span className="field-icon">🎓</span>
//           <select
//             name="course"
//             value={form.course}
//             onChange={handleChange}
//             onFocus={() => setFocused("course")}
//             onBlur={() => setFocused(null)}
//           >
//             <option value="" disabled>
//               Select Course
//             </option>
//             {courses.map((c) => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* CTA */}
//       <button
//         onClick={handleSubmit}
//         disabled={
//           !form.name ||
//           !form.email ||
//           form.phone.length !== 10 ||
//           !form.city ||
//           !form.course
//         }
//         className="submit-btn"
//       >
//         <span>{loading ? "Sending..." : "Apply Now"}</span>
//         {!loading && (
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7" />
//           </svg>
//         )}
//       </button>

//       <p className="consent-text">
//         By applying, you consent to be contacted via SMS, Email & WhatsApp.
//         {/* This overrides DNC/NDNC registration. */}
//       </p>

//       {error && (
//         <p
//           style={{
//             color: "#f87171",
//             fontSize: 12,
//             textAlign: "center",
//             marginTop: 8,
//           }}
//         >
//           Something went wrong. Please try again.
//         </p>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const courses = [
  { label: "B.Tech - Computer Science & Engineering", value: "B.Tech - Computer Science & Engineering" },
  { label: "B.Tech - Artificial Intelligence", value: "B.Tech - Artificial Intelligence" },
  { label: "B.Tech - Artificial Intelligence & Machine Learning", value: "B.Tech - Artificial Intelligence & Machine Learning" },
  { label: "B.Tech - Artificial Intelligence & Data Science", value: "B.Tech - Artificial Intelligence & Data Science" },
  { label: "B.Tech - Cyber Security", value: "B.Tech - Cyber Security" },
  { label: "B.Tech - Data Science", value: "B.Tech - Data Science" },
  { label: "B.Tech - Information Technology", value: "B.Tech - Information Technology" },
  { label: "B.Tech - Electronics & Communication Engineering", value: "B.Tech - Electronics & Communication Engineering" },
  { label: "B.Tech - Mechanical Engineering", value: "B.Tech - Mechanical Engineering" },
  { label: "B.Tech - Civil Engineering", value: "B.Tech - Civil Engineering" },
  { label: "B.Tech - Electrical Engineering", value: "B.Tech - Electrical Engineering" },

  { label: "BCA (Bachelor of Computer Applications)", value: "BCA (Bachelor of Computer Applications)" },
  { label: "BBA (Bachelor of Business Administration)", value: "BBA (Bachelor of Business Administration)" },
  { label: "B.Com (Bachelor of Commerce)", value: "B.Com (Bachelor of Commerce)" },
  { label: "B.Com (Hons.)", value: "B.Com (Hons.)" },
  { label: "B.Sc (Computer Science)", value: "B.Sc (Computer Science)" },
  { label: "B.Sc Nursing", value: "B.Sc Nursing" },
  { label: "B.Pharm (Bachelor of Pharmacy)", value: "B.Pharm (Bachelor of Pharmacy)" },

  { label: "MBA (Master of Business Administration)", value: "MBA (Master of Business Administration)" },
  { label: "PGDM (Post Graduate Diploma in Management)", value: "PGDM (Post Graduate Diploma in Management)" },
  { label: "MCA (Master of Computer Applications)", value: "MCA (Master of Computer Applications)" },
  { label: "M.Tech (Master of Technology)", value: "M.Tech (Master of Technology)" },

  { label: "BCA + MCA (Integrated)", value: "BCA + MCA (Integrated)" },
  { label: "BBA + MBA (Integrated)", value: "BBA + MBA (Integrated)" },

  { label: "BA LLB", value: "BA LLB" },
  { label: "LLB", value: "LLB" },
  { label: "GNM (General Nursing & Midwifery)", value: "GNM (General Nursing & Midwifery)" },
  { label: "D.Pharm (Diploma in Pharmacy)", value: "D.Pharm (Diploma in Pharmacy)" },
];

// const courses = [
//   "B.Tech - Computer Science & Engineering",
//   "B.Tech - Artificial Intelligence",
//   "B.Tech - Artificial Intelligence & Machine Learning",
//   "B.Tech - Artificial Intelligence & Data Science",
//   "B.Tech - Cyber Security",
//   "B.Tech - Data Science",
//   "B.Tech - Information Technology",
//   "B.Tech - Electronics & Communication Engineering",
//   "B.Tech - Mechanical Engineering",
//   "B.Tech - Civil Engineering",
//   "B.Tech - Electrical Engineering",

//   "BCA (Bachelor of Computer Applications)",
//   "BBA (Bachelor of Business Administration)",
//   "B.Com (Bachelor of Commerce)",
//   "B.Com (Hons.)",
//   "B.Sc (Computer Science)",
//   "B.Sc Nursing",
//   "B.Pharm (Bachelor of Pharmacy)",

//   "MBA (Master of Business Administration)",
//   "PGDM (Post Graduate Diploma in Management)",
//   "MCA (Master of Computer Applications)",
//   "M.Tech (Master of Technology)",

//   "BCA + MCA (Integrated)",
//   "BBA + MBA (Integrated)",

//   "BA LLB",
//   "LLB",
//   "GNM (General Nursing & Midwifery)",
//   "D.Pharm (Diploma in Pharmacy)",
// ];

const cities = [
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Faridabad",
  "Ghaziabad",
  "Meerut",
  "Aligarh",
  "Agra",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Gurugram",
  "Noida",
  "Chandigarh",
  "Bhopal",
  "Indore",
];


export default function RegisterForm({ formHeading, selectedCourse = "" }: { formHeading: string; selectedCourse?: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

    
//   useEffect(() => {
//   if (selectedCourse) {
//     setForm((prev) => ({
//       ...prev,
//       course: selectedCourse,
//     }));
//   } else {
//     // reset when modal reopens without selection
//     setForm((prev) => ({
//       ...prev,
//       course: "",
//     }));
//   }
// }, [selectedCourse]);

useEffect(() => {
  setForm((prev) => ({
    ...prev,
    course: selectedCourse || "",
  }));
}, [selectedCourse]);

  const router = useRouter();

  // ✅ Validation
  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

  if (!form.phone.trim()) {
  newErrors.phone = "Phone is required";
} else if (!/^[6-9]\d{9}$/.test(form.phone)) {
  newErrors.phone = "Enter a valid 10-digit mobile number starting with 6-9";
}

    if (!form.course) newErrors.course = "Select a course";
    if (!form.city) newErrors.city = "Select a city";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ✅ Submit
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      const firstName = form.name.split(" ")[0];

      router.push(`/gniot/thankyou?name=${firstName}`);

    } catch {
      setErrors({ submit: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto md:mx-0 bg-white rounded-xl p-3 mt-2
    border-2 border-[#1e3a5f]
    shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

      <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-2">
        {formHeading || "Apply For GNIOT University"}
      </h2>

      {/* NAME */}
      <div className="mb-2">
        <label className="text-sm font-semibold text-[#1e3a5f]">
          Full Name <span className="text-red-500">*</span>
        </label>

        <div className={`flex items-center gap-3 mt-1 px-4 py-3 rounded-lg bg-[#f9fbfc] border-2
        ${focused === "name" ? "border-[#1e3a5f]" : "border-[#cbd5e1]"}`}>

          <span className="opacity-60">👤</span>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            placeholder="Enter Full Name"
            className="w-full bg-transparent outline-none text-sm text-black"
          />
        </div>

        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* EMAIL */}
      <div className="mb-2">
        <label className="text-sm font-semibold text-[#1e3a5f]">
          Email <span className="text-red-500">*</span>
        </label>

        <div className={`flex items-center gap-3 mt-1 px-4 py-3 rounded-lg bg-[#f9fbfc] border-2
        ${focused === "email" ? "border-[#1e3a5f]" : "border-[#cbd5e1]"}`}>

          <span className="opacity-60">✉️</span>

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            placeholder="Enter Email"
            className="w-full bg-transparent outline-none text-sm text-black"
          />
        </div>

        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* PHONE */}
      <div className="mb-2">
        <label className="text-sm font-semibold text-[#1e3a5f]">
          Mobile Number <span className="text-red-500">*</span>
        </label>

        <div className={`flex items-center mt-1 rounded-lg bg-[#f9fbfc] border-2
        ${focused === "phone" ? "border-[#1e3a5f]" : "border-[#cbd5e1]"}`}>

          <span className="pl-3 opacity-60">📞</span>

          <div className="px-1 py-3 text-sm text-gray-600 border-r border-[#cbd5e1]">
            +91
          </div>

          <input
            name="phone"
            value={form.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 10);
              // ❌ prevent numbers starting < 6
              if (value.length === 1 && Number(value) < 6) return;
              setForm({ ...form, phone: value });
            }}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            placeholder="Enter Mobile Number"
            className="w-full px-3 py-3 bg-transparent outline-none text-sm text-black"
          />
        </div>

        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* COURSE */}
      <div className="mb-4">
        <label className="text-sm font-semibold text-[#1e3a5f]">
          Course <span className="text-red-500">*</span>
        </label>

        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          className={`w-full mt-1 px-4 py-3 rounded-lg bg-[#f9fbfc] border-2
          ${form.course ? "text-black" : "text-gray-400"}
          border-[#cbd5e1]`}
        >
          <option value="" disabled hidden>
            Select Course Interested
          </option>

          {courses.map((c) => (
            <option key={c.value} value={c.value} className="text-black">
              {c.label}
            </option>
          ))}
        </select>

        {errors.course && (
          <p className="text-red-500 text-xs mt-1">{errors.course}</p>
        )}
      </div>

      {/* CITY */}
      <div className="mb-5">
        <label className="text-sm font-semibold text-[#1e3a5f]">
          City <span className="text-red-500">*</span>
        </label>

        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          className={`w-full mt-1 px-4 py-3 rounded-lg bg-[#f9fbfc] border-2
          ${form.city ? "text-black" : "text-gray-400"}
          border-[#cbd5e1]`}
        >
          <option value="" disabled hidden>
            Select Your City
          </option>

          {cities.map((city) => (
            <option key={city} value={city} className="text-black">
              {city}
            </option>
          ))}
        </select>

        {errors.city && (
          <p className="text-red-500 text-xs mt-1">{errors.city}</p>
        )}
      </div>

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        className="w-full py-3 rounded-lg bg-[#1e3a5f] text-white font-semibold relative overflow-hidden"
      >
        {loading ? "Submitting..." : "Submit"}

        <motion.div
          className="absolute inset-0 w-1/4 bg-linear-to-r from-transparent via-white to-transparent opacity-60"
          animate={{ x: ["-100%", "400%"] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
            repeatDelay: 3,
          }}
        />
      </button>

      {errors.submit && (
        <p className="text-red-500 text-xs text-center mt-2">
          {errors.submit}
        </p>
      )}
    </div>
  );
}
