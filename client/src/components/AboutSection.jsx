// src/components/AboutSection.jsx
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white text-center max-w-5xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-green-700 mb-6">About SBUB</h2>
      <p className="text-gray-700">
        SBUB is dedicated to guiding students through the complex process of international education.
        We make studying abroad simple, accessible, and tailored to your goals.
      </p>
    </motion.section>
  );
}
