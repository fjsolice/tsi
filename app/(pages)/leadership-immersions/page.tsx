/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

export default function LeadershipImmersions() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">
          Leadership Immersions at TSI
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Dive deep into transformative leadership experiences designed to accelerate your growth and impact as a leader in the capital markets.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Leadership Immersions?</h2>
          <p className="text-gray-600">
            Leadership Immersions at the Tanzania School of Investments (TSI) are intensive, hands-on programs that equip emerging and established leaders with the skills to navigate complex business challenges. These multi-faceted learning experiences combine personalized coaching, peer collaboration, and real-world projects tailored to your unique leadership goals. Whether you're a frontline manager or an executive, our immersions fast-track your development, connecting you with a global network of peers and offering a pathway to alumni status.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Deepen your understanding of trends shaping capital markets and organizational strategy.</li>
            <li>Develop executive skills, global perspectives, and emotional intelligence through practical exercises.</li>
            <li>Engage in personalized projects addressing your specific business challenges.</li>
            <li>Build a high-performance mindset to drive innovation and deliver global value.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Structure</h2>
          <p className="text-gray-600 mb-4">
            Our immersions are structured to maximize impact, featuring:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Intensive Workshops:</strong> Interactive sessions with industry experts.</li>
            <li><strong>Personal Coaching:</strong> One-on-one guidance to refine your leadership style.</li>
            <li><strong>Peer Networks:</strong> Collaborate with leaders from diverse sectors.</li>
            <li><strong>Action Projects:</strong> Apply learning to real-world TSI initiatives.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials</h2>
          <blockquote className="text-gray-600 italic border-l-4 border-indigo-500 pl-4">
            "The Leadership Immersion transformed my approach to leadership. The hands-on projects and peer insights gave me the confidence to lead my team through uncertainty." – Jane Doe, TSI Alumni
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started</h2>
          <p className="text-gray-600 mb-4">
            Ready to elevate your leadership? Contact TSI today to enroll in our next immersion program.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}