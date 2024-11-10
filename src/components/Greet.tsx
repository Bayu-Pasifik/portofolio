'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

const Greet: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 via-white to-white text-center px-4">
      <h1 ref={titleRef} className="text-6xl font-extrabold text-gray-800 tracking-tight leading-tight sm:text-7xl">
        Halo, Saya Bayu Pasifik
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        Seorang <span className="font-semibold text-blue-600">Application Developer</span> dengan fokus pada <span className="font-semibold text-blue-600">Pengembangan Website dan Aplikasi Mobile</span>.
      </p>
    </main>
  );
};

export default Greet;
