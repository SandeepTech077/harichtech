"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { StaticImageData } from "next/image";

interface ProjectArray {
  id: number;  
  image: StaticImageData;
  alt: string;
  href: string;
}

interface PortfolioSectionProps {
  title: string;
  blueTitle: string;
  projects: ProjectArray[];
  buttonTitle: string;

}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  title,
  blueTitle,
  projects,
  buttonTitle,

}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {title} <span className="text-blue-600">{blueTitle}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                image={project.image}
                alt={project.alt}
                href={project.href}
              />
            ))}
          </div>

          <div className="text-center">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {buttonTitle}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
