// src/components/Navbar.jsx
"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end">
        <ul className="flex space-x-6 text-white">
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              offset={-70} // Bù 70px để tránh Navbar che khuất
              spy={true}
              activeClass="text-indigo-300 border-b-2 border-indigo-300"
              className="hover:text-indigo-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" className="hover:text-indigo-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
