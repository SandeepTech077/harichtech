'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

export interface BannerSection {
  icon: StaticImageData;
  description: string;
  btnText: string;
  textColor?:string;
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
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.Banner}
          alt="Banner"
          fill
          className="hidden md:block object-contain"
          priority
        />
        <Image
          src={project.MobileBanner || project.Banner}
          alt="Mobile Banner"
          fill
          className="block md:hidden object-contain"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <div className="max-w-xl text-white space-y-6">
    

          <Image
            src={project.icon}
            alt="Logo"
            width={200}
            height={100}
            className="w-16 h-16 md:w-40 md:h-20 object-contain"
          />
     

          {/* Description */}
          <p className="text-base md:text-xl font-medium leading-relaxed">
            {project.description}
          </p>

          {/* Button */}
          <button  className={`flex ${project.textColor} cursor-pointer items-center gap-2 bg-white px-6 py-3 rounded-[10px] text-[14px] md:text-[16px] font-semibold hover:bg-gray-200 transition`}>
            {project.btnText}
            <Image
              src={project.upArrowSvg}
              alt="Arrow Icon"
              width={16}
              height={16}
              className="w-4 h-4 md:h-8"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;
