/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Footer from "@/app/ui-components/footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("Login response:", { data, error }); // Debug log

      if (error) {
        if (error.message.includes("Email not confirmed")) {
          // Attempt to re-signup to ensure account is active without confirmation
          const { error: signupError } = await supabase.auth.signUp({
            email,
            password,
            options: {
              // Omit emailRedirectTo to disable email confirmation redirection
            },
          });
          if (signupError) throw signupError;
          setMessage("Account re-activated. Please log in again.");
        } else {
          throw error;
        }
      }

      // Verify session and redirect to dashboard on success
      if (data.session) {
        setMessage("Login successful! Redirecting to dashboard...");
        setTimeout(() => router.push("/dashboard"), 1000); // Redirect after 1 second
        setEmail("");
        setPassword("");
      } else {
        throw new Error("Login successful but no session created. Please try again.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred during login";
      setMessage(errorMessage);
      console.error("Error details:", error instanceof Error ? error : { error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-black text-white py-16 text-center">
        <motion.div
          className="text-4xl lg:text-6xl font-bold tracking-wider"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Tanzania School of Investments
        </motion.div>
        <motion.h1
          className="text-2xl lg:text-4xl font-bold mt-4"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Access My Account
        </motion.h1>
      </header>

      {/* Login Description */}
      <section className="px-8 md:px-20 lg:px-40 py-10 text-center">
        <p className="text-lg lg:text-xl text-gray-700 mb-8">
          Please log in to complete an application you have already started or
          check the status of a previously submitted application. If you would
          like to start a new application, please select a program and click
          Apply from the program page.
        </p>
      </section>

      {/* Login Form */}
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
              <a href="/reset-password" className="text-indigo-600 hover:underline focus:underline">
                Forgot password?
              </a>
              <a href="/signup" className="text-indigo-600 hover:underline focus:underline">
                Don’t have an account? Sign Up
              </a>
            </div>

            <motion.button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg w-full font-medium hover:bg-indigo-700 focus:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </motion.button>
          </form>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;