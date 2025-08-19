"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  id: number;  // ✅ number
  image: StaticImageData;
  alt: string;
  href: string;
  onClick?: (projectId: number) => void; // ✅ number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  image,
  alt,
  href,
  onClick,
}) => {
  return (
    <div
      className="rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={() => onClick?.(id)}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={alt} className="w-full h-48 object-cover" />
      </a>
    </div>
  );
};
