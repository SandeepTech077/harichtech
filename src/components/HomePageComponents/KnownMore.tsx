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
      className="w-full bg-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 overflow-hidden"
    >
      <div className=" mx-auto">
        {/* Mobile Layout (< md) */}
        <div className="block md:hidden">
          <div className="space-y-6">
            {/* Title and Headline */}
            <div className="text-center space-y-4">
              <div className="w-fit mx-auto">
                <Title title={title} />
              </div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 leading-tight px-2">
                {headline.split("Harichtech")[0]}
                <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                  Harichtech
                </span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed px-4 max-w-md mx-auto">
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 px-4">
              {buttons.map((btn, i) => (
                <Link
                  key={btn.label}
                  href={btn.link}
                  className={`px-4 py-2.5 rounded-lg font-medium transition text-sm flex-1 max-w-[140px] text-center ${
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
            <div className="px-4">
              <div className="relative rounded-lg overflow-hidden shadow-md mx-auto max-w-sm">
                <Image
                  src={image}
                  alt="Center Visual"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Features Grid - Responsive */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 px-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-gray-50 rounded-xl p-4 min-h-[160px] flex flex-col justify-between"
                >
                  <div className="text-lg font-bold text-black mb-2 text-right">
                    {feature.id}
                  </div>
                  <div className="flex mb-3 rounded-full bg-white w-10 h-10 justify-center items-center shadow-sm">
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
                  <h3 className="text-sm font-bold mb-1 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:block lg:hidden">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-6">
              <div className="w-fit mx-auto">
                <Title title={title} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {headline.split("Harichtech")[0]}
                <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                  Harichtech
                </span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
              
              {/* Buttons */}
              <div className="flex justify-center gap-4">
                {buttons.map((btn, i) => (
                  <Link
                    key={btn.label}
                    href={btn.link}
                    className={`px-6 py-3 rounded-lg font-medium transition text-sm ${
                      i === 0
                        ? "bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white shadow-md hover:opacity-90"
                        : "text-gray-800 hover:text-blue-600 border border-gray-300"
                    }`}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left - Image */}
              <div className="order-2 md:order-1">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image}
                    alt="Center Visual"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right - Features */}
              <div className="order-1 md:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-gray-50 rounded-xl p-5 min-h-[180px] flex flex-col justify-between"
                  >
                    <div className="text-xl font-bold text-black mb-2 text-right">
                      {feature.id}
                    </div>
                    <div className="flex mb-3 rounded-full bg-white w-12 h-12 justify-center items-center shadow-sm">
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
                    <h3 className="text-base font-bold mb-1 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Left Cards */}
            <div className="col-span-3 space-y-6">
              {[features[0], features[2]].map((feature) => (
                <div
                  key={feature.id}
                  className="bg-gray-50 rounded-xl p-6 min-h-[320px] xl:min-h-[430px] flex flex-col justify-between"
                >
                  <div className="text-3xl xl:text-5xl 2xl:text-6xl text-right font-bold text-black mb-4">
                    {feature.id}
                  </div>
                  <div className="flex mb-4 rounded-full bg-white w-14 h-14 xl:w-16 xl:h-16 justify-center items-center shadow-sm">
                    {typeof feature.icon === "string" ? (
                      <div 
                        className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: feature.icon }} 
                      />
                    ) : (
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={28}
                        height={28}
                      />
                    )}
                  </div>
                  <h3 className="text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm xl:text-base leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Content */}
            <div className="col-span-6 text-center space-y-6">
              <div className="w-fit mx-auto">
                <Title title={title} />
              </div>

              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
                {headline.split("Harichtech")[0]}
                <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                  Harichtech
                </span>
              </h2>
              <p className="text-gray-600 text-base xl:text-lg leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>

              <div className="flex justify-center gap-4 pt-2">
                {buttons.map((btn, i) => (
                  <Link
                    key={btn.label}
                    href={btn.link}
                    className={`px-6 py-3 rounded-lg font-medium transition text-sm xl:text-base ${
                      i === 0
                        ? "bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white shadow-md hover:opacity-90"
                        : "text-gray-800 hover:text-blue-600 border border-gray-300"
                    }`}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image}
                    alt="Center Visual"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="col-span-3 space-y-6">
              {[features[1], features[3]].map((feature) => (
                <div
                  key={feature.id}
                  className="bg-gray-50 rounded-xl p-6 min-h-[320px] xl:min-h-[430px] flex flex-col justify-between"
                >
                  <div className="text-3xl xl:text-5xl 2xl:text-6xl text-right font-bold text-black mb-4">
                    {feature.id}
                  </div>
                  <div className="flex mb-4 rounded-full bg-white w-14 h-14 xl:w-16 xl:h-16 justify-center items-center shadow-sm">
                    {typeof feature.icon === "string" ? (
                      <div 
                        className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: feature.icon }} 
                      />
                    ) : (
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={28}
                        height={28}
                      />
                    )}
                  </div>
                  <h3 className="text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm xl:text-base leading-relaxed text-gray-600">
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

export default KnownMore;