import React from "react";

const AdvantagesHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/advantages.mp4" type="video/mp4" /> {/* Replace with your video path */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-12">
        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
          Partner With a Trusted <br />
          <span className="text-indigo-400">Industry Leader</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
          Join <strong>200,000+ TSI Partners</strong> who enjoy big payouts,
          great client services, and exclusive marketing support.
        </p>

        {/* Join Now Button */}
        <button className="mt-8 px-6 py-3 text-lg lg:text-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:scale-105">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default AdvantagesHero;
