"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const AdmissionQuickFacts = () => {
  const adfs = [
    {
      question: "Applicant Qualifications",
      answer: `Each Executive Education program has its own requirements. In general, you must have at least 10 years of work experience and be referred by a senior executive within your organization, a board member of your company, or a Harvard Business School graduate who is familiar with your role and responsibilities and can provide a detailed firsthand account. Although there are no formal educational requirements, the selective admissions process is based on professional achievement and organizational responsibility. Visit our specific program pages for additional details and application forms.`,
    },
    {
      question: "Language Proficiency",
      answer: `Because our programs are designed to encourage individual growth and foster productive interaction among participants, proficiency in written and spoken English is essential. However, please note that some China-focused programs are offered simultaneously in both English and Chinese. If English is your second language, or if you have less than one year of experience working in an English-speaking environment, we require a brief statement documenting your conversational and written proficiency. The Admissions Committee may also request an interview.`,
    },
    {
      question: "Community Values",
      answer: `Harvard Business School (HBS) is governed by a set of community values that foster honesty, respect for others, and accountability for one's actions. HBS considers these values essential for a safe and productive learning environment for all.`,
    },
    {
      question: "Letter of Reference or Nominating Statement",
      answer: `Specific programs also require a letter of reference from a senior executive within the applicant's organization, a board member of the applicant's company, or a Harvard Business School graduate who is familiar with the applicant's role and responsibilities.`,
    },
    {
      question: "Payment, Cancellation, and Deferral",
      answer: `The program fee covers tuition and program materials. For in-person and blended programs, the fee also includes accommodations and most meals. Cancellation or deferral requests must meet specific guidelines. For full details, review the program terms.`,
    },
    {
      question: "Visa Guidance for International Applicants",
      answer: `Most participants who are not U.S. citizens or residents will need a non-immigrant visa to attend programs in the United States. For more information about visa and passport requirements, visit the respective official websites for each country.`,
    },
    {
      question: "Team Attendance",
      answer: `Many programs are appropriate for individuals as well as teams of executives from the same organization. Team participation enhances your ability to develop business goals as a group, create strategies for implementing change, and transfer knowledge across the organization.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleADF = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Admission Quick Facts
        </h2>
        <div className="space-y-6">
          {adfs.map((adf, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <button
                className="w-full flex items-center justify-between text-left text-lg font-medium text-gray-800"
                onClick={() => toggleADF(index)}
              >
                {adf.question}
                <motion.div
                  initial={false}
                  animate={{
                    rotate: openIndex === index ? 45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-indigo-600 text-2xl font-bold"
                >
                  {openIndex === index ? "-" : "+"}
                </motion.div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-600 text-base overflow-hidden"
                >
                  {adf.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Application Submission Confirmation Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">
            Application Submission Confirmation
          </h2>
          <p className="text-lg italic text-gray-700 mb-4">
            All applications will be acknowledged via email. All application
            information is strictly confidential. In the unlikely event that
            you do not receive an email acknowledgment, please contact the
            Admissions Committee:
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email: </span>
            <a
              href="mailto:exed_admissions@hbs.edu"
              className="text-indigo-600 underline"
            >
              exed_admissions@tsi.co.tz
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone: </span>
            +255 778 678 809
          </p>
          <p className="text-lg italic text-gray-700 mt-6">
            In accordance with Tanzania School of Investment policy, Tanzania
            School of Investment does not discriminate against any person on the basis of
            race, color, sex or sexual orientation, gender identity, religion,
            age, national or ethnic origin, political beliefs, veteran status,
            or disability in admission to, access to, treatment in, or
            employment in its programs and activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionQuickFacts;
