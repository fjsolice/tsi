/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaBook,
  FaChartBar,
  FaLaptop,
  FaUserPlus,
  FaCog,
  FaSignOutAlt,
  FaTimes,
  FaBars,
  FaFileInvoice,
} from "react-icons/fa";
import { supabase } from "../lib/supabase";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "My Portfolio", icon: <FaBriefcase />, path: "/dashboard/portfolio" },
    { name: "Educational Courses", icon: <FaBook />, path: "/dashboard/courses" },
    { name: "Reports", icon: <FaChartBar />, path: "/dashboard/reports" },
    { name: "Invoices", icon: <FaFileInvoice />, path: "/dashboard/invoices" },
    { name: "Platforms", icon: <FaLaptop />, path: "/dashboard/platforms" },
    { name: "Refer a Friend", icon: <FaUserPlus />, path: "/dashboard/refer" },
  ];

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", (error as Error).message || error);
    }
  };

  // Inactivity timeout (client-side)
  useEffect(() => {
    let activityTimeout: NodeJS.Timeout;

    const resetTimeout = () => {
      clearTimeout(activityTimeout);
      activityTimeout = setTimeout(async () => {
        await supabase.auth.signOut();
        router.push("/login");
      }, 60000); // 60 seconds
    };

    const handleActivity = () => resetTimeout();
    resetTimeout();
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keypress", handleActivity);

    return () => {
      clearTimeout(activityTimeout);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keypress", handleActivity);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Menu Button - Hidden when sidebar is open */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 focus:outline-none md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FaBars className="text-2xl" />
        </button>
      )}

      {/* Sidebar for Mobile - Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed w-64 bg-gradient-to-b from-gray-900 to-gray-800 h-screen shadow-2xl z-40 text-white md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            <div className="flex flex-col h-full">
              {/* Logo and Close Button */}
              <div className="p-4 bg-black border-b border-gray-700">
                <div className="relative">
                  <Image
                    src="/images/tsi.png"
                    alt="TSI Logo"
                    width={120}
                    height={40}
                    className="mx-auto"
                  />
                  <button
                    className="absolute top-2 right-2 p-1 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-4">
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                          pathname === item.path
                            ? "bg-indigo-600 text-white"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Settings and Logout */}
              <div className="p-4 border-t border-gray-700">
                <Link
                  href="/dashboard/settings"
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                    pathname === "/dashboard/settings"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <FaCog className="mr-3 text-lg" />
                  <span className="text-sm font-medium">Settings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center p-2 mt-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-200 w-full"
                >
                  <FaSignOutAlt className="mr-3 text-lg" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Sidebar for Large Screens */}
      <aside className="hidden md:block w-64 bg-gradient-to-b from-gray-900 to-gray-800 h-screen shadow-2xl text-white">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 bg-black border-b border-gray-700">
            <Image
              src="/images/tsi.png"
              alt="TSI Logo"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                      pathname === item.path
                        ? "bg-indigo-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Settings and Logout */}
          <div className="p-4 border-t border-gray-700">
            <Link
              href="/dashboard/settings"
              className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                pathname === "/dashboard/settings"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <FaCog className="mr-3 text-lg" />
              <span className="text-sm font-medium">Settings</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center p-2 mt-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-200 w-full"
            >
              <FaSignOutAlt className="mr-3 text-lg" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto p-0 m-0">
        <div className="w-full h-full">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;