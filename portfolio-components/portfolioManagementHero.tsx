"use client"
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/bm1.jpg",
    number: "01",
    title: "Committed to service",
    description:
      "TSI serves millions of customers, clients and communities in over 100 global markets. For 225 years, our work has been guided by principles that strengthen, protect and grow our company over time.",
    buttonText: "Learn about our business",
  },
  {
    id: 2,
    image: "/images/bm2.jpg",
    number: "02",
    title: "Driving Global Impact",
    description:
      "Through strategic investments and responsible banking, we contribute to economic growth, financial inclusion, and sustainable progress worldwide.",
    buttonText: "Explore Our Commitment",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto px-0 py-0 mb-16 relative overflow-hidden">
      {/* Image Section */}
      <div className="w-full lg:w-3/4 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              width={1600}
              height={800}
              className="shadow-lg object-cover w-full h-[500px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Content aligned to the right */}
      <div className="absolute bottom-0 right-0 w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-t-lg text-right">
        <div className="flex justify-start items-center gap-4">
          <span className="text-6xl font-serif font-bold text-yellow-600">
            {slides[currentSlide].number}
          </span>
          <h1 className="mx-10 text-5xl font-bold mt-2 leading-tight">
            {slides[currentSlide].title}
          </h1>
        </div>
        <p className=" mx-10 text-lg text-gray-600 mt-4">
          {slides[currentSlide].description}
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition">
          {slides[currentSlide].buttonText} <ChevronRight size={18} />
        </button>
      </div>

      {/* Navigation Controls at the very bottom-right */}
      <div className="absolute bottom-0 right-4 flex items-center gap-4 mb-6">
        <button
          className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
          onClick={prevSlide}
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-gray-600 text-lg">
          {currentSlide + 1}/{slides.length}
        </span>
        <button
          className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
          onClick={nextSlide}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
