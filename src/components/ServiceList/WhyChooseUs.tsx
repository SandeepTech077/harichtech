"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import { motion } from "framer-motion";

interface WhyUsListItem {
  id: number;
  describation: string;
  LineImage: StaticImageData;
}

interface WhyUsProps {
  whyUsData: {
    title: string;
    subTitle: string;
    titleDescribation: string;
    describation: string;
    list: WhyUsListItem[];
    rightImg: StaticImageData;
  };
}

const WhyChooseUs: React.FC<WhyUsProps> = ({ whyUsData }) => {
  return (
    <div className="py-6 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title + Descriptions */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="inline-block mb-3">
          <Title title={whyUsData.title} />
        </div>
        <h2 className="text-3xl font-bold mb-6">
          Why Choose{" "}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            Harichtech?
          </span>
        </h2>
        <p className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent font-bold text-[16px]">
          {whyUsData.titleDescribation}
        </p>
        <p className="text-gray-700 mb-10">{whyUsData.describation}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - List */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-12">
            {whyUsData.list.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="font-medium mb-1">{item.describation}</p>
                  <div className="w-full h-4 mt-2 relative">
                    <Image
                      src={item.LineImage}
                      alt="Dotted line"
                      width={350}
                      height={4}
                      className="w-full"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center hidden lg:block"
        >
          <div className="relative w-full h-[400px]">
            <Image
              src={whyUsData.rightImg}
              alt="Why choose us"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
