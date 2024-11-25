"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const IntroSection: React.FC = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 via-white to-blue-50"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 tracking-tight leading-tight">
        Halo, Saya{" "}
        <span className="text-blue-600">
          <Typewriter
            options={{
              strings: ["Bayu Pasifik"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>
      </h1>
      <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-xl text-center">
        Seorang{" "}
        <span className="font-semibold text-blue-600">
          <Typewriter
            options={{
              strings: ["Website Developer", "Mobile Developer"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>{" "}
        yang berfokus pada pengembangan website & aplikasi mobile.
      </h2>
    </section>
  );
};

export default IntroSection;
