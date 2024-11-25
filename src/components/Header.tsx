"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header id="masthead" className="site-header fixed z-[9999] flex">
      <nav className="anchor-nav flex space-x-4">
        {["#intro", "#about", "#projects"].map((link, index) => (
          <a key={index} href={link} className="anchor px-4 py-2">
            {link.replace("#", "").toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
