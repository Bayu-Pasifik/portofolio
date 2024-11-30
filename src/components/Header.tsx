"use client";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 z-[9999] flex justify-center items-center transition-all duration-300 ${
        isScrolled
          ? "left-1/2 transform -translate-x-1/2 max-w-screen-md py-2 px-6 bg-white/30 backdrop-blur-md shadow-md rounded-full"
          : "w-full py-6 bg-transparent"
      }`}
    >
      <nav
        className={`flex justify-center space-x-4 transition-colors duration-300 ${
          isScrolled ? "text-gray-800" : "text-white"
        }`}
      >
        {["#intro", "#about", "#projects", "#contact"].map((link, index) => (
          <a
            key={index}
            href={link}
            className="anchor px-4 py-2 text-lg font-medium hover:text-blue-500 transition-colors"
          >
            {link.replace("#", "").toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
