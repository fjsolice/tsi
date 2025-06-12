/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { FaCopy, FaShareAlt } from "react-icons/fa";
import { supabase } from "../../lib/supabase"; // Adjusted path for refer-a-friend folder
import Footer from "@/app/ui-components/footer";

const ReferAFriendPage = () => {
  const [username, setUsername] = useState("Loading...");
  const [referralLink, setReferralLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [registrations, setRegistrations] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !sessionData?.session) {
        console.error("No active session:", sessionError);
        setUsername("Guest");
        return;
      }

      const userId = sessionData.session.user.id;

      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("username")
        .eq("id", userId)
        .single();

      if (userError) {
        console.error("Error fetching user:", userError);
      } else {
        setUsername(userData.username || "Guest");
      }

      const { data: referralData, error: referralError } = await supabase
        .from("referrals")
        .select("referral_link")
        .eq("user_id", userId)
        .single();

      if (referralError || !referralData) {
        const fallbackCode = userId.slice(0, 8);
        const newLink = `https://tsi.co.tz/signup?code=${fallbackCode}`;
        const { error } = await supabase
          .from("referrals")
          .insert({ user_id: userId, referral_link: newLink });

        if (error) console.error("Error creating referral:", error);
        else setReferralLink(newLink);
      } else {
        const existingLink = referralData.referral_link || "";
        const updatedLink = existingLink.replace(/https:\/\/tsi\.co\.tz\/refer\?code=/, "https://tsi.co.tz/signup?code=");
        setReferralLink(updatedLink || `https://tsi.co.tz/signup?code=${userId.slice(0, 8)}`);
      }

      const { data: referralStats, error: statsError } = await supabase
        .from("referral_stats")
        .select("registrations, investments, total_invested")
        .eq("user_id", userId)
        .single();

      if (statsError || !referralStats) {
        await supabase
          .from("referral_stats")
          .insert({ user_id: userId, registrations: 0, investments: 0, total_invested: 0 });

        setRegistrations(0);
        setInvestments(0);
        setTotalInvested(0);
      } else {
        setRegistrations(referralStats.registrations || 0);
        setInvestments(referralStats.investments || 0);
        setTotalInvested(referralStats.total_invested || 0);
      }
    };

    fetchData(); // ✅ call the async function inside useEffect

    const subscription = supabase
      .channel("referrals")
      .on("postgres_changes", { event: "*", schema: "public", table: "referrals" }, () => {
        fetchData(); // Re-fetch on DB changes
      })
      .subscribe();

    // ✅ Return a sync cleanup function
    return () => {
      subscription.unsubscribe();
    };
  }, []);


  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-teal-50 to-purple-100"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(45, 212, 191, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%), url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')",
      }}
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600 leading-tight animate-fade-in">
              Refer a Friend
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mt-2 font-medium">
              Last Updated: {new Date().toLocaleString("en-US", { timeZone: "Africa/Nairobi", dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
          <div className="text-gray-800 text-lg sm:text-xl font-semibold mt-4 sm:mt-0">
            {username}
          </div>
        </div>

        {/* Referral Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-12 border border-indigo-200/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Your Referral Link</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              value={referralLink || "Generating..."}
              readOnly
              className="flex-1 p-3 border border-indigo-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-md text-gray-800"
            />
            <button
              onClick={handleCopy}
              disabled={!referralLink}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-teal-600 focus:outline-none transform hover:scale-105 transition-all duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaCopy className="mr-2" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-gray-600 mt-4">
            Share this link with friends to invite them to TSI. Both you and your friend will get 10% off your first transaction!
          </p>
        </div>

        {/* Referral Statistics */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-indigo-200/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Your Referral Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-700">Registrations</h3>
              <p className="text-2xl font-bold text-indigo-900">{registrations}</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-700">Investments</h3>
              <p className="text-2xl font-bold text-teal-900">{investments}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700">Total Invested</h3>
              <p className="text-2xl font-bold text-purple-900">${totalInvested.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ReferAFriendPage;