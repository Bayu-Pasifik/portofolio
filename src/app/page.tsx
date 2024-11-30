"use client";
import React from "react";
import useAnimations from "./hooks/UseAnimations";
import Header from "@/components/Header";

// Menggunakan dynamic untuk menonaktifkan SSR pada komponen tertentu
import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("@/components/IntroSection"), {
  ssr: false, // Nonaktifkan SSR untuk komponen ini
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
});
const ProjectSection = dynamic(() => import("@/components/ProjectSection"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  useAnimations();

  return (
    <div id="page" className="site">
      <Header />
      <main id="content" className="site-content">
        <IntroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;

