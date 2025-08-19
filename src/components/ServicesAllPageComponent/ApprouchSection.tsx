"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ApprouchSectionProps {
  title: string;
  blueTitle: string;
  descriptions: string[];
  rightImage: StaticImageData;
  points?: {
    title: string;
    bulletPoints: string[];
  } | null;
}

export const ApprouchSection: React.FC<ApprouchSectionProps> = ({
  title,
  blueTitle,
  descriptions,
  rightImage,
  points,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-[30px] lg:text-[40px] w-max-3xl font-bold text-gray-900 mb-6">
            {title} <span className="text-blue-600">{blueTitle}</span>
          </h2>

          {descriptions.map((desc, i) => (
            <p key={i} className="text-[18px] text-gray-600 mb-4 leading-relaxed">
              {desc}
            </p>
          ))}

          {points && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {points.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {points.bulletPoints.map((point, i) => (
                  <li key={i} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={rightImage}
            alt="Approach Illustration"
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};
