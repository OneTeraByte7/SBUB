import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutSBUB() {
  const [count, setCount] = useState(0);

  // Animate count from 0 to 2221287 over ~3 seconds
  useEffect(() => {
    let start = 0;
    const end = 2221287;
    const duration = 3000;
    const increment = Math.ceil(end / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(counter);
  }, []);

  const radius = 70;
  const circumference = Math.PI * radius;
  const progress = Math.min(count / 2221287, 1) * 0.85; // Only fill 85%
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <section className="bg-white pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      {/* Left side */}
      <div className="relative w-full md:w-1/3 flex-shrink-0 flex flex-col items-center">
        <img
          src="/assets/2.jpg"
          alt="SBUB Group"
          className="w-full h-auto rounded-md object-contain"
        />

        {/* Call box - centered on image */}
        <motion.div
          initial={{ backgroundColor: "rgba(30, 64, 175, 0.8)" }}
          animate={{
            backgroundColor: [
              "rgba(30, 64, 175, 0.8)",
              "rgba(59, 130, 246, 0.9)",
              "rgba(30, 64, 175, 0.8)",
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white rounded-lg px-4 py-3 flex items-center gap-3 shadow-lg cursor-pointer select-none"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(37, 99, 235, 1)",
          }}
        >
          <FaPhoneAlt className="text-yellow-400" size={20} />
          <div>
            <div className="font-semibold text-lg">Call For Consultation</div>
            <div className="text-sm">+1 (555) 123-4567</div>
          </div>
        </motion.div>

        {/* Semi-circular progress meter */}
        <div className="mt-20 flex flex-col items-center">
          <svg width={160} height={80} className="transform">
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset="0"
            />
            <motion.circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#2563eb"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 3, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="text-center mt-2">
            <p className="text-2xl font-bold text-blue-700">
              {count.toLocaleString()}
            </p>
            <p className="text-gray-700 font-medium text-lg">
              Successful Cases
            </p>
          </div>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="hidden md:block w-px h-96 bg-gray-300"></div>

      {/* Right side: Content */}
      <div className="flex flex-col w-full md:w-2/3 text-right">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          Together we can build your bright future
        </h2>

        <div className="border-b-4 border-blue-600 w-24 mb-8 self-end"></div>

        <ul className="max-w-xl mx-auto space-y-6 text-xl leading-relaxed list-none">
          {[
            "Expert immigration & visa guidance tailored for you.",
            "Trusted consultancy with thousands of satisfied clients.",
            "Personalized support to simplify complex processes.",
            "Global reach with quick and reliable visa services.",
          ].map((point, i) => (
            <li
              key={i}
              className="flex items-center justify-end gap-4 text-gray-800"
            >
              <FaCheckCircle
                className={`flex-shrink-0 ${
                  i % 2 === 1 ? "text-blue-600" : "text-gray-500"
                }`}
                size={24}
              />
              <span
                className={`${
                  i % 2 === 1 ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>

        <p className="max-w-xl mx-auto mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
          Our dedicated team works closely with you to understand your unique
          circumstances, ensuring your immigration journey is smooth,
          transparent, and efficient. We keep you informed at every step and
          provide expert advice that makes the process stress-free.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-12 mx-auto bg-red-600 text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-900 transition-colors duration-300"
        >
          Read More
        </motion.button>
      </div>
    </section>
  );
}
