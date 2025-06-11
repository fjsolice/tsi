/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { supabase } from "../../lib/supabase";

// Define types for Supabase data
interface User {
  id: string;
  username: string; // Matches the users table as per PortfolioPage
}

interface Portfolio {
  id: string;
  user_id: string;
  total_investments: number;
  total_gains: number;
  total_losses: number;
  updated_at: string;
}

interface Transaction {
  id: string;
  portfolio_id: string;
  date: string;
  type: "Buy" | "Sell";
  asset: string;
  amount: number;
  price: number;
  created_at: string;
}

interface Report {
  id: string;
  title: string;
  content: string;
  created_by: string;
  created_at: string;
  start_date: string;
  end_date: string;
}

interface Session {
  session: {
    user: {
      id: string;
    };
  } | null;
}

const ReportsPage = () => {
  const [portfolioData, setPortfolioData] = useState<{
    totalInvestments: number;
    totalGains: number;
    totalLosses: number;
    transactions: Transaction[];
  }>({
    totalInvestments: 0.0,
    totalGains: 0.0,
    totalLosses: 0.0,
    transactions: [],
  });
  const [reports, setReports] = useState<Report[]>([]);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-05-16");
  const [username, setUsername] = useState<string>("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !sessionData?.session) {
        console.error("No active session:", sessionError?.message);
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
        console.error("Error fetching user:", userError.message || JSON.stringify(userError));
        setUsername("Unknown User");
      } else {
        setUsername(userData.username);
      }

      const { data: portfolio, error: portfolioError } = await supabase
        .from("portfolios")
        .select("total_investments, total_gains, total_losses, updated_at")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false }) // Get the latest portfolio
        .maybeSingle() as { data: Portfolio | null; error: any };
      if (portfolioError) {
        console.error("Error fetching portfolio:", portfolioError.message);
        setPortfolioData({ totalInvestments: 0.0, totalGains: 0.0, totalLosses: 0.0, transactions: [] });
      } else if (portfolio) {
        const { data: transactions, error: transactionsError } = await supabase
          .from("transactions")
          .select("*")
          .eq("portfolio_id", portfolio.id)
          .order("date", { ascending: true }) as { data: Transaction[] | null; error: any };
        if (transactionsError) console.error("Error fetching transactions:", transactionsError.message);
        else {
          setPortfolioData({
            totalInvestments: portfolio.total_investments,
            totalGains: portfolio.total_gains,
            totalLosses: portfolio.total_losses,
            transactions: transactions || [],
          });
        }
      } else {
        console.warn("No portfolio found for user:", userId);
        setPortfolioData({ totalInvestments: 0.0, totalGains: 0.0, totalLosses: 0.0, transactions: [] });
      }

      const { data: reportData, error: reportError } = await supabase
        .from("reports")
        .select("*")
        .gte("start_date", startDate)
        .lte("end_date", endDate) as { data: Report[] | null; error: any };
      if (reportError) console.error("Error fetching reports:", reportError.message);
      else setReports(reportData || []);
    };
    fetchData();
  }, [startDate, endDate]);

  const filteredTransactions = portfolioData.transactions.filter((transaction: Transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
  });

  const filteredGains = filteredTransactions
    .filter((t: Transaction) => t.type === "Sell")
    .reduce((sum: number, t: Transaction) => sum + (t.price > 0 ? t.amount * 0.1 : 0), 0);
  const filteredLosses = filteredTransactions
    .filter((t: Transaction) => t.type === "Sell")
    .reduce((sum: number, t: Transaction) => sum + (t.price < 0 ? -t.amount * 0.05 : 0), 0);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Portfolio Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Date Range: ${startDate} to ${endDate}`, 20, 30);
    doc.text(`Total Investments: $${portfolioData.totalInvestments.toFixed(2)}`, 20, 40);
    doc.text(`Filtered Gains: $${filteredGains.toFixed(2)}`, 20, 50);
    doc.text(`Filtered Losses: $${filteredLosses.toFixed(2)}`, 20, 60);

    let yPos = 70;
    if (reports.length > 0) {
      doc.setFontSize(14);
      doc.text("Admin Reports", 20, yPos);
      doc.setFontSize(10);
      yPos += 10;
      reports.forEach((report: Report) => {
        const text = `${report.title}: ${report.content}`;
        if (yPos > 280) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(text, 20, yPos);
        yPos += 10;
      });
      yPos += 10;
    }

    doc.setFontSize(14);
    doc.text("Transaction History", 20, yPos);
    doc.setFontSize(10);
    yPos += 10;
    filteredTransactions.forEach((transaction: Transaction) => {
      const text = `${transaction.date} | ${transaction.type} | ${transaction.asset} | $${transaction.amount.toFixed(2)} | $${transaction.price.toFixed(2)}`;
      if (yPos > 280) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(text, 20, yPos);
      yPos += 10;
    });

    doc.save(`Portfolio_Report_${startDate}_to_${endDate}.pdf`);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-teal-50 to-purple-100"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(45, 212, 191, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%), url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')",
      }}
    >
      <div className="p-6 sm:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600 leading-tight animate-fade-in">
              Reports
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mt-2 font-medium">
              Last Updated: {new Date().toLocaleString("en-US", { timeZone: "Africa/Nairobi", dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
          <div className="text-gray-800 text-lg sm:text-xl font-semibold mt-4 sm:mt-0">
            {username || "Unknown User"}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-12 border border-indigo-200/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Select Date Range</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-3 border border-indigo-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="p-3 border border-indigo-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-md"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-indigo-200/50 hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Investments</h3>
            <p className="text-3xl font-bold text-indigo-600">${portfolioData.totalInvestments.toFixed(2)}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-indigo-200/50 hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Filtered Gains</h3>
            <p className="text-3xl font-bold text-teal-600">${filteredGains.toFixed(2)}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-indigo-200/50 hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Filtered Losses</h3>
            <p className="text-3xl font-bold text-purple-600">${filteredLosses.toFixed(2)}</p>
          </div>
        </div>

        {reports.length > 0 && (
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-12 border border-indigo-200/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Admin Reports</h2>
            <div className="space-y-4">
              {reports.map((report: Report) => (
                <div key={report.id} className="p-4 bg-indigo-50/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">{report.title}</h3>
                  <p className="text-gray-700">{report.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-indigo-200/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Transaction History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-teal-100">
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Date</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Type</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Asset</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Amount</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction: Transaction) => (
                    <tr key={transaction.id} className="hover:bg-indigo-50/50 transition-colors duration-200">
                      <td className="p-3 border-b border-indigo-200">{transaction.date}</td>
                      <td className="p-3 border-b border-indigo-200">{transaction.type}</td>
                      <td className="p-3 border-b border-indigo-200">{transaction.asset}</td>
                      <td className="p-3 border-b border-indigo-200">${transaction.amount.toFixed(2)}</td>
                      <td className="p-3 border-b border-indigo-200">${transaction.price.toFixed(2)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-3 text-center text-gray-500">No transactions in this date range.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <button
            onClick={handleDownload}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-teal-600 focus:outline-none transform hover:scale-105 transition-all duration-300"
          >
            Download Report as PDF
          </button>
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

export default ReportsPage;