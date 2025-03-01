"use client";

import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Introduction to Portfolio Structuring",
    category: "Beginner",
    description: "Learn the basics of building a balanced investment portfolio.",
    image: "/images/course1.jpg", // Replace with actual image path
    duration: "4 weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Advanced Equity Analysis",
    category: "Advanced",
    description: "Master equity strategies for high-growth portfolios.",
    image: "/images/course2.jpg",
    duration: "6 weeks",
    level: "Advanced",
  },
  {
    id: 3,
    title: "Tanzanian Market Investments",
    category: "Specialized",
    description: "Explore opportunities in Tanzania’s unique economic sectors.",
    image: "/images/course3.jpg",
    duration: "5 weeks",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Retirement Planning Essentials",
    category: "Retirement",
    description: "Secure your future with effective portfolio strategies.",
    image: "/images/course4.jpg",
    duration: "4 weeks",
    level: "Beginner",
  },
  {
    id: 5,
    title: "Real Estate Investment Strategies",
    category: "Specialized",
    description: "Dive into real estate portfolio structuring in Tanzania.",
    image: "/images/course5.jpg",
    duration: "6 weeks",
    level: "Intermediate",
  },
];

const EducationalCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === "All" || course.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 pb-40 relative">
        {/* Hero Section */}
        <section className="relative bg-black py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-white"
          >
            Educational Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Unlock your investment potential with our expertly crafted courses tailored for Tanzania.
          </motion.p>
        </section>

        {/* Filter and Search Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 px-6 pr-12 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
            {/* Filter Dropdown */}
            <div className="relative">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="appearance-none py-4 px-6 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white pr-12"
              >
                <option value="All">All Categories</option>
                <option value="Beginner">Beginner</option>
                <option value="Advanced">Advanced</option>
                <option value="Specialized">Specialized</option>
                <option value="Retirement">Retirement</option>
              </select>
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center text-gray-300 mb-4">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                  <Link href={`/learn-more/${course.id}`}>
                    <button className="w-full bg-transparent border-2 border-white text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300">
                      Learn More <ArrowRight size={20} />
                    </button>
                  </Link>
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

export default EducationalCourses;