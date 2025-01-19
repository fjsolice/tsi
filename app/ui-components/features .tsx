"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Features = () => {
  // Data for the features
  const features = [
    {
      title: "Leadership Immersions",
      description:
        "A broad business and leadership curriculum is only the beginning. Enter with an open mind. Emerge transformed.",
      image: "/images/leadership.jpg",
      link: "/leadership-immersions",
    },
    {
      title: "Topic-Focused Programs",
      description:
        "When your challenges call for targeted, in-depth learning, we have the programs you need.",
      image: "/images/topic-focused.jpg",
      link: "/topic-focused-programs",
    },
    {
      title: "Learning Tracks",
      description:
        "Learning plans that build specific competencies to advance your development goals.",
      image: "/images/learning-tracks.jpg",
      link: "/learning-tracks",
    },
    {
      title: "Solutions for Organizations",
      description:
        "Custom programs for organizations that help top-level executives address large-scale challenges and initiatives.",
      image: "/images/solutions.jpg",
      link: "/solutions-for-organizations",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-left text-gray-800 mb-12">
          We prepare and propel leaders to achieve the next elevation—for their
          organizations and for themselves.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link} passHref>
              <motion.div
                className="flex flex-col items-start cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Feature Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg shadow-md w-80 h-64 object-cover mb-4"
                />

                {/* Feature Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2 underline">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
