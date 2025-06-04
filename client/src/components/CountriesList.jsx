import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  {
    name: "Canada",
    details: [
      "Visitor, Work, and Study visas available",
      "Required documents: Passport, financial proof, invitation letter",
      "Processing time: 2-4 weeks",
      "Expert assistance with application preparation",
    ],
  },
  {
    name: "Australia",
    details: [
      "Skilled migration and student visas",
      "Documents needed: IELTS scores, employment letters, passport",
      "Fast track options available",
      "Free eligibility assessment",
    ],
  },
  {
    name: "United Kingdom",
    details: [
      "Tourist, Student, and Work permits",
      "Document checklist: Passport, bank statements, acceptance letter",
      "Visa interview preparation sessions",
      "Special services for healthcare workers",
    ],
  },
  {
    name: "Germany",
    details: [
      "Work, Student, and Family reunion visas",
      "Documents required: Passport, university admission letter, employment contract",
      "Guidance on health insurance and housing",
      "Language course recommendations",
    ],
  },
  {
    name: "New Zealand",
    details: [
      "Visitor, Work, Student, and Residency visas",
      "Documents: Passport, job offer letter, medical exams",
      "Step-by-step application support",
      "Post-arrival services and integration advice",
    ],
  },
];

export default function VerticalBarGraphCountries() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="max-w-full p-6 bg-white rounded-lg shadow-lg select-none" style={{ height: 400 }}>
      <h2 className="text-3xl font-bold mb-8 text-center">Select a Country</h2>

      <div className="flex h-full">
        {/* Left column: vertical bars */}
        <div className="flex flex-col space-y-4 min-w-[56px]">
          {countries.map((country, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={country.name}
                onClick={() => toggleActive(idx)}
                className={`relative bg-gradient-to-r from-blue-400 to-blue-600
                  ${
                    isActive
                      ? "from-blue-700 to-blue-900 text-white shadow-lg"
                      : "text-white hover:from-blue-500 hover:to-blue-700"
                  }
                  rounded-l-lg
                  h-16 w-14
                  font-semibold
                  select-none
                  transition-colors
                  duration-300
                  flex items-center justify-center
                  whitespace-normal
                  px-1
                `}
                aria-expanded={isActive}
                aria-controls={`details-${idx}`}
                type="button"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed", textAlign: "center" }}
              >
                {idx + 1} | {country.name}
              </button>
            );
          })}
        </div>

        {/* Right side: info panel */}
        <div className="flex-1 ml-6 relative">
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                id={`details-${activeIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-50 border border-blue-300 rounded-lg p-6 text-blue-900 shadow-lg h-full overflow-auto"
              >
                <h3 className="font-semibold mb-4 text-2xl">
                  Visa & Immigration services to {countries[activeIndex].name}
                </h3>
                <ul className="list-disc list-inside text-blue-800 text-lg space-y-2">
                  {countries[activeIndex].details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
