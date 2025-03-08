"use client";

import Header from "@/app/ui-components/header"; // Imported Header
import Link from "next/link"; // Added missing import for Link
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

// Define FAQ item interface
interface FAQItem {
  question: string;
  answer: string;
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const accordionVariants = {
  open: { height: "auto", opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  closed: { height: 0, opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the Tanzania School of Investments (TSI)?",
      answer:
        "The Tanzania School of Investments (TSI) is a leading educational institution in Tanzania focused on training students and professionals in investment strategies, financial analysis, and economic development. Our mission is to empower individuals to contribute to Tanzania’s growing economy through specialized education.",
    },
    {
      question: "What programs does TSI offer?",
      answer:
        "TSI offers certificates, diplomas, and advanced degrees in areas such as investment management, financial modeling, entrepreneurship, and sustainable finance. Our programs are designed to meet the needs of Tanzania’s capital markets and include practical training with real-world applications.",
    },
    {
      question: "Who can apply to TSI?",
      answer:
        "TSI accepts applications from secondary school graduates, university students seeking specialized training, and professionals looking to enhance their skills. Both Tanzanian and international candidates are welcome, with specific requirements outlined on our admissions page.",
    },
    {
      question: "What is the application process like?",
      answer:
        "Applicants must complete an online form, submit academic transcripts, a personal statement, and recommendation letters if required. Shortlisted candidates may undergo an interview, and the entire process typically takes 2-4 weeks before an offer is extended.",
    },
    {
      question: "Are there scholarships or financial aid options available?",
      answer:
        "Yes, TSI provides merit-based scholarships covering up to 100% of tuition and need-based financial aid, including grants and low-interest loans. Details on eligibility and deadlines are available in our financial aid section.",
    },
    {
      question: "What makes TSI different from other institutions?",
      answer:
        "TSI’s unique focus on Tanzania’s investment landscape, partnerships with CMSA and CMA licensed brokers, and emphasis on hands-on learning set us apart. We prioritize practical skills and regional relevance over generic education.",
    },
    {
      question: "Where is TSI located?",
      answer:
        "Our main campus is in Arusha, with satellite centers in Dar es Salaam and Dodoma. Each location is equipped with modern facilities to support our students’ academic and professional growth.",
    },
    {
      question: "What kind of career support does TSI offer?",
      answer:
        "TSI offers career counseling, internship opportunities, job placement services, and networking events with Tanzanian financial leaders. Our alumni network also provides mentorship and job leads.",
    },
    {
      question: "Can I study part-time or online?",
      answer:
        "TSI offers part-time programs for working professionals and select online courses, allowing flexibility without compromising educational quality. Check our course catalog for availability.",
    },
    {
      question: "How does TSI engage with the community?",
      answer:
        "We conduct financial literacy programs, public seminars, and collaborate with local businesses to promote economic growth in Tanzania. Students also participate in community service initiatives.",
    },
    {
      question: "What is the class size like at TSI?",
      answer:
        "Classes typically range from 20-30 students, ensuring personalized attention from faculty and fostering an interactive learning environment.",
    },
    {
      question: "Are there opportunities for international exposure?",
      answer:
        "Yes, TSI offers exchange programs, international workshops, and study tours in collaboration with East African and global institutions to expose students to worldwide investment practices.",
    },
    {
      question: "How can alumni stay involved with TSI?",
      answer:
        "Alumni can join the TSI Alumni Network to mentor students, attend events, or participate in lifelong learning programs like advanced investment seminars.",
    },
    {
      question: "What facilities does TSI provide on campus?",
      answer:
        "Our campuses feature investment labs, a financial library, study rooms, a cafeteria, and recreational spaces, all designed to enhance the student experience.",
    },
    {
      question: "How do I contact TSI for more information?",
      answer:
        "Email us at info@tsi.ac.tz or call +255 123 456 789. Our team is available Monday to Friday, 8 AM to 5 PM, and you can also submit inquiries via our website.",
    },
    {
      question: "What is the duration of TSI programs?",
      answer:
        "Certificate programs last 6-12 months, diplomas take 1-2 years, and advanced degrees vary from 2-4 years, depending on full-time or part-time enrollment.",
    },
    {
      question: "Does TSI offer short courses or workshops?",
      answer:
        "Yes, we provide short-term courses and workshops on topics like stock trading, financial planning, and risk analysis, open to both students and the public.",
    },
    {
      question: "What are the admission deadlines?",
      answer:
        "Deadlines vary by program: Fall intake is June 30th, Spring intake is November 30th. Late applications may be considered on a case-by-case basis.",
    },
    {
      question: "Is there a dress code at TSI?",
      answer:
        "TSI encourages professional attire for classes and events to prepare students for the business world, though casual dress is permitted on non-formal days.",
    },
    {
      question: "What is the faculty like at TSI?",
      answer:
        "Our faculty consists of experienced educators and industry professionals with expertise in Tanzanian and global finance, ensuring a blend of academic rigor and practical insight.",
    },
    {
      question: "Are there student organizations at TSI?",
      answer:
        "Yes, TSI hosts clubs like the Investment Society, Entrepreneurship Club, and Finance Debate Team, offering opportunities for leadership and networking.",
    },
    {
      question: "How does TSI support entrepreneurship?",
      answer:
        "We offer entrepreneurship courses, startup incubators, and pitch competitions to help students launch their own ventures, with mentorship from alumni entrepreneurs.",
    },
    {
      question: "What languages are courses taught in?",
      answer:
        "Courses are primarily taught in English, with some Swahili-language options available for community outreach programs and select workshops.",
    },
    {
      question: "Does TSI have partnerships with industries?",
      answer:
        "TSI collaborates with Tanzanian banks, investment firms, and regulatory bodies like CMSA and CMA to provide internships, guest lectures, and job opportunities.",
    },
    {
      question: "What is the cost of tuition at TSI?",
      answer:
        "Tuition varies by program: certificates start at TZS 1.5M, diplomas at TZS 3M, and degrees at TZS 5M per year. Detailed fee structures are on our website.",
    },
    {
      question: "Can I transfer credits to TSI?",
      answer:
        "Yes, TSI accepts transfer credits from accredited institutions after a review process. Contact our admissions office for specific guidelines.",
    },
    {
      question: "What extracurricular activities are available?",
      answer:
        "Students can enjoy sports, cultural events, investment simulations, and volunteer projects, enriching their TSI experience beyond the classroom.",
    },
    {
      question: "How does TSI ensure student success?",
      answer:
        "We provide academic advising, peer tutoring, career planning, and regular feedback to help every student achieve their goals.",
    },
    {
      question: "Are there housing options for students?",
      answer:
        "TSI offers on-campus dormitories and partners with local providers for off-campus housing in Arusha, Dar es Salaam, and Dodoma.",
    },
    {
      question: "What happens after graduation from TSI?",
      answer:
        "Graduates join our alumni network, pursue careers in finance or entrepreneurship, or continue studies, with TSI support for job placement and further education.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gray-900 py-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Your guide to understanding Tanzania School of Investments (TSI). Explore our extensive FAQ or reach out for more details!
          </p>
        </motion.div>
      </section>

      {/* FAQ Content */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-700 transition-all duration-300 focus:outline-none"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-white" />
                ) : (
                  <ChevronDown size={24} className="text-white" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="p-6 text-gray-300 bg-black"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gray-900 py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-10 text-gray-300">
            Our team is here to help. Reach out to learn more about TSI and how we can support your journey.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-all duration-300 shadow-lg">
              Contact Us <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Tanzania School of Investments</h3>
          <p>Empowering Tanzania’s future through investment education.</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQs;