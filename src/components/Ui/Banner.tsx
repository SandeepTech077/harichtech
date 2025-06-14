"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface BannerProps {
  title: string;
  subTitle: string;
  banner: StaticImageData;
}

const Banner: React.FC<BannerProps> = ({ title, subTitle, banner }) => {
  return (
    <div className="relative  mx-auto h-[60dvh]  ">
      {/* Background Image */}
      <Image
        src={banner}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-[30px]"
        priority
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-lg md:text-2xl">{subTitle}</p>
      </div>
    </div>
  );
};

export default Banner;
