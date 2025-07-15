/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Current date and time: 04:41 PM EAT, Tuesday, July 08, 2025

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/app/ui-components/header";
import Footer from "@/app/ui-components/footer";

export default function SolutionsForOrganizations() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 },
  };
  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Carousel data with detailed content and specific links
  const programSlides = [
    {
      title: "Custom Executive Training",
      description: "Immersive workshops tailored to your industry, led by TSI’s expert faculty, focusing on leadership development and strategic thinking.",
      buttonText: "Explore Now →",
      href: "/training#executive-training",
    },
    {
      title: "Strategic Planning Sessions",
      description: "Comprehensive sessions to align your organizational vision with actionable strategies, supported by data-driven insights and long-term planning.",
      buttonText: "Learn More →",
      href: "/planning#strategic-planning",
    },
    {
      title: "Team Innovation Labs",
      description: "Interactive labs designed to spark creativity, enhance collaboration, and implement innovative solutions within your teams.",
      buttonText: "Join Us →",
      href: "/innovation#team-labs",
    },
    {
      title: "Leadership Coaching Programs",
      description: "One-on-one coaching with seasoned mentors to refine skills, address challenges, and build a legacy of leadership excellence.",
      buttonText: "Get Started →",
      href: "/coaching#leadership-coaching",
    },
  ];

  const testimonialSlides = [
    {
      quote: "TSI’s programs revolutionized our leadership approach with unmatched expertise and personalized support!",
      author: "Sarah Mwangi, CEO, Horizon Ltd.",
    },
    {
      quote: "The strategic planning sessions aligned our goals perfectly—remarkable value and transformative results!",
      author: "James Okello, COO, Global Enterprises",
    },
    {
      quote: "Our team’s creativity soared thanks to the innovative labs—TSI truly delivers!",
      author: "Aisha Patel, HR Director, Unity Corp",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900" style={{ fontFamily: "'Roboto, sans-serif'" }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="h-[500px] bg-gradient-to-b from-[#000000] via-[#0D0D0D] to-[#1A1A1A] text-white p-14 flex items-center">
            <motion.div
              className="max-w-xl text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions for Organizations</h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Empower your organization with cutting-edge leadership and strategic solutions from the Tanzania School of Investments.
              </p>
              <motion.a
                href="/partnership#contact-form"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[#330D99] transition-colors duration-300"
                variants={scaleOnHover}
              >
                Get Started →
              </motion.a>
            </motion.div>
          </div>
          <div className="h-[500px] relative">
            <Image
              src="/images/organization-hero.jpg"
              alt="Organizational Solutions"
              fill
              className="object-cover"
              style={{ height: "100%" }}
            />
            <motion.a
              href="/partnership#contact-form"
              className="absolute bottom-8 right-8 inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[#007A3D] transition-colors duration-300"
              variants={scaleOnHover}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Discover More →
            </motion.a>
          </div>
        </div>
      </section>

      {/* Our Commitment to Excellence Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-100">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#333333]"
            variants={fadeInUp}
          >
            Our Commitment to Excellence
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At the Tanzania School of Investments (TSI), we are dedicated to driving organizational success through tailored leadership and strategic development programs. With over 20 years of expertise, we partner with corporations, non-profits, and government bodies to deliver innovative, results-oriented solutions that address today’s complex challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our approach combines cutting-edge strategies, hands-on training, and continuous support to empower your teams and leaders. We are committed to measurable growth, fostering sustainable impact, and building a legacy of excellence for every organization we serve.
              </p>
              <motion.a
                href="/partnership#contact-form"
                className="inline-flex items-center px-6 py-3 border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white transition-colors duration-300"
                variants={scaleOnHover}
              >
                Learn How We Can Help →
              </motion.a>
            </motion.div>
            <motion.div
              className="relative w-full h-64 lg:h-96"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/tsi-seminar.jpg"
                alt="Commitment to Excellence"
                width={600}
                height={384}
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Explore Programs Section with Cards */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#333333]"
            variants={fadeInUp}
          >
            Explore Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programSlides.map((program, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-[#ffffff] mb-6">{program.title}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <motion.a
                  href={program.href}
                  className="inline-flex items-center px-6 py-3 border-2 border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-black transition-colors duration-300"
                  variants={scaleOnHover}
                >
                  {program.buttonText}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#333333]"
            variants={fadeInUp}
          >
            What They Say
          </motion.h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="w-full max-w-3xl p-10 bg-white rounded-2xl shadow-2xl text-center border border-gray-200">
                  <div className="text-2xl font-medium text-gray-800 mb-4 italic">“{testimonialSlides[currentSlide].quote}”</div>
                  <div className="text-lg font-semibold text-[#333333] mt-6">- {testimonialSlides[currentSlide].author}</div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-8 space-x-4">
              {testimonialSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#333333] w-6" : "bg-gray-400"} transition-all duration-300`}
                  onClick={() => setCurrentSlide(index % testimonialSlides.length)}
                />
              ))}
            </div>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#333333] text-white rounded-full flex items-center justify-center hover:bg-[#555555] transition-colors duration-300"
              onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : testimonialSlides.length - 1))}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#333333] text-white rounded-full flex items-center justify-center hover:bg-[#555555] transition-colors duration-300"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonialSlides.length)}
            >
              →
            </button>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 lg:px-20 bg-gradient-to-b from-[#000000] via-[#0D0D0D] to-[#1A1A1A] text-white">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-4xl font-bold mb-8"
            variants={fadeInUp}
          >
            Transform Your Organization Today
          </motion.h2>
          <motion.p
            className="text-lg mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Partner with TSI to unlock a future of leadership excellence. Schedule a consultation to begin your journey.
          </motion.p>
          <motion.a
            href="/partnership#contact-form"
            className="inline-flex items-center px-6 py-3 bg-white text-[#333333] hover:bg-gray-100 transition-colors duration-300"
            variants={scaleOnHover}
          >
            Contact Us →
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}