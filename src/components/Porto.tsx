"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

const Portfolio: React.FC = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(portfolioRef.current!.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const projects = [
    {
      title: "Proyek 1",
      description: "Deskripsi singkat proyek ini.",
      image: "/images/temp.jpg",
    },
    {
      title: "Proyek 2",
      description: "Deskripsi singkat proyek ini.",
      image: "/images/temp.jpg",
    },
    {
      title: "Proyek 3",
      description: "Deskripsi singkat proyek ini.",
      image: "/images/temp.jpg",
    },
    {
      title: "Proyek 4",
      description: "Deskripsi singkat proyek ini.",
      image: "/images/temp.jpg",
    },
    {
      title: "Proyek 5",
      description: "Deskripsi singkat proyek ini.",
      image: "/images/temp.jpg",
    },
    {
      title: "Proyek 6",
      description: "Deskripsi singkat proyek ini.",
      image: "/images/temp.jpg",
    },
  ];

  return (
    <section id="portfolio" className="px-6 py-20 bg-blue-50">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Proyek Saya
      </h2>
      <div
        ref={portfolioRef}
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="block p-4 shadow-lg rounded-lg transform transition-transform hover:scale-105 bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
