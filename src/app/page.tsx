"use client";


// import useAnimations from "../hooks/UseAnimations";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import { Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home()  {

  // Tetap panggil useAnimations meskipun window belum tersedia
  // useAnimations();


  return (
    <Suspense fallback={<LoadingScreen />}>
      <div id="page" className="site">
      <Header />
      <main id="content" className="site-content">
        <IntroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
    </Suspense>
  );
};


