// src/components/Navbar.jsx
"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50);

        // Hủy activeClass nếu không nằm trong vùng có id
        const sections = ["projects", "contact"];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        let foundActive = false;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            const elementTop = top + window.scrollY;
            const elementBottom = bottom + window.scrollY;

            if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
              foundActive = true;
              break;
            }
          }
        }

        if (!foundActive) {
          setActiveLink("");
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
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
              offset={-55}
              spy={true}
              onSetActive={handleSetActive}
              className={`hover:text-indigo-300 cursor-pointer transition-all duration-500 ease-in-out ${
                activeLink === "projects"
                  ? "text-indigo-300 border-b-2 border-indigo-300"
                  : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              offset={-60}
              spy={true}
              onSetActive={handleSetActive}
              className={`hover:text-indigo-300 cursor-pointer transition-all duration-500 ease-in-out ${
                activeLink === "contact"
                  ? "text-indigo-300 border-b-2 border-indigo-300"
                  : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
