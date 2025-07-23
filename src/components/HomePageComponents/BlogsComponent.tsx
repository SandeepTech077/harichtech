"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import Title from "@/components/Title";

interface BlogPost {
  id: number;
  title: string;
  dateAndTimeDetail: string;
  Img: StaticImageData;
  description: string;
}

interface BlogData {
  title: string;
  subTitle: string;
  blogsSlider: BlogPost[];
}

interface BlogsComponentProps {
  data: BlogData;
}

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const BlogsComponent: React.FC<BlogsComponentProps> = ({ data }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Trigger animation when 30% of the element is in view
        className="flex justify-between items-end mb-10"
      >
        <div>
          <div className="inline-block mb-4">
            <Title title={data.title} />
          </div>
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover Our <span className="text-blue-600">Latest</span> <br />
            <span className="text-blue-600">Insights</span>
          </motion.h2>
        </div>

        {/* Navigation buttons (hidden on mobile) */}
        <motion.div
          className="hidden md:flex gap-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="swiper-button-prev-custom bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded shadow-md hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded shadow-md hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Swiper Slides */}
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
      >
        {data.blogsSlider.map((blog) => (
          <SwiperSlide key={blog.id}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              {/* Blog Image */}
              <div className="relative w-full h-80">
                <Image
                  src={blog.Img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Blog Content */}
              <div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-blue-600 text-sm mb-3">{blog.dateAndTimeDetail}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
                </div>

                {/* Read More */}
                <div className="flex justify-between items-center p-3 bg-[#E0E3E1] hover:bg-[#d0d3d1] transition">
                  <p className="font-medium text-gray-800 hover:text-blue-600">
                    Read More
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogsComponent;
