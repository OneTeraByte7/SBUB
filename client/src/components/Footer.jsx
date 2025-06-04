import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/home" className="hover:text-blue-400 transition-colors duration-300" aria-label="Navigate to Home">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition-colors duration-300" aria-label="Navigate to About Us">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition-colors duration-300" aria-label="Navigate to Contact">
                Contact
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-blue-400 transition-colors duration-300" aria-label="Navigate to FAQs">
                FAQs
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-blue-400 transition-colors duration-300" aria-label="Navigate to Support">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Exams Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Exams Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/exam-registration" className="hover:text-blue-400 transition-colors duration-300" aria-label="Exam Registration">
                Exam Registration
              </a>
            </li>
            <li>
              <a href="/exam-schedules" className="hover:text-blue-400 transition-colors duration-300" aria-label="Exam Schedules">
                Exam Schedules
              </a>
            </li>
            <li>
              <a href="/result-checking" className="hover:text-blue-400 transition-colors duration-300" aria-label="Result Checking">
                Result Checking
              </a>
            </li>
            <li>
              <a href="/exam-preparation" className="hover:text-blue-400 transition-colors duration-300" aria-label="Exam Preparation">
                Exam Preparation
              </a>
            </li>
            <li>
              <a href="/study-materials" className="hover:text-blue-400 transition-colors duration-300" aria-label="Study Materials">
                Study Materials
              </a>
            </li>
          </ul>
        </div>

        {/* Opportunities */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Opportunities</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                type="button"
                onClick={() => alert("Internships clicked!")}
                className="hover:text-blue-400 bg-transparent border-none p-0 m-0 text-left cursor-pointer transition-colors duration-300"
                aria-label="Internships"
              >
                Internships
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => alert("Job Openings clicked!")}
                className="hover:text-blue-400 bg-transparent border-none p-0 m-0 text-left cursor-pointer transition-colors duration-300"
                aria-label="Job Openings"
              >
                Job Openings
              </button>
            </li>
            <li>
              <a href="/scholarships" className="hover:text-blue-400 transition-colors duration-300" aria-label="Scholarships">
                Scholarships
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => alert("Volunteer Programs clicked!")}
                className="hover:text-blue-400 bg-transparent border-none p-0 m-0 text-left cursor-pointer transition-colors duration-300"
                aria-label="Volunteer Programs"
              >
                Volunteer Programs
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => alert("Workshops clicked!")}
                className="hover:text-blue-400 bg-transparent border-none p-0 m-0 text-left cursor-pointer transition-colors duration-300"
                aria-label="Workshops"
              >
                Workshops
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}
