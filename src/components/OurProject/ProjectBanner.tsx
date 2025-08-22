'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ButtonTitle {
  title: string;
  href: string;
}


export interface BannerSection {
  icon: StaticImageData;
  description: string;
  textColor?: string;
  button: ButtonTitle;
  Banner: StaticImageData;
  MobileBanner?: StaticImageData; 
  upArrowSvg: StaticImageData;
}

interface ProjectBannerProps {
  project: BannerSection;
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({ project }) => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Images - Updated sizes prop to match actual rendered width */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.Banner}
          alt="Banner"
          fill
          className="hidden md:block object-contain"
          priority
          sizes="(max-width: 767px) 100vw, (min-width: 768px) 100vw"
        />
        <Image
          src={project.MobileBanner || project.Banner}
          alt="Mobile Banner"
          fill
          className="block md:hidden object-cover"
          priority
          sizes="(max-width: 767px) 100vw, (min-width: 768px) 100vw"
        />
      </div>

      {/* Overlay Content - Kept exactly the same */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <div className="max-w-xl text-white space-y-6">
          {/* Logo - Fixed with proper aspect ratio handling */}
          <div className="w-16 h-16 md:w-40 md:h-20 relative">
            <Image
              src={project.icon}
              alt="Logo"
              fill
              className="object-contain"
              sizes="(max-width: 767px) 64px, (min-width: 768px) 160px"
            />
          </div>

          {/* Description */}
          <p className="text-base md:text-xl font-medium leading-relaxed">
            {project.description}
          </p>

          {/* Button */}
          <Link
            href={project.button.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`flex ${project.textColor} cursor-pointer items-center gap-2 bg-white px-6 py-3 rounded-[10px] text-[14px] md:text-[16px] font-semibold hover:bg-gray-200 transition`}
            >
              {project.button.title}
              {/* Arrow Icon - Fixed with proper aspect ratio handling */}
              <div className="w-4 h-4 md:w-4 md:h-4 relative">
                <Image
                  src={project.upArrowSvg}
                  alt="Arrow Icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 767px) 16px, (min-width: 768px) 24px"
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;