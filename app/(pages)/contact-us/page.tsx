"use client";

import { motion } from "framer-motion";
import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header/>
      {/* Header Section */}
      <header className="bg-black text-white py-24 px-8">
        <motion.h1
          className="text-6xl font-extrabold tracking-tight"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
      </header>

      {/* Content Section */}
      <main className="flex-1 px-8 md:px-20 lg:px-32 py-16 space-y-20">
        {/* Programs for Individuals */}
        <section className="space-y-8">
          <motion.h2
            className="text-4xl font-semibold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Programs for Individuals
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Looking for in-person or live online professional development
            opportunities for yourself, colleagues, or a small team? Explore
            our program finder or contact us.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Email:{" "}
            <a
              href="mailto:executive_education@tsi.co.tz"
              className="text-indigo-600 hover:underline"
            >
              executive_education@tsi.co.tz
            </a>
            <br />
            Phone: +255 756 876345 (outside the United Republic of Tanzania,
            call +255 768 987 654)
          </motion.p>
        </section>

        {/* Solutions for Organizations */}
        <section className="space-y-8">
          <motion.h2
            className="text-4xl font-semibold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Solutions for Organizations
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Looking for a customized leadership development experience for your
            organizations senior leaders? We partner with large global
            organizations to design and deliver programs directly linked to
            their unique business challenges. Submit a custom programs inquiry
            or contact us.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Email:{" "}
            <a
              href="mailto:custom_programs@tsi.co.tz"
              className="text-indigo-600 hover:underline"
            >
              custom_programs@tsi.co.tz
            </a>
          </motion.p>
        </section>

        {/* Self-Paced Learning Solutions */}
        <section className="space-y-8">
          <motion.h2
            className="text-4xl font-semibold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Self-Paced Learning Solutions
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Looking for self-paced online learning? Explore courses at Harvard
            Tanzania School of Investment Online. Find more information by
            visiting our support portal where you can review articles about
            popular help topics, or submit a question via our contact us form.
          </motion.p>
          <motion.a
            href="/contact-form"
            className="text-lg text-indigo-600 hover:underline"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Contact Us Form
          </motion.a>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
