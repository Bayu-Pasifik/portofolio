"use client";
import React from "react";

const ProjectSection: React.FC = () => {
  const projects = [
    { id: 1, title: "Proyek 1", description: "Deskripsi singkat proyek ini." },
    { id: 2, title: "Proyek 2", description: "Deskripsi singkat proyek ini." },
  ];

  return (
    <section id="projects" className="py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card p-4 bg-white shadow-lg rounded-lg"
          >
            <h2 className="text-lg font-semibold mt-4">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
