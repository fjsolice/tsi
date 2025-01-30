import React from "react";
import { FaUserFriends, FaGift, FaMoneyBillWave, FaTrophy, FaUsers, FaChartLine, FaRocket } from "react-icons/fa";
import PartnersFooter from "@/app/become-partners-components/partnersFooter";
import PartnersNavigationHeader from "@/app/become-partners-components/PartnersNavigationHeader";

const ReferAFriend: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <PartnersNavigationHeader />

      {/* Hero Section */}
      <section className="relative py-32 text-center bg-gray-100 text-gray-900 rounded-b-3xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold">
            Invite Your Friends & <br />
            <span className="text-indigo-600">Earn Exclusive Rewards</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Share the benefits of TSI with your friends and unlock massive rewards. Earn commissions, bonuses, and extra perks!
          </p>
          <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-lg font-semibold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Get My Referral Link
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-16 px-8 lg:px-16 text-white rounded-t-3xl rounded-b-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">How <span className="text-yellow-400">It Works</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <FaUserFriends className="text-indigo-400 text-6xl" />, title: "Invite Friends", desc: "Share your unique referral link with friends." },
            { icon: <FaGift className="text-blue-400 text-6xl" />, title: "They Sign Up", desc: "Your friends join TSI and make their first trade." },
            { icon: <FaMoneyBillWave className="text-green-400 text-6xl" />, title: "You Earn Rewards", desc: "Receive commissions and exclusive bonuses." }
          ].map((step, index) => (
            <div key={index} className="text-center bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Sections with the Same Styling */}
      {[
        { title: "Why Refer Friends?", benefits: [
          { icon: <FaTrophy className="text-yellow-400 text-6xl" />, title: "Exclusive Rewards", desc: "Top referrers get cash bonuses and perks." },
          { icon: <FaUsers className="text-purple-400 text-6xl" />, title: "Community Growth", desc: "Be part of a growing financial network." },
          { icon: <FaChartLine className="text-green-400 text-6xl" />, title: "Passive Income", desc: "Earn commissions for every referral." },
          { icon: <FaRocket className="text-red-400 text-6xl" />, title: "Unlimited Potential", desc: "The more you refer, the more you earn." }
        ]},
        { title: "Top Referrers", leaderboard: [
          { name: "John D.", referrals: "🏆 150 Referrals" },
          { name: "Emily R.", referrals: "🎉 120 Referrals" },
          { name: "Michael S.", referrals: "🔥 95 Referrals" }
        ]}
      ].map((section, index) => (
        <section key={index} className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-800 py-16 px-8 lg:px-16 text-white rounded-t-3xl rounded-b-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">{section.title}</h2>
          {section.benefits && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {section.benefits.map((benefit, i) => (
                <div key={i} className="text-center bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>
          )}
          {section.leaderboard && (
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <ul className="text-lg text-gray-300">
                {section.leaderboard.map((referrer, i) => (
                  <li key={i} className="py-2 flex justify-between">
                    <span className="font-bold text-white">{referrer.name}</span>
                    <span className="text-green-400">{referrer.referrals}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}

      {/* Footer */}
      <PartnersFooter />
    </div>
  );
};

export default ReferAFriend;