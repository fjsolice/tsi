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

const Recruiting = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Sample job openings data
  const jobOpenings = [
    {
      id: "1",
      title: "Investment Analyst",
      department: "Finance",
      type: "Full-Time",
      location: "Dar es Salaam",
      description: "Analyze market trends and support portfolio management.",
    },
    {
      id: "2",
      title: "Education Program Coordinator",
      department: "Education",
      type: "Full-Time",
      location: "Remote",
      description: "Develop and manage innovative educational programs.",
    },
    {
      id: "3",
      title: "Marketing Intern",
      department: "Marketing",
      type: "Internship",
      location: "Dar es Salaam",
      description: "Assist in creating campaigns to promote TSI’s mission.",
    },
    {
      id: "4",
      title: "Community Engagement Specialist",
      department: "Community",
      type: "Part-Time",
      location: "Arusha",
      description: "Foster relationships through outreach initiatives.",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      name: "Godliver Evod",
      role: "Office Administrator",
      quote: "TSI provided me with the tools and support to grow my career in finance. The collaborative environment is unmatched.",
      image: "/images/team-godliver.jpg",
    },
    {
      name: "Dellah Billal",
      role: "Brand & Growth Strategist",
      quote: "My internship at TSI was a game-changer. I gained hands-on experience and mentorship from industry leaders.",
      image: "/images/team-delah.jpg",
    },
  ];

  // Handle form submission (placeholder)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/recruiting-hero.jpg"
            alt="Recruiting Hero"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Join Our Team</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover a career at TSI where innovation meets opportunity. Be part of shaping Tanzania’s future.
          </p>
        </motion.div>
      </section>

      {/* Why Work at TSI Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Why Work at TSI?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovative Culture",
              desc: "We foster a workplace that thrives on creativity and forward-thinking solutions.",
              image: "/images/course4.jpg",
            },
            {
              title: "Career Growth",
              desc: "From internships to leadership roles, we support your professional journey.",
              image: "/images/course1.jpg",
            },
            {
              title: "Community Impact",
              desc: "Make a difference in Tanzania through education and investment initiatives.",
              image: "/images/course3.jpg",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="w-full py-20 bg-gray-900">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Current Opportunities
        </motion.h2>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover="hover"
                className="bg-black border border-gray-800 rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>{job.department}</span>
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                </div>
                <Link
                  href={`/recruiting/apply/${job.id}`}
                  className="mt-4 inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-400">
            Don’t see a fit?{" "}
            <Link href="#contact" className="underline hover:text-white">
              Contact us
            </Link>{" "}
            to express interest in future opportunities.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          What Our Team Says
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-900 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="w-full py-20 bg-black">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          How to Join Us
        </motion.h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1. Explore Opportunities",
              desc: "Browse our current openings and find a role that matches your skills.",
            },
            {
              step: "2. Submit Your Application",
              desc: "Apply online with your resume and a cover letter.",
            },
            {
              step: "3. Join the Team",
              desc: "After interviews, join TSI and start making an impact.",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.step}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-xl mx-auto"
        >
          {submitted ? (
            <p className="text-center text-green-400">
              Thank you for your message! We’ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Recruiting;