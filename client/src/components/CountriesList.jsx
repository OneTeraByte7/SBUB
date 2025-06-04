import { useState } from "react";

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

export default function CountriesSelector() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto p-6 flex h-72 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Left side: Expanded content of selected country */}
      <div className="flex-1 bg-gray-50 p-8 rounded-l-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          Visa & Immigration services to {countries[activeIndex].name}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {countries[activeIndex].details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>

      {/* Right side: vertical country names */}
      <div className="flex flex-col w-24 bg-blue-700 rounded-r-lg text-white select-none">
        {countries.map((country, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={country.name}
              onClick={() => setActiveIndex(idx)}
              className={`
                flex items-center justify-center
                border-b border-blue-600
                cursor-pointer
                transition-all duration-300
                ${isActive ? "bg-blue-900 font-bold" : "bg-blue-700 hover:bg-blue-800"}
                relative
                py-4
                text-center
                whitespace-nowrap
                transform
                origin-bottom-right
                rotate-90
                -translate-x-12
                tracking-wide
              `}
              style={{ writingMode: "vertical-rl" }}
            >
              {idx + 1} | {country.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
