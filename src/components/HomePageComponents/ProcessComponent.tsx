"use client";

import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import { motion } from "framer-motion";

interface ProcessData {
  title: string;
  subtitle: string;
  steps: string[]; // Only image paths
}

interface ProcessComponentProps {
  data: ProcessData;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProcessComponent: React.FC<ProcessComponentProps> = ({ data }) => {
  return (
    <div className="w-full ">
      {/* Title Section with scroll animation */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <div className="inline-block mb-4">
          <Title title={data.title} />
        </div>
        <h2 className="text-3xl font-bold">
          <span className="text-blue-600">Process</span>{" "}
          {data.subtitle.replace("Process", "")}
        </h2>
      </motion.div>

      {/* Steps with staggered animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.steps.map((imageSrc, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg transition duration-300 flex flex-col items-center text-center p-4"
          >
            <div className="w-full h-64 relative mb-4">
              <Image
                src={imageSrc}
                alt={`Step ${index + 1}`}
                fill
                className="object-contain rounded"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProcessComponent;
