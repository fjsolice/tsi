"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(true); // State to track if the video is playing

  // Function to toggle play/pause
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
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Hero Header */}
        <motion.h1
          className="text-6xl lg:text-8xl font-bold tracking-wide leading-tight mb-12 text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Breakthrough Learning for Leaders
        </motion.h1>

        {/* Images and Video */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* First Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/im1.jpg"
              alt=""
              className="rounded-lg shadow-lg h-[500px] object-cover w-full"
            />
          </motion.div>

          {/* Middle Video */}
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
            >
              Your browser does not support the video tag.
            </video>
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-black bg-opacity-60 text-white py-2 px-4 rounded-lg hover:bg-opacity-80"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </motion.div>

          {/* Last Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="/images/im2.jpg"
              alt=""
              className="rounded-lg shadow-lg h-[500px] object-cover w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
