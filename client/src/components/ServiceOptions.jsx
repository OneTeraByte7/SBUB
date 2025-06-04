import { useState } from "react";

export default function ServiceOptions() {
  const [active, setActive] = useState(null);

  const options = [
    "Visa Solution",
    "Immigration",
    "Education",
    "Consultancy",
  ];

  return (
    <section className="bg-white w-full mt-0">
      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-0 py-0">
        {options.map((label, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              py-4 px-4 font-semibold text-lg transition-all duration-300 ease-in-out
              ${
                active === index
                  ? "bg-blue-900 text-white rounded-none"
                  : "bg-white text-blue-900 rounded-xl"
              }
            `}
            // Add hover effect to remove rounded corners and add bg/text color toggle
            onMouseEnter={e => {
              e.currentTarget.classList.remove("rounded-xl");
              e.currentTarget.classList.add("rounded-none", "bg-blue-900", "text-white");
            }}
            onMouseLeave={e => {
              if (active !== index) {
                e.currentTarget.classList.add("rounded-xl");
                e.currentTarget.classList.remove("rounded-none", "bg-blue-900", "text-white");
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
