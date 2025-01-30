import React from "react";
import { 
  FaUsers, FaShieldAlt, FaDollarSign, FaHandshake, 
  FaQuestionCircle, FaRocket, FaChartLine 
} from "react-icons/fa";
import PartnersFooter from "@/app/become-partners-components/partnersFooter";
import PartnersNavigationHeader from "@/app/become-partners-components/PartnersNavigationHeader";

const SocialCompetitors: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <PartnersNavigationHeader />

      {/* Hero Section */}
      <section className="bg-white py-32 text-center text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight tracking-wide animate-fade-in">
            Compete and Thrive with <span className="text-yellow-400">Social Competitors</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
            Compete against top traders and leverage social learning to boost your trading skills.
          </p>
          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold py-4 px-12 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
            Start Competing
          </button>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-16 px-8 lg:px-16 text-white rounded-t-3xl rounded-b-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose <span className="text-yellow-400">Social Competitors?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[  
            { icon: <FaChartLine className="text-yellow-400 text-6xl" />, title: "Competitive Environment", desc: "Challenge top traders and improve your skills." },
            { icon: <FaUsers className="text-green-400 text-6xl" />, title: "Community Interaction", desc: "Learn from peers, share strategies, and grow together." },
            { icon: <FaShieldAlt className="text-indigo-400 text-6xl" />, title: "Fair & Transparent", desc: "Compete in a safe, transparent environment where everyone has a chance." }
          ].map((benefit, index) => (
            <div key={index} className="text-center bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform ease-in-out">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-gray-300">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-16 px-8 lg:px-16 text-white rounded-t-3xl rounded-b-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">How <span className="text-indigo-500">Social Competitors</span> Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[  
            { icon: <FaRocket className="text-blue-400 text-6xl" />, title: "Sign Up", desc: "Create an account and get access to social competitions." },
            { icon: <FaHandshake className="text-red-400 text-6xl" />, title: "Join a Competition", desc: "Join a competition to test your skills against others." },
            { icon: <FaDollarSign className="text-yellow-400 text-6xl" />, title: "Earn Rewards", desc: "Win prizes and rewards as you rank higher in competitions." }
          ].map((step, index) => (
            <div key={index} className="text-center bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform ease-in-out">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-20 px-6 lg:px-16 text-white rounded-t-3xl rounded-b-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 italic">“The social competition platform helped me learn new strategies and improve my trading!”</p>
          <p className="mt-4 font-bold">- Jamie L., Verified User</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-20 px-6 lg:px-16 text-white rounded-t-3xl rounded-b-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked <span className="text-indigo-500">Questions</span></h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[  
            { question: "Is it free to participate?", answer: "Yes, signing up and joining competitions is free." },
            { question: "How are the winners selected?", answer: "Winners are ranked based on the performance in the competition, with rewards for top traders." },
            { question: "Can I withdraw my rewards anytime?", answer: "Yes, once you win rewards, you can withdraw them at any time." }
          ].map((faq, index) => (
            <details key={index} className="bg-gray-900 p-6 rounded-2xl">
              <summary className="flex items-center justify-between cursor-pointer text-lg font-bold">
                <span>{faq.question}</span>
                <FaQuestionCircle className="text-indigo-400 text-xl" />
              </summary>
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-bold">Start Competing in <span className="text-indigo-500">Social Competitions</span> Today</h2>
        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <PartnersFooter />
    </div>
  );
};

export default SocialCompetitors;
