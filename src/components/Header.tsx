"use client";
import React, { useState, useEffect } from "react";
import useActiveSection from "../app/hooks/useActiveSection";

const Header: React.FC = () => {
  const sectionIds = ["intro", "about", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="masthead"
      className={`fixed top-0 z-[9999] flex items-center justify-center w-full transition-all duration-300 ${
        isScrolled
          ? "py-2 px-6 bg-white/30 backdrop-blur-lg shadow-lg rounded-full max-w-screen-md left-1/2 transform -translate-x-1/2"
          : "py-6 px-4 bg-transparent text-white"
      }`}
    >
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex space-x-6 transition-colors duration-300 ${
          isScrolled ? "text-gray-800" : "text-white"
        }`}
      >
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`anchor text-lg font-medium transition-colors ${
              activeSection === `#${id}`
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500"
            }`}
          >
            {id.toUpperCase()}
          </a>
        ))}
      </nav>

      {/* Hamburger Menu for small screens */}
      <button
        className="md:hidden absolute right-6 text-2xl focus:outline-none transition-colors duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white/80 backdrop-blur-lg shadow-lg py-4 md:hidden`}
        >
          <nav className="flex flex-col items-center space-y-4 text-gray-800">
            {sectionIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`anchor text-lg font-medium transition-colors ${
                  activeSection === `#${id}`
                    ? "text-blue-500 font-bold"
                    : "hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {id.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
