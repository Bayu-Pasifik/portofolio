"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Typewriter from "typewriter-effect";

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const imgTemp = "/images/temp.jpg";

  useEffect(() => {
    // Animasi intro
    gsap.fromTo(
      "#intro",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#intro",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // Animasi gambar di about
    gsap.fromTo(
      "#about-image",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animasi text paragraphs di about
    const paragraphs =
      gsap.utils.toArray<HTMLParagraphElement>("#about-text h2");
    paragraphs.forEach((p, i) => {
      gsap.fromTo(
        p,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: p,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });

    // Animasi untuk ikon skill
    gsap.fromTo(
      "#skills-icons img",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills-icons",
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      }
    );

    // Animasi untuk setiap kartu proyek
    const projectCards = gsap.utils.toArray<HTMLDivElement>(".project-card");
    projectCards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        }
      );
    });
    // Animasi untuk form kontak
    gsap.fromTo(
      "#contact form",
      { opacity: 0, scale: 0.5, rotate: -15, backgroundColor: "#ffffff" },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        backgroundColor: "#f0f8ff",
        duration: 1.5,
        ease: "elastic.out(1, 0.5)", // Efek bounce yang lebih dinamis
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "top 60%",
          scrub: false,
          toggleActions: "restart none none none",
        },
      }
    );

    // Animasi untuk ikon sosial media
    const socialIcons = gsap.utils.toArray<HTMLDivElement>("#contact a");
    gsap.fromTo(
      socialIcons,
      { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out", // Efek smooth
        scrollTrigger: {
          trigger: "#contact",
          start: "top 90%",
          end: "top 70%",
          scrub: false,
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  const Projects = [
    {
      id: 1,
      title: "Proyek 1",
      description: "Deskripsi singkat proyek ini.",
      image: imgTemp,
    },
    {
      id: 2,
      title: "Proyek 2",
      description: "Deskripsi singkat proyek ini.",
      image: imgTemp,
    },
    {
      id: 3,
      title: "Proyek 3",
      description: "Deskripsi singkat proyek ini.",
      image: imgTemp,
    },
    {
      id: 4,
      title: "Proyek 4",
      description: "Deskripsi singkat proyek ini.",
      image: imgTemp,
    },
    {
      id: 5,
      title: "Proyek 5",
      description: "Deskripsi singkat proyek ini.",
      image: imgTemp,
    },
    {
      id: 6,
      title: "Proyek 6",
      description: "Deskripsi singkat proyek ini.",
      image: imgTemp,
    },
  ];

  return (
    <div id="page" className="site">
      {/* Header */}
      <header id="masthead" className="site-header fixed z-[9999] flex">
        <nav className="anchor-nav flex space-x-4">
          {["#intro", "#about", "#projects"].map((link, index) => (
            <a key={index} href={link} className="anchor px-4 py-2">
              {link.replace("#", "").toUpperCase()}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main id="content" className="site-content">
        {/* Intro Section */}
        <section
          id="intro"
          className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 via-white to-blue-50"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 tracking-tight leading-tight">
            Halo, Saya{" "}
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
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-xl text-center">
            Seorang{" "}
            <span className="font-semibold text-blue-600">
              <Typewriter
                options={{
                  strings: ["Website Developer", "Mobile Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>{" "}
            yang berfokus pada pengembangan website & aplikasi mobile.
          </h2>
        </section>

        {/* About Section */}
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

            {/* Skills Icons */}
            <div
              id="skills-icons"
              className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4 mt-6"
            >
              <a href="#" className="text-blue-600">
                <img
                  src="/images/icons/laravel.png"
                  alt="Laravel"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-green-500">
                <img
                  src="/images/icons/php.png"
                  alt="PHP"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-yellow-500">
                <img
                  src="/images/icons/js.png"
                  alt="JavaScript"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-blue-400">
                <img
                  src="/images/icons/react.png"
                  alt="React"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-blue-600">
                <img
                  src="/images/icons/tailwind.png"
                  alt="Tailwind CSS"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-gray-800">
                <img
                  src="/images/icons/next-js.png"
                  alt="Next.js"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-gray-800">
                <img
                  src="/images/icons/bootstrap.png"
                  alt="Bootstrap"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-gray-800">
                <img
                  src="/images/icons/dart.png"
                  alt="dart"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-gray-800">
                <img
                  src="/images/icons/flutter.png"
                  alt="flutter"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-gray-800">
                <img
                  src="/images/icons/sql.png"
                  alt="sql"
                  className="w-12 h-12"
                />
              </a>
              <a href="#" className="text-gray-800">
                <img
                  src="/images/icons/firebase.png"
                  alt="firebase"
                  className="w-12 h-12"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section
          id="projects"
          className="py-96 sm:py-72 md:py-12 xl:py-12 2xl:py-12 px-6"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Projects.map((project) => (
              <div
                key={project.id}
                className="project-card p-4 bg-white shadow-lg rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-4">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
            Contact Me
          </h1>

          {/* Form Kontak */}
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="relative w-full max-w-lg bg-white p-6 shadow-lg rounded-lg space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>

          {/* Kontak Sosial Media */}
          <div className="flex justify-center space-x-8 mt-8">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-green-500 text-4xl transform transition duration-300 hover:scale-110"
              title="WhatsApp"
            >
              <img
                src="/images/icons/whatsapp.png"
                alt="whatsapp"
                className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
              />
            </a>
            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-blue-400 text-4xl transform transition duration-300 hover:scale-110"
              title="Telegram"
            >
              <img
                src="/images/icons/telegram.png"
                alt="telegram"
                className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
              />
            </a>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-pink-500 text-4xl transform transition duration-300 hover:scale-110"
              title="Instagram"
            >
              <img
                src="/images/icons/instagram.png"
                alt="instagram"
                className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
              />
            </a>
            <a
              href="https://discord.com/users/your-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-indigo-500 text-4xl transform transition duration-300 hover:scale-110"
              title="Discord"
            >
              <img
                src="/images/icons/discord.png"
                alt="Discord"
                className="w-12 h-12 p-2 bg-white rounded-full shadow-md"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
