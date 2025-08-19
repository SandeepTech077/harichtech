import React from "react";
import Image, { StaticImageData } from "next/image";

interface BuildModernSectionProps {
  title: string;
  subtitle: string;
  descriptions: string[];
  svgIcon: StaticImageData | string;
  alt?: string;
}

export const BuildModernSection: React.FC<BuildModernSectionProps> = ({
  title,
  subtitle,
  descriptions,
  svgIcon,
}) => {
  return (
    <section className="py-16 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#02060B]">
            {title}
          </h2>
          <p className="text-lg bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent text-[30px] md:text-[40px] font-bold">
            {subtitle}
          </p>

          <div className="space-y-3">
            {descriptions.map((desc, index) => (
              <p key={index} className="text-gray-700 mt-10 text-[18px]">
                {desc}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image src={svgIcon} alt="react" className="w-full  h-auto" />
        </div>
      </div>
    </section>
  );
};
