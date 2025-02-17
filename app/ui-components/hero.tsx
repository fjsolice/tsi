"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Hero Header */}
        <motion.h1
          className="text-6xl lg:text-8xl font-bold tracking-wide leading-tight mb-12 text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bridging Knowledge, Empowering Investors 
        </motion.h1>

        {/* Mobile Swipe Carousel */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory space-x-6 pb-6 no-scrollbar">
          {/* First Image */}
          <div className="flex-shrink-0 snap-center w-full">
            <Image
              src="/images/im1.jpg"
              alt="Leadership Training"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full h-[500px]"
            />
          </div>

          {/* Video */}
          <div className="flex-shrink-0 snap-center w-full relative">
            <video
              ref={videoRef}
              src="/videos/vid1.mp4"
              autoPlay
              muted
              loop
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white bg-opacity-20 text-white py-2 px-5 rounded-full text-lg font-semibold hover:bg-opacity-40 transition"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          {/* Second Image */}
          <div className="flex-shrink-0 snap-center w-full">
            <Image
              src="/images/im2.jpg"
              alt="Executive Learning"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full h-[500px]"
            />
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:flex justify-center items-center gap-8 mt-10">
          {/* First Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/im1.jpg"
              alt="Leadership Training"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-[500px]"
            />
          </motion.div>

          {/* Video */}
          <motion.div
            className="flex-[2] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <video
              ref={videoRef}
              src="/videos/vid1.mp4"
              autoPlay
              muted
              loop
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
            <button
              onClick={togglePlayPause}
              className="absolute top-6 right-6 bg-white bg-opacity-20 text-white py-2 px-5 rounded-full text-lg font-semibold hover:bg-opacity-40 transition"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </motion.div>

          {/* Second Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/images/im2.jpg"
              alt="Executive Learning"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
