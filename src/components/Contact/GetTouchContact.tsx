"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";
import Title from "../Title";

export interface SocialMediaItem {
  Icon: StaticImageData;
  link: string;
}

export interface GetTouchData {
  title: string;
  subTitle: string;
  describation: string;
  socilaMedia: SocialMediaItem[];
}

interface GetTouchContactProps {
  data: GetTouchData;
}

const GetTouchContact: React.FC<GetTouchContactProps> = ({ data }) => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-start justify-between px-6 lg:px-24 py-20 overflow-hidden">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 space-y-6 z-10">
        <div className="w-50">
          <Title title={data.title} />
        </div>

        <h1 className="text-[30px] md:text-[48px] font-bold text-black leading-tight">
          {(() => {
            const words = data.subTitle.trim().split(" ");
            const lastTwo = words.slice(-2).join(" ");
            const firstWords = words.slice(0, -2).join(" ");
            return (
              <>
                {firstWords} <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent ">{lastTwo}</span>
              </>
            );
          })()}
        </h1>

        <p className="text-gray-700 text-base max-w-md leading-relaxed">
          {data.describation}
        </p>
      </div>

      {/* Right Section: Social Icons */}
      <div className="hidden lg:flex flex-col items-center space-y-6 absolute right-12 top-1/2 transform -translate-y-1/2 z-10">
        {data.socilaMedia.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10  flex items-center justify-center hover:bg-blue-50 transition"
          >
            <Image
              src={social.Icon}
              alt={`social-icon-${index + 1}`}
              width={40}
              height={40}
              className="object-contain"
            />
          </a>
        ))}
      </div>

      {/* Optional: Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dotPattern"
              patternUnits="userSpaceOnUse"
              width="30"
              height="30"
            >
              <circle cx="1" cy="1" r="1" fill="#9ca3af" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>
    </section>
  );
};

export default GetTouchContact;
