import React from "react";

interface TechStackCardProps {
  title: string;
  technologies: string[];
}

export const TechStackCard: React.FC<TechStackCardProps> = ({
  title,
  technologies,
}) => {
  return (
    <div className="h-full flex flex-col justify-between bg-[#F1F1F1] rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Title */}
      <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold mb-3 sm:mb-4 bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent leading-snug">
        {title}
      </h3>

      {/* Tech list */}
      <ul className="space-y-1.5 sm:space-y-2 text-gray-700 flex-1">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="flex items-start text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed"
          >
            • {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};
