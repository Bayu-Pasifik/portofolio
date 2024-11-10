'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import Typewriter from 'typewriter-effect';

gsap.registerPlugin(Observer);

const Greet: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Observer for parallax effect on scroll
    Observer.create({
      target: window,
      type: 'scroll',
      onChange: (self) => {
        gsap.to(titleRef.current, {
          y: self.deltaY * 0.5,
          ease: 'power3.out',
        });
      },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 via-white to-blue-50 text-center px-4">
      <img
        src="/images/bayu.jpg" // Ganti dengan path gambar Anda
        alt="Bayu Pasifik"
        className="w-72 h-72 mb-6 shadow-lg border-4 rounded-full border-white"
      />
      <h1
        ref={titleRef}
        className="text-6xl font-extrabold text-gray-800 tracking-tight leading-tight sm:text-7xl"
      >
        Halo, Saya{' '}
        <span className="inline-block text-blue-600">
          <Typewriter
            options={{
              strings: ['Bayu Pasifik'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-xl">
        Seorang{' '}
        <span className="font-semibold text-blue-600 inline-block">
          <Typewriter
            options={{
              strings: ['Website Developer', 'Mobile Developer'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>{' '}
        yang berfokus pada
      </p>
      <p className="text-xl font-semibold text-blue-600">
        <Typewriter
          options={{
            strings: ['Pengembangan Website', 'Pengembangan Aplikasi Mobile'],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </p>
    </main>
  );
};

export default Greet;
