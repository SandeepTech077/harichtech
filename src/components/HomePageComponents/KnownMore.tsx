"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { motion, useInView } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

interface KnownMoreProps {
  data: {
    title: string;
    Image1: StaticImageData;
    Image2: StaticImageData;
    describation: string;
    btnTitle: string;
  };
}

const KnownMore: React.FC<KnownMoreProps> = ({ data }) => {
  const { title, Image1, Image2, describation, btnTitle } = data;
  
  // Create a ref for the section and use useInView hook
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
      className="w-full relative overflow-hidden h-full py-16"
    >
      {/* Right vertical line for desktop */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        style={{ originY: 1 }}
        className="hidden lg:block absolute top-0 right-[120px] w-[1px] h-full bg-[#999999] z-0 opacity-50"
      />

      <div className="h-full mx-auto">
        {/* Mobile View */}
        <div className="flex flex-col lg:hidden items-center text-center">
          <motion.div variants={item} className="w-full flex flex-col items-end text-right">
            <div className="w-36">
              <Title title={title} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mt-4">
              Accelerate Your Business with{" "}
              <span className="text-blue-600">Harichtech</span>
            </h1>
          </motion.div>

          <motion.div variants={scaleIn} className="w-full my-6 relative">
            <Image
              src={Image1}
              alt="Main Image"
              width={600}
              className="w-full rounded-xl object-contain"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={Image2}
                alt="Card Image"
                className="w-full h-full object-cover"
                fill
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-left text-gray-700 mb-6 leading-relaxed">
                {describation}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button text={btnTitle} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Desktop View Text */}
        <motion.div
          variants={item}
          className="hidden lg:flex w-full justify-end pr-34 text-right"
        >
          <div className="max-w-[40%] text-end h-40">
            <div className="inline-block mb-4">
              <Title title={title} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-snug">
              Accelerate Your Business with{" "}
              <span className="text-blue-600">Harichtech</span>
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {describation}
            </p>
          </div>
        </motion.div>

        {/* Desktop View Images */}
        <div className="hidden lg:flex flex-row items-center gap-16 relative w-full">
          <motion.div variants={item} className="w-[50%] relative mt-10">
            <div className="relative">
              <Image
                src={Image1}
                alt="Main Image"
                className="w-full rounded-xl object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#2575FC] opacity-20 rounded-full z-0"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              variants={scaleIn}
              transition={{ delay: 0.5 }}
              className="absolute transform top-52 left-124 w-[904px] overflow-hidden bg-white z-10"
            >
              <div className="relative w-full h-100">
                <Image
                  src={Image2}
                  alt="Floating Card"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-8">{describation}</p>
               
                  <Button text={btnTitle} />
            
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default KnownMore;