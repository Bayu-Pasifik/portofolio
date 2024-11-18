"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - 25;

  useEffect(() => {
    const heading = headingRef.current;
    const text = textRef.current;

    // Animasi untuk heading
    gsap.fromTo(
      heading,
      { x: -9999 }, // Memulai di luar viewport (kiri)
      {
        x: 0, // Bergerak ke posisi tengah
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none reverse none",
          onLeave: () => {
            gsap.to(heading, { x: 9999, duration: 1.5 }); // Keluar ke kanan
          },
          onEnterBack: () => {
            gsap.fromTo(
              heading,
              { x: -9999 },
              { x: 0, duration: 1.5, ease: "power3.out" }
            );
          },
          onLeaveBack: () => {
            gsap.to(heading, { x: -9999, duration: 1.5 }); // Keluar ke kiri
          },
        },
      }
    );

    // Animasi untuk paragraf
    gsap.fromTo(
      text,
      { x: -9999 },
      {
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none reverse none",
          onLeave: () => {
            gsap.to(text, { x: 9999, duration: 1.5 });
          },
          onEnterBack: () => {
            gsap.fromTo(
              text,
              { x: -9999 },
              { x: 0, duration: 1.5, ease: "power3.out" }
            );
          },
          onLeaveBack: () => {
            gsap.to(text, { x: -9999, duration: 1.5 });
          },
        },
      }
    );
  }, []);

  return (
    <section id="about" className="px-6 py-20 text-center bg-blue-50">
      <h2 ref={headingRef} className="text-4xl font-bold text-gray-800">
        Tentang Saya
      </h2>
      <p
        ref={textRef}
        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
      >
        Nama saya Bayu Pasifik. Saya seorang developer yang berasal dari
        Indonesia dan tahun ini berusia {currentYear - birthYear} tahun. Saya
        berfokus pada pengembangan website dan aplikasi mobile, dengan hasrat
        untuk mempelajari hal-hal baru di bidang pengembangan perangkat lunak.
        Saya menyukai tantangan dalam mengerjakan coding, terutama dalam mencari
        solusi untuk masalah yang kompleks dan meningkatkan performa aplikasi.
        <br />
        <br />
        Saya memiliki pengalaman dalam berbagai proyek, mulai dari aplikasi
        bisnis hingga platform interaktif, dan terus mencari peluang untuk
        mengembangkan keahlian saya dalam teknologi terbaru. Saya percaya bahwa
        pengembangan software adalah bidang yang selalu berkembang, dan itulah
        yang membuatnya sangat menarik bagi saya.
      </p>
    </section>
  );
};

export default About;
