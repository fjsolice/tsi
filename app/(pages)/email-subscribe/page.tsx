"use client";

import { motion } from "framer-motion";
import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";

const EmailSubscribe = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            {/* Header Section */}
            <header className="bg-black text-white py-20 px-8 flex items-center justify-start">
                <motion.h1
                    className="text-7xl font-extrabold tracking-tight"
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Email Subscribe
                </motion.h1>
            </header>

            {/* Content Section */}
            <main className="flex-1 px-8 md:px-20 lg:px-40 py-16 space-y-16">
                {/* Subscription Form */}
                <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
                    <motion.p
                        className="text-center text-xl text-gray-700 mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Receive the latest TSI Executive Education news, announcements, and
                        thought leadership right in your inbox. (Required fields are marked with *)
                    </motion.p>

                    <motion.form
                        className="space-y-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* First Name Field */}
                        <div>
                            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="first-name"
                                type="text"
                                required
                                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your first name"
                            />
                        </div>

                        {/* Last Name Field */}
                        <div>
                            <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                required
                                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your last name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="mt-6 w-full py-3 px-6 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                    </motion.form>

                    {/* Disclaimer */}
                    <motion.p
                        className="mt-4 text-center text-sm text-gray-500"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        You’ll be able to unsubscribe at any time.{" "}
                        <a href="/privacy-notice" className="text-indigo-600 hover:underline">
                            View our privacy notice.
                        </a>
                    </motion.p>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EmailSubscribe;
