import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-[#F7FAFF] rounded-xl shadow-[0_4px_20px_rgba(0,75,194,0.15)] hover:shadow-[0_6px_25px_rgba(0,75,194,0.25)] transition-shadow duration-300 flex flex-col h-full p-12">
      <h3 className="text-[24px] font-semibold mb-3 bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
        {title}
      </h3>

      <p className="text-gray-700 text-[15px] leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};
