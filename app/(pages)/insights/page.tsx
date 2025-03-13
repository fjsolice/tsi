"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/ui-components/header";
import Footer from "@/app/ui-components/footer";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Insights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Sample blog posts data
  const blogPosts = [
    {
      id: "1",
      title: "The Future of Investment in Tanzania",
      excerpt: "Exploring trends shaping the investment landscape in 2025.",
      category: "Investment",
      image: "/images/insights-investment.jpg",
      date: "March 10, 2025",
    },
    {
      id: "2",
      title: "Modern Technology in Education: TSI’s Approach",
      excerpt: "How Modern Technology is transforming learning at TSI.",
      category: "Education",
      image: "/images/insights-tech.jpg",
      date: "March 5, 2025",
    },
    {
      id: "3",
      title: "Sustainable Growth Strategies",
      excerpt: "Key strategies for sustainable economic growth.",
      category: "Sustainability",
      image: "/images/course2.jpg",
      date: "February 28, 2025",
    },
    {
      id: "4",
      title: "TSI Alumni Success Stories",
      excerpt: "Inspiring journeys from our graduates.",
      category: "Alumni",
      image: "/images/insights-alumni.jpg",
      date: "February 20, 2025",
    },
    {
      id: "5",
      title: "Market Trends Q1 2025",
      excerpt: "A deep dive into the latest market insights.",
      category: "Investment",
      image: "/images/insights-market.jpg",
      date: "February 15, 2025",
    },
    {
      id: "6",
      title: "Innovative Teaching Methods",
      excerpt: "New approaches to education at TSI.",
      category: "Education",
      image: "/images/insights-teaching.jpg",
      date: "February 10, 2025",
    },
  ];

  // Filter and search logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const categories = ["All", "Investment", "Education", "Sustainability", "Alumni"];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/insights-hero.jpg"
            alt="Insights Hero"
            fill
            className="opacity-70 object-cover"
            quality={100}
          />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Insights</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover the latest trends, expert articles, and industry updates from TSI.
          </p>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 p-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white transition"
          />
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl group"
            >
              <Link href={`/insights/${post.id}`}>
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                    quality={100}
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-white group-hover:text-gray-200 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-400">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-sm text-white bg-gray-700 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentPage === page ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;