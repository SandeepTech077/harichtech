'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PortfolioImage {
  id: number;
  title: string;
  subTitle: string;
  image: StaticImageData;
}

interface DesignData {
  title: string;
  subTitle: string;
  Images: PortfolioImage[];
}

interface PortfolioProps {
  design: DesignData;
}

const Portfolio: React.FC<PortfolioProps> = ({ design }) => {
  return (
    <section className="w-full px-5 md:px-10 lg:px-16">
      {/* Header Section */}
      <div className="text-left mb-6 lg:mb-12">
        <h2 className="text-2xl md:text-5xl  font-bold text-gray-900 mb-4">
          {design.title}
          <span 
            className="ml-2 bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(270deg, #2058FF 0%, #004BC2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {design.subTitle}
          </span>
        </h2>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {design.Images.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer "
          >
            {/* Card Container */}
            <div 
              className="bg-[#F3F3F3] rounded-3xl p-8 md:p-12 transition-transform duration-300 hover:scale-105"
            >
              {/* Project Title */}
              <div className="mb-6">
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(270deg, #2058FF 0%, #004BC2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.subTitle}
                </p>
              </div>

              {/* Device Mockups */}
              <div className="relative flex items-end justify-center">
                {/* Desktop/Laptop Mockup */}
                <div className="relative z-10">
                  <div className="bg-gray-900 rounded-lg p-2 shadow-2xl">
                    <div className="bg-white rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.title} desktop view`}
                        width={510}
                        height={250}
                        className="w-full h-auto object-cover"
                        priority={item.id <= 2}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Mockup */}
                <div className="absolute left-4 md:left-8 bottom-0 z-20">
                  <div className="bg-gray-900 rounded-xl p-1 shadow-2xl">
                    <div className="bg-white rounded-lg overflow-hidden w-16 md:w-20">
                      <Image
                        src={item.image}
                        alt={`${item.title} mobile view`}
                        width={80}
                        height={140}
                        className="w-full h-auto object-cover"
                        priority={item.id <= 2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
