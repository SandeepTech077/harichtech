"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  image: StaticImageData;
  title: string;
  dateAndBy: string;
  descibation: string;
  btnTitle: string;
  btnArrow: StaticImageData;
  showSectionTitle?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  dateAndBy,
  descibation,
  btnTitle,
  btnArrow,
  showSectionTitle = false,
}) => {
  return (
    <>
      {showSectionTitle && (
        <motion.div
          className="col-span-full text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[30px] lg:text-[48px] font-bold">
            Recent{" "}
            <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      >
        {/* Blog Image */}
        <div className="relative h-74 w-full">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>

        {/* Blog Content */}
        <div className="">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent text-sm mb-3">
              {dateAndBy}
            </p>
            <p className="text-gray-700 mb-4 line-clamp-3">{descibation}</p>
          </div>

          <Link
            href={`/blog/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center text-gray-800 hover:text-gray-600 transition-colors bg-gray-300 w-full p-4"
          >
            <span className="font-medium flex-1">{btnTitle}</span>
            <span>
              <Image src={btnArrow} alt="Arrow" width={16} height={16} />
            </span>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
