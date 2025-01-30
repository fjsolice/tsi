"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/app/ui-components/footer";
import { FaGoogle, FaApple } from "react-icons/fa";

const Login = () => {
  const [role, setRole] = useState<"student" | "investor">("student");

  const handleRoleChange = (selectedRole: "student" | "investor") => {
    setRole(selectedRole);
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
          {/* Role Selection */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => handleRoleChange("student")}
              className={`px-4 py-2 rounded-l-lg font-medium ${
                role === "student"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              aria-pressed={role === "student"}
            >
              Student
            </button>
            <button
              onClick={() => handleRoleChange("investor")}
              className={`px-4 py-2 rounded-r-lg font-medium ${
                role === "investor"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              aria-pressed={role === "investor"}
            >
              Investor
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {["email", "password"].map((field) => (
              <div key={field} className="flex flex-col">
                <label
                  htmlFor={field}
                  className="text-sm font-medium capitalize"
                >
                  {field}
                </label>
                <input
                  id={field}
                  type={field === "password" ? "password" : "text"}
                  className="mt-1 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder={`Enter your ${field}`}
                />
              </div>
            ))}

            <div className="flex justify-between items-center text-sm">
              <a
                href="#"
                className="text-indigo-600 hover:underline focus:underline"
              >
                Forgot password?
              </a>
              <a
                href="/signup"
                className="text-indigo-600 hover:underline focus:underline"
              >
                Don’t have an account? Sign Up
              </a>
            </div>

            {/* Social Login */}
            <div className="flex justify-center space-x-4 my-4">
              {[
                { icon: <FaGoogle />, text: "Google" },
                { icon: <FaApple />, text: "Apple" },
              ].map(({ icon, text }) => (
                <button
                  key={text}
                  className="flex items-center px-4 py-2 border rounded-lg shadow-md hover:shadow-lg focus:ring-2 focus:ring-indigo-500"
                >
                  {icon}
                  <span className="ml-2 text-sm">{`Sign in with ${text}`}</span>
                </button>
              ))}
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg w-full font-medium hover:bg-indigo-700 focus:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
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
