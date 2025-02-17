/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { motion } from "framer-motion";

const PartnersFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      {/* Upper Section */}
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/tsi-logo.png" // Replace with your logo path
              alt="TSI Partners Logo"
              className="h-14"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 text-gray-500 text-2xl">
            <a href="#" aria-label="Instagram" className="hover:text-gray-700">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-700">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-700">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-700">
              <FaFacebook />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-700">
              <FaYoutube />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-gray-700">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-300"></div>

      {/* Lower Section */}
      <div className="container mx-auto px-8 lg:px-16">
        {/* Legal Disclaimer */}
        <div className="text-gray-600 text-sm space-y-4">
          <p>
            <strong>Legal:</strong> TSI Global Limited is authorised by the
            Financial Services Commission (FSC) in Belize under the Securities
            Industry Act 2021 (license number 000261/4). Trading Point of
            Financial Instruments Limited is authorised and regulated by Cyprus
            Securities and Exchange Commission (CySEC) under licence number
            120/10.
          </p>
          <p>
            <strong>Restricted Regions:</strong> TSI does not provide services
            for the residents of certain countries, including but not limited
            to the United States of America, Canada, Argentina, Israel and the
            Islamic Republic of Iran. TSI does not direct its website and
            services to any individual in any country in which the use of its
            website and services are prohibited by local laws or regulations.
            When accessing this website from a country in which its use may or
            may not be prohibited, it is the users responsibility to ensure
            that any use of the website or services adheres to local laws or
            regulations. TSI does not affirm that the information on its website
            is suitable to all jurisdictions.
          </p>
        </div>

        {/* Partnership Logos */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <img
            src="/images/mastercard.png" // Replace with your partner logo paths
            alt="Partner 1"
            className="h-12 object-contain"
          />
          <img
            src="/images/visa.png"
            alt="Partner 2"
            className="h-12 object-contain"
          />
          <img
            src="/images/american-express.png"
            alt="Partner 3"
            className="h-12 object-contain"
          />
          <img
            src="/images/google-pay.png"
            alt="Partner 4"
            className="h-12 object-contain"
          />
          <img
            src="/images/apple-pay.png"
            alt="Partner 5"
            className="h-12 object-contain"
          />
          <img
            src="/images/stripe.png"
            alt="Partner 6"
            className="h-12 object-contain"
          />
        </div>
        <div className="border-t mt-10 border-gray-700"></div>

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
      </div>
    </footer>
  );
};

export default PartnersFooter;
