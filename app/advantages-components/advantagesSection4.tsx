import React from "react";
import { FaChartPie, FaBullhorn, FaCode, FaUserTie } from "react-icons/fa";

const AdvantagesSection4: React.FC = () => {
  return (
    <section className="relative py-20 px-6 lg:px-16 bg-gray-950 text-white">
      {/* Background: Futuristic 3D Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#111827,#1f2937)] opacity-100"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Convert With <br />
          <span className="text-indigo-500">Exceptional Marketing Support</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Achieve success easier with tailor-made solutions, tools, and expert guidance.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative z-10 flex flex-col items-center space-y-12">
        {[
          {
            icon: <FaChartPie className="text-indigo-400 text-6xl" />,
            title: "Real-Time Tracking",
            description:
              "Use advanced real-time statistics and tracking tools to take your business to the next level.",
          },
          {
            icon: <FaBullhorn className="text-blue-400 text-6xl" />,
            title: "Promotional Materials",
            description:
              "Expand your reach with marketing banners, landing pages, and ready-made websites in 25 languages.",
          },
          {
            icon: <FaCode className="text-green-400 text-6xl" />,
            title: "APIs Integration",
            description:
              "Access greater opportunities with secure API integrations, including Appsflyer and Webhooks.",
          },
          {
            icon: <FaUserTie className="text-purple-400 text-6xl" />,
            title: "Personal Partner Manager",
            description:
              "Drive your business forward with expert insights and support from your dedicated Partner Manager.",
          },
        ].map((item, index) => (
          <div key={index} className="relative flex items-center space-x-6 w-full max-w-4xl">
            {/* Left - Icon */}
            <div className="flex-shrink-0 bg-gray-900 p-5 rounded-full shadow-xl">
              {item.icon}
            </div>

            {/* Line Connector */}
            {index !== 3 && <div className="w-1 bg-indigo-500 h-24 mx-4"></div>}

            {/* Right - Content */}
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 text-center mt-16">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Become a Partner
        </button>
      </div>
    </section>
  );
};

export default AdvantagesSection4;
