"use client";

import Link from "next/link";
import { FaEnvelope, FaPhone, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-gray-400 mr-2" />
                <a
                  href="mailto:Susan.Tang@asu.edu"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Susan.Tang@asu.edu
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">1-404-718-0308</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/teaching"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Teaching
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Resume download functionality to be implemented");
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <FaGoogle className="h-6 w-6" />
                <span className="sr-only">Google Scholar</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Susan Xu Tang. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
