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
    <div className="bg-[#F1F1F1] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
     <h3 className="text-[24px] font-semibold mb-4 bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
  {title}
</h3>

      <ul className="space-y-2 text-gray-700">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-center text-[16px]">
            • {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};
