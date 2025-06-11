/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

interface Invoice {
  id: string;
  user_id: string;
  type: "Withdrawal" | "Deposit" | "Transfer" | "Invoice" | "Receipt";
  amount: number;
  description: string;
  date: string;
  status: "Pending" | "Completed" | "Processed" | "Rejected";
  created_by: "user" | "admin";
}

const InvoicesPage = () => {
  const [username, setUsername] = useState("Loading...");
  const [formData, setFormData] = useState({
    type: "Withdrawal" as "Withdrawal" | "Deposit" | "Transfer",
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [userInvoices, setUserInvoices] = useState<Invoice[]>([]);
  const [tsiInvoices, setTsiInvoices] = useState<Invoice[]>([]);

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
        setUsername(userData.username);
      }

      // Fetch user-initiated invoices
      const { data: userInvoiceData, error: userInvoiceError } = await supabase
        .from("invoices")
        .select("*")
        .eq("user_id", userId)
        .eq("created_by", "user");
      if (userInvoiceError) console.error("Error fetching user invoices:", userInvoiceError);
      else setUserInvoices(userInvoiceData || []);

      // Fetch admin-initiated invoices
      const { data: tsiInvoiceData, error: tsiInvoiceError } = await supabase
        .from("invoices")
        .select("*")
        .eq("created_by", "admin");
      if (tsiInvoiceError) console.error("Error fetching TSI invoices:", tsiInvoiceError);
      else setTsiInvoices(tsiInvoiceData || []);
    };

    fetchData();

    // Subscribe to real-time updates
    const subscription = supabase
      .channel("invoices")
      .on("postgres_changes", { event: "*", schema: "public", table: "invoices" }, (payload) => {
        fetchData();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    const { type, amount, description, date } = formData;
    if (!type || !amount || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData?.session) return;

    const userId = sessionData.session.user.id;
    const { error } = await supabase.from("invoices").insert({
      user_id: userId,
      type,
      amount: parseFloat(amount),
      description,
      date,
      status: "Pending",
      created_by: "user",
    });
    if (error) console.error("Error creating invoice:", error);
    else {
      setFormData({
        type: "Withdrawal",
        amount: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  };

  const handleUpdateStatus = async (id: string, status: "Completed" | "Processed" | "Rejected") => {
    const { error } = await supabase
      .from("invoices")
      .update({ status })
      .eq("id", id)
      .eq("created_by", "admin"); // Admin-only update
    if (error) console.error("Error updating status:", error);
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
              Invoices
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mt-2 font-medium">
              Last Updated: {new Date().toLocaleString("en-US", { timeZone: "Africa/Nairobi", dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
          <div className="text-gray-800 text-lg sm:text-xl font-semibold mt-4 sm:mt-0">
            {username}
          </div>
        </div>

        {/* Create Invoice Form */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-12 border border-indigo-200/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Create Withdrawal Invoice to TSI</h2>
          <form onSubmit={handleCreateInvoice} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full p-3 border border-indigo-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-md"
              >
                <option value="Withdrawal">Withdrawal</option>
                <option value="Deposit">Deposit</option>
                <option value="Transfer">Transfer</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Amount ($)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full p-3 border border-indigo-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-md"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-indigo-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-md"
                placeholder="Enter description"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-3 border border-indigo-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-md"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-teal-600 focus:outline-none transform hover:scale-105 transition-all duration-300"
            >
              Send Withdrawal Request
            </button>
          </form>
        </div>

        {/* User Invoices */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-12 border border-indigo-200/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Your Withdrawal Requests to TSI</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-teal-100">
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Type</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Amount</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Description</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Date</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {userInvoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-indigo-50/50 transition-colors duration-200">
                    <td className="p-3 border-b border-indigo-200">{invoice.type}</td>
                    <td className="p-3 border-b border-indigo-200">${invoice.amount.toFixed(2)}</td>
                    <td className="p-3 border-b border-indigo-200">{invoice.description || "N/A"}</td>
                    <td className="p-3 border-b border-indigo-200">{invoice.date}</td>
                    <td className="p-3 border-b border-indigo-200">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          invoice.status === "Completed"
                            ? "bg-green-200 text-green-800"
                            : invoice.status === "Pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : invoice.status === "Processed"
                            ? "bg-blue-200 text-blue-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TSI Invoices/Receipts */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-indigo-200/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Invoices/Receipts from TSI</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-teal-100">
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Type</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Amount</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Description</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Date</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Status</th>
                  <th className="p-3 font-semibold text-gray-800 border-b border-indigo-200">Action</th>
                </tr>
              </thead>
              <tbody>
                {tsiInvoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-indigo-50/50 transition-colors duration-200">
                    <td className="p-3 border-b border-indigo-200">{invoice.type}</td>
                    <td className="p-3 border-b border-indigo-200">${invoice.amount.toFixed(2)}</td>
                    <td className="p-3 border-b border-indigo-200">{invoice.description || "N/A"}</td>
                    <td className="p-3 border-b border-indigo-200">{invoice.date}</td>
                    <td className="p-3 border-b border-indigo-200">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          invoice.status === "Completed"
                            ? "bg-green-200 text-green-800"
                            : invoice.status === "Pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : invoice.status === "Processed"
                            ? "bg-blue-200 text-blue-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="p-3 border-b border-indigo-200">
                      {invoice.status === "Pending" && (
                        <select
                          onChange={(e) => handleUpdateStatus(invoice.id, e.target.value as "Completed" | "Processed" | "Rejected")}
                          className="p-1 border border-indigo-200 rounded"
                          defaultValue=""
                        >
                          <option value="" disabled>Select Action</option>
                          <option value="Completed">Complete</option>
                          <option value="Processed">Process</option>
                          <option value="Rejected">Reject</option>
                        </select>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default InvoicesPage;