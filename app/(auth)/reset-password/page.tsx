/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    if (!token) {
      setMessage("Invalid or missing reset token.");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      setMessage("Password reset successfully. Redirecting to login...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (error) {
      setMessage("Error resetting password: " + (error as Error).message || "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-teal-50 to-purple-100 flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(45, 212, 191, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%), url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')",
      }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Reset Password</h1>
        {message && (
          <p className={`mb-4 text-center ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              minLength={8}
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              minLength={8}
              placeholder="Confirm new password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg hover:from-indigo-600 hover:to-teal-600 focus:outline-none transition-all duration-300 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;