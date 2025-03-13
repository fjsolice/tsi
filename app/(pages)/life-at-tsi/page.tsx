"use client";

import Header from "@/app/ui-components/header"; // Imported Header
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Twitter, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

// Define animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Card animation for scaling and hover effect
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const LifeAtTsi = () => {
  const carouselRef = useRef<HTMLDivElement>(null); // Explicitly type the ref

  // Function to slide the carousel left or right
  const slide = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (carousel) {
      const cardWidth = 352; // Matches w-88 (88 * 4px in Tailwind)
      const scrollAmount = cardWidth;
      carousel.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section with Full-Width Image */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tsi-hero.jpg"
            alt="Life at TSI Hero"
            fill
            className="opacity-70 object-cover"
            quality={100}
            onError={(e) => console.error("Error loading hero image:", e)}
            onLoadingComplete={() => console.log("Hero image loaded successfully")}
          />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Life at TSI</h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 font-bold">
            Experience the vibrant community, innovative learning, and inspiring environment at Tanzania School of Investments.
          </p>
          <Link href="#gallery">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Explore More <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Team Section - Modern Slidable Carousel with Arrows Outside */}
      <section className="w-full py-20 bg-black text-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Meet Our Team
        </motion.h2>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-12">
          {/* Left Arrow */}
          <motion.button
            onClick={() => slide("left")}
            className="absolute -left-4 sm:-left-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-600 p-2 sm:p-3 rounded-full z-10 hover:from-gray-700 hover:to-gray-500 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Slide left"
          >
            <ChevronLeft size={24} className="text-white" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={() => slide("right")}
            className="absolute -right-4 sm:-right-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-600 p-2 sm:p-3 rounded-full z-10 hover:from-gray-700 hover:to-gray-500 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Slide right"
          >
            <ChevronRight size={24} className="text-white" />
          </motion.button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-6 sm:space-x-8 overflow-x-hidden snap-x snap-mandatory scroll-smooth"
          >
            {[
              {
                name: "Brever Moshi",
                title: "Managing Director",
                desc: "Having over 15 years of global and local market trading experience, a Certified Investment Advisor overseeing investor relations, driving strategic growth, risk management, and high-performance investment strategies across diverse financial landscapes.",
                img: "/images/team-brever1.jpg",
                social: { twitter: "#", instagram: "#", linkedin: "#" },
              },
              {
                name: "Ipyana Mwasumbwe",
                title: "Business Relations Manager",
                desc: "With over 25 + years in the markets, He fosters strategic client partnerships, drives growth through tailored financial solutions, and ensures seamless collaboration across business units to enhance long-term value.",
                img: "/images/team-ipyana.jpg",
                social: { twitter: "#", instagram: "#", linkedin: "#" },
              },
              {
                name: "Delah Billal",
                title: "Brand & Growth Strategist",
                desc: "Develops and executes strategic marketing initiatives, crafting compelling content that enhances brand visibility, drives engagement, and accelerates business growth.",
                img: "/images/team-delah.jpg",
                social: { twitter: "#", instagram: "#", linkedin: "#" },
              },
              {
                name: "Godliver Evod",
                title: "Office Administrator",
                desc: "Ensures seamless operations by managing administrative processes, optimizing workflow efficiency, and supporting executive functions with precision and professionalism.",
                img: "/images/team-godliver.jpg",
                social: { twitter: "#", instagram: "#", linkedin: "#" },
              },

            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover="hover"
                className="snap-start flex-shrink-0 w-72 sm:w-88 bg-gray-900 rounded-xl overflow-hidden shadow-xl group transition-all duration-300"
              >
                <div className="relative h-96 sm:h-[28rem]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-t-xl brightness-90 group-hover:brightness-100 transition-all duration-300 object-cover"
                    quality={100}
                    onError={(e) => console.error(`Error loading image for ${member.name}:`, e)}
                  />
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 font-bold text-sm text-white mb-2">{member.title}</p>
                    <p className="text-gray-200 text-sm mb-4">{member.desc}</p>
                    <div className="flex justify-center gap-4 sm:gap-6">
                      <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter
                          size={20}
                          className="hover:text-blue-400 transition-colors"
                        />
                      </Link>
                      <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram
                          size={20}
                          className="hover:text-pink-400 transition-colors"
                        />
                      </Link>
                      <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin
                          size={20}
                          className="hover:text-blue-600 transition-colors"
                        />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Full-Width Video Background */}
      <section className="w-full py-20 bg-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative h-[60vh] max-w-7xl mx-auto overflow-hidden"
        >
          <video
            autoPlay
            loop
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/videos/tsi-event-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">The TSI Experience</h3>
              <p className="text-lg text-gray-300 max-w-2xl">
              A dynamic, collaborative environment fostering expertise, innovation, and growth.
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
          Working at TSI
        </motion.h2>
        <div className="space-y-12">
          {[
            { src: "/images/tsi-1.jpg", alt: "Our Pioneering Work Culture", desc: "At Tanzania School of Investments, we embrace transparency, innovation, and data-driven decision-making. Open feedback, continuous learning, and shared knowledge drive our success, empowering every member to uphold excellence and accountability in the financial markets.", reverse: false },
            { src: "/images/tsi-2.jpg", alt: "Internship Opportunities at TSI", desc: "Explore our investment internship programs, full-time roles, and opportunities designed to give you hands-on experience and in-depth exposure to Tanzania School of Investments' unique approach to capital markets and portfolio management. Gain valuable insights while working alongside industry experts.", reverse: true },
            { src: "/images/tsi-3.jpg", alt: "Spotlight on Investment", desc: "At Tanzania School of Investments, our investment team focuses on understanding the key drivers of capital markets and using that knowledge to build high-quality portfolios and provide expert investment advice to our clients.", reverse: false },
            { src: "/images/tsi-4.jpg", alt: "Diversity, Equity & Inclusion: Essential to Our Success", desc: "At Tanzania School of Investments, we strive to create a vibrant meritocracy, driven not only by talent but also by a diverse range of perspectives. We believe that diversity in background, identity, and experience enriches our ideas and solutions. Inclusion is key to unlocking the full potential of this diversity, ensuring every voice is heard and every idea has the opportunity to thrive. Our commitment to equity ensures fair structures that reinforce our dedication to merit-based growth and excellence.", reverse: true },
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
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  quality={100}
                  onError={(e) => console.error(`Error loading gallery image ${photo.alt}:`, e)}
                />
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
          Meaningful Relationships
        </motion.h2>
        <div className="flex items-center justify-center text-center">
          <motion.p
            className="text-2xl md:text-2xl text-center max-w-7xl mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We believe that meaningful relationships are just as important as meaningful work—they go hand in hand. Our focus on fostering an inclusive environment is essential to building a strong, connected community. We support organic relationship-building through company events and initiatives, offering a variety of opportunities for engagement, from investment workshops to social gatherings and professional development groups. Whether it’s networking, learning, or team-building, we encourage everyone to be part of our vibrant community.
          </motion.p>
        </div>
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
              <Image
                src={src}
                alt={`TSI Moment ${idx + 1}`}
                fill
                className="object-cover"
                quality={100}
                onError={(e) => console.error(`Error loading collage image ${idx + 1}:`, e)}
              />
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