"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Title from "@/components/Title";
import Button from "@/components/Button";

interface WorkItem {
   number: number;
  title: string;
  shortDescription: string;
  Image: StaticImageData;
  href: string;
}

interface PortfolioData {
 
  title: string;
  Subtitle: string;
  btnTitle: string;
  describation: string;
  works: WorkItem[];
}

interface PortfolioComponentProps {
  data: PortfolioData;
}

const PortfolioComponent: React.FC<PortfolioComponentProps> = ({ data }) => {
  const router = useRouter();

  const handleImageClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="w-full">
      <div className="text-center">
        {/* Title */}
        <div className="mx-auto mb-8" style={{ maxWidth: "200px" }}>
          <Title title={data.title} />
        </div>

        {/* Heading */}
        <h2 className="text-[30px] lg:text-[48px] font-bold mt-2 mx-auto">
          {data.Subtitle.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            {data.Subtitle.split(" ").slice(-1)}
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 text-black text-lg max-w-6xl">
          {data.describation}
        </p>
      </div>

      {/* Top Two Images in Two Columns */} 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {data.works.slice(0, 2).map((work, index) => (
          <div
            key={index}
            className="overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(work.href)}
          >
            <div className="h-full relative">
              <Image
                src={work.Image}
                alt={work.title}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Three Images in Three Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data.works.slice(2, 5).map((work, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(work.href)}
          >
            <div className="h-full relative">
              <Image
                src={work.Image}
                alt={work.title}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center my-16">
        <Button text={data.btnTitle} href="/projects" />
      </div>
    </div>
  );
};

export default PortfolioComponent;
