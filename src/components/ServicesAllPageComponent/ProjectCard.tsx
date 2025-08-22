"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
      className=" overflow-hidden cursor-pointer"
      onClick={() => onClick?.(id)}
    >
      <Link href={href} >
        <Image src={image} alt={alt} className="w-full h-auto object-cover" />
      </Link>
    </div>
  );
};
