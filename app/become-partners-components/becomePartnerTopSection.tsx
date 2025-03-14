"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BecomePartnerTopSection = () => {
  return (
    <div className="relative bg-gray-100 text-black min-h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/become-partner-hero.jpg" // Replace with the actual image path
          alt="Partner Background"
          fill
          objectFit="cover"
          style={{ marginTop: "110px"}}
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
          className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Partner with Tanzania’s Leading Investment <br />
          Education & Advisory Firm
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-black text-lg max-w-2xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Join 5,000+ partners driving success with TSI, guiding 10,000+ students and managing over USD 10M in investment portfolios while earning top industry rewards
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
