import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  {
    name: "United Kingdom",
    image: "/assets/uk.jpg",
    details: [
      "Tourist, Student, and Work permits",
      "Document checklist: Passport, bank statements, acceptance letter",
      "Visa interview preparation sessions",
      "Special services for healthcare workers",
    ],
  },
  {
    name: "Canada",
    image: "/assets/canada.jpg",
    details: [
      "Visitor, Work, and Study visas available",
      "Required documents: Passport, financial proof, invitation letter",
      "Processing time: 2-4 weeks",
      "Expert assistance with application preparation",
    ],
  },
  {
    name: "Australia",
    image: "/assets/aus.jpg",
    details: [
      "Skilled migration and student visas",
      "Documents needed: IELTS scores, employment letters, passport",
      "Fast track options available",
      "Free eligibility assessment",
    ],
  },
  {
    name: "Europe",
    image: "/assets/eu.jpg",
    details: [
      "Work, Student, and Family reunion visas",
      "Documents required: Passport, university admission letter, employment contract",
      "Guidance on health insurance and housing",
      "Language course recommendations",
    ],
  },
  {
    name: "US",
    image: "/assets/us.jpg",
    details: [
      "Visitor, Work, Student, and Residency visas",
      "Documents: Passport, job offer letter, medical exams",
      "Step-by-step application support",
      "Post-arrival services and integration advice",
    ],
  },
];

export default function FullWidthHorizontalBars() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Select a Country</h2>

      <div className="flex w-full space-x-4 overflow-x-auto">
        {countries.map((country, idx) => {
          const isActive = idx === activeIndex;

          return (
            <motion.div
              key={country.name}
              layout
              transition={{ duration: 0.4 }}
              className={`flex flex-col justify-between items-center rounded-lg overflow-hidden cursor-pointer shadow-md
                ${isActive ? "bg-red-900 text-white" : "bg-white text-gray-600 hover:bg-red-900 hover:text-white"}
              `}
              style={{
                flex: isActive ? "2 1 0%" : "1 1 0%",
                height: "450px",
                minWidth: "100px",
              }}
              onClick={() => toggleActive(idx)}
            >
              {/* Country Title */}
              <motion.div
                layout
                className={`flex items-center justify-center p-2 font-semibold transition-all duration-300 text-center ${
                  isActive ? "text-xl py-2" : "rotate-180 text-sm"
                }`}
                style={{
                  writingMode: isActive ? "horizontal-tb" : "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                {country.name}
              </motion.div>

              {/* Expanded Info */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="info"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 text-sm flex flex-col items-start w-full h-full overflow-auto"
                  >
                    <h3 className="font-semibold text-white text-lg mb-3">
                      Visa & Immigration Services to {country.name}
                    </h3>

                    <img
                      src={country.image}
                      alt={country.name}
                      className="h-16 w-16 rounded-full object-cover mx-auto mb-4 shadow-md"
                    />

                    <ul className="list-disc list-inside space-y-1">
                      {country.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
