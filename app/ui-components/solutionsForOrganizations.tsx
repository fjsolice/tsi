import React from 'react';

const SolutionsForOrganizations: React.FC = () => {
  return (
    <section className="relative w-full min-h-[110vh] bg-black">
      {/* Background Image with black overlay */}
      <div
        className="absolute inset-x-0 top-20 bottom-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/organization-hero.jpg')" }}
      ></div>

      {/* Black Top and Bottom Background */}
      <div className="absolute top-0 left-0 w-full h-20 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-black"></div>

      {/* White Card */}
      <div className="absolute bottom-20 left-0 bg-white p-6 md:p-8 lg:p-10 rounded-tr-lg shadow-lg max-w-sm z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Solutions for Organizations
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We collaborate with leading organizations to deliver learning and development solutions that enable your leaders to tackle key business imperatives. Our custom programs for organizations help top-level executives address large-scale challenges and initiatives.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-5 py-3 bg-black text-white text-lg font-medium rounded-md hover:bg-gray-800 transition"
        >
          Explore Custom Programs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default SolutionsForOrganizations;
