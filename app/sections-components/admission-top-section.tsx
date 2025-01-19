"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const TopSection = () => {
  return (
    <div className="bg-black text-white py-40 px-8 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Title */}
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-tight md:leading-snug">
          Ready to apply? Learn how.
        </h1>

        {/* Subtitle */}
        <p className="mt-12 text-2xl md:text-4xl leading-relaxed text-gray-300">
          If you have a proven track record of business success and leadership
          potential, then TSI Executive Education may be right for you.
        </p>

        {/* Call-to-Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-20 inline-flex items-center px-12 py-6 bg-indigo-600 text-white font-semibold text-2xl rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all"
        >
          Track Your Application <FiArrowRight className="ml-4" size={28} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TopSection;
