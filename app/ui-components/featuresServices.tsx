import React from 'react';
import Image from 'next/image';

const FeaturesServices: React.FC = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          A premier learning experience that inspires and empowers the next generation of market leaders.
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* First Column - Image */}
        <div className="lg:w-1/4">
          <Image
            src="/images/learning-experience.jpg"
            alt="Learning Experience"
            width={320} // Explicit width
            height={256} // Explicit height
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Second Column - Titles and Text */}
        <div className="lg:w-1/3 space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Transformative Learning, Real-World Impact</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Expert-led courses simplify capital markets, providing insights that shape investing’s future. Engaging discussions refine strategies, shift mindsets, and set new industry standards.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900">A Network of Market Leaders</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our programs foster connections, linking traders and leaders with a thriving network of investors, professionals, and mentors—opening doors to lasting opportunities.            </p>
          </div>
        </div>

        {/* Third Column - Titles and Text */}
        <div className="lg:w-1/3 space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Comprehensive Support</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              At TSI, we provide top-tier facilities, flexible learning formats, and expert support to ensure a seamless, collaborative, and enriching learning experience in global capital markets.            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Diverse Learning Environment</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We believe diverse perspectives strengthen learning. In our classes, you will engage with global peers from various industries, sharpening your thinking and preparing you to lead in todays dynamic markets. We collaborate with clients as partners to craft tailored investment solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="mt-16 border-t border-gray-300"></div>
    </section>
  );
};

export default FeaturesServices;
