import React from "react";

export default function App() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Header - Centered and Shorter */}
      <header className="w-[95%] max-w-7xl mx-auto mt-4 rounded-md bg-red-700 text-white p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logo.jpg"
              alt="Logo"
              className="h-28 bg-white p-2 border-b-4 border-[#8b0000] rounded shadow-lg relative"
              style={{ top: "50%", transform: "translateY(50%)" }}
            />
            <div>
              <p className="font-medium">69 Street, 5th Avenue</p>
              <p>LA, United States</p>
            </div>
          </div>
          <div className="space-y-1 text-right">
            <p>+78 233 4556 890</p>
            <p>+78 678 4556 892</p>
          </div>
          <div className="flex space-x-4">
            {["facebook", "instagram", "linkedin", "youtube"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center"
              >
                <i className={`fab fa-${icon}`}></i>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="py-12 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Left Panel */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-900 hover:text-red-700">
              We are shaping your dream future
            </h2>
            <p className="text-gray-600">
              Indignation and dislike men who are so beguiled and of pleasure of
              the moment so blinded
            </p>
            <p className="text-blue-700 font-semibold hover:text-red-700">
              OUR VISA IMMIGRATION SERVICES
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-red-900 cursor-pointer">➜ Tourist Visa Processing</li>
              <li className="hover:text-red-900 cursor-pointer">➜ Green Card Application</li>
              <li className="hover:text-red-900 cursor-pointer">➜ Student Visa Processing</li>
              <li className="hover:text-red-900 cursor-pointer">➜ TOEFL Exam Preparation</li>
              <li className="hover:text-red-900 cursor-pointer">➜ IELTS Exam Preparation</li>
              <li className="hover:text-red-900 cursor-pointer">➜ PTE Exam Preparation</li>
            </ul>
            <button className="bg-red-700 text-white px-6 py-3 rounded mt-4">
              Get Consultancy
            </button>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 border-b pb-1 mb-3 hover:text-red-700">
              Useful Links
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-red-900 cursor-pointer">About Company</li>
              <li className="hover:text-red-900 cursor-pointer">Our Experience</li>
              <li className="hover:text-red-900 cursor-pointer">Case Studies</li>
              <li className="hover:text-red-900 cursor-pointer">Travel Insurance</li>
              <li className="hover:text-red-900 cursor-pointer">Get Appointment</li>
              <li className="hover:text-red-900 cursor-pointer">Cost Calculation</li>
              <li className="hover:text-red-900 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Exam Services */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 border-b pb-1 mb-3 hover:text-red-700">
              Exams Services
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-red-900 cursor-pointer">IELTS Preparation</li>
              <li className="hover:text-red-900 cursor-pointer">TOEFL Preparation</li>
              <li className="hover:text-red-900 cursor-pointer">Student Referral Program</li>
              <li className="hover:text-red-900 cursor-pointer">PTE Exam Preparation</li>
              <li className="hover:text-red-900 cursor-pointer">NAATI Preparation</li>
              <li className="hover:text-red-900 cursor-pointer">IT Professional Program</li>
              <li className="hover:text-red-900 cursor-pointer">Visa Eligibility Check</li>
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 border-b pb-1 mb-3 hover:text-red-700">
              Opportunities
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-red-900 cursor-pointer">International Career</li>
              <li className="hover:text-red-900 cursor-pointer">Top Universities</li>
              <li className="hover:text-red-900 cursor-pointer">Top Courses</li>
              <li className="hover:text-red-900 cursor-pointer">Top Countries</li>
              <li className="hover:text-red-900 cursor-pointer">Affiliate Programs</li>
              <li className="hover:text-red-900 cursor-pointer">Meet Our Team</li>
              <li className="hover:text-red-900 cursor-pointer">Legal Disclaimer</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Scroll Top Button */}
      <button className="fixed bottom-6 right-6 w-10 h-10 bg-red-700 text-white rounded-full shadow-lg">
        ↑
      </button>
    </div>
  );
}
