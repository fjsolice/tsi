"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, 
  FaTwitter, FaTiktok, FaYoutube 
} from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Upper Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 sm:px-12 md:px-16 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Column 1: University Name */}
        <div>
          <h3 className="text-xl font-bold leading-relaxed">
            Tanzania <br />
            School of <br />
            Investments
          </h3>
        </div>

        {/* Column 2: Address */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Executive Education</h4>
          <p className="text-sm leading-relaxed text-gray-300">
            Tanzania School of Investments <br />
            Noble Victoria Center <br />
            Bagamoyo Road, DSM Tanzania.
          </p>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/contact-us" className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Map & Directions
              </a>
            </li>
            <li>
              <Link href="/email-subscribe" className="text-gray-300 hover:text-white">
                Subscribe to Our Emails
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaTiktok, link: "#" },
              { icon: FaYoutube, link: "#" },
            ].map(({ icon: Icon, link }, index) => (
              <a 
                key={index} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-neutral-800 rounded-full hover:bg-gray-700 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Divider Line */}
      <div className="border-t border-gray-700"></div>

      {/* Disclaimer Section */}
      <motion.div
        className="px-6 sm:px-12 md:px-16 py-6 text-sm text-gray-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>
          <strong>Disclaimer:</strong> Tanzania School of Investments is a licensed educational and advisory firm 
          committed to providing accurate and professional insights on capital markets. While we offer educational 
          resources and investment guidance, trading CFDs and global financial instruments carries inherent risks. 
          Past performance is not indicative of future results, and investments should be made with careful consideration.
        </p>
      </motion.div>

      {/* Lower Section */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 md:px-16 py-6 text-sm text-gray-400 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>© {new Date().getFullYear()} Tanzania School of Investments. All rights reserved.</p>
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3 sm:mt-0">
          {["Site Map", "Jobs", "Trademarks", "Policies", "Accessibility", "Digital Accessibility"]
            .map((text, index) => (
              <a key={index} href="#" className="hover:text-white">
                {text}
              </a>
            ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;