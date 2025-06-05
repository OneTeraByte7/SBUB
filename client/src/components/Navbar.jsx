import { motion } from "framer-motion";
import { useState } from "react";

const countries = [
  { name: "USA", flag: "/assets/us.jpg" },
  { name: "Canada", flag: "/assets/canada.jpg" },
  { name: "UK", flag: "/assets/uk.jpg" },
  { name: "Australia", flag: "/assets/aus.jpg" },
  { name: "Europe", flag: "/assets/eu.jpg" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full top-0 left-0 bg-white shadow-md z-50"
        style={{ height: "90px" }}
      >
        <div
          className="mx-auto px-16 flex justify-center items-center relative h-full"
          style={{ maxWidth: "98vw" }}
        >
          {/* Logo */}
          <div
            style={{
              position: "absolute",
              top: "80%",
              left: "25%",
              transform: "translate(-50%, -50%)",
              zIndex: 60,
              pointerEvents: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="/assets/logo.jpg"
                alt="Logo"
                style={{
                  height: "140px",
                  width: "auto",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "6px",
                  backgroundColor: "#8B0000",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
              />
            </div>
          </div>

          {/* Spacer */}
          <div style={{ width: "120px" }} />

          {/* Menu options */}
          <ul className="hidden md:flex gap-16 text-blue-900 font-bold text-lg relative z-50 mx-auto">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            <li className="hover:text-red-600 cursor-pointer">About</li>

            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="hover:text-red-600 select-none">
                Study Abroad ▼
              </span>
              {showDropdown && (
                <ul className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg text-blue-900 font-normal text-base z-50">
                  {countries.map(({ name, flag }) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-red-100 hover:text-red-600"
                    >
                      <img
                        src={flag}
                        alt={name}
                        className="h-5 w-7 object-cover rounded-sm"
                      />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="hover:text-red-600 cursor-pointer">Contact</li>
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden text-red-600 text-4xl absolute right-20">
            ☰
          </button>

          {/* Search button on right */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Open Search"
            className="text-blue-900 hover:text-red-600 absolute right-6 text-2xl md:text-3xl cursor-pointer"
          >
            🔍
          </button>
        </div>
      </motion.nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-white rounded-md p-4 w-11/12 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              aria-label="Close Search"
              className="mt-4 text-red-600 font-semibold hover:text-red-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
