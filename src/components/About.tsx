"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      motionPath: {
        path: [
          { x: -100, y: 0 },
          { x: 0, y: 100 },
          { x: 100, y: 0 },
        ],
        curviness: 1.5,
      },
      duration: 2,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="px-6 py-20 text-center bg-gray-50"
    >
      <h2 className="text-4xl font-bold text-gray-800">Tentang Saya</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Saya adalah seorang Software Developer dengan pengalaman dalam
        mengembangkan software berbasis web dan mobile. Saya memiliki passion
        dalam mempelajari hal hal baru terkait pengembangan software dan telah
        mengerjakan berbagai proyek dalam [Fokus Industri atau Teknologi].
      </p>
    </section>
  );
};

export default About;
