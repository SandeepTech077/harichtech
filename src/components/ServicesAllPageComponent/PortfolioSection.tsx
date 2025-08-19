"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { StaticImageData } from "next/image";
import { MoveUpRight } from "lucide-react";

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
      <div className=" mx-auto px-4">
        <div className=" mx-auto">
          {/* 🔹 Title on left + Button on right */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
            <h2 className="text-[38px] max-w-2xl md:text-[48px] font-bold text-black mb-4 md:mb-0 text-left">
              {title}{" "}
              <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                {blueTitle}
              </span>
            </h2>
            <button className="text-lg bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all gap-4 flex items-center">
              {buttonTitle}
              <MoveUpRight />
            </button>
          </div>

          {/* 🔹 Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};
