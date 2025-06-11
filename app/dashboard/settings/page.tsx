/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase"; // Adjusted path for dashboard folder
import Footer from "@/app/ui-components/footer";

const SettingsPage = () => {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const [memoryEnabled, setMemoryEnabled] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: session, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !session?.session) {
        setMessage("Please log in to view settings.");
        return;
      }

      const userId = session.session.user.id;
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("username, email")
        .eq("id", userId)
        .single();
      if (userError) {
        setMessage("Error fetching user data.");
        console.error("User data fetch error:", userError.message || userError);
      } else {
        setUser(session.session.user);
        setUsername(userData.username || "");
        setEmail(userData.email || "");
        const { data: referralData, error: referralError } = await supabase
          .from("referrals")
          .select("referral_link")
          .eq("user_id", userId)
          .single();
        if (referralError) {
          console.error("Referral data fetch error:", referralError.message || referralError);
          // Generate a fallback referral link pointing to signup page
          const fallbackCode = userId.slice(0, 8);
          const fallbackLink = `https://tsi.co.tz/signup?code=${fallbackCode}`;
          setReferralLink(fallbackLink);
        } else {
          // Ensure existing referral link points to signup page
          const existingLink = referralData?.referral_link || "";
          const updatedLink = existingLink.replace(/https:\/\/tsi\.co\.tz\/refer\?code=/, "https://tsi.co.tz/signup?code=");
          setReferralLink(updatedLink || `https://tsi.co.tz/signup?code=${userId.slice(0, 8)}`);
        }
      }

      // Check memory preference (simulated; replace with actual storage if needed)
      const memoryPref = localStorage.getItem("memoryEnabled");
      setMemoryEnabled(memoryPref ? JSON.parse(memoryPref) : true);
    };

    fetchUserData();

    const subscription = supabase
      .channel("user_settings")
      .on("postgres_changes", { event: "*", schema: "public", table: "users" }, fetchUserData)
      .subscribe();

    return () => subscription.unsubscribe();
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const { error } = await supabase
        .from("users")
        .update({ username, email })
        .eq("id", user?.id);
      if (error) throw error;

      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Error updating profile.");
      console.error("Profile update error:", (error as Error).message || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      setMessage("Password updated successfully!");
      setPassword("");
    } catch (error) {
      setMessage("Error updating password.");
      console.error("Password update error:", (error as Error).message || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleMemory = () => {
    const newValue = !memoryEnabled;
    setMemoryEnabled(newValue);
    localStorage.setItem("memoryEnabled", JSON.stringify(newValue));
    setMessage(`Memory ${newValue ? "enabled" : "disabled"}.`);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    setMessage(null);
    try {
      await supabase.auth.signOut();
      router.push("/auth/login");
    } catch (error) {
      setMessage("Error logging out.");
      console.error("Logout error:", (error as Error).message || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(referralLink);
    setMessage("Referral link copied to clipboard!");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-teal-50 to-indigo-100 flex items-center justify-center">
        <p className="text-red-600">{message || "Loading..."}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-teal-50 to-indigo-100">
      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
          {message && (
            <p className={`mb-4 ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}

          {/* Profile Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg hover:from-indigo-600 hover:to-teal-600 focus:outline-none transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update Profile"}
              </motion.button>
            </form>
          </section>

          {/* Password Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h2>
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg hover:from-indigo-600 hover:to-teal-600 focus:outline-none transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update Password"}
              </motion.button>
            </form>
          </section>

          {/* Referral Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral</h2>
            <div className="space-y-4">
              <p className="text-gray-600">Your referral link:</p>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={referralLink || "Generating..."}
                  readOnly
                  onClick={handleCopyReferral}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                />
                <button
                  onClick={handleCopyReferral}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg hover:from-indigo-600 hover:to-teal-600 focus:outline-none transition-all duration-300"
                >
                  Copy
                </button>
              </div>
            </div>
          </section>

          {/* Data Controls Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Controls</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Enable Memory</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={memoryEnabled}
                  onChange={handleToggleMemory}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
              </label>
              <p className="text-sm text-gray-500">
                Toggle to enable/disable conversation memory. Go to Data Controls in settings to manage further.
              </p>
            </div>
          </section>

          {/* Logout Section */}
          <section>
            <motion.button
              onClick={handleLogout}
              className="w-full py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 focus:outline-none transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? "Logging out..." : "Logout"}
            </motion.button>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default SettingsPage;