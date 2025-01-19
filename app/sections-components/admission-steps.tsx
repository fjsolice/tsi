"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Understand our offerings",
    description:
      "Our executive development programs enable you to deepen your knowledge, broaden your skill set, and collaborate with a global network of peers. To compare and narrow down your program options, utilize our program finder or consult with our Program Advising team for a personalized recommendation.",
  },
  {
    title: "Submit an application",
    description:
      "Before you submit your application, please be sure you have answered all the questions thoroughly and have printed or saved your application for your records. Your application and all required documents must be received before you will be considered for program admission. While each program has its own distinct application, view this sample version to help you prepare. Some programs require additional supporting materials, so please read the admissions requirements for your selected program thoroughly.",
  },
  {
    title: "Go through the admissions process",
    description:
      "Candidates are admitted on a rolling, space-available basis and typically will receive their admissions decision within four to six weeks. Select programs have application deadlines, as noted on the program page on our website. For all programs, early application is strongly encouraged. To view your application in progress and track your admissions status, log in to your account home page.",
  },
  {
    title: "Submit your payment",
    description:
      "Upon acceptance into a program, you'll receive an electronic invoice from our Finance department that is payable within 30 days of receipt, or upon receipt of the invoice if the program start date is fewer than 30 days from the invoice date. Please review the payment policies and the steps for cancelling or deferring participation under Admissions Quick Facts below.",
  },
  {
    title: "Make the most of your experience",
    description:
      "Our Program Delivery team will be your primary point of contact before and during the program. About three weeks before your program starts, you will receive a link to the Learning Community, which gives you access to relevant case studies and a detailed program schedule.",
  },
  {
    title: "Continue the conversation",
    description:
      "Once you complete a program, you become part of the extended HBS Executive Education community. Our Program Advising team will continue to be a resource as you consider future programs at HBS. To stay connected subscribe to our newsletter to receive the latest HBS Executive Education news, announcements, and thought leadership. You can also follow us on LinkedIn, Instagram, Facebook, and YouTube.",
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
