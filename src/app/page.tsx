"use client";
import React from "react";
import useAnimations from "./hooks/UseAnimations";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

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
