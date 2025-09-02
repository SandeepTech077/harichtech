"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { motion } from "framer-motion";

interface WorkItem {
  number: number;
  title: string;
  shortDescription: string;
  Image: StaticImageData;
  href: string;
}

interface PortfolioData {
  title: string;
  Subtitle: string;
  btnTitle: string;
  describation: string;
  works: WorkItem[];
}

interface PortfolioComponentProps {
  data: PortfolioData;
}

const PortfolioComponent: React.FC<PortfolioComponentProps> = ({ data }) => {
  const router = useRouter();

  const handleImageClick = (href: string) => {
    router.push(href);
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <div className="mx-auto mb-8" style={{ maxWidth: "200px" }}>
          <Title title={data.title} />
        </div>

        {/* Heading */}
        <h2 className="text-[30px] lg:text-[43px] font-bold mt-2 mx-auto">
          {data.Subtitle.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            {data.Subtitle.split(" ").slice(-1)}
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 text-black text-lg max-w-6xl">
          {data.describation}
        </p>
      </motion.div>

      {/* Top Two Images */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {data.works.slice(0, 2).map((work, index) => (
          <motion.div
            key={index}
            className="overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(work.href)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full relative">
              <Image
                src={work.Image}
                alt={work.title}
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Three Images */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {data.works.slice(2, 5).map((work, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(work.href)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full relative">
              <Image
                src={work.Image}
                alt={work.title}
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        className="flex justify-center my-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button text={data.btnTitle} href="/projects" />
      </motion.div>
    </motion.div>
  );
};

export default PortfolioComponent;
