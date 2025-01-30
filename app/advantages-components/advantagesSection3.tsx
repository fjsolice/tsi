import React from "react";
import { FaTrophy, FaChartLine, FaGift, FaDollarSign } from "react-icons/fa";

const AdvantagesSection3: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-16 px-8 lg:px-16 text-white rounded-t-3xl"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-100 leading-tight">
          Attract Clients With <br />
          <span className="text-indigo-500">Our Products</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Expand your client base with high-quality products and services.
        </p>
      </div>

      {/* Advantage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* XM Competitions */}
        <div className="relative bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
          <FaTrophy className="text-indigo-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-gray-900">TSI Competitions</h3>
          <p className="mt-3 text-gray-700">
            Drive trader engagement with cash prizes in our Demo and Real
            competitions.
          </p>
          <a href="#" className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">
            Learn more →
          </a>
        </div>

        {/* XM Copy Trading */}
        <div className="relative bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
          <FaChartLine className="text-indigo-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-gray-900">TSI Copy Trading</h3>
          <p className="mt-3 text-gray-700">
            Give clients an easier way to profit by copying expert strategies.
          </p>
          <a href="#" className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">
            Learn more →
          </a>
        </div>

        {/* Exclusive Promos */}
        <div className="relative bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
          <FaGift className="text-indigo-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-gray-900">Exclusive Promos</h3>
          <p className="mt-3 text-gray-700">
            Draw in new referrals with unique, rewarding promotions.
          </p>
        </div>

        {/* Top Trading Offerings */}
        <div className="relative bg-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
          <FaDollarSign className="text-indigo-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-gray-900">
            Top Trading Offerings
          </h3>
          <p className="mt-3 text-gray-700">
            Entice clients with exciting trading opportunities at low costs.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          Partner with TSI
        </button>
      </div>
    </section>
  );
};

export default AdvantagesSection3;
