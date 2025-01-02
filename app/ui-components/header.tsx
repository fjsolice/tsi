"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // Define Menu Type
  type Menu = {
    label: string;
    items?: { label: string; href: string }[];
    href?: string;
  };

  const toggleDropdown = (menuLabel: string | null) => {
    setActiveDropdown((prev) => (prev === menuLabel ? null : menuLabel));
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menus: Menu[] = [
    {
      label: "Programs",
      items: [
        { label: "Leadership Immersions", href: "/programs/leadership" },
        { label: "Topic-Focused Programs", href: "/programs/topic-focused" },
        { label: "Learning Tracks", href: "/programs/learning-tracks" }
      ]
    },
    {
      label: "Experience",
      items: [
        { label: "Alumni Network", href: "/programs/leadership" },
        { label: "Blog Posts", href: "/programs/topic-focused" },
        { label: "FAQs", href: "/programs/learning-tracks" }
      ]
    },
    {
      label: "Admissions",
      href: "/admissions"
    },
    {
      label: "Solutions for Organizations",
      href: "/solutions"
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-xl">
      {/* Upper Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <span className="text-sm font-semibold tracking-wide text-gray-400">
            Executive Education
          </span>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
            <button
              className="text-2xl text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleDrawer}
            >
              {isDrawerOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-black border-t border-gray-700"
        >
          <ul className="p-4 space-y-4 text-3xl">
            {["About", "Insights", "Recruiting", "Baker Library", "Initiatives", "Make a Gift"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-300 hover:text-white"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Links at the Bottom of Drawer */}
          <div className="mt-4 p-4">
            <ul className="flex space-x-4 justify-center">
              <li><Link href="https://facebook.com"><FaFacebook className="text-white text-xl" /></Link></li>
              <li><Link href="https://instagram.com"><FaInstagram className="text-white text-xl" /></Link></li>
              <li><Link href="https://linkedin.com"><FaLinkedin className="text-white text-xl" /></Link></li>
              <li><Link href="https://twitter.com"><FaTwitter className="text-white text-xl" /></Link></li>
              <li><Link href="https://tiktok.com"><FaTiktok className="text-white text-xl" /></Link></li>
              <li><Link href="https://youtube.com"><FaYoutube className="text-white text-xl" /></Link></li>
            </ul>
          </div>
        </motion.nav>
      )}

      {/* Lower Section */}
      <div className="bg-black border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-3xl font-bold tracking-wide text-white"
            >
              TSI
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center space-x-8 items-center">
              {menus.map((menu) => (
                <div
                  key={menu.label}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(menu.label)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white text-lg">
                    {menu.label} <FiChevronDown />
                  </button>
                  {activeDropdown === menu.label && menu.items && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bg-black border border-gray-700 rounded-md mt-2 shadow-lg"
                    >
                      <ul className="p-2 w-48">
                        {menu.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 hover:bg-gray-800"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <button
              className="md:hidden text-2xl text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <FiChevronDown />
            </button>
          </div>

          {/* Mobile Menu (visible when isMobileMenuOpen is true) */}
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-black border-t border-gray-700 mt-4"
            >
              <ul className="p-4 space-y-4 text-2xl">
                {menus.map((menu) => (
                  <div key={menu.label}>
                    <button
                      className="flex items-center space-x-2 text-gray-300 hover:text-white text-xl"
                      onClick={() => toggleDropdown(menu.label)}
                    >
                      {menu.label} <FiChevronDown />
                    </button>
                    {activeDropdown === menu.label && menu.items && (
                      <ul className="p-2 w-full">
                        {menu.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 hover:bg-gray-800"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>

              {/* Mobile Social Media Links */}
              <div className="mt-4 p-4">
                <ul className="flex space-x-4 justify-center">
                  <li><Link href="https://facebook.com"><FaFacebook className="text-white text-xl" /></Link></li>
                  <li><Link href="https://instagram.com"><FaInstagram className="text-white text-xl" /></Link></li>
                  <li><Link href="https://linkedin.com"><FaLinkedin className="text-white text-xl" /></Link></li>
                  <li><Link href="https://twitter.com"><FaTwitter className="text-white text-xl" /></Link></li>
                  <li><Link href="https://tiktok.com"><FaTiktok className="text-white text-xl" /></Link></li>
                  <li><Link href="https://youtube.com"><FaYoutube className="text-white text-xl" /></Link></li>
                </ul>
              </div>
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
