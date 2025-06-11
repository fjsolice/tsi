/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase"; // Correct path for app/lib/supabase.js

const DashboardPage = () => {
  const [username, setUsername] = useState("Loading...");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !sessionData?.session) {
        console.error("No active session:", sessionError);
        return;
      }

      const userId = sessionData.session.user.id;
      const { data, error } = await supabase
        .from("users")
        .select("username")
        .eq("id", userId)
        .single();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUsername(data.username);
      }

      // Fetch recent activities
      const { data: transactionData, error: transactionError } = await supabase
        .from("transactions")
        .select("created_at, type, status") // Adjusted to likely column names
        .order("created_at", { ascending: false })
        .limit(3);
      if (transactionError) {
        console.error("Error fetching activities:", transactionError.message || JSON.stringify(transactionError) || "Unknown error");
      } else {
        setActivities(transactionData.map((t) => ({
          date: new Date(t.created_at).toLocaleString(),
          description: t.type || "Unknown Transaction",
          status: t.status || "Unknown",
        })));
      }
    };

    fetchUserData();
  }, []);

  const handleCreateAccount = (type: string) => {
    console.log(`Creating ${type} account...`);
    // Add API call or redirect to account creation form
  };

  const handleDeposit = () => {
    console.log("Initiating deposit...");
    // Add deposit logic
  };

  const handleTransfer = () => {
    console.log("Initiating transfer...");
    // Add transfer logic
  };

  const handleWithdraw = () => {
    console.log("Initiating withdrawal...");
    // Add withdrawal logic
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">
              Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Last Updated: {new Date().toLocaleString("en-US", { timeZone: "Africa/Nairobi", dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
          <div className="text-gray-600 text-base sm:text-xl font-semibold mt-2 sm:mt-0">
            {username}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-700">Total Balance</h3>
            <p className="text-sm sm:text-lg font-bold text-indigo-600 mt-1">0.00 USD</p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-700">Total Credit</h3>
            <p className="text-sm sm:text-lg font-bold text-indigo-600 mt-1">0.00 USD</p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-700">Total Equity</h3>
            <p className="text-sm sm:text-lg font-bold text-indigo-600 mt-1">0.00 USD</p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-700">Total Deposits</h3>
            <p className="text-sm sm:text-lg font-bold text-indigo-600 mt-1">0.00 USD</p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-700">Total Withdrawals</h3>
            <p className="text-sm sm:text-lg font-bold text-indigo-600 mt-1">0.00 USD</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4 sm:space-y-6">
          {/* Recent Activity */}
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800">Recent Activity</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-gray-600">
                <tbody>
                  {activities.length > 0 ? (
                    activities.map((activity, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="p-2 sm:p-3">{activity.date}</td>
                        <td className="p-2 sm:p-3">{activity.description}</td>
                        <td className="p-2 sm:p-3 text-right">
                          <span
                            className={`mr-4 ${
                              activity.status === "Accepted"
                                ? "text-green-600"
                                : activity.status === "Pending"
                                ? "text-yellow-600"
                                : "text-teal-600"
                            }`}
                          >
                            {activity.status}
                          </span>
                          <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-xs sm:text-sm text-indigo-600 hover:text-teal-700 focus:outline-none"
                          >
                            View More
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-2 sm:p-3 text-center text-gray-500">
                        No recent activities
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal for Recent Activities */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md sm:max-w-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    All Recent Activities
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    ✕
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <table className="w-full text-xs sm:text-sm text-gray-600">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 sm:p-3 text-left">Date</th>
                        <th className="p-2 sm:p-3 text-left">Description</th>
                        <th className="p-2 sm:p-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activities.map((activity, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="p-2 sm:p-3">{activity.date}</td>
                          <td className="p-2 sm:p-3">{activity.description}</td>
                          <td
                            className={`p-2 sm:p-3 text-right ${
                              activity.status === "Accepted"
                                ? "text-green-600"
                                : activity.status === "Pending"
                                ? "text-yellow-600"
                                : "text-teal-600"
                            }`}
                          >
                            {activity.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Live Accounts */}
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800">Live Accounts</h2>
              <button
                onClick={() => handleCreateAccount("Live")}
                className="text-xs sm:text-sm text-indigo-600 hover:text-teal-700 focus:outline-none"
              >
                + Create Account
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              How can you trade real accounts? Complete your profile and make your first deposit.
            </p>
          </div>

          {/* Demo Accounts */}
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800">Pilot Accounts</h2>
              <button
                onClick={() => handleCreateAccount("Demo")}
                className="text-xs sm:text-sm text-indigo-600 hover:text-teal-700 focus:outline-none"
              >
                + Create Account
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Practice and master your trading skills.
            </p>
          </div>

          {/* Wallet Accounts */}
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800">Wallet Accounts</h2>
              <button
                onClick={() => handleCreateAccount("Wallet")}
                className="text-xs sm:text-sm text-indigo-600 hover:text-teal-700 focus:outline-none"
              >
                + Create Account
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm">
              <div className="mb-3 sm:mb-0">
                <p className="font-semibold text-gray-700">USD W-2020638-001</p>
                <p className="text-gray-500 mt-1">Balance: 0.000 USD</p>
              </div>
              <div className="flex space-x-2">
                <Link href="/dashboard/deposit">
                  <button
                    onClick={handleDeposit}
                    className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none transition-colors"
                  >
                    Deposit
                  </button>
                </Link>
                <Link href="/dashboard/transfer">
                  <button
                    onClick={handleTransfer}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none transition-colors"
                  >
                    Transfer
                  </button>
                </Link>
                <Link href="/dashboard/withdraw">
                  <button
                    onClick={handleWithdraw}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none transition-colors"
                  >
                    Withdraw
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;