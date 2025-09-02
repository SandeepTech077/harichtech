"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import Button from "../Button";
import Link from "next/link";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  id: number;
  Img: StaticImageData;
  alt: string;
  url: string;
}

interface PortfolioSectionProps {
  portfolioData: {
    title: string;
    subTitle: string;
    btnTitle: string;
    card: PortfolioCardProps[];
  };
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioData,
}) => {
  return (
    <div className="pb-10 mx-auto">
      {/* Header section */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <div className="inline-block bg-gray-100 px-4 py-2 rounded-md mb-3">
            <Title title={portfolioData.title} />
          </div>
          <h2 className="text-[43px] font-bold">
            Discover Our{" "}
            <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
              Digital
              <br />
              Masterpieces
            </span>
          </h2>
        </div>
        <div className="hidden lg:block">
          <Button text={portfolioData.btnTitle} href="/projects" />
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.card.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link
              href={work.url}
              className="rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="h-full relative">
                <Image
                  src={work.Img}
                  alt={work.alt}
                  className="object-contain"
                />
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Mobile button */}
        <div className="block lg:hidden text-center mt-4">
          <Button text={portfolioData.btnTitle} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
