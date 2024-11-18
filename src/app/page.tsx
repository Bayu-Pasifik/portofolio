"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const panels = panelsRef.current;
    const container = containerRef.current;

    // Animasi horizontal untuk semua panel
    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: true, // Hapus markers untuk production
      },
    });

    // Animasi individual untuk elemen dalam kontainer
    panels.forEach((panel, index) => {
      const box = panel.querySelector(".box");
      if (box) {
        gsap.to(box, {
          y: index % 2 === 0 ? -100 : 100, // Animasi vertikal berbeda tiap panel
          ease: "power1.out",
          scrollTrigger: {
            trigger: box,
            containerAnimation: scrollTween,
            start: "center center",
            toggleActions: "play none none reset",
          },
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-white to-blue-50">
      <header className="relative flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">
          Halo👋 , Saya{" "}
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
      </header>
      <div
        ref={containerRef}
        className="container flex flex-nowrap overflow-hidden relative"
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            ref={(el) => { if (el) panelsRef.current[index] = el; }}
            className={`panel w-screen h-screen flex items-center justify-center ${
              index % 2 === 0 ? "bg-red-500" : "bg-gray-500"
            }`}
          >
            <div className="box w-32 h-32 bg-white text-center leading-32 rounded-lg shadow-lg">
              Panel {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
