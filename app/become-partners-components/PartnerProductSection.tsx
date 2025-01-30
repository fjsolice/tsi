"use client";

import React from "react";
import { motion } from "framer-motion";

const PartnerProductSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white text-black">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold leading-tight mb-4 text-gray-900 transform scale-105"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Boost Conversions With Our Top Products
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-gray-600"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, ease: "easeOut" }}
          >
            Let our carefully crafted trader-centric products do the hard work.
          </motion.p>
        </div>

        {/* Left and Right Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column (Single Card) */}
          <div className="relative rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/bonuses.jpg')",
                filter: "brightness(50%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>
            <div className="relative z-10 p-8 space-y-4">
              <motion.h3
                className="text-3xl font-bold text-white transform transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Deposit Bonuses
              </motion.h3>
              <motion.p
                className="text-lg text-gray-200"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              >
                Our deposit bonuses are the highest converting in the market.
              </motion.p>
              <motion.a
                href="#"
                className="inline-flex items-center text-white font-bold text-xl transform transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <span>Start Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6l6 6-6 6"
                  />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Right Column (Multiple Cards) */}
          <div className="space-y-16">
            {/* Ultra Low Accounts Card */}
            <div className="relative rounded-lg overflow-hidden cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/account.jpg')",
                  filter: "brightness(50%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              ></motion.div>
              <div className="relative z-10 p-8 space-y-4">
                <motion.h3
                  className="text-3xl font-bold text-white transform transition duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Ultra Low Accounts
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  Traders of all levels can enjoy a range of low-cost and swap-free
                  accounts.
                </motion.p>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-white font-bold text-xl transform transition duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <span>Join Us Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6l6 6-6 6"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Copy Trading Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden cursor-pointer">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/copy-trading.jpg')",
                    filter: "brightness(50%)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>
                <div className="relative z-10 p-8 space-y-4">
                  <motion.h3
                    className="text-3xl font-bold text-white transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    Copy Trading
                  </motion.h3>
                  <motion.p
                    className="text-lg text-gray-200"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  >
                    Your referrals can copy 1000s of successful strategies,
                    increasing your earnings.
                  </motion.p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-white font-bold text-xl transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6l6 6-6 6"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Competitions Card */}
              <div className="relative rounded-lg overflow-hidden cursor-pointer">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/competitions.jpg')",
                    filter: "brightness(50%)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>
                <div className="relative z-10 p-8 space-y-4">
                  <motion.h3
                    className="text-3xl font-bold text-white transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    Competitions
                  </motion.h3>
                  <motion.p
                    className="text-lg text-gray-200"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  >
                    Traders can win a share of $50,000 every month by joining our
                    competitions.
                  </motion.p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-white font-bold text-xl transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6l6 6-6 6"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerProductSection;
