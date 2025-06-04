// src/components/HeroSection.jsx
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start text-white text-left pt-24 px-6"
      style={{
        backgroundImage: "url('/assets/1.jpg')",
      }}
    >
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-semibold text-red-500 uppercase"
      >
        Welcome to HNC Group
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
      >
        Immigration and Visa Solutions <br /> easy way
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -100 }}
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
        className="mt-10 px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
      >
        Get Started
      </motion.button>
    </section>
  );
}
