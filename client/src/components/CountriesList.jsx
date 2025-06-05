import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

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
      "Fast-track options available",
      "Free eligibility assessment",
    ],
  },
  {
    name: "Europe",
    image: "/assets/eu.jpg",
    details: [
      "Work, Student, and Family-reunion visas",
      "Documents required: Passport, university admission letter, employment contract",
      "Guidance on health insurance and housing",
      "Language-course recommendations",
    ],
  },
  {
    name: "US",
    image: "/assets/us.jpg",
    details: [
      "Visitor, Work, Student, and Residency visas",
      "Documents: Passport, job-offer letter, medical exams",
      "Step-by-step application support",
      "Post-arrival services and integration advice",
    ],
  },
];

export default function FullWidthHorizontalBars() {
  const [infoIndex, setInfoIndex] = useState(1);

  const handleClick = (idx) => {
    if (infoIndex === idx) {
      setInfoIndex(null);
    } else {
      setInfoIndex(idx);
    }
  };

  return (
    <section className="w-full px-4 py-8 bg-white rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Select a Country</h2>

      <div className="flex flex-col w-full border-t border-b border-gray-300">
        <div className="flex w-full border-b border-gray-300">
          {countries.map((country, idx) => (
            <React.Fragment key={country.name}>
              <div
                onClick={() => handleClick(idx)}
                className={`relative flex flex-col items-center cursor-pointer border-l border-gray-300 py-10 px-2 hover:bg-red-900 hover:text-white ${
                  infoIndex === idx
                    ? "bg-red-900 text-white"
                    : "bg-white text-gray-700"
                }`}
                style={{
                  width: `${100 / countries.length}%`,
                  minWidth: "110px",
                  height: "45vh", // tall relative height
                  maxHeight: "500px", // optional max height for large screens
                }}
              >
                {/* Rotated country name vertically */}
                <span
                  className="font-extrabold tracking-tight text-2xl mb-4"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    textAlign: "center",
                    userSelect: "none",
                    height: "calc(100% - 60px)",
                    lineHeight: "1.1",
                  }}
                >
                  {country.name}
                </span>
                <img
                  src={country.image}
                  alt={`${country.name} flag`}
                  className="h-14 w-14 rounded-full object-cover shadow mt-auto"
                />
              </div>

              {infoIndex === idx && (
                <motion.div
                  key={"info-" + idx}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-white text-gray-700 p-8 shadow-md rounded-md"
                  style={{ width: "100%" }}
                >
                  <h3 className="font-bold text-3xl mb-6 text-red-900">
                    Visa & Immigration Services to {countries[idx].name}
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-xl">
                    {countries[idx].details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <button className="mt-8 flex items-center gap-3 bg-red-900 text-white font-semibold px-7 py-4 rounded-full shadow hover:bg-red-800 text-xl">
                    <FaPhoneAlt />
                    Contact Us
                  </button>
                </motion.div>
              )}
            </React.Fragment>
          ))}

          {infoIndex === countries.length && (
            <motion.div
              key={"info-last"}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-white text-gray-700 p-8 shadow-md rounded-md"
              style={{ width: "100%" }}
            >
              <h3 className="font-bold text-3xl mb-6 text-red-900">
                Visa & Immigration Services to {countries[countries.length - 1].name}
              </h3>
              <ul className="list-disc list-inside space-y-3 text-xl">
                {countries[countries.length - 1].details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button className="mt-8 flex items-center gap-3 bg-red-900 text-white font-semibold px-7 py-4 rounded-full shadow hover:bg-red-800 text-xl">
                <FaPhoneAlt />
                Contact Us
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
