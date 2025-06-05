import React from "react";
import CountUp from "react-countup";

export default function TrustedClientsStats() {
  const stats = [
    { label: "Trusted Clients", value: 23000, suffix: "K" },
    { label: "Country Operations", value: 50, suffix: "+" },
    { label: "Visas on Process", value: 15000, suffix: "K+" },
    { label: "Global Agents", value: 347, suffix: "" },
  ];

  return (
    <section className="bg-blue-900 h-[600px] md:h-[700px] lg:h-[800px] flex items-end pb-20">
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="flex justify-between text-white font-sans">
          {stats.map(({ label, value, suffix }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center flex-1"
            >
              <span className="text-red-800 text-7xl font-normal leading-tight">
                <CountUp
                  start={0}
                  end={value}
                  duration={3}
                  separator=","
                  decimals={0}
                  formattingFn={(val) => {
                    if (value >= 1000) {
                      return `${Math.floor(val / 1000)}${suffix}`;
                    }
                    return `${val}${suffix}`;
                  }}
                />
              </span>
              <span className="mt-4 text-white text-2xl font-normal">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
