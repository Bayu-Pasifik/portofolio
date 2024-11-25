"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { Montserrat, Poppins } from "next/font/google";

// Import font Inter dengan pengaturan bobot yang diperlukan
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap", // Mengoptimalkan loading font
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap", // Mengoptimalkan loading font
});

const IntroSection: React.FC = () => {
  return (
    <section
      id="intro"
      className={`flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 via-white to-blue-50 px-4`}
    >
      <h1
        className={` ${montserrat.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 tracking-tight leading-tight text-center`}
      >
        Halo, Saya{" "}
        <span className={`text-blue-600 inline sm:inline-block`}>
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
      <h2 className={` ${poppins.className} mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xlxl text-center`}>
        Seorang {""}
        <span className="font-semibold text-blue-600 inline-block">
          <Typewriter
            options={{
              strings: ["Web Developer", "Mobile Developer"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>{" "}
        yang berfokus pada pengembangan{" "}
        <span className="text-blue-600">website dan aplikasi mobile</span>.
      </h2>
    </section>
  );
};

export default IntroSection;
