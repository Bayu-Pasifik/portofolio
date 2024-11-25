"use client";
import React from "react";

const SkillsIcons: React.FC = () => {
  const skills = [
    { src: "/images/icons/laravel.png", alt: "Laravel" },
    { src: "/images/icons/php.png", alt: "PHP" },
    { src: "/images/icons/js.png", alt: "JavaScript" },
    { src: "/images/icons/react.png", alt: "React" },
    { src: "/images/icons/tailwind.png", alt: "Tailwind CSS" },
  ];

  return (
    <div>
      {/* Skills Icons */}
      <div
        id="skills-icons"
        className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4 mt-6"
      >
        <a href="#" className="text-blue-600">
          <img
            src="/images/icons/laravel.png"
            alt="Laravel"
            className="w-12 h-12"
          />
        </a>
        <a href="#" className="text-green-500">
          <img src="/images/icons/php.png" alt="PHP" className="w-12 h-12" />
        </a>
        <a href="#" className="text-yellow-500">
          <img
            src="/images/icons/js.png"
            alt="JavaScript"
            className="w-12 h-12"
          />
        </a>
        <a href="#" className="text-blue-400">
          <img
            src="/images/icons/react.png"
            alt="React"
            className="w-12 h-12"
          />
        </a>
        <a href="#" className="text-blue-600">
          <img
            src="/images/icons/tailwind.png"
            alt="Tailwind CSS"
            className="w-12 h-12"
          />
        </a>
        <a href="#" className="text-gray-800">
          <img
            src="/images/icons/next-js.png"
            alt="Next.js"
            className="w-12 h-12"
          />
        </a>
        <a href="#" className="text-gray-800">
          <img
            src="/images/icons/bootstrap.png"
            alt="Bootstrap"
            className="w-12 h-12"
          />
        </a>
        <a href="#" className="text-gray-800">
          <img src="/images/icons/dart.png" alt="dart" className="w-12 h-12" />
        </a>
        <a href="#" className="text-gray-800">
          <img
            src="/images/icons/flutter.png"
            alt="flutter"
            className="w-12 h-12"
          />
        </a>
        <a href="#" className="text-gray-800">
          <img src="/images/icons/sql.png" alt="sql" className="w-12 h-12" />
        </a>
        <a href="#" className="text-gray-800">
          <img
            src="/images/icons/firebase.png"
            alt="firebase"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default SkillsIcons;
