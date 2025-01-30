"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BecomePartnerTopSection = () => {
  return (
    <div className="relative bg-black text-white min-h-[80vh] rounded-b-[4rem] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/line-graph.jpg" // Replace with the actual image path
          alt="Partner Background"
          fill
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-20 text-center" style={{ marginTop: "5rem" }}>
        {/* Small Gray Text */}
        <motion.p
          className="text-gray-400 text-sm uppercase tracking-wide mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prosper with TSI
        </motion.p>

        {/* Big Header */}
        <motion.h1
          className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            textShadow: "0 10px 20px rgba(255, 255, 255, 0.2), 0 4px 10px rgba(0, 0, 0, 0.8)",
          }}
        >
          Partner With a Global Leader in <br />
          Conversion and Retention
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Join over 200,000 partners who are succeeding with TSI at their side and 
          enjoying some of the highest payouts in the industry.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link href="/signup">
            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold text-lg rounded-md shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              Join Our Partnership Opportunities
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BecomePartnerTopSection;
