import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlogsBannerProps {
  title: string;
  banner: StaticImageData;
  mobileBanner: StaticImageData;
}

const BlogsBanner: React.FC<BlogsBannerProps> = ({ title, banner, mobileBanner }) => {
  return (
    <div className="w-full mt-28 px-4 lg:px-16">
      {/* Title Section */}
      <div className="text-left py-6 px-4 bg-white ">
        <h1 className="text-[28px] lg:text-[40px] font-semibold text-[#1599FF]">
          {title}
        </h1>
        <div className="w-full mt-4 h-[1px] bg-[#AEC2FF] mx-auto mt-2 rounded-full" />
      </div>

      {/* Banner Image Section */}
      <div className="relative w-full  h-[200px]  sm:h-[250px] md:h-[400px] lg:h-[500px]">
        {/* Desktop Banner */}
        <Image
          src={banner}
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
