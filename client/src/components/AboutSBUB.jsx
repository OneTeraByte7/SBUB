import { FaPhoneAlt, FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function AboutSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image with Floating Call Box */}
        <div className="relative w-full max-w-md mx-auto">
          <img
            src="/assets/girl.jpg" // Replace with your image path
            alt="Student with globe"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-red-700 text-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-4">
            <div className="bg-white text-red-700 p-3 rounded-full">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p className="text-sm">Call For Consultation</p>
              <p className="font-bold text-lg">+01 567 114 3312</p>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div>
          <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide">
            <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2 align-middle"></span>
            About Sbub Group
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mt-2 leading-snug">
            Together we can<br />
            build you a bright<br />
            future
          </h2>


          <div className="w-14 h-1 bg-red-700 my-4" />

          <div className="space-y-3 text-gray-600 text-[15px]">
            <p>
              We are one of the fastest-growing education & training consultancies.
            </p>
            <p>
              We are here to help and support students who would like to achieve their dreams through studying abroad in the world’s best universities.
            </p>
            <p>
              We are here to help you fulfil your dreams!
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaUniversity className="text-red-700 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-[15px] leading-snug">
                  Best Possible <br />
                  Higher Education <br />
                  Courses For Students
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaChalkboardTeacher className="text-red-700 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-[15px] leading-snug">
                  Professional Training For <br />
                  The Employees <br />
                  And Employers
                </p>
              </div>
            </div>
          </div>

          {/* List with Checks */}
          <ul className="mt-6 space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-700 mt-1">✔</span>
              Providing a wide range of courses from degrees, bachelors, masters to so much more.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-700 mt-1">✔</span>
              With partnerships with over 1200 schools, colleges and universities in the UK, USA, Canada, Mauritius, Turkey and Europe, all the way to New Zealand and Australia.
            </li>
          </ul>

          {/* Button */}
          <button className="mt-6 bg-red-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition-all flex items-center gap-2">
            Read More <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
