import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-950 text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center space-x-8 space-y-6 md:space-y-0 text-lg font-medium">
        <p className="text-lg">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>

        <a
          href="/privacy-policy"
          className="hover:text-blue-300 transition-colors duration-300"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </a>

        <a
          href="/terms-of-use"
          className="hover:text-blue-300 transition-colors duration-300"
          aria-label="Terms of Use"
        >
          Terms of Use
        </a>

        <a
          href="/support"
          className="hover:text-blue-300 transition-colors duration-300"
          aria-label="Support"
        >
          Support
        </a>
      </div>

      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        className="fixed bottom-6 right-6 bg-red-900 hover:bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-300 text-xl z-50"
        style={{ lineHeight: 1 }}
      >
        ↑
      </button>
    </footer>
  );
}
