"use client";

import React from "react";
import SkillsIcons from "./SkillIscons"; // import sesuai dengan file yang benar
import { Roboto } from "next/font/google";
import { useAboutAnimations } from "@/app/Animations";

// Import font Roboto dengan pengaturan bobot yang diperlukan
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // Mengoptimalkan loading font
});

const AboutSection: React.FC = () => {
  const { aboutImageRef, aboutTextRef } = useAboutAnimations();
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center h-screen my-64 py-12 px-6 bg-blue-50 text-gray-600"
      // ref={aboutRef}
    >
      {/* Gambar */}
      <div id="about-image" className="md:w-1/2 flex justify-center" ref={aboutImageRef}>
        <img
          src="/images/bayu.png"
          alt="Bayu Pasifik"
          className="max-w-[70%] h-auto object-contain" // Gambar akan menyesuaikan dengan ukuran kontainer
        />
      </div>

      {/* Teks Deskripsi */}
      <div id="about-text" className="md:w-1/2 px-6 space-y-6" ref={aboutTextRef}>
        <h1 className="text-4xl font-bold">Tentang Saya</h1>

        <h2 className={`${roboto.className} text-base leading-relaxed`}>
          Nama saya Bayu Pasifik. Saya seorang developer yang berasal dari
          Indonesia dan tahun ini berusia 25 tahun.
        </h2>
        <h2 className={`${roboto.className} text-base leading-relaxed`}>
          Saya berfokus pada pengembangan website dan aplikasi mobile, dengan
          hasrat untuk mempelajari hal-hal baru di bidang pengembangan perangkat lunak.
        </h2>
        <h2 className={`${roboto.className} text-base leading-relaxed`}>
          Saya menyukai tantangan dalam mengerjakan coding, terutama dalam
          mencari solusi untuk masalah yang kompleks dan meningkatkan performa aplikasi.
        </h2>
        <h2 className={`${roboto.className} text-base leading-relaxed`}>
          Saya memiliki pengalaman dalam berbagai proyek, mulai dari aplikasi
          bisnis hingga platform interaktif, dan terus mencari peluang untuk
          mengembangkan keahlian saya dalam teknologi terbaru.
        </h2>
        <h2 className={`${roboto.className} text-base leading-relaxed`}>
          Saya percaya bahwa pengembangan software adalah bidang yang selalu
          berkembang, dan itulah yang membuatnya sangat menarik bagi saya.
        </h2>

        {/* Icons Section */}
        <SkillsIcons />
      </div>
    </section>
  );
};

export default AboutSection;
