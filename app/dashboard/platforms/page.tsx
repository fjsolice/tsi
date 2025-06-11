/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { supabase } from "../../lib/supabase"; // Adjusted path for dashboard folder

const PlatformsPage = () => {
  const [username, setUsername] = useState("Loading...");
  const [tsiReferral] = useState("?referral=TSI");

  const getDeviceDownloadLink = (baseUrl: string) => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/windows/.test(userAgent)) return `${baseUrl}/windows${tsiReferral}`;
    if (/macintosh|mac os x/.test(userAgent)) return `${baseUrl}/mac${tsiReferral}`;
    if (/iphone|ipad|ipod|android/.test(userAgent)) return `${baseUrl}/mobile${tsiReferral}`;
    return `${baseUrl}/default${tsiReferral}`; // Fallback
  };

  const platforms = [
    {
      name: "MetaTrader 4 (MT4)",
      description:
        "MetaTrader 4 is the industry standard for forex trading, offering a user-friendly interface, customizable charts, and support for automated trading with Expert Advisors (EAs). Ideal for beginners and experienced traders alike.",
      downloadLink: getDeviceDownloadLink("https://www.metatrader4.com/en/download"),
    },
    {
      name: "MetaTrader 5 (MT5)",
      description:
        "MetaTrader 5 is a multi-asset platform with advanced charting tools, more timeframes, and support for forex, stocks, and cryptocurrencies. Perfect for traders seeking versatility and algorithmic trading capabilities.",
      downloadLink: getDeviceDownloadLink("https://www.metatrader5.com/en/download"),
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
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
        setUsername("Guest");
      } else {
        setUsername(userData.username || "Guest");
      }
    };

    fetchUserData();
  }, []);

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
              Platforms
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mt-2 font-medium">
              Last Updated: {new Date().toLocaleString("en-US", { timeZone: "Africa/Nairobi", dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
          <div className="text-gray-800 text-lg sm:text-xl font-semibold mt-4 sm:mt-0">
            {username}
          </div>
        </div>

        {/* Platforms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-indigo-200/50 transform hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h2>
              <p className="text-gray-600 mb-4">{platform.description}</p>
              <a
                href={platform.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-teal-600 focus:outline-none transition-all duration-300"
              >
                <FaDownload className="mr-2" />
                Download {platform.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Animations */}
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

export default PlatformsPage;