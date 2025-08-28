"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface BuildModernSectionProps {
  title: string;
  subtitle: string;
  descriptions: string[];
  svgIcon: StaticImageData | string;
  alt?: string;
}

export const BuildModernSection: React.FC<BuildModernSectionProps> = ({
  title,
  subtitle,
  descriptions,
  svgIcon,
}) => {
  return (
    <motion.section
      className="py-16 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <motion.div
          className="space-y-1"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#02060B]">
            {title}
          </h2>
          <p className="text-lg bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent text-[30px] md:text-[40px] font-bold">
            {subtitle}
          </p>

          <div className="space-y-3">
            {descriptions.map((desc, index) => (
              <motion.p
                key={index}
                className="text-gray-700 mt-10 text-[18px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                {desc}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Image src={svgIcon} alt="react" className="w-full h-auto" />
        </motion.div>
      </div>
    </motion.section>
  );
};
