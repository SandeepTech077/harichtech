"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
interface MainSectionProps {
  title: string;
  blueTitle: string;
  descriptions?: string[];
  rightSideImage: StaticImageData;
}

export const MainSection: React.FC<MainSectionProps> = ({
  title,
  blueTitle,
  descriptions = [], // 👈 fallback empty array
  rightSideImage,
}) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-[30px] md:text-[48px] font-bold text-gray-900 mb-10 leading-snug text-center lg:text-left">
          {title}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            {blueTitle}
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6 text-black text-[18px] leading-relaxed">
            {descriptions.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={rightSideImage}
              alt="Service Illustration"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
