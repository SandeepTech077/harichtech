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
      className="w-full bg-white py-8 px-4 sm:py-10 sm:px-6 lg:py-16 lg:px-16"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Mobile Layout (< md) */}
        <div className="block md:hidden space-y-6">
          {/* Title and Headline */}
          <div className="text-center space-y-4">
            <div className="w-fit mx-auto">
              <Title title={title} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {headline.split("Harichtech")[0]}
              <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                Harichtech
              </span>
            </h2>
            <p className="text-[#02060B] text-sm leading-relaxed px-2">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 flex-wrap px-4">
            {buttons.map((btn, i) => (
              <Link
                key={btn.label}
                href={btn.link}
                className={`px-4 py-2.5 rounded-lg font-medium transition text-sm min-w-[120px] text-center ${
                  i === 0
                    ? "bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white shadow-md hover:opacity-90"
                    : "text-gray-800 hover:text-blue-600 border border-gray-300"
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </div>

          {/* Center Image */}
          <div className="px-2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={image}
                alt="Center Visual"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Features Grid - 2 columns on mobile */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 px-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#F1F1F1] rounded-xl p-4 min-h-[180px] flex flex-col justify-between"
              >
                <div className="text-xl font-bold text-black mb-2 text-right">
                  {feature.id}
                </div>
                <div className="flex mb-3 rounded-full bg-white w-10 h-10 justify-center items-center">
                  {typeof feature.icon === "string" ? (
                    <div 
                      className="w-5 h-5 flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: feature.icon }} 
                    />
                  ) : (
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
                <h3 className="text-base font-bold mb-1 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout (md only) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="text-center md:text-left space-y-4">
                <div className="w-fit mx-auto md:mx-0">
                  <Title title={title} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {headline.split("Harichtech")[0]}
                  <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                    Harichtech
                  </span>
                </h2>
                <p className="text-[#02060B] text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex justify-center md:justify-start gap-3 flex-wrap">
                {buttons.map((btn, i) => (
                  <Link
                    key={btn.label}
                    href={btn.link}
                    className={`px-5 py-3 rounded-lg font-medium transition text-sm ${
                      i === 0
                        ? "bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white shadow-md hover:opacity-90"
                        : "text-gray-800 hover:text-blue-600 border border-gray-300"
                    }`}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image}
                  alt="Center Visual"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-[#F1F1F1] rounded-xl p-5 min-h-[200px] flex flex-col justify-between"
                >
                  <div className="text-2xl font-bold text-black mb-2 text-right">
                    {feature.id}
                  </div>
                  <div className="flex mb-3 rounded-full bg-white w-12 h-12 justify-center items-center">
                    {typeof feature.icon === "string" ? (
                      <div 
                        className="w-6 h-6 flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: feature.icon }} 
                      />
                    ) : (
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+) - Original Layout */}
        <div className="hidden lg:block">
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
      </div>
    </motion.section>
  );
};

export default KnownMore