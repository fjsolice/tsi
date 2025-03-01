"use client";

import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

type SubscriptionPlan = {
  name: string;
  price: string;
  features: string[];
};

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "Starter",
    price: "$29/mo",
    features: ["Core Investment Courses", "Email Support", "Basic Market Insights", "Access to Community Forum"],
  },
  {
    name: "Professional",
    price: "$59/mo",
    features: [
      "All Starter Features",
      "Advanced Investment Strategies",
      "Priority Chat Support",
      "Weekly Market Analysis",
      "Portfolio Simulator",
    ],
  },
  {
    name: "Elite",
    price: "$119/mo",
    features: [
      "All Professional Features",
      "One-on-One Mentorship",
      "24/7 Premium Support",
      "Exclusive Investment Reports",
      "Real-Time Trading Tools",
      "Certificate of Completion",
    ],
  },
];

const featureList = [
  "Core Investment Courses", "Email Support", "Basic Market Insights", "Access to Community Forum",
  "Advanced Investment Strategies", "Priority Chat Support", "Weekly Market Analysis", "Portfolio Simulator",
  "One-on-One Mentorship", "24/7 Premium Support", "Exclusive Investment Reports", "Real-Time Trading Tools",
  "Certificate of Completion",
];

const testimonials = [
  { name: "Amina Hassan", role: "Entrepreneur", quote: "The Starter plan gave me the confidence to start investing!", rating: 5 },
  { name: "Joseph Mwangi", role: "Financial Analyst", quote: "Professional plan’s insights are game-changing.", rating: 5 },
  { name: "Fatima Zuberi", role: "Student", quote: "Elite mentorship helped me build my first portfolio!", rating: 5 },
  { name: "David Kimani", role: "Business Owner", quote: "Real-time tools made all the difference.", rating: 5 },
  { name: "Sophia Njoroge", role: "Investor", quote: "The courses are practical and easy to follow.", rating: 5 },
  { name: "Elias Mtui", role: "Retiree", quote: "I learned how to secure my future with TSI.", rating: 5 },
  { name: "Grace Omari", role: "Startup Founder", quote: "The community support is invaluable!", rating: 5 },
];

const faqs = [
  {
    question: "What is included in each plan?",
    answer: "Each plan offers a unique set of features tailored to different levels of investment expertise. The Starter plan includes foundational courses and basic support, while Professional and Elite plans add advanced strategies, premium support, and exclusive tools.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade or downgrade your plan at any time through your account dashboard. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer: "We offer a 7-day free trial for the Starter plan, giving you full access to its features. No trial is available for Professional or Elite plans, but you can explore them risk-free with our 30-day money-back guarantee.",
  },
  {
    question: "How do I contact support?",
    answer: "Support varies by plan: Starter includes email support, Professional adds priority chat, and Elite offers 24/7 premium support via phone, chat, and email.",
  },
  {
    question: "Are the courses tailored for Tanzanian investors?",
    answer: "Absolutely! Our courses are designed with a focus on Tanzania’s economic landscape, incorporating local market insights, opportunities, and regulations.",
  },
];

const PricingPage = () => {
  const testimonialConstraintsRef = useRef(null);
  const planConstraintsRef = useRef(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 pb-20 relative">
        {/* Black Background Section */}
        <div className="bg-black">
          {/* Hero Section */}
          <section className="py-24 px-6 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-6xl font-extrabold mb-6 text-white"
            >
              Tanzania School of Investments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Master the art of investing with our tailored plans designed for Tanzanians and beyond.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-black px-8 py-4 rounded-full text-xl font-semibold"
            >
              Start Investing Today
            </motion.button>
          </section>

          {/* Subscription Cards */}
          <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold text-center mb-12 text-white"
            >
              Investment Learning Plans
            </motion.h2>
            {/* Mobile Horizontal Slider */}
            <div className="md:hidden relative overflow-hidden" ref={planConstraintsRef}>
              <motion.div
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={planConstraintsRef}
                dragElastic={0.1}
                dragMomentum={true}
                style={{ width: `${subscriptionPlans.length * 100}%` }}
              >
                {subscriptionPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    className="w-full px-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.4, duration: 1 }}
                  >
                    <div className="bg-gray-800 p-10 rounded-xl shadow-lg h-[600px] flex flex-col">
                      <h2 className="text-4xl font-bold mb-6 text-white">{plan.name}</h2>
                      <p className="text-5xl font-extrabold mb-8 text-gray-200">{plan.price}</p>
                      <ul className="mb-12 space-y-4 flex-grow text-gray-300">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="text-white" size={20} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white text-black py-4 rounded-lg font-semibold"
                      >
                        Enroll Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10">
              {subscriptionPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.4, duration: 1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(255, 255, 255, 0.1)" }}
                  className="bg-gray-800 p-10 rounded-xl shadow-lg h-[600px] flex flex-col"
                >
                  <h2 className="text-4xl font-bold mb-6 text-white">{plan.name}</h2>
                  <p className="text-5xl font-extrabold mb-8 text-gray-200">{plan.price}</p>
                  <ul className="mb-12 space-y-4 flex-grow text-gray-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="text-white" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-black py-4 rounded-lg font-semibold"
                  >
                    Enroll Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Plan Comparison Table */}
          <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold text-center mb-12 text-white"
            >
              Compare Investment Plans
            </motion.h2>
            {/* Mobile Responsive Layout */}
            <div className="md:hidden space-y-8">
              {subscriptionPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{plan.name}</h3>
                  <ul className="space-y-4">
                    {featureList.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-between text-gray-300">
                        <span>{feature}</span>
                        {plan.features.includes(feature) ? (
                          <CheckCircle className="text-white" size={20} />
                        ) : (
                          <XCircle className="text-gray-500" size={20} />
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            {/* Desktop Table */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block overflow-x-auto bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="py-4 px-6 text-xl font-semibold text-white">Features</th>
                    {subscriptionPlans.map((plan) => (
                      <th key={plan.name} className="py-4 px-6 text-xl font-semibold text-center text-white">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureList.map((feature, idx) => (
                    <tr key={idx} className="border-t border-gray-700">
                      <td className="py-4 px-6 text-gray-300">{feature}</td>
                      {subscriptionPlans.map((plan) => (
                        <td key={plan.name} className="py-4 px-6 text-center">
                          {plan.features.includes(feature) ? (
                            <CheckCircle className="text-white mx-auto" size={20} />
                          ) : (
                            <XCircle className="text-gray-500 mx-auto" size={20} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </section>
        </div>

        {/* FAQs Section */}
        <section className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-center mb-12 text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left text-xl font-semibold text-white hover:bg-gray-700 transition-all duration-300"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 text-gray-300 bg-gray-900"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-gray-800 py-20 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-center mb-12 text-white"
          >
            Voices of Our Investors
          </motion.h2>
          <div className="max-w-3xl mx-auto relative overflow-hidden" ref={testimonialConstraintsRef}>
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={testimonialConstraintsRef}
              dragElastic={0.1}
              dragMomentum={true}
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="w-full px-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 h-64 flex flex-col justify-between">
                    <p className="text-lg text-gray-300 italic mb-4">“{testimonial.quote}”</p>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                          <p className="text-xs text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PricingPage;