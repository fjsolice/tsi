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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Initiatives = () => {
  // Sample initiatives data
  const initiatives = [
    {
      id: "1",
      title: "Financial Literacy for All",
      description: "Empowering underserved communities with essential financial skills through workshops and resources.",
      image: "/images/initiatives-financial-literacy.jpg",
      impact: "Reached over 5,000 individuals since 2018.",
    },
    {
      id: "2",
      title: "Green Investment Program",
      description: "Promoting sustainable investment practices to support Tanzania’s environmental goals.",
      image: "/images/advanced-small.jpg",
      impact: "Funded 10 eco-friendly projects in 2024.",
    },
    {
      id: "3",
      title: "Youth Innovation Labs",
      description: "Providing students with hands-on experience in entrepreneurship and technology.",
      image: "/images/advanced-wealth.jpg",
      impact: "Trained 1,200 students since 2020.",
    },
    {
      id: "4",
      title: "Women in Finance Initiative",
      description: "Supporting women in building careers in finance and investment through mentorship and training.",
      image: "/images/coaching.jpg",
      impact: "Mentored 300+ women since 2021.",
    },
  ];

  // Sample timeline data
  const timeline = [
    { year: "2018", event: "Launched Financial Literacy for All initiative." },
    { year: "2020", event: "Introduced Youth Innovation Labs across campuses." },
    { year: "2021", event: "Started the Women in Finance Initiative." },
    { year: "2023", event: "Expanded Green Investment Program with new funding." },
    { year: "2025", event: "Celebrated 15 years of impactful initiatives." },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/event1.jpg"
            alt="Initiatives Hero"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Our Initiatives</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Driving change through education, sustainability, and community empowerment at TSI.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Making an Impact</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At TSI, our initiatives reflect our commitment to creating a lasting difference in Tanzania. From financial education to sustainable innovation, we’re building a brighter future, one program at a time.
          </p>
        </motion.div>
      </section>

      {/* Initiatives Grid Section */}
      <section className="w-full py-20 bg-gray-900">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Key Programs
        </motion.h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative) => (
            <motion.div
              key={initiative.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
              className="bg-black border border-gray-800 rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-48">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                  quality={100}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                <p className="text-gray-400 mb-4">{initiative.description}</p>
                <p className="text-sm text-gray-500">{initiative.impact}</p>
                <Link
                  href={`/initiatives/${initiative.id}`}
                  className="mt-4 inline-block text-white underline hover:text-gray-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Milestones of Impact
        </motion.h2>
        <div className="space-y-12">
          {timeline.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex items-center gap-8"
            >
              <div className="w-24 text-right">
                <span className="text-2xl font-bold text-white">{milestone.year}</span>
              </div>
              <div className="flex-1 border-l-2 border-gray-700 pl-6">
                <p className="text-lg text-gray-300">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="w-full py-20 bg-black">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Reach
        </motion.h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "15+", desc: "Years of Impact" },
            { stat: "10,000+", desc: "People Empowered" },
            { stat: "50+", desc: "Projects Funded" },
            { stat: "4", desc: "Core Initiatives" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-3xl font-bold text-white">{item.stat}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 bg-gray-900 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg mb-10 text-gray-300">
            Partner with TSI to support our initiatives or volunteer your skills to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition-all shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/make-a-gift"
              className="bg-gray-800 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-700 transition-all shadow-lg"
            >
              Donate Now
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Initiatives;