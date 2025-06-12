/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "../../lib/supabase"; // Adjusted path for auth folder
import Footer from "@/app/ui-components/footer";

const SignUpContent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("code");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      let referrerId: string | null = null;
      if (referralCode) {
        const { data: referrerData, error: referrerError } = await supabase
          .from("referrals")
          .select("user_id")
          .eq("referral_link", `https://tsi.co.tz/refer?code=${referralCode}`)
          .single();
        if (referrerError || !referrerData) {
          throw new Error("Invalid referral code.");
        }
        referrerId = referrerData.user_id;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username, referral_code: referralCode },
          // Omit emailRedirectTo to disable email confirmation redirection
        },
      });

      if (error) {
        throw new Error(error.message || `Supabase Auth Error: ${JSON.stringify(error)}`);
      }

      if (data.user) {
        const { error: insertError } = await supabase
          .from("users")
          .insert({ id: data.user.id, username, email, referral_code: referralCode });

        if (insertError) {
          throw new Error(insertError.message || `Insert Error: ${JSON.stringify(insertError)}`);
        }

        if (referrerId) {
          const { data: statsData } = await supabase
            .from("referral_stats")
            .select("registrations")
            .eq("user_id", referrerId)
            .single();
          const currentRegistrations = statsData?.registrations || 0;
          const { error: statsError } = await supabase
            .from("referral_stats")
            .update({ registrations: currentRegistrations + 1 })
            .eq("user_id", referrerId);
          if (statsError) {
            console.error("Error updating stats:", statsError);
          }
        }

        setMessage("Signup successful! Redirecting to dashboard...");
        setTimeout(() => router.push("/dashboard"), 1000); // Redirect after 1 second
        setUsername("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred during signup";
      setMessage(errorMessage);
      console.error("Error details:", error instanceof Error ? error : { error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (referralCode) {
      setMessage(`Registering with referral code: ${referralCode}`);
    }
  }, [referralCode]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-black text-white py-16 text-center">
        <motion.div
          className="text-6xl lg:text-8xl font-bold tracking-wider"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          TSI
        </motion.div>
        <motion.h1
          className="text-4xl lg:text-6xl font-bold mt-4"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Create My Account
        </motion.h1>
      </header>

      {/* Sign-Up Description */}
      <section className="px-8 md:px-20 lg:px-40 py-10 text-center">
        <p className="text-lg lg:text-xl text-gray-700 mb-8">
          Create an account to start your journey. Fill in the details to get started.
        </p>
      </section>

      {/* Sign-Up Form */}
      <main className="flex justify-center items-center flex-1 mb-20">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {message && (
            <p className={`text-center mb-4 ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-sm font-medium capitalize">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium capitalize">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium capitalize">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <a href="/login" className="text-indigo-600 hover:underline focus:underline">
                Already have an account? Log In
              </a>
            </div>

            <motion.button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg w-full font-medium hover:bg-indigo-700 focus:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </motion.button>
          </form>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const SignUp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpContent />
    </Suspense>
  );
};

export default SignUp;