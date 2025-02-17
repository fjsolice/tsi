"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PortfolioFeature = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto px-6 py-20 gap-12">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <Image
                    src="/images/portfolio.jpg"
                    alt="Business Purpose"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Right Section - Text Content */}
            <motion.div
                className="w-full lg:w-1/2 flex flex-col justify-between max-w-md h-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Serving with Purpose
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        We are united by a purpose that weaves together what we value and how
                        we do business and deliver results for the clients, colleagues, and
                        communities we serve.
                    </p>
                </div>

                {/* Button at the Bottom */}
                <div className="mt-6">
                    <button className="bg-blue-600 text-white px-5 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition">
                        See how we do business
                        <ArrowRight size={16} />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default PortfolioFeature;
