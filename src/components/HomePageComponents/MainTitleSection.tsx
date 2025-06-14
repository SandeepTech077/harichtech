"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import RoutesLogo from "../../../public/SVG/Routelogo.svg";
import Button from "@/components/Button";
import { motion } from "framer-motion";

interface MainTitleSectionProps {
  data: {
    subTitle: string;
    btnButton: string;
    Img1: string | StaticImageData;
    Img2: string | StaticImageData;
  };
}

const MainTitleSection: React.FC<MainTitleSectionProps> = ({ data }) => {
  const { subTitle, btnButton, Img1, Img2 } = data;

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative py-16 px-5 overflow-hidden">
      <div className="w-full max-w-5xl text-left">
        {/* Main Title Section with animation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold leading-tight">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-2 sm:mb-4"
            >
              Thinking The High Quality
            </motion.div>
            
            {/* Mobile Layout - Stack elements vertically */}
            <div className="flex flex-col sm:flex-row sm:justify-left sm:items-center sm:flex-wrap mt-2 sm:mt-4 space-y-2 sm:space-y-0">
              <div className="flex items-center justify-start flex-wrap">
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent mr-2"
                >
                  Websites
                </motion.span>
                {Img1 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="relative inline-block h-10 w-20 sm:h-12 sm:w-24 md:h-14 md:w-36 overflow-hidden rounded-md mx-1 sm:mx-3"
                  >
                    <Image
                      src={Img1}
                      alt="Website Image"
                      width={190}
                      height={50}
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                )}
              </div>
              
              <div className="flex items-center justify-start flex-wrap">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="mx-2"
                >
                  and
                </motion.span>
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent mr-2"
                >
                  App
                </motion.span>
                {Img2 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    className="relative inline-block h-10 w-20 sm:h-12 sm:w-24 md:h-14 md:w-36 overflow-hidden rounded-md mx-1 sm:mx-3"
                  >
                    <Image
                      src={Img2}
                      alt="App Image"
                      width={190}
                      height={50}
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </h1>
        </motion.div>

        {/* Subtitle with animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-full max-w-3xl mx-auto mt-6 sm:mt-8 text-left sm:text-right"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {subTitle}
          </p>
        </motion.div>

        {/* Button with animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="w-full flex max-w-3xl justify-start sm:justify-end mt-6 sm:mt-8 mx-auto"
        >
          <Button text={btnButton} />
        </motion.div>
      </div>

      {/* Decorative elements - responsive */}
      {/* Vertical line - right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-0 right-5 sm:right-30 w-[1px] h-32 sm:h-92 bg-[#999999] opacity-50"
      />

      {/* Light background circular element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        className="absolute top-0 left-0 w-20 h-32 sm:w-32 sm:h-64 md:w-64 md:h-96 -z-10"
      >
        <div className="w-full h-full border-2 border-[#999999] rounded-full transform translate-x-[-50%] translate-y-[-30%]"></div>
      </motion.div>

      {/* Bottom-left logo with lines */}
      <div className="absolute bottom-10 left-5 sm:left-40 flex items-end">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="w-20 h-20 sm:w-26 sm:h-26 flex items-center justify-center z-10"
        >
          <Image
            src={RoutesLogo}
            alt="Routes Logo"
            width={80}
            height={80}
            className="sm:w-[120px] sm:h-[120px] z-20"
          />
        </motion.div>

        {/* Horizontal lines - responsive */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ delay: 2.4, duration: 1.2 }}
          style={{ originX: 0 }}
          className="absolute bottom-[32px] sm:bottom-[50px] left-5 sm:left-10 h-[1px] w-[calc(100vw-40px)] sm:w-screen bg-[#999999] z-0 opacity-50"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ delay: 2.4, duration: 1.2 }}
          style={{ originX: 1 }}
          className="absolute bottom-[32px] sm:bottom-[50px] right-5 sm:right-10 h-[1px] w-[calc(100vw-40px)] sm:w-screen bg-[#999999] z-0 opacity-50"
        />

        {/* Vertical line - responsive */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.5 }}
          transition={{ delay: 2.6, duration: 1.2 }}
          style={{ originY: 1 }}
          className="absolute bottom-10 left-[32px] sm:left-[50px] w-[1px] h-[calc(100vh-120px)] sm:h-screen bg-[#999999] z-0 opacity-50"
        />
      </div>
    </div>
  );
};

export default MainTitleSection;