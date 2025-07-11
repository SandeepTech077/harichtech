"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Title from "../Title";

interface PortfolioImage {
  id: string;
  title: string;
  subTitle: string;
 
  image: StaticImageData;
}

interface DesignData {
  title: string;
  subTitle: string;
   subTitle2:string;
  Images: PortfolioImage[];
}

interface PortfolioProps {
  design: DesignData;
}

const Portfolio: React.FC<PortfolioProps> = ({ design }) => {
  return (
    <div className="px-4 lg:px-20 mx-auto px-4 ">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="w-50 item-center justify-center mx-auto mb-10">
          <Title title={design.subTitle2} />
        </div>
        <h2 className="text-2xl md:text-5xl  font-bold text-gray-900 mb-4">
          {design.title}
          <span
            className="ml-2 bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(270deg, #2058FF 0%, #004BC2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {design.subTitle}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {design.Images.map((item) => (
          <Link href={`/projects/${item.id}`} key={item.id}>
            <div className="group hover:scale-105 transition duration-300 cursor-pointer bg-[#F3F3F3] rounded-lg">
              <div className=" rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden  relative ">
                {/* Right and Bottom gradient border */}
                <div
                  className="absolute top-0 right-0 w-1.5 h-full rounded-r-3xl"
                  style={{
                    background:
                      "linear-gradient(270deg, #2058FF 0%, #004BC2 100%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-1.5 rounded-b-3xl"
                  style={{
                    background:
                      "linear-gradient(270deg, #2058FF 0%, #004BC2 100%)",
                  }}
                />

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3
                      className="text-3xl font-semibold text-gray-900 mb-2"
                      style={{
                        background:
                          "linear-gradient(270deg, #2058FF 0%, #004BC2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.subTitle}</p>
                  </div>

                  <div className="relative">
                    {/* Desktop Mockup */}
                    <div className="relative mb-6">
                        <div className=" rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover"
                            priority
                          />
                        </div>
                    </div>

              
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
