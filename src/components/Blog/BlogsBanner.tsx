import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlogsBannerProps {
  title: string;
  Banner: StaticImageData;
  mobileBanner: StaticImageData;
}

const BlogsBanner: React.FC<BlogsBannerProps> = ({
  title,
  Banner,
  mobileBanner,
}) => {
  return (
    <div className="w-full mt-28 px-4 lg:px-16">
      {/* Title Section */}
      <div className="text-left py-6 px-4 bg-white ">
        <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold text-transparent bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text mb-4 sm:mb-6">
          {title}
        </h1>
        <div className="w-full mt-4 h-[1px] bg-[#AEC2FF] mx-auto mt-2 rounded-full" />
      </div>

      {/* Banner Image Section */}
      <div className="relative w-full  h-[200px]  sm:h-[250px] md:h-[400px] lg:h-[500px]">
        {/* Desktop Banner */}
        <Image
          src={Banner}
          alt={title}
          fill
          className="object-cover hidden md:block rounded-lg"
          priority
        />

        {/* Mobile Banner */}
        <Image
          src={mobileBanner}
          alt={title}
          fill
          className="object-cover block md:hidden rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default BlogsBanner;
