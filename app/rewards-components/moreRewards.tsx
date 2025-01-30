"use client";

import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaChartLine, FaRocket, FaGift } from "react-icons/fa"; // Icons for each benefit

const MoreRewards: React.FC = () => {
  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Animation variants for each benefit
  const benefitVariants = {
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
          variants={benefitVariants}
        >
          But Wait, There’s More!
        </motion.h2>
        <motion.p
          className="text-xl mb-12"
          variants={benefitVariants}
        >
          The Rewards Program runs in parallel to your affiliate commission plan. Benefits combine, so it’s even more advantageous.
        </motion.p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Boost Your Commission Value */}
          <motion.div
            className="flex flex-col items-center text-white p-8 rounded-3xl shadow-xl transform transition-transform hover:scale-105"
            variants={benefitVariants}
          >
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6">
              <FaChartLine size={40} />
            </div>
            <h3 className="text-2xl font-bold">Boost Your Commission Value</h3>
            <p className="text-xl text-center mb-6">
              Supercharge your commissions with cash redeemable points and revenue share on spread.
            </p>
          </motion.div>

          {/* Get Unlimited Earning Possibilities */}
          <motion.div
            className="flex flex-col items-center text-white p-8 rounded-3xl shadow-xl transform transition-transform hover:scale-105"
            variants={benefitVariants}
          >
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6">
              <FaRocket size={40} />
            </div>
            <h3 className="text-2xl font-bold">Get Unlimited Earning Possibilities</h3>
            <p className="text-xl text-center mb-6">
              Enjoy a limitless earning potential. There is no cap on how much you can make, based on your marketing efforts.
            </p>
          </motion.div>

          {/* Leverage a Powerful Program */}
          <motion.div
            className="flex flex-col items-center text-white p-8 rounded-3xl shadow-xl transform transition-transform hover:scale-105"
            variants={benefitVariants}
          >
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6">
              <FaGift size={40} />
            </div>
            <h3 className="text-2xl font-bold">Leverage a Powerful Program</h3>
            <p className="text-xl text-center mb-6">
              Unlock additional rewards for your clients, such as private competitions and exclusive Deposit Bonuses.
            </p>
          </motion.div>
        </div>

        {/* Become a Partner Button */}
        <motion.div
          className="mt-12"
          variants={benefitVariants}
        >
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MoreRewards;
