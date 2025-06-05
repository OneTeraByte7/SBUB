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
      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 px-0 py-0">
        {options.map((label, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              h-24 w-full font-bold text-xl transition-all duration-300 ease-in-out border border-white
              ${active === index
                ? "bg-blue-900 text-white"
                : "bg-white text-blue-900 hover:bg-blue-900 hover:text-white"}
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
