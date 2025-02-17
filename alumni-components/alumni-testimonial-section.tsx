"use client";

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left side with image */}
        <div className="flex-1">
          <Image
            src="/images/testimonial.jpg"
            alt="Testimonial"
            width={500}
            height={500}
            className="rounded-full shadow-xl w-full h-full object-cover"
          />
        </div>

        {/* Right side with text content */}
        <div className="flex-1 text-center lg:text-left">
          <blockquote className="text-2xl italic text-gray-500 mb-6">
            TSI is working to advance economic opportunities and the long-term health of communities across the world. We do this through our skilled global workforce, expertise, resources and collaboration with partners.
          </blockquote>
          <p className="text-xl font-semibold text-gray-500">Tim Berry</p>
          <p className="text-lg text-gray-600 mb-4">
            Global Head of Corporate Responsibility and Chairman of the Mid-Atlantic Region
          </p>
          <a href="/testimonial" className="text-blue-600 inline-flex items-center hover:underline text-lg">
            Read more <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
