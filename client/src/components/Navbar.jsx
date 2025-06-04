// src/components/Navbar.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 left-0 bg-white shadow-md z-50"
    >
      <div
        className="mx-auto px-12 py-4 flex justify-between items-center"
        style={{ maxWidth: "90vw" }}
      >
        <div className="text-red-600 font-bold text-2xl">SBUB</div>

        <ul className="hidden md:flex gap-12 text-blue-600 font-medium text-sm">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">About</li>

          {/* Study Abroad with dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="hover:text-red-600">Study Abroad ▼</span>

            {showDropdown && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg text-blue-600 font-normal text-sm">
                {countries.map(({ name, flag }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-100 hover:text-red-600"
                  >
                    <span>{flag}</span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="hover:text-red-600 cursor-pointer">Contact</li>
        </ul>

        <button className="md:hidden text-red-600 text-3xl">☰</button>
      </div>
    </motion.nav>
  );
}
