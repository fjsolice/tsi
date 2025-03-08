"use client";

import Header from "@/app/ui-components/header"; // Imported Header
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CorporateSocialResponsibilities = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image src="/images/csr-hero.jpg" alt="TSI CSR Hero" layout="fill" objectFit="cover" className="opacity-70" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Corporate Social Responsibility at TSI
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            At Tanzania School of Investments, we are committed to uplifting communities, promoting financial inclusion, and driving sustainable development across Tanzania.
          </p>
          <Link href="#initiatives">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Learn More <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Section 1: CSR Overview Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Commitment to Tanzania
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              src: "/images/csr-education.jpg",
              alt: "Education Outreach",
              desc: "Providing free financial literacy workshops to schools and communities.",
            },
            {
              src: "/images/csr-women.jpg",
              alt: "Women Empowerment",
              desc: "Supporting women entrepreneurs with training and microfinance access.",
            },
            {
              src: "/images/csr-environment.jpg",
              alt: "Environmental Care",
              desc: "Promoting sustainable practices through tree planting and clean energy projects.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <p className="text-white text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Full-Width Image with Overlay */}
      <section className="w-full py-20 bg-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative h-[60vh] max-w-7xl mx-auto"
        >
          <Image src="/images/csr-community.jpg" alt="Community Impact" layout="fill" objectFit="cover" className="opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">Community Empowerment</h3>
              <p className="text-lg text-gray-300 max-w-2xl">
                TSI partners with local organizations to deliver impactful programs that enhance livelihoods and build economic resilience in Tanzanian communities.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Staggered Initiatives Gallery */}
      <section id="initiatives" className="w-full max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our CSR Initiatives
        </motion.h2>
        <div className="space-y-12">
          {[
            {
              src: "/images/csr-youth.jpg",
              alt: "Youth Training",
              desc: "Equipping Tanzanian youth with investment skills through free bootcamps and mentorship programs in Dar es Salaam and beyond.",
              reverse: false,
            },
            {
              src: "/images/csr-health.jpg",
              alt: "Health Support",
              desc: "Partnering with health organizations to provide financial education and resources to rural healthcare workers.",
              reverse: true,
            },
            {
              src: "/images/csr-agriculture.jpg",
              alt: "Agricultural Development",
              desc: "Supporting smallholder farmers with financial planning workshops and access to sustainable investment opportunities.",
              reverse: false,
            },
            {
              src: "/images/csr-seminars.jpg",
              alt: "Public Seminars",
              desc: "Hosting free public seminars across Arusha, Dodoma, and Mwanza to promote financial awareness and inclusion.",
              reverse: true,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
            >
              <div className="relative w-full md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
                <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4">{item.alt}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Detailed CSR Content */}
      <section className="w-full bg-gray-800 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Impact in Action
        </motion.h2>
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {[
            {
              title: "Financial Literacy for All",
              desc: "TSI has reached over 10,000 Tanzanians since 2018 with free financial literacy programs, covering topics like savings, budgeting, and basic investing. Our mobile units travel to remote areas, ensuring no one is left behind.",
              img: "/images/csr-literacy.jpg",
            },
            {
              title: "Empowering Women in Business",
              desc: "Through our Women in Investments Initiative, we’ve trained 2,500 women entrepreneurs, providing them with skills and seed funding to start businesses in sectors like agriculture, retail, and technology.",
              img: "/images/csr-women-business.jpg",
            },
            {
              title: "Youth Employment Programs",
              desc: "Our annual Youth Investment Summit connects 500+ students with employers, offering internships and job shadowing opportunities to bridge the gap between education and employment.",
              img: "/images/csr-youth-employment.jpg",
            },
            {
              title: "Sustainable Development Goals",
              desc: "TSI aligns with UN SDGs by promoting clean energy projects, planting over 5,000 trees, and educating communities on climate-smart investment practices.",
              img: "/images/csr-sdg.jpg",
            },
            {
              title: "Partnerships with Local Leaders",
              desc: "We collaborate with village councils and NGOs to tailor CSR programs to local needs, such as funding borehole projects and supporting cooperative savings groups.",
              img: "/images/csr-local.jpg",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden shadow-lg">
                <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Photo Collage */}
      <section className="w-full bg-gray-900 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          CSR Highlights
        </motion.h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/csr-event1.jpg",
            "/images/csr-event2.jpg",
            "/images/csr-volunteer.jpg",
            "/images/csr-training.jpg",
            "/images/csr-tree-planting.jpg",
            "/images/csr-workshop.jpg",
            "/images/csr-community-day.jpg",
            "/images/csr-outreach.jpg",
          ].map((src, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image src={src} alt={`CSR Highlight ${idx + 1}`} layout="fill" objectFit="cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-black py-20 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg mb-10 text-gray-300">
            Join TSI in making a difference. Volunteer, partner with us, or support our CSR initiatives to transform Tanzania.
          </p>
          <Link href="/volunteer">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Join Us <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Tanzania School of Investments</h3>
          <p>Building a sustainable future through education and responsibility.</p>
        </div>
      </footer>
    </div>
  );
};

export default CorporateSocialResponsibilities;