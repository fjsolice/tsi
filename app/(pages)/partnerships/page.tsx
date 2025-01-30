import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaMoneyBillWave,
  FaChartLine,
  FaRocket,
  FaGift,
  FaQuestionCircle,
} from "react-icons/fa";
import PartnersFooter from "@/app/become-partners-components/partnersFooter";
import PartnersNavigationHeader from "@/app/become-partners-components/PartnersNavigationHeader";

const Partnerships: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <PartnersNavigationHeader />

      {/* Hero Section */}
      <section className="py-32 text-center bg-gradient-to-r from-indigo-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Join Our <span className="text-yellow-400">Exclusive Partnerships</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Partner with TSI and unlock a world of opportunities, high commissions, and long-term success.
          </p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-lg font-semibold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Become a Partner
          </button>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Why Partner With <span className="text-indigo-600">TSI?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[  
            { icon: <FaHandshake className="text-yellow-500 text-6xl" />, title: "Trusted Partnership", desc: "Work with a globally recognized brand and gain credibility." },
            { icon: <FaMoneyBillWave className="text-green-500 text-6xl" />, title: "High Commissions", desc: "Enjoy some of the best commission structures in the industry." },
            { icon: <FaChartLine className="text-indigo-500 text-6xl" />, title: "Performance Tracking", desc: "Real-time statistics and analytics to track your success." }
          ].map((benefit, index) => (
            <div key={index} className="text-center bg-gray-100 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 lg:px-16 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">How <span className="text-yellow-400">It Works</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[  
            { icon: <FaUsers className="text-blue-400 text-6xl" />, title: "Sign Up", desc: "Apply to become a partner and get approved." },
            { icon: <FaRocket className="text-red-400 text-6xl" />, title: "Promote TSI", desc: "Use our marketing materials to spread the word." },
            { icon: <FaGift className="text-yellow-400 text-6xl" />, title: "Earn Rewards", desc: "Get commissions for every successful referral." }
          ].map((step, index) => (
            <div key={index} className="text-center bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked <span className="text-indigo-600">Questions</span></h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[  
            { question: "How do I apply?", answer: "Simply click the 'Become a Partner' button and complete the application." },
            { question: "When do I get paid?", answer: "Commission payouts are processed every month." },
            { question: "What support do I get?", answer: "You will have access to a dedicated Partner Manager and promotional materials." }
          ].map((faq, index) => (
            <details key={index} className="bg-gray-100 p-6 rounded-2xl shadow-md">
              <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-900">
                <span>{faq.question}</span>
                <FaQuestionCircle className="text-indigo-500 text-xl" />
              </summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-16 text-center bg-indigo-600 text-white">
        <h2 className="text-4xl font-bold">Start Your <span className="text-yellow-400">Partnership Today</span></h2>
        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-lg font-semibold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Become a Partner
        </button>
      </section>

      {/* Footer */}
      <PartnersFooter />
    </div>
  );
};

export default Partnerships;
