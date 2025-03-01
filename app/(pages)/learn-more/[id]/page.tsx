"use client";

import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const programs = [
  {
    id: "1",
    title: "Introduction to Portfolio Structuring",
    category: "Beginner",
    description:
      "This course introduces you to the foundational principles of portfolio structuring, including risk management, asset allocation, and diversification strategies tailored for Tanzanian markets.",
    detailedDescription:
      "Dive into the essentials of building a balanced investment portfolio. You’ll explore key concepts like risk assessment, diversification across asset classes, and how to align your investments with your financial goals. Designed specifically with Tanzanian economic conditions in mind, this course provides practical exercises and real-world examples to ensure you’re ready to start investing confidently.",
    image: "/images/course1.jpg", // Replace with actual image path
    duration: "4 weeks",
    level: "Beginner",
    instructor: "Dr. Amina Kweka",
    modules: ["Risk Management", "Asset Allocation", "Diversification Basics"],
  },
  {
    id: "2",
    title: "Advanced Equity Analysis",
    category: "Advanced",
    description:
      "Master advanced equity strategies to enhance your portfolio’s growth potential with in-depth analysis techniques.",
    detailedDescription:
      "Take your investment skills to the next level with this advanced course on equity analysis. Learn to evaluate stocks using financial ratios, market trends, and technical analysis. This course is perfect for those looking to maximize returns through sophisticated portfolio structuring, with a focus on both global and Tanzanian equity markets.",
    image: "/images/course2.jpg",
    duration: "6 weeks",
    level: "Advanced",
    instructor: "Prof. Joseph Mwangi",
    modules: ["Financial Ratios", "Technical Analysis", "Equity Portfolio Strategies"],
  },
  {
    id: "3",
    title: "Tanzanian Market Investments",
    category: "Specialized",
    description:
      "Specialize in structuring portfolios optimized for Tanzania’s unique economic landscape, including real estate and agriculture.",
    detailedDescription:
      "This course focuses on investment opportunities specific to Tanzania, such as real estate, agriculture, and emerging industries. You’ll learn how to structure portfolios that capitalize on local market trends, with expert insights into regulatory frameworks and economic drivers shaping Tanzania’s investment landscape.",
    image: "/images/course3.jpg",
    duration: "5 weeks",
    level: "Intermediate",
    instructor: "Fatima Zuberi",
    modules: ["Real Estate Investing", "Agricultural Markets", "Emerging Sectors"],
  },
  // Add more programs as needed to match Portfolio Structuring Programs page
];

const LearnMorePage = () => {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return <div className="text-white text-center py-20">Program not found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 pb-40 relative">
        {/* Hero Section */}
        <section className="relative bg-black py-24 text-center">
          <motion.div
            className="absolute inset-0 z-0 opacity-50"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src={program.image}
              alt={program.title}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div className="relative z-10 px-6">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold mb-6 text-white"
            >
              {program.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              {program.description}
            </motion.p>
          </div>
        </section>

        {/* Program Details */}
        <section className="w-full max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">About This Course</h2>
              <p className="text-gray-300">{program.detailedDescription}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Duration</h3>
                <p className="text-gray-300">{program.duration}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Level</h3>
                <p className="text-gray-300">{program.level}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Instructor</h3>
                <p className="text-gray-300">{program.instructor}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Modules</h3>
              <ul className="space-y-2 text-gray-300">
                {program.modules.map((module, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-white" />
                    {module}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/courses">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-white hover:text-black transition-all duration-300">
                Enroll Now <ArrowRight size={24} />
              </button>
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LearnMorePage;