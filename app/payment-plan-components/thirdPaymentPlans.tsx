"use client";

import React from "react";
import { FaUserPlus, FaHandHoldingUsd, FaDollarSign } from "react-icons/fa";
import { motion } from "framer-motion";

const ThirdPaymentPlans: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-16 px-8 lg:px-16 text-white relative rounded-3xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h2
        className="text-center text-5xl lg:text-7xl font-extrabold mb-16 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Build a Lucrative Partnership
      </motion.h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            icon: <FaUserPlus className="text-7xl text-blue-400" />,
            title: "Sign up",
            content: "Sign up to one of the world's most rewarding affiliate programs.",
          },
          {
            icon: <FaHandHoldingUsd className="text-7xl text-green-400" />,
            title: "Refer",
            content: "Use our marketing materials to refer clients from over 190 countries.",
          },
          {
            icon: <FaDollarSign className="text-7xl text-yellow-400" />,
            title: "Get Paid Big",
            content: "Earn up to $80 revenue share on spread and up to $1,000 CPA.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="p-8 border border-gray-600 rounded-3xl text-center hover:shadow-lg hover:border-indigo-500 transition-transform duration-300"
            variants={cardVariants}
          >
            <div className="mb-6 flex justify-center">{card.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-lg text-gray-300">{card.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-16">
        <button className="px-12 py-4 bg-indigo-600 text-white font-bold text-xl rounded-full hover:bg-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
          Register Now
        </button>
      </div>
    </motion.section>
  );
};

export default ThirdPaymentPlans;
