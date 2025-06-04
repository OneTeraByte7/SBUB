import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat relative flex items-center px-8 pt-24"
      style={{
        backgroundImage: "url('/assets/1.jpg')",
      }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-end justify-center gap-10">
        {/* Left Content */}
        <div className="text-white max-w-xl z-10 md:flex-1">
          <motion.h3
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-semibold text-white uppercase"
          >
            Welcome to SBUB Group
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
          >
            Immigration and Visa Solutions <br /> easy way
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="mt-6 text-lg md:text-xl max-w-md text-white"
          >
            We provide expert guidance and tailored solutions to simplify your immigration process.
            <br />
            Trusted by thousands for quick and reliable visa services worldwide.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-8 py-4 bg-white text-red-600 rounded-xl shadow-md hover:bg-blue-900 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Get Started
          </motion.button>
        </div>

        {/* Right Image */}
        <motion.img
          src="/assets/2.jpg"
          alt="Decorative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="h-[85vh] object-contain rounded-xl shadow-xl z-10 md:flex-1"
        />
      </div>
    </section>
  );
}
