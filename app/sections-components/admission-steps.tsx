"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Explore Our Offerings",
    description:
      "Our programs cover a wide range of financial education topics, from personal finance and investment strategies to business finance and wealth management. Designed for all experience levels, our courses combine structured learning with real-world application. Explore our course catalog or consult our Admissions team for a tailored recommendation.",
  },
  {
    title: "Submit Your Application",
    description:
      "Complete and submit your application, ensuring all details are accurate. Each program has specific admission requirements, so review them carefully before applying. Applications are reviewed on a rolling basis, and early submission is encouraged to secure your spot.",
  },
  {
    title: "Fast-Track Your Onboarding",
    description:
      "Once accepted, you'll complete the onboarding process within a week, giving you immediate access to learning materials, case studies, and interactive tools. Our Program Delivery team will ensure you are fully prepared to start your journey.",
  },
  {
    title: "Begin Your Learning & Practical Application",
    description:
      "Courses typically span 1 to 4 months, combining intensive learning with hands-on experience. You'll apply concepts in real market scenarios, develop financial strategies, and refine your decision-making skills.",
  },
  {
    title: "Ongoing Mentorship & Portfolio Management",
    description:
      "After completing the course, our support doesn’t stop. For the rest of the year, you'll receive close mentorship, helping you apply your knowledge in real-world financial decisions. With expert guidance, you'll create and manage your portfolio while learning how to navigate different economic conditions with confidence.",
  },
  {
    title: "Join Our Financial Learning Network",
    description:
      "Graduating from a TSI program connects you to an exclusive Alumni Network, where you’ll gain continuous access to expert insights, investment discussions, and mentorship opportunities. Stay engaged through exclusive events, networking opportunities, and expert-led sessions. Subscribe to our newsletter for financial insights, and follow us on LinkedIn, Instagram, and Twitter for the latest updates.",
  },
];

const AdmissionsSteps = () => {
  return (
    <div className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {steps.map((step, index) => (
          <div key={index}>
            <motion.div
              className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step Number and Title */}
              <div className="md:w-1/3 text-center md:text-left">
                <div className="text-2xl font-bold text-gray-800">
                  Step {index + 1}
                </div>
                <h3 className="mt-2 text-lg md:text-xl font-semibold text-gray-700">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <div className="md:w-2/3">
                <p className="text-lg md:text-xl text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>

            {/* Horizontal Line */}
            {index < steps.length - 1 && (
              <hr className="my-8 border-gray-300 w-full" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdmissionsSteps;
