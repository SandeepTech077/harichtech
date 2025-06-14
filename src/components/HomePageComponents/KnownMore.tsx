"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Title from "../Title";

interface Feature {
  id: string;
  icon: StaticImageData | string;
  title: string;
  description: string;
}

interface Button {
  label: string;
  link: string;
}

interface KnownMoreProps {
  data: {
    title: string;
    headline: string;
    description: string;
    buttons: Button[];
    features: Feature[];
    image: StaticImageData;
  };
}

const KnownMore: React.FC<KnownMoreProps> = ({ data }) => {
  const { title, headline, description, buttons, features, image } = data;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="w-full bg-white py-10 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-3 space-y-4">
            {[features[0], features[2]].map((feature) => (
              <div
                key={feature.id}
                className="bg-[#F1F1F1] rounded-xl p-4 sm:p-5 lg:p-6 min-h-[160px] lg:min-h-[420px] flex flex-col justify-between"
              >
                <div className="text-[24px] sm:text-[30px] lg:text-[64px] text-right font-bold text-black mb-2">
                  {feature.id}
                </div>
                <div className="flex mb-3 rounded-full bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 justify-center items-center">
                  {typeof feature.icon === "string" ? (
                    <div dangerouslySetInnerHTML={{ __html: feature.icon }} />
                  ) : (
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={28}
                      height={28}
                    />
                  )}
                </div>
                <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold mb-1">
                  {feature.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 text-center space-y-4 w-full">
            <div className="w-fit mx-auto">
              <Title title={title} />
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-gray-900 py-1">
              {headline.split("Harichtech")[0]}
              <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                Harichtech
              </span>
            </h2>
            <p className="text-[#02060B] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            <div className="flex justify-center gap-3 flex-wrap pt-2">
              {buttons.map((btn, i) => (
                <Link
                  key={btn.label}
                  href={btn.link}
                  className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                    i === 0
                      ? "bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white shadow-md hover:opacity-90"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            <div className="w-full pt-4">
              <div className="rounded-lg overflow-hidden shadow-md mx-auto max-w-full">
                <Image
                  src={image}
                  alt="Center Visual"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-3 space-y-4">
            {[features[1], features[3]].map((feature) => (
              <div
                key={feature.id}
                className="bg-[#F1F1F1] rounded-xl p-4 sm:p-5 lg:p-6 min-h-[160px] lg:min-h-[420px] flex flex-col justify-between"
              >
                <div className="text-[24px] sm:text-[30px] lg:text-[64px] text-right font-bold text-black mb-2">
                  {feature.id}
                </div>
                <div className="flex mb-3 rounded-full bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 justify-center items-center">
                  {typeof feature.icon === "string" ? (
                    <div dangerouslySetInnerHTML={{ __html: feature.icon }} />
                  ) : (
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={28}
                      height={28}
                    />
                  )}
                </div>
                <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold mb-1 text-left">
                  {feature.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-left">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default KnownMore;
