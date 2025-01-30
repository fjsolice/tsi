import React from "react";

const PaymentPlanHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 min-h-screen flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle 3D gradient circles */}
        <div className="absolute w-96 h-96 bg-blue-300/50 blur-3xl rounded-full top-1/4 left-1/3 transform scale-150"></div>
        <div className="absolute w-72 h-72 bg-indigo-300/50 blur-2xl rounded-full bottom-1/4 right-1/4"></div>
        <div className="absolute w-80 h-80 bg-white/30 blur-2xl rounded-full top-0 left-1/4"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 flex flex-col items-center text-center space-y-8">
        {/* Header Section */}
        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tighter">
          One Account. <br />
          <span className="text-blue-600">Multiple Options</span> <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600">
            To Earn Big.
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-700 max-w-3xl">
          Join an award-winning affiliate program and unlock endless earning
          possibilities. Whether it’s CPA commissions, ongoing lot rebates,
          or customized CPL payments, we have got you covered.
        </p>

        {/* Call to Action */}
        <div className="flex space-x-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300">
            Become a Partner
          </button>
          <button className="px-8 py-4 bg-white text-blue-600 border border-blue-600 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300">
            Learn More
          </button>
        </div>

        {/* Decorative 3D Elements */}
        <div className="relative mt-12 flex items-center space-x-6">
        <div className="w-96 h-96 rounded-3xl bg-gradient-to-l from-indigo-600 to-blue-600 shadow-xl transform rotate-6 animate-pulse flex items-center justify-center">
            <p className="text-white text-3xl font-bold">TSI Partners</p>
          </div>
          <div className="w-96 h-96 rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 shadow-xl transform -rotate-6 animate-pulse flex items-center justify-center">
            <p className="text-white text-3xl font-bold">TSI University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlanHero;
