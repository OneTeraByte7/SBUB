import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/assets/2.jpg", "/assets/student.jpg", "/assets/student2.jpg"];

/* Animation Variants */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

const slideInRight = {
  hidden: { opacity: 0, x: 120, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    x: -120,
    scale: 0.95,
    transition: { duration: 0.8 },
  },
};

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const headlineLines = useMemo(
    () => "Immigration\n& Visa\nSolutions the\neasy way".split("\n"),
    []
  );

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      8000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="min-h-screen relative flex items-start px-8 pt-20 pb-20 overflow-hidden bg-center bg-cover"
    >
      {/* Background image animation (shorter + subtle zoom) */}
      <motion.img
        src="/assets/1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        animate={{ scale: [1.05, 1], opacity: [0, 1] }}
        transition={{
          duration: 3.5,
          ease: "easeOut",
        }}
      />

      {/* Flag overlay (slightly delayed slide down) */}
      <motion.img
        src="/assets/flag.jpg"
        alt="Flag overlay"
        className="absolute inset-0 w-full h-full object-cover z-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      />

      {/* Slideshow images at bottom right */}
      <div
        className="absolute bottom-0 right-0 z-20 flex items-end pr-8"
        style={{ height: "70vh", maxWidth: "60vw" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Slide"
            variants={slideInRight}
            initial="hidden"
            animate="show"
            exit="exit"
            className="object-contain rounded-xl shadow-2xl max-h-full max-w-full select-none"
          />
        </AnimatePresence>
      </div>

      {/* Hero text & CTA */}
      <div className="relative z-30 max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="text-white md:flex-1 pt-40 max-w-3xl" style={{ marginLeft: '6rem' }}>
          {/* Tagline */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="inline-block px-6 py-3 mb-6 border-2 border-white rounded-md font-bold text-3xl md:text-4xl"
          >
            Welcome to SBUB
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            {headlineLines.map((line, i) => (
              <motion.span
                key={line}
                variants={fadeUp(0.3 + i * 0.2)}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Line underline */}
          <motion.div
            variants={fadeUp(1.2)}
            initial="hidden"
            animate="show"
            className="border-b-2 border-white mt-8 mb-8"
            style={{ width: "120px" }}
          />

          {/* Paragraph */}
          <motion.p
            variants={fadeUp(1.4)}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl max-w-xl"
          >
            We provide expert guidance and tailored solutions to simplify your immigration process.
            <br />
            Trusted by thousands for quick and reliable visa services worldwide.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={fadeUp(1.7)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden mt-12 px-16 py-6 text-xl bg-white text-red-600 rounded-full shadow-lg font-semibold transition-colors duration-500 hover:text-white group"
          >
            <span className="absolute inset-0 bg-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full pointer-events-none" />
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </div>

        {/* Empty flex item with fade-up effect */}
        <motion.div
          variants={fadeUp(1.5)}
          initial="hidden"
          animate="show"
          className="md:flex-1 w-full"
        />
      </div>
    </motion.section>
  );
}
