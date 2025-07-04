import { FaPhoneAlt, FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const slideInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

export default function AboutSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image with call box */}
        <motion.div
          variants={slideInLeft(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full max-w-md mx-auto"
        >
          <img
            src="/assets/girl.jpg"
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
        </motion.div>

        {/* Text content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <motion.p variants={slideInLeft(0.1)} className="text-sm font-semibold text-blue-900 uppercase tracking-wide">
            <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2 align-middle"></span>
            About Sbub Group
          </motion.p>

          <motion.h2 variants={slideInLeft(0.2)} className="text-4xl font-bold text-blue-900 leading-snug">
            Together we can<br />build you a bright<br />future
          </motion.h2>

          <motion.div variants={slideInLeft(0.3)} className="w-14 h-1 bg-red-700 my-4" />

          <div className="space-y-3 text-gray-600 text-[15px]">
            <motion.p variants={slideInLeft(0.4)}>
              We are one of the fastest-growing education & training consultancies.
            </motion.p>
            <motion.p variants={slideInLeft(0.5)}>
              Helping students achieve their dreams through studying abroad at the world’s top universities.
            </motion.p>
            <motion.p variants={slideInLeft(0.6)}>
              We are here to help you fulfil your dreams!
            </motion.p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <motion.div variants={slideInLeft(0.7)} className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaUniversity className="text-red-700 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-[15px] leading-snug">
                  Best Possible <br />Higher Education <br />Courses For Students
                </p>
              </div>
            </motion.div>

            <motion.div variants={slideInLeft(0.8)} className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaChalkboardTeacher className="text-red-700 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-[15px] leading-snug">
                  Professional Training For <br />Employees And <br />Employers
                </p>
              </div>
            </motion.div>
          </div>

          {/* Checklist */}
          <ul className="mt-6 space-y-2 text-gray-600 text-sm">
            <motion.li variants={slideInLeft(0.9)} className="flex items-start gap-2">
              <span className="text-red-700 mt-1">✔</span>
              Wide range of courses: degrees, bachelors, masters & more.
            </motion.li>
            <motion.li variants={slideInLeft(1)} className="flex items-start gap-2">
              <span className="text-red-700 mt-1">✔</span>
              Partnerships with 1200+ institutions across UK, USA, Canada, Australia & more.
            </motion.li>
          </ul>

          {/* Pill-style CTA Button */}
          <motion.button
            variants={slideInLeft(1.1)}
            className="mt-6 bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md flex items-center gap-2"
          >
            Read More <HiArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
