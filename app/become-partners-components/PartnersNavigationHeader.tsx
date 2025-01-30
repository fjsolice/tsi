/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineChevronDown, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const PartnersNavigationHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${scrolled ? "bg-white shadow-md" : "bg-transparent"
        } transition-all duration-300 ease-in-out sticky top-0 z-50`}
      style={{ position: "sticky", top: 0 }} // Ensure position sticky is applied
    >
      {/* Upper Section */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
        <div className="text-sm text-gray-800 flex justify-end w-full space-x-6">
          <Link
            href="/"
            className="hover:text-indigo-600 hover:underline transition duration-200"
          >
            TSI Homepage
          </Link>
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 hover:underline transition duration-200"
          >
            Help Center
          </a>
        </div>
      </div>

      {/* Lower Section */}
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Left Side: Logo and Menu */}
        <div className="flex items-center space-x-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="become-partners">
              <img
                src="/images/tsi-logo.png" // Replace with your logo path
                alt="TSI Partners Logo"
                className="h-14"
              /></Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu
              title="Benefits"
              items={[
                { label: "Payment Plans", link: "/payment-plan" },
                { label: "Rewards", link: "/rewards" },
                { label: "Advantages", link: "/advantages" },
              ]}
            />
            <DropdownMenu
              title="Partner Types"
              items={[
                { label: "Refer a Friend", link: "/refer-a-friend" },
                { label: "Partnerships", link: "/partnerships" },
              ]}
            />
            <DropdownMenu
              title="Social Trading"
              items={[
                { label: "CopyTrading", link: "/copytrading" },
                { label: "Social Competitors", link: "/social-competitors" },
              ]}
            />
          </div>
        </div>

        {/* Right Side: Get Started Button */}
        <div className="hidden lg:block">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transform transition duration-200">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="bg-gray-100 px-6 py-4 lg:hidden transition-all duration-300 ease-in-out">
          {/* Benefits Dropdown */}
          <MobileDropdownMenu
            title="Benefits"
            items={[
              { label: "Payment Plans", link: "/payment-plans" },
              { label: "Rewards", link: "/rewards" },
              { label: "Advantages", link: "/advantages" },
            ]}
          />
          {/* Partner Types Dropdown */}
          <MobileDropdownMenu
            title="Partner Types"
            items={[
              { label: "Refer a Friend", link: "/refer-a-friend" },
              { label: "Partnerships", link: "/partnerships" },
            ]}
          />
          {/* Social Trading Dropdown */}
          <MobileDropdownMenu
            title="Social Trading"
            items={[
              { label: "CopyTrading", link: "/copytrading" },
              { label: "Social Competitors", link: "/social-competitors" },
            ]}
          />
          {/* Get Started Button */}
          <div className="mt-4">
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

/* Dropdown Menu Component */
const DropdownMenu = ({ title, items }: { title: string; items: any[] }) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center text-gray-800 hover:text-indigo-600 transition duration-200">
        {title}
        <HiOutlineChevronDown className="ml-2" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          {items.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href={item.link}
                  className={`block px-4 py-2 text-gray-700 hover:bg-indigo-100 ${active ? "bg-indigo-100" : ""
                    }`}
                >
                  {item.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

/* Mobile Dropdown Menu Component */
const MobileDropdownMenu = ({
  title,
  items,
}: {
  title: string;
  items: any[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center text-gray-800 py-2 cursor-pointer"
      >
        {title}
        <HiOutlineChevronDown
          className={`transform transition ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="ml-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block py-2 text-gray-600 hover:text-indigo-600 transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PartnersNavigationHeader;

