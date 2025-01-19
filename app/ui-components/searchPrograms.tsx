"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SearchPrograms = () => {
  const topics = [
    "Board Governance",
    "Digital Transformation",
    "Family Enterprise",
    "Finance",
    "General Management",
    "Health Care",
    "Innovation",
    "Leadership",
    "Marketing & Sales",
    "Negotiation & Decision-Making",
    "Social Enterprise & Nonprofits",
    "Strategy",
  ];

  const formats = ["Blended", "In-Person", "Virtual"];

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const [isFormatDropdownOpen, setIsFormatDropdownOpen] = useState(false);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  const toggleFormat = (format: string) => {
    setSelectedFormats((prev) =>
      prev.includes(format)
        ? prev.filter((f) => f !== format)
        : [...prev, format]
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-left text-gray-800 leading-tight">
            Find Your Program
          </h2>
          <p className="text-4xl lg:text-5xl font-bold text-left text-gray-800 mt-2">
            Explore our extensive offerings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center border rounded-lg p-3 shadow-sm">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-black mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.button>
            <input
              type="text"
              placeholder="Search by keywords..."
              className="w-full border-none outline-none text-gray-600 placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <div
              className="border rounded-lg p-3 shadow-sm text-gray-600 cursor-pointer flex justify-between items-center"
              onClick={() => setIsTopicDropdownOpen((prev) => !prev)}
            >
              <span>Browse Topics</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: isTopicDropdownOpen ? 180 : 0 }}
              >
                ▼
              </motion.span>
            </div>
            <AnimatePresence>
              {isTopicDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-2 bg-white border rounded-lg shadow-md w-full z-10"
                >
                  {topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 hover:bg-gray-100"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTopics.includes(topic)}
                        onChange={() => toggleTopic(topic)}
                        className="mr-2"
                      />
                      <label className="text-gray-600">{topic}</label>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <div
              className="border rounded-lg p-3 shadow-sm text-gray-600 cursor-pointer flex justify-between items-center"
              onClick={() => setIsFormatDropdownOpen((prev) => !prev)}
            >
              <span>Browse Formats</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: isFormatDropdownOpen ? 180 : 0 }}
              >
                ▼
              </motion.span>
            </div>
            <AnimatePresence>
              {isFormatDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-2 bg-white border rounded-lg shadow-md w-full z-10"
                >
                  {formats.map((format, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 hover:bg-gray-100"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFormats.includes(format)}
                        onChange={() => toggleFormat(format)}
                        className="mr-2"
                      />
                      <label className="text-gray-600">{format}</label>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Browse Programs
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SearchPrograms;
