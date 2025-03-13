"use client";

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

const InsightsDetail = ({ params }: { params: { id: string } }) => {
  // Sample blog post data (in a real app, fetch this from an API or database)
  const blogPosts = {
    "1": {
      title: "The Future of Investment in Tanzania",
      date: "March 10, 2025",
      category: "Investment",
      content: `
        Tanzania’s investment landscape is evolving rapidly in 2025, driven by technological advancements and policy reforms. This article explores key trends, including the rise of digital finance and sustainable investment opportunities. At TSI, we’re at the forefront, training the next generation of investors to navigate this dynamic market.
      `,
      images: [
        { src: "/images/insights-investment-1.jpg", alt: "Digital Finance" },
        { src: "/images/insights-investment-2.jpg", alt: "Sustainable Projects" },
      ],
    },
    "2": {
      title: "AI in Education: TSI’s Approach",
      date: "March 5, 2025",
      category: "Education",
      content: `
        Artificial Intelligence is revolutionizing education at TSI. From personalized learning paths to AI-driven analytics, we’re enhancing how students engage with complex financial concepts. This article dives into our innovative methods and their impact on student success.
      `,
      images: [
        { src: "/images/insights-ai-1.jpg", alt: "AI Classroom" },
        { src: "/images/insights-ai-2.jpg", alt: "Student Analytics" },
      ],
    },
    "3": {
      title: "Sustainable Growth Strategies",
      date: "February 28, 2025",
      category: "Sustainability",
      content: `
        Sustainability is more than a buzzword at TSI—it’s a core strategy. This post outlines how we integrate eco-friendly practices into our investment training, preparing students to lead in a greener economy.
      `,
      images: [
        { src: "/images/insights-sustainability-1.jpg", alt: "Green Campus" },
        { src: "/images/insights-sustainability-2.jpg", alt: "Eco Projects" },
      ],
    },
    "4": {
      title: "TSI Alumni Success Stories",
      date: "February 20, 2025",
      category: "Alumni",
      content: `
        Our alumni are making waves across industries. This article highlights inspiring stories from TSI graduates who’ve turned their education into impactful careers, from finance to entrepreneurship.
      `,
      images: [
        { src: "/images/insights-alumni-1.jpg", alt: "Alumni Event" },
        { src: "/images/insights-alumni-2.jpg", alt: "Graduate Spotlight" },
      ],
    },
    "5": {
      title: "Market Trends Q1 2025",
      date: "February 15, 2025",
      category: "Investment",
      content: `
        A comprehensive analysis of market trends in Q1 2025, covering key sectors and investment opportunities. TSI’s experts share their insights to help you stay ahead.
      `,
      images: [
        { src: "/images/insights-market-1.jpg", alt: "Market Graphs" },
        { src: "/images/insights-market-2.jpg", alt: "Expert Panel" },
      ],
    },
    "6": {
      title: "Innovative Teaching Methods",
      date: "February 10, 2025",
      category: "Education",
      content: `
        At TSI, we’re pioneering new teaching methods to make learning engaging and effective. This post explores our use of interactive tools and real-world simulations.
      `,
      images: [
        { src: "/images/insights-teaching-1.jpg", alt: "Classroom Tech" },
        { src: "/images/insights-teaching-2.jpg", alt: "Simulation Lab" },
      ],
    },
  };

  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-black text-white">
        <Header />
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <p className="text-lg text-gray-300">Sorry, we couldn’t find that article.</p>
          <Link href="/insights" className="mt-6 inline-block text-white underline">
            Back to Insights
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />

      {/* Blog Detail Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <span className="text-sm text-gray-500">{post.date}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{post.title}</h1>
          <span className="inline-block text-sm text-white bg-gray-700 px-3 py-1 rounded-full mb-8">
            {post.category}
          </span>
          <div className="prose prose-invert max-w-none text-gray-300">
            <p>{post.content}</p>
          </div>
        </motion.div>

        {/* Additional Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {post.images.map((image, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-64 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute bottom-0 w-full bg-black/50 p-4">
                <p className="text-sm text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Insights */}
        <Link href="/insights" className="mt-12 inline-block text-white underline">
          ← Back to Insights
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsDetail;