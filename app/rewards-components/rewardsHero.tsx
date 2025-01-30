"use client"
import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaPlay } from "react-icons/fa"; // For the play icon

const RewardsHero: React.FC = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="bg-gradient-to-r from-blue-50 to-white py-16 px-8 lg:px-16 relative rounded-3xl"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left side: Content */}
        <motion.div
          className="space-y-8 lg:w-1/2"
          variants={contentVariants}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Earn Beyond Your Commissions
          </h2>
          <p className="text-xl text-gray-700">
            Get unlimited cash rewards on top of your commissions, plus other
            amazing benefits with our industry-leading Rewards Program.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
            Start Earning Now
          </button>
        </motion.div>

        {/* Right side: 3D video animation */}
        <motion.div
          className="lg:w-1/2 relative"
          variants={contentVariants}
        >
          <div className="relative w-full h-96 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            <video
              src="/videos/rewards.mp4"
              autoPlay
              loop
              muted
              className="absolute w-full h-full object-cover rounded-3xl"
            ></video>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
                <FaPlay size={30} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RewardsHero;
