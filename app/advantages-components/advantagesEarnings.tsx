"use client"
import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaArrowRight } from "react-icons/fa"; // Arrow icon

const AdvantagesEarnings: React.FC = () => {
  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="bg-lightgray py-16 px-8 lg:px-16 text-white relative rounded-3xl"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Header */}
        <motion.h2
          className="text-4xl font-extrabold leading-tight text-black"
          variants={cardVariants}
        >
          Make The Earnings You Deserve
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-gray-700"
          variants={cardVariants}
        >
          Secure a stable income and other competitive financial benefits designed to help you succeed.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Top Row - Card 1 */}
          <motion.div
            className="flex flex-col items-center bg-blue-800 p-12 rounded-3xl shadow-xl transform transition-transform hover:scale-105 h-72"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Get Both CPA and Lot Rebates</h3>
            <p className="text-lg text-center mb-6">
              Receive up to $1,000 CPA and up to $80 revenue share on spread from a single account. 
            </p>
          </motion.div>

          {/* Top Row - Card 2 */}
          <motion.div
            className="flex flex-col items-center bg-gray-600 p-12 rounded-3xl shadow-xl transform transition-transform hover:scale-105 h-72"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Earn Extras from Sub-Affiliates</h3>
            <p className="text-lg text-center mb-6">
              Get unlimited 10% commission for second tier sub-partners.
            </p>
          </motion.div>

          {/* Bottom Row - Card 3 */}
          <motion.div
            className="flex flex-col items-center bg-blue-900 p-12 rounded-3xl shadow-xl transform transition-transform hover:scale-105 h-80"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Make Money Easier and Faster</h3>
            <p className="text-lg text-center mb-6">
              Get daily payments and instant commission with our automated cashback system.
            </p>
          </motion.div>

          {/* Bottom Row - Card 4 */}
          <motion.div
            className="flex flex-col items-center bg-blue-400 p-12 rounded-3xl shadow-xl transform transition-transform hover:scale-105 h-80"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Leverage Our Partners Reward Program</h3>
            <p className="text-lg text-center mb-6">
              Get extra commission and other benefits for your referrals and client trading.
            </p>
            {/* Earn More Now Button inside the last card */}
            <motion.button className="mt-6 px-6 py-3 text-lg font-semibold text-white transform hover:scale-110 transition-all duration-300 flex items-center">
              Earn More Now <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>

        {/* Partner with TSI Button */}
        <motion.div
          className="mt-12 flex justify-center"
          variants={cardVariants}
        >
          <button className="px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
            Partner with TSI
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvantagesEarnings;


