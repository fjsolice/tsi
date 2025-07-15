/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

export default function TopicFocusedPrograms() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">
          Topic-Focused Programs at TSI
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Master specific skills and strategies with our targeted educational programs designed for capital market success.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Topic-Focused Programs?</h2>
          <p className="text-gray-600">
            TSI’s Topic-Focused Programs offer structured, in-depth learning experiences tailored to key areas of capital markets, such as forex trading, portfolio management, and market analysis. These programs are designed for individuals and professionals seeking to enhance their expertise, providing practical tools and strategies to become confident traders and investors.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Gain specialized knowledge in high-demand market sectors.</li>
            <li>Develop practical skills through case studies and simulations.</li>
            <li>Network with industry experts and peers.</li>
            <li>Boost your career with certifications recognized globally.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Offerings</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Forex Mastery:</strong> Learn advanced trading techniques.</li>
            <li><strong>Portfolio Optimization:</strong> Strategies for risk management.</li>
            <li><strong>Market Analysis:</strong> Interpret trends and data effectively.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials</h2>
          <blockquote className="text-gray-600 italic border-l-4 border-indigo-500 pl-4">
            "The Topic-Focused Program on forex trading gave me the edge I needed to succeed. The practical insights were invaluable!" – John Smith, TSI Graduate
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enroll Today</h2>
          <p className="text-gray-600 mb-4">
            Take the next step in your learning journey. Explore our programs and sign up now.
          </p>
          <a
            href="/enroll"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Enroll Now
          </a>
        </section>
      </div>
    </div>
  );
}