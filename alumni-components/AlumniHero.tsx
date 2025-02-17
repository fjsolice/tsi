import React from "react";
import Image from "next/image";

const AlumniHero: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center bg-gray-100">
            {/* Left Section - Title & Description */}
            <div className="md:w-1/2 text-center md:text-left px-8 md:px-20 flex flex-col justify-start pt-0 md:pt-10">
                <h1 className="text-8xl md:text-9xl text-gray-900 leading-tight mt-0">
                    Investing in communities
                </h1>
                <p className="mt-2 text-lg text-gray-600 max-w-lg leading-relaxed">
                    Attend reunions, enjoy Alumni Club membership, leverage career resources,
                    gain exclusive access to discounts on programs, publications, and more.
                </p>
            </div>

            {/* Right Section - Full Image Covering Right Side */}
            <div className="md:w-1/2 h-[600px] md:h-screen flex justify-end relative">
                <div className="flex-row">
                    <Image
                        src="/images/alumni.jpg"
                        alt="TSI Alumni"
                        width={2000}
                        height={2000}
                        className="w-full h-full object-cover shadow-xl"
                    />
                    <p className="mt-20 text-xl text-gray-600 max-w-lg leading-relaxed">
                        Learn how TSI is committed to deepening our impact in <br />
                        <span>some of the 100+ global markets we serve.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AlumniHero;
