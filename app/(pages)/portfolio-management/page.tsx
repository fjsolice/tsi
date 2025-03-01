"use client";

import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Beginner Portfolio Builder",
    description:
      "Start your investment journey with foundational strategies to structure a balanced portfolio. Learn risk management, asset allocation, and diversification tailored for Tanzanian markets.",
    image: "/images/beginner-portfolio.jpg", // Replace with actual image path
    smallImage: "/images/beginner-small.jpg",
  },
  {
    title: "Advanced Wealth Architect",
    description:
      "Master complex portfolio structuring with advanced techniques. Dive into equity analysis, bond strategies, and alternative investments for high-growth potential.",
    image: "/images/advanced-wealth.jpg",
    smallImage: "/images/advanced-small.jpg",
  },
  {
    title: "Retirement Fortress Program",
    description:
      "Secure your future with a robust retirement portfolio. Focus on long-term growth, income generation, and stability with expert guidance.",
    image: "/images/retirement-fortress.jpg",
    smallImage: "/images/retirement-small.jpg",
  },
  {
    title: "Tanzanian Market Mastery",
    description:
      "Specialize in structuring portfolios optimized for Tanzania’s unique economic landscape, including real estate, agriculture, and emerging sectors.",
    image: "/images/tanzanian-market.jpg",
    smallImage: "/images/tanzanian-small.jpg",
  },
];

const PortfolioManagement = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 pb-40 relative">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 opacity-50"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/images/portfolio-hero.jpg" // Replace with actual image path
              alt="Portfolio Hero"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-lg"
            >
              Portfolio Structuring Programs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Design your financial future with Tanzania School of Investments’ cutting-edge programs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10"
            >
              <Link href="#programs">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300">
                  Explore Programs <ArrowRight size={24} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="w-full max-w-7xl mx-auto px-6 py-40 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center mb-20 text-white"
          >
            Our Programs
          </motion.h2>

          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 mb-40`}
            >
              {/* Large Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="relative w-full md:w-1/2 h-[400px] md:h-[600px]"
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-2xl"
                />
                {/* Small Interfering Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.5 + 0.2, duration: 0.8 }}
                  className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 z-20"
                >
                  <Image
                    src={program.smallImage}
                    alt={`${program.title} Small`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg border-4 border-gray-800"
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 + 0.2 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-white">{program.title}</h3>
                <p className="text-lg text-gray-300">{program.description}</p>
                <div className="flex gap-6">
                  <Link href={`/learn-more/${index + 1}`}>
                    <button className="bg-transparent text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300">
                      Learn More <ChevronRight size={20} />
                    </button>
                  </Link>
                  <Link href="/courses">
                    <button className="border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </section>

        {/* Call to Action Section */}
        <section className="relative bg-gray-800 py-40 text-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 opacity-30"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/images/cta-background.jpg" // Replace with actual image path
              alt="CTA Background"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div className="relative z-10 px-6">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold mb-8 text-white"
            >
              Ready to Build Your Portfolio?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            >
              Join thousands of Tanzanians transforming their financial futures with our expert-led programs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/enroll">
                <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-white hover:text-black transition-all duration-300">
                  Get Started <ArrowRight size={24} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Additional Visual Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-40 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center mb-20 text-white"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from Tanzania’s top investment professionals.",
                image: "/images/expert-instructors.jpg", // Replace with actual image path
              },
              {
                title: "Practical Skills",
                description: "Hands-on exercises to build real-world portfolios.",
                image: "/images/practical-skills.jpg",
              },
              {
                title: "Local Focus",
                description: "Strategies tailored to Tanzanian markets and opportunities.",
                image: "/images/local-focus.jpg",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3, duration: 1 }}
                className="relative h-[500px] rounded-xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioManagement;
