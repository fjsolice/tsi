'use client'
import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaTrophy, FaCheck, FaMoneyBillAlt, FaArrowRight } from "react-icons/fa"; // Icons for each step

const RewardsSteps: React.FC = () => {
  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Animation variants for each step
  const stepVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-r from-indigo-900 via-blue-900 to-black py-16 px-8 lg:px-16 text-white relative rounded-3xl"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Header */}
        <motion.h2
          className="text-4xl font-extrabold leading-tight"
          variants={stepVariants}
        >
          Get Cash Rewards as You Go
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Step 1: Collect */}
          <motion.div
            className="flex flex-col items-center bg-transparent text-white p-8 shadow-lg transform transition-transform hover:scale-105"
            variants={stepVariants}
          >
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6">
              <FaTrophy size={40} />
            </div>
            <h3 className="text-2xl font-bold">01 - Collect</h3>
            <p className="text-xl text-center mb-6">
              Collect points from your referrals’ trading activity.
            </p>
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Start Collecting
            </motion.button>
          </motion.div>

          {/* Step 2: Hit Milestones */}
          <motion.div
            className="flex flex-col items-center bg-transparent text-white p-8 shadow-lg transform transition-transform hover:scale-105"
            variants={stepVariants}
          >
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6">
              <FaCheck size={40} />
            </div>
            <h3 className="text-2xl font-bold">02 - Hit Milestones</h3>
            <p className="text-xl text-center mb-6">
              The more points you collect, the more valuable they become.
            </p>
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Hit Milestones
            </motion.button>
          </motion.div>

          {/* Step 3: Redeem */}
          <motion.div
            className="flex flex-col items-center bg-transparent text-white p-8 shadow-lg transform transition-transform hover:scale-105"
            variants={stepVariants}
          >
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6">
              <FaArrowRight size={40} />
            </div>
            <h3 className="text-2xl font-bold">03 - Redeem</h3>
            <p className="text-xl text-center mb-6">
              Redeem your points for cash rewards as often as you want.
            </p>
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Redeem Now
            </motion.button>
          </motion.div>

          {/* Step 4: Get Cash */}
          <motion.div
            className="flex flex-col items-center bg-transparent text-white p-8 shadow-lg transform transition-transform hover:scale-105"
            variants={stepVariants}
          >
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6">
              <FaMoneyBillAlt size={40} />
            </div>
            <h3 className="text-2xl font-bold">04 - Get Cash</h3>
            <p className="text-xl text-center mb-6">
              Withdraw your cash prizes at any time.
            </p>
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Withdraw Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default RewardsSteps;
