"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PortfolioFeature3 = () => {
  return (
    <section className="container mx-auto px-6 py-16 space-y-16 bg-stone-400">
      {/* Upper Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side: Header */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 leading-tight"
        >
          Dedicated to sustained growth
        </motion.h2>

        {/* Right Side: Description */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-700"
        >
          We leverage our business and expertise to help address economic and societal challenges, supporting our clients and providing targeted capital to contribute to an inclusive, sustainable economy.
        </motion.p>
      </div>

      {/* Lower Section: 4 Content Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex items-center">
        {[
          { title: "Our impact", description: "Using our deep industry knowledge to create opportunity and build for the future." },
          { title: "Our Communities", description: "Making a difference in the communities where we live and work through long-term business and philanthropic efforts." },
          { title: "Our initiatives", description: "Leveraging our expertise, capital, data and resources to advance inclusive growth." },
          { title: "Our initiatives", description: "Leveraging our expertise, capital, data and resources to advance inclusive growth." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <a
              href="#"
              className="flex items-center mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition"
            >
              Learn about our impact <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioFeature3;
