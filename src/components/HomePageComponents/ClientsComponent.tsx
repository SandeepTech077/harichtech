"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from 'swiper';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  description: string;
  clipImg: StaticImageData;
  img: StaticImageData;
}

interface ClientData {
  title: string;
  subTitle: string;
  testimonialsSlider: Testimonial[];
}

interface ClientsComponentProps {
  data: ClientData;
}

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ClientsComponent: React.FC<ClientsComponentProps> = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.9 }}
      variants={fadeUp}
    >
      {/* Clients Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <div className="inline-block mb-4">
            <Title title={data.title} />
          </div>
          <h2 className="text-[30px] lg:text-[48px] font-bold">
            See What <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">Our Clients</span> <br />
            Have to Say
          </h2>
        </div>

        {/* Navigation buttons */}
        <div className="hidden lg:flex gap-4">
          {/* Left arrow */}
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="bg-gradient-to-l cu from-[#2058FF] to-[#004BC2] text-white w-14 h-14 flex items-center justify-center rounded-[10px] shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white w-14 h-14 flex items-center justify-center rounded-[10px] shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Slider */}
      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance} // Directly setting swiper instance using setState
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { 
            slidesPerView: 2,
            spaceBetween: 20 
          },
          1024: { 
            slidesPerView: 3,
            spaceBetween: 30 
          },
        }}
        loop={true}
        className="testimonials-slider"
      >
        {data.testimonialsSlider.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-auto">
            <motion.div
              className="bg-[#F1F1F1] p-6 sm:p-8 rounded-[20px] h-full flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative w-12 h-12 mb-4 flex-shrink-0">
                <Image
                  src={testimonial.clipImg}
                  alt="imgclip"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              {/* Description with fixed height */}
              <div className="flex-grow mb-6">
                <p className="text-[#02060B] text-[15px] leading-relaxed line-clamp-6 h-[200px] overflow-hidden">
                  {testimonial.description.replace(/[""]/g, "")}
                </p>
              </div>

              {/* Bottom section with consistent spacing */}
              <div className="border-t border-gray-300 pt-6 mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {testimonial.img && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm sm:text-base truncate">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm truncate">{testimonial.position}</p>
                    </div>
                  </div>

                  <div className="flex text-yellow-400 flex-shrink-0 ml-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Navigation Dots (Optional) */}
      <div className="flex justify-center mt-6 lg:hidden">
        <div className="flex gap-2">
          {data.testimonialsSlider.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperInstance?.slideTo(index)} // Using state
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsComponent;
