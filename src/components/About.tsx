'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      motionPath: {
        path: [{ x: -100, y: 0 }, { x: 0, y: 100 }, { x: 100, y: 0 }],
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
    <section id="about" className="px-4 py-16 text-center" ref={aboutRef}>
      <h2 className="text-4xl font-bold">Tentang Saya</h2>
      <p className="mt-4 text-gray-700">
        Saya adalah seorang [Profesi] dengan pengalaman dalam [Keahlian Utama].
      </p>
    </section>
  );
}
