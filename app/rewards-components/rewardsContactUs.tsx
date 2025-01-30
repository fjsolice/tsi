"use client";

import React from "react";
import { motion } from "framer-motion"; // For animations

const RewardsContactUs: React.FC = () => {
  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="bg-gray-200 py-16 px-8 lg:px-16 text-white relative rounded-3xl"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Header */}
        <motion.h2
          className="text-4xl font-extrabold leading-tight text-gray-900"
          variants={buttonVariants}
        >
          Need Help?
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-gray-800"
          variants={buttonVariants}
        >
          We’re Just Seconds Away!
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 mb-12"
          variants={buttonVariants}
        >
          If you have a question about the program, feel free to contact us and we'll be happy to help.
        </motion.p>

        {/* Contact Us Card */}
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl mx-auto"
          variants={buttonVariants}
        >
          <motion.div className="flex justify-center">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RewardsContactUs;
