"use client";
import React from "react";
import SkillsIcons from "./SkillIscons";
// import SkillsIcons from "./SkillsIcons";

const AboutSection: React.FC = () => {
  return (
    <section
          id="about"
          className="flex flex-col md:flex-row items-center justify-center h-screen py-12 px-6 bg-blue-50 text-gray-600"
        >
          <div id="about-image" className="md:w-1/2 flex justify-center">
            <img
              src="/images/bayu.png"
              alt="Bayu Pasifik"
              className="max-w-[80%] h-96"
            />
          </div>
          <div id="about-text" className="md:w-1/2 px-6 space-y-6">
            <h1 className="text-4xl font-bold">Tentang Saya</h1>
            <h2 className="text-base leading-relaxed">
              Nama saya Bayu Pasifik. Saya seorang developer yang berasal dari
              Indonesia dan tahun ini berusia 25 tahun.
            </h2>
            <h2 className="text-base leading-relaxed">
              Saya berfokus pada pengembangan website dan aplikasi mobile,
              dengan hasrat untuk mempelajari hal-hal baru di bidang
              pengembangan perangkat lunak.
            </h2>
            <h2 className="text-base leading-relaxed">
              Saya menyukai tantangan dalam mengerjakan coding, terutama dalam
              mencari solusi untuk masalah yang kompleks dan meningkatkan
              performa aplikasi.
            </h2>
            <h2 className="text-base leading-relaxed">
              Saya memiliki pengalaman dalam berbagai proyek, mulai dari
              aplikasi bisnis hingga platform interaktif, dan terus mencari
              peluang untuk mengembangkan keahlian saya dalam teknologi terbaru.
            </h2>
            <h2 className="text-base leading-relaxed">
              Saya percaya bahwa pengembangan software adalah bidang yang selalu
              berkembang, dan itulah yang membuatnya sangat menarik bagi saya.
            </h2>
        <SkillsIcons />
      </div>
    </section>
  );
};

export default AboutSection;
