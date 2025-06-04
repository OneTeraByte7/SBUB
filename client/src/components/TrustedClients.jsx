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
    <section className="bg-blue-900 pt-40 pb-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between text-white text-sm font-sans">
          {stats.map(({ label, value, suffix }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center flex-1"
            >
              <CountUp
                start={0}
                end={value}
                duration={3}
                separator=","
                className="text-red-700 text-4xl font-bold"
              />
              <span className="text-red-700 text-3xl font-bold">{suffix}</span>
              <span className="mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// This component displays statistics about trusted clients, country operations, visas in process, and global agents.