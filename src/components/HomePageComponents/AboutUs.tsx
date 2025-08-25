"use client";

import Image from "next/image";
import React from "react";
import Title from "../Title"
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

// Define the prop types

interface ButtonTitle {
  title: string;
  href: string;
} 

interface AboutUsProps {
  data: {
    title: string;
    subTitle: string;
    describation: string;
    button: ButtonTitle;
    rightImage: string;
  };
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  return (
    <section className="w-full bg-white">
      <div className=" mx-auto flex flex-col-reverse md:flex-row gap-10">
        <div className="w-full md:w-1/2 space-y-6 text-left md:text-left">
          <span className="inline-block  text-gray-900 px-3 py-2 rounded-lg font-semibold text-sm ">
            <Title title={data.title} />
          </span>

          <h2 className="text-[30px] md:text-[45px] font-bold leading-snug text-left md:text-left" >
            {data.subTitle.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  word.toLowerCase() === "harichtech"
                    ? "text-[#2058FF]"
                    : undefined
                }
              >
                {word}{" "}
              </span>
            ))}
          </h2>

          {/* Right Image for mobile view */}
          <div className="w-full flex justify-center md:hidden">
            <Image
              src={data.rightImage}
              alt="About Harichtech"
              className="w-full h-auto object-contain max-h-[300px]"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-black  w-max-4xl text-[16px] md:text-[18px] text-left md:text-left">
            {data.describation}
          </p>

          {/* Button */}
          <Link href={data.button.href}>
            <button className="flex items-center gap-2 bg-gradient-to-l from-[#2058FF] to-[#004BC2] hover:opacity-90 transition px-6 py-3 text-white rounded-[10px] text-[16px] font-semibold shadow-md">
              {data.button.title}
              <MoveUpRight />
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center hidden md:flex">
          <Image
            src={data.rightImage}
            alt="About Harichtech"
            className="w-full h-auto lg:h-[70vh] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
