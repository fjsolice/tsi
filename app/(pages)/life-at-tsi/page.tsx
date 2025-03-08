"use client";

import Header from "@/app/ui-components/header"; // Imported Header
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Define animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const LifeAtTsi = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image src="/images/tsi-hero.jpg" alt="Life at TSI Hero" layout="fill" objectFit="cover" className="opacity-70" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Life at TSI</h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Experience the vibrant community, innovative learning, and inspiring environment at Tanzania School of Investments.
          </p>
          <Link href="#gallery">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Explore More <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Section 1: Grid of Campus Life */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Campus Life
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: "/images/tsi-classroom.jpg", alt: "Classroom", desc: "Engaging lectures in modern classrooms." },
            { src: "/images/tsi-library.jpg", alt: "Library", desc: "Studying in our state-of-the-art library." },
            { src: "/images/tsi-group-study.jpg", alt: "Group Study", desc: "Collaborative learning with peers." },
          ].map((photo, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <Image src={photo.src} alt={photo.alt} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <p className="text-white text-lg">{photo.desc}</p>
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
          <Image src="/images/tsi-campus-event.jpg" alt="Campus Event" layout="fill" objectFit="cover" className="opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">Vibrant Events</h3>
              <p className="text-lg text-gray-300 max-w-2xl">
                From investment summits to cultural celebrations, TSI hosts events that inspire and connect our community.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Staggered Photo Gallery */}
      <section id="gallery" className="w-full max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          A Day in the Life
        </motion.h2>
        <div className="space-y-12">
          {[
            { src: "/images/tsi-cafeteria.jpg", alt: "Cafeteria", desc: "Enjoying meals and conversations at the TSI cafeteria.", reverse: false },
            { src: "/images/tsi-sports.jpg", alt: "Sports", desc: "Staying active with sports and recreation on campus.", reverse: true },
            { src: "/images/tsi-workshop.jpg", alt: "Workshop", desc: "Hands-on workshops to sharpen investment skills.", reverse: false },
            { src: "/images/tsi-night-study.jpg", alt: "Night Study", desc: "Late-night study sessions in a supportive environment.", reverse: true },
          ].map((photo, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className={`flex flex-col ${photo.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
            >
              <div className="relative w-full md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
                <Image src={photo.src} alt={photo.alt} layout="fill" objectFit="cover" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4">{photo.alt}</h3>
                <p className="text-gray-300">{photo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Photo Collage */}
      <section className="w-full bg-gray-800 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Moments at TSI
        </motion.h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/tsi-graduation.jpg",
            "/images/tsi-lecture.jpg",
            "/images/tsi-group-photo.jpg",
            "/images/tsi-outdoor.jpg",
            "/images/tsi-seminar.jpg",
            "/images/tsi-teamwork.jpg",
            "/images/tsi-study-room.jpg",
            "/images/tsi-campus-view.jpg",
          ].map((src, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image src={src} alt={`TSI Moment ${idx + 1}`} layout="fill" objectFit="cover" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the TSI Community</h2>
          <p className="text-lg mb-10 text-gray-300">
            Discover the life-changing experiences awaiting you at Tanzania School of Investments. Apply today!
          </p>
          <Link href="/apply">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Apply Now <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Tanzania School of Investments</h3>
          <p>Shaping Tanzania’s future through education and innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default LifeAtTsi;