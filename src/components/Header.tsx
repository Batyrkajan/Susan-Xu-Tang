"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "RESEARCH", href: "/research" },
  { name: "PROJECTS", href: "/projects" },
  { name: "TEACHING", href: "/teaching" },
  { name: "MORE", href: "/more" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set the active item based on the current path
    setActiveItem(window.location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="text-xl font-semibold text-gray-800">
                Susan Xu Tang
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="group relative">
                <span
                  className={`text-sm font-medium ${
                    activeItem === item.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  } transition-colors duration-200`}
                >
                  {item.name}
                </span>
                {activeItem === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
