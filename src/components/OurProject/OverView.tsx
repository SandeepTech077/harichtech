'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface OverViewData {
  leftSideImage: StaticImageData;
  rightContent: {
    title: string;
    titleTextColor?: string;
    describation: string[];
  };
}

interface OverViewProps {
  data: OverViewData;
}

const OverView: React.FC<OverViewProps> = ({ data }) => {
  const { leftSideImage, rightContent } = data;
  const { title, titleTextColor, describation } = rightContent;
  console.log(data,"titleTextColor")

  // Separate last word to color it
  const words = title.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <section className="w-full bg-white px-4 md:px-16 ">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8">
        {/* Left Side Image - Added sizes prop */}
        <div className="w-full md:w-1/2 h-[60vh]">
          <div className="w-full h-full relative rounded-xl overflow-hidden">
            <Image
              src={leftSideImage}
              alt="Overview"
              fill
              className="object-contain"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Side Content - Unchanged */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            {firstPart}{' '}
            <span className={titleTextColor ?? 'text-blue-600'}>
              {lastWord}
            </span>
          </h2>
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            {describation.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;