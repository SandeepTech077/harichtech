"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ColorItem {
  id: number;
  BgColor: string;
}

interface DesignData {
  title: string;
  textColor?: string;
  colors: ColorItem[];
  Banner: StaticImageData;
}

interface DesignComponentProps {
  data: DesignData;
}

const DesignComponent: React.FC<DesignComponentProps> = ({ data }) => {
  const { title, textColor, colors, Banner } = data;

  // Split last word to apply color
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <section className="w-full bg-white py-10 px-4 md:px-16">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-left">
        {firstPart}{" "}
        <span className={textColor ?? "text-blue-600"}>{lastWord}</span>
      </h2>

      {/* Color Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        {colors.map((color) => (
          <div key={color.id} className="flex flex-col items-center">
            <div
              className="w-full h-24 rounded-md"
              style={{ backgroundColor: color.BgColor }}
            />
            <p className="mt-2 text-[16px] font-bold text-black">
              {color.BgColor}
            </p>
          </div>
        ))}
      </div>

      {/* Banner Image */}
      <div className="flex justify-center">
        <div className="w-full  px-4">
          <Image
            src={Banner}
            alt="Design Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignComponent;
