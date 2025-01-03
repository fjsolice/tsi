"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      {/* Upper Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 md:px-16 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Column 1: University Name */}
        <div>
          <h3 className="text-xl font-bold leading-relaxed">
            Tanzania <br />
            School of <br />
            Investment
          </h3>
        </div>

        {/* Column 2: Address */}
        <div>
          <h4 className="text-lg font-bold mb-4">Executive Education</h4>
          <p className="text-sm leading-relaxed">
            Tanzania School of Investment <br />
            Noble Victoria Center <br />
            Bagamoyo Road, DSM Tanzania.
          </p>
        </div>

        {/* Column 3: Links */}
        <div>
          <ul className="space-y-3">
          <li>
              <a href="#" className="underline hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-gray-400">
                Map & Directions
              </a>
            </li>
            <li>
              <a href="#" className="underline hover:text-gray-400">
                Subscribe to Our Emails
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media Icons */}
        <div>
          <div className="flex space-x-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTiktok size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Divider Line */}
      <div className="border-t border-gray-600"></div>

      {/* Lower Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-6 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>© President & Fellows of Tanzania School of Investment</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            Site Map
          </a>
          <a href="#" className="hover:text-gray-400">
            Jobs
          </a>
          <a href="#" className="hover:text-gray-400">
            Tanzania School of Investment
          </a>
          <a href="#" className="hover:text-gray-400">
            Trademarks
          </a>
          <a href="#" className="hover:text-gray-400">
            Policies
          </a>
          <a href="#" className="hover:text-gray-400">
            Accessibility
          </a>
          <a href="#" className="hover:text-gray-400">
            Digital Accessibility
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
