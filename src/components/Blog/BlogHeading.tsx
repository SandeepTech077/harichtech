
import React from "react";

interface BlogHeadingProps {
  title: string;
}

const BlogHeading: React.FC<BlogHeadingProps> = ({ title }) => {
  return (
    <div className="w-full py-5  flex flex-col items-center justify-center text-center rounded-[10px] mt-12 lg:mt-30 ">
      <div className=" w-full text-left py-16 px-4 bg-[#F1F1F1] rounded-[10px]">
        <h1 className=" max-w-7xl m-auto text-[24px] md:text-[30px] lg:text-[48px] font-bold text-black  sm:mb-6">
          {title}
        </h1>
        <div className="" />
      </div>
    </div>
  );
};

export default BlogHeading;
