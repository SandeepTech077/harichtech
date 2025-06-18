import React from "react";

interface SectionTitleProps {
  title: string;
  highlight?: string;
}

const Title: React.FC<SectionTitleProps> = ({ title, highlight }) => {
  return (
    <h2 className="text-lg md:text-xl font-bold text-gray-800 bg-[#F1F1F1] px-8 py-2 rounded-[10px]">
      {title}{" "}
      {highlight && (
        <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] ">{highlight}</span>
      )}
    </h2>
  );
};

export default Title;
