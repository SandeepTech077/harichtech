"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  dateAndBy: string;
  description: string;
  btnTitle: string;
  btnArrow: StaticImageData;
  showSectionTitle?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  title,
  dateAndBy,
  description,
  btnTitle,
  btnArrow,
  showSectionTitle = false,
}) => {
  return (
    <>
      {showSectionTitle && (
        <motion.div
          className="col-span-full text-left mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
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
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 
                   w-full max-w-sm mx-auto sm:max-w-none
                   flex flex-col h-full"
      >
        {/* Blog Image */}
        <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64 flex-shrink-0 overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Blog Content & Button */}
        <div className="flex flex-col justify-between flex-1">
          {/* Content */}
          <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 
                          line-clamp-2 leading-tight">
              {title}
            </h3>

            <p className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent 
                          text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
              {dateAndBy}
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed 
                          line-clamp-3 sm:line-clamp-4 md:line-clamp-3 flex-grow">
              {description}
            </p>
          </div>

          {/* Read More Button */}
          <div className="border-t border-gray-100">
            <Link
              href={`/blog/${id}`}
              className="inline-flex items-center text-gray-800 hover:text-blue-600 
                        transition-all duration-200 bg-gray-100 hover:bg-gray-200 
                        w-full p-3 sm:p-4 group"
            >
              <span className="font-medium text-sm sm:text-base flex-1 text-left">
                {btnTitle}
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-200 ml-2">
                <Image 
                  src={btnArrow} 
                  alt="Arrow" 
                  width={14} 
                  height={14}
                  className="sm:w-4 sm:h-4"
                />
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};
