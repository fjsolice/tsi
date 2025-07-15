/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

export default function LearningTracks() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">
          Learning Tracks at TSI
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Tailored pathways to smart investing with expert guidance for those short on time.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Learning Tracks?</h2>
          <p className="text-gray-600">
            TSI’s Learning Tracks are customized educational journeys designed for individuals who want to invest wisely without dedicating extensive time to study. Our expert-led programs provide tailored portfolio structuring solutions, leveraging data-driven strategies to optimize returns and minimize risks, perfect for busy professionals and novice investors alike.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Receive personalized investment advice from industry experts.</li>
            <li>Learn to build and manage a diversified portfolio efficiently.</li>
            <li>Access pre-designed tracks for various risk appetites.</li>
            <li>Save time while achieving long-term financial growth.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Tracks</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Conservative Track:</strong> Focus on stability and low risk.</li>
            <li><strong>Balanced Track:</strong> Mix of growth and security.</li>
            <li><strong>Aggressive Track:</strong> High-growth opportunities.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials</h2>
          <blockquote className="text-gray-600 italic border-l-4 border-indigo-500 pl-4">
            "The Learning Track saved me hours and built a portfolio that’s outperforming my expectations!" – Ahmed Khan, TSI Client
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Start Your Journey</h2>
          <p className="text-gray-600 mb-4">
            Discover the right track for you. Schedule a consultation with our experts today.
          </p>
          <a
            href="/consultation"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Schedule Now
          </a>
        </section>
      </div>
    </div>
  );
}