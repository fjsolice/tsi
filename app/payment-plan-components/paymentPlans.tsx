"use client";

import React from "react";
import { FaMoneyBillWave, FaChartLine, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const PaymentPlans: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const plans = [
    {
      icon: <FaMoneyBillWave className="text-6xl text-white" />,
      title: "Revenue Share on Spread",
      subtitle: "Refer Clients and Enjoy Lifetime Commissions",
      features: [
        "Up to $80 on FX, $75 on Crypto CFDs, and $40 on metals",
        "No limit on your earnings",
      ],
    },
    {
      icon: <FaChartLine className="text-6xl text-white" />,
      title: "CPA",
      subtitle: "Earn for Every Unique Depositing Client",
      features: ["Up to $1,000 CPA", "Get paid in full, upfront"],
    },
    {
      icon: <FaCogs className="text-6xl text-white" />,
      title: "CPL",
      subtitle: "Enjoy Customized CPL Deals",
      features: [
        "Tailor-made CPL plans",
        "Uncapped commissions for global quality traffic",
      ],
    },
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-16 px-8 lg:px-16 text-white rounded-t-3xl rounded-b-3xl"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-center text-5xl font-extrabold text-indigo-400 mb-16 leading-snug">
        Discover Our Payment Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-800 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-full shadow-lg mb-6">
              {plan.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-100 text-center mb-4">
              {plan.title}
            </h3>
            <h4 className="text-lg text-gray-400 text-center mb-6">
              {plan.subtitle}
            </h4>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-400">
                  <span className="w-4 h-4 bg-indigo-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-sm italic text-gray-500 mb-6">
              *Applicable to certain countries. For more information, check the T&Cs.
            </p>
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
              Start Earning
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PaymentPlans;
