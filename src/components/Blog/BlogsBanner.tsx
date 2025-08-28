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
    <div className="w-full px-4 lg:px-16">
      {/* Banner Image Section */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px]">
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
