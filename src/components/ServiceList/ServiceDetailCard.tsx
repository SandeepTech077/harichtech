"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "../Title";
import Button from "../Button";

interface DataProps {
  title: string;
  subtitle: string;
  describation: string;
  btnTitle?: string;
  BannerRight?: StaticImageData;
}

interface ServiceDetailCardProps {
  data: DataProps;
}

const ServiceDetailCard = ({ data }: ServiceDetailCardProps) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
      {/* Content Section */}
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Title Badge */}
        <div className="w-fit">
          <Title title={data.title} />
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          {data.subtitle}
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-prose">
          {data.describation}
        </p>

        {/* Call to Action Button */}
        {data.btnTitle && (
          <div className="mt-2">
            <Button 
              text={data.btnTitle}
             href="/contact-us"
            />
          </div>
        )}
      </div>

      {/* Image Section */}
      {data.BannerRight && (
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <Image
              src={data.BannerRight}
              alt={`${data.title} - ${data.subtitle}`}
              width={600}
              height={300}
              className="w-full h-100 object-contain drop-shadow-lg"
              
            />
          </div>
        </div>
      )}
    </article>
  );
};

export default ServiceDetailCard;