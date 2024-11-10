'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Parallax effect on title
    Observer.create({
      target: window,
      type: "scroll",
      onChange: (self) => {
        gsap.to(titleRef.current, {
          y: self.deltaY * 0.5,
          ease: "power3.out",
        });
      },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 ref={titleRef} className="text-6xl font-bold">
        Halo, Saya Bayu Pasifik
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Saya seorang <strong>Web Developer dan Mobile Developer</strong> yang berfokus pada <strong>pengembangan web dan aplikasi mobile</strong>.
      </p>
    </main>
  );
}
