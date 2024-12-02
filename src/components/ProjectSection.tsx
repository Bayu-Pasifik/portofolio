"use client";
import React from "react";
import { projects } from "../app/data/projectData";
import { useProjectCardsAnimation } from "@/app/Animations";

const ProjectSection: React.FC = () => {
  const projectCardsRef = useProjectCardsAnimation();
  return (
    <section id="projects" className="py-12 px-6 bg-blue-50" ref={projectCardsRef}>
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white shadow-lg rounded-lg flex flex-col projects-card 
                       transition-transform duration-300 transform 
                       hover:shadow-2xl hover:scale-105 hover:skew-y-2"
          >
            {/* Icon Project */}
            <div className="flex justify-center mb-4">
              <img
                src={project.icons}
                alt={`${project.language} Icon`}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h2>

            {/* Type and Language */}
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-medium text-blue-600">Type:</span>{" "}
              {project.type} |{" "}
              <span className="font-medium text-blue-600">Language:</span>{" "}
              {project.language}
            </p>

            {/* Description */}
            <p className="text-gray-600 flex-grow mb-4">
              {project.description}
            </p>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-center transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
