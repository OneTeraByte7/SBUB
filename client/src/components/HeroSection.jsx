import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/assets/2.jpg", "/assets/student.jpg", "/assets/student2.jpg"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="h-screen relative flex items-start px-8 pt-20 overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/1.jpg')" }}
    >
      <img
        src="/assets/flag.jpg"
        alt="Flag overlay"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Slideshow container - absolute positioned bottom right */}
      <div
        className="absolute bottom-0 right-0 z-10 flex items-end pr-8"
        style={{ height: "70vh", maxWidth: "60vw" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Slide"
            initial={{ opacity: 0, x: 120, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -120, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="object-contain rounded-xl shadow-2xl max-h-full max-w-full"
            style={{ userSelect: "none" }}
          />
        </AnimatePresence>
      </div>

      {/* Text content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="text-white max-w-xl md:flex-1 pt-40">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-5 py-2 mb-6 border-2 border-white rounded-md font-bold text-xl md:text-2xl"
          >
            Welcome to SBUB
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight whitespace-pre-line"
          >
            {`Immigration\n& Visa\nSolutions the\neasy way`}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ duration: 1.2, delay: 1.4 }}
            className="border-b-2 border-white mt-8 mb-6"
          />

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="text-lg md:text-xl max-w-md"
          >
            We provide expert guidance and tailored solutions to simplify your immigration process.
            <br />
            Trusted by thousands for quick and reliable visa services worldwide.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-8 py-4 bg-white text-red-600 rounded-xl shadow-md hover:bg-blue-900 hover:text-white transition-all font-semibold"
          >
            Get Started
          </motion.button>
        </div>

        {/* Spacer */}
        <div className="md:flex-1 w-full" />
      </div>
    </section>
  );
}
