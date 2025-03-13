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

const photoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, zIndex: 10, transition: { duration: 0.3 } },
};

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tsi-campus.jpg"
            alt="TSI Campus"
            fill
            className="opacity-70 object-cover"
            quality={100}
            onError={(e) => console.error("Error loading hero image:", e)}
          />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">About TSI</h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 font-bold">
            Empowering Tanzania’s future through innovative education and investment excellence.
          </p>
        </motion.div>
      </section>

      {/* Company Background Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Founded in 2010, the Tanzania School of Investments (TSI) emerged from a vision to bridge the gap between education and economic empowerment in Tanzania. What began as a small initiative to train young professionals in financial literacy has grown into a leading institution, shaping the nation’s future leaders and innovators. Our journey is rooted in a commitment to excellence, community, and sustainable growth.
          </p>
        </motion.div>

        {/* Interactive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
          {[
            {
              src: "/images/tsi-founders.jpg",
              alt: "Founders of TSI",
              desc: "Our founders in 2010, laying the groundwork for TSI.",
            },
            {
              src: "/images/tsi-first-class.jpg",
              alt: "First Class",
              desc: "The inaugural class of 2011, marking the start of our educational journey.",
            },
            {
              src: "/images/tsi-campus-build.jpg",
              alt: "Campus Construction",
              desc: "Building our state-of-the-art campus in 2015.",
            },
            {
              src: "/images/tsi-community-event.jpg",
              alt: "Community Event",
              desc: "Engaging with the community during our 2018 outreach program.",
            },
            {
              src: "/images/tsi-graduation-2020.jpg",
              alt: "Graduation 2020",
              desc: "Celebrating our graduates in 2020, a milestone year.",
            },
            {
              src: "/images/tsi-innovation-lab.jpg",
              alt: "Innovation Lab",
              desc: "Our cutting-edge innovation lab, opened in 2023.",
            },
          ].map((photo, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={photoVariants}
              whileHover="hover"
              className="relative h-80 rounded-lg overflow-hidden shadow-xl group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                quality={100}
                onError={(e) => console.error(`Error loading image ${photo.alt}:`, e)}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm text-white font-medium">{photo.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300">
              To provide world-class education and investment training, empowering individuals and communities to drive Tanzania’s economic prosperity.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg text-gray-300">
              To be the leading institution in East Africa, fostering innovation, leadership, and sustainable development through education and investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Journey
        </motion.h2>
        <div className="space-y-12">
          {[
            { year: "2010", event: "TSI founded with a focus on financial literacy." },
            { year: "2015", event: "Opened our first campus in Dar es Salaam." },
            { year: "2018", event: "Launched community outreach programs." },
            { year: "2020", event: "Expanded to offer advanced investment courses." },
            { year: "2023", event: "Introduced the TSI Innovation Lab." },
          ].map((milestone, idx) => (
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

      {/* Call to Action */}
      <section className="w-full bg-black py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Legacy</h2>
          <p className="text-lg mb-10 text-gray-300">
            Be part of TSI’s mission to transform lives and build a brighter future for Tanzania.
          </p>
          <Link href="/admission">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Get Involved
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;