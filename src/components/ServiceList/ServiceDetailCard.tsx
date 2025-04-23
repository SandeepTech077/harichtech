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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-14">
      {/* Left Section */}
      <div className="flex flex-col gap-4">
        <div className="w-36">
        <Title title={data.title} />
        </div>

        <h2 className="text-[30px] md:text-[48px] text-[#02060B] font-semibold">{data.subtitle}</h2>
        <p className="text-black text-[14px]">{data.describation}</p>
        {data.btnTitle && (
          <div className="mt-5">
  <Button text={data.btnTitle}/>
          </div>
      
        )}
      </div>

      {/* Right Section */}
      {data.BannerRight && (
        <div className="flex justify-center">
          <Image
            src={data.BannerRight}
            alt={data.title}
            width={500}
            height={400}
            className="w-full h-auto object-contain max-w-[500px]"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default ServiceDetailCard;
