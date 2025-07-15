"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Features = () => {
  // Data for the features
  const features = [
    {
      title: "Investing is for Everyone",
      description:
        "We break the myth that investing is only for the wealthy—anyone can build wealth with the right knowledge and strategy.",
      image: "/images/leadership.jpg",
      link: "/leadership-immersions",
    },
    {
      title: "Learn, Trade, and Grow",
      description:
        "We provide structured education to help individuals and professionals master capital markets and become confident traders.",
      image: "/images/topic-focused.jpg",
      link: "/topic-focused-programs",
    },
    {
      title: "Smart Investing, Expert Guidance",
      description:
        "For those without the time to study, we offer tailored portfolio structuring solutions to help them invest wisely.",
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
          We educate and empower investors, professionals, and organizations to navigate capital markets with confidence, strategy, and expertise.
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
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={320} // Explicit width
                  height={256} // Explicit height
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
