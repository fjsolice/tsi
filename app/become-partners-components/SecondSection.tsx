"use client";

import Image from "next/image";

const SecondSection = () => {
  const companyLogos = [
    "/images/netflix.png", // Replace with your actual logo paths
    "/images/amazon.png",
    "/images/intel.png",
    "/images/3m.png",
    "/images/leica.png",
    "/images/sony.png",
    "/images/verizon.png",
    "/images/fedex.png",
    "/images/google-pay.png",
    "/images/zoom.png",
    "/images/yahoo.png",
    "/images/yammer.png",
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Chosen and trusted by more than 940 enterprises across the globe.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Employees from more than 60% of the Fortune 500 are learning — and
            advancing their careers — with TSI.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-4 gap-6">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={logo}
                alt={`Company Logo ${index + 1}`}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
