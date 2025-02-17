"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PortfolioFeature4 = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="flex flex-col lg:flex-row gap-16 items-center mx-auto max-w-screen-xl px-6 lg:px-12">
        {/* Left Content Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Prioritizing talent and career growth
          </h2>
          <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
            A talent-driven company is, by definition, an inclusive one. We are committed to creating a workplace where employees feel like they belong.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We create solutions that drive financial growth and investment success, blending technology with strategic insights to maximize returns.
          </p>
          <button className="mt-6 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            Learn More
            <FaArrowRight className="ml-2" />
          </button>
        </motion.div>

        {/* Right Image Section with Zigzag Layout */}
        <div className="relative w-full lg:w-1/2 flex flex-col-row items-center gap-4 mt-8">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              className="w-full max-w-xs lg:max-w-sm shadow-xl"
              src="/images/pt1.jpg"
              alt="Office content 1"
              width={500}
              height={400}
            />
          </motion.div>
          <motion.div
            className="relative -mt-10 lg:-mt-20 z-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              className="w-full max-w-xs lg:max-w-sm shadow-xl"
              src="/images/pt2.jpg"
              alt="Office content 2"
              width={500}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeature4;
