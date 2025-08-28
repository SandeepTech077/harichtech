
import React from "react";

interface BlogHeadingProps {
  title: string;
}

const BlogHeading: React.FC<BlogHeadingProps> = ({ title }) => {
  return (
    <div className="w-full py-5 flex flex-col items-center justify-center text-center rounded-[10px] mt-20">
      <div className="text-left py-6 px-4 bg-white">
        <h1 className="text-[24px] md:text-[30px] lg:text-[48px] font-bold text-transparent bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text mb-4 sm:mb-6">
          {title}
        </h1>
        <div className="w-full h-[1px] bg-[#AEC2FF] mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default BlogHeading;
