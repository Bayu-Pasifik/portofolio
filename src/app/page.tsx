"use client";


// import useAnimations from "../hooks/UseAnimations";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home()  {

  // Tetap panggil useAnimations meskipun window belum tersedia
  // useAnimations();


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


