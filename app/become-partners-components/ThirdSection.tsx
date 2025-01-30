"use client";

import React from "react";

const ThirdSection = () => {
  return (
    <div className="relative py-48 lg:py-64 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/invest.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 text-white">
        {/* Header (removed title) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            {/* Content removed, no title here */}
          </div>
          <div></div>
        </div>
      </div>

      {/* Polygon Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full">
          {/* Polygon 1 */}
          <div
            className="absolute top-10 left-20 w-96 h-96 bg-cover bg-center blur-sm opacity-80 transform rotate-6"
            style={{
              backgroundImage: "url('/path-to-your-image.jpg')",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          ></div>

          {/* Polygon 2 */}
          <div
            className="absolute bottom-10 right-16 w-80 h-80 bg-cover bg-center blur-sm opacity-70 transform -rotate-12"
            style={{
              backgroundImage: "url('/path-to-your-image.jpg')",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          ></div>

          {/* Polygon 3 */}
          <div
            className="absolute top-40 right-28 w-72 h-72 bg-cover bg-center blur-md opacity-90 transform rotate-3"
            style={{
              backgroundImage: "url('/path-to-your-image.jpg')",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
