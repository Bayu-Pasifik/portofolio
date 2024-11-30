"use client";
import React from "react";
import useActiveSection from "../app/hooks/useActiveSection";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const sectionIds = ["intro", "about", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);
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
      className={`fixed top-0 z-[9999] flex justify-center items-center transition-colors  duration-300 ${
        isScrolled
          ? "left-1/2 transform -translate-x-1/2 max-w-screen-md py-2 px-6 bg-white/30 backdrop-blur-lg shadow-lg rounded-full"
          : "w-full py-6 bg-transparent text-white"
      }`}
    >
      <nav
        className={`flex justify-center space-x-4 transition-all duration-300 ${
          isScrolled ? "text-gray-800" : "text-white"
        }`}
      >
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`anchor px-4 py-2 text-lg font-medium transition-colors ${
              activeSection === `#${id}`
                ? "text-blue-500 font-bold"
                : "text-gray-800"
            }`}
          >
            {id.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
