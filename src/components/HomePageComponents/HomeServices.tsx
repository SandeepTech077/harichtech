"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "@/components/Title";
interface ServiceItem {
  id: number;
  title: string;
  describation: string;
  Image: StaticImageData;
}

interface HomeServicesProps {
  data: {
    title: string;
    describation: string;
    GrapIcon: StaticImageData;
    HoverGraphIcon: StaticImageData;
    RightTopIcon: StaticImageData;
    HoverRightIcon: StaticImageData;
    serviceLists: ServiceItem[];
  };
}

const HomeServices: React.FC<HomeServicesProps> = ({ data }) => {
  const {
    title,
    describation,
    serviceLists,
    HoverRightIcon,
    RightTopIcon,

    GrapIcon,
    HoverGraphIcon,
  } = data;

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className=" mx-auto relative ">
      {/* Services Header */}
      <div className="mb-10 md:mb-12 flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left Side: Title + Heading */}
        <div className="px-0  lg:px-4 py-2 rounded-md mb-2 lg:mb-0 max-w-lg">
          <div className="w-54 mb-4 lg:mb-10">
            <Title title={title} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            We Provide The <span className="text-blue-500">Solution</span> For
            Our <span className="text-blue-500">Clients</span>
          </h2>
        </div>

        {/* Right Side: Description */}
        <div className="text-gray-600 max-w-2xl text-left lg:text-right">
          <p>{describation}</p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {serviceLists.map((service) => (
            <SwiperSlide key={service.id} className="flex h-full">
              <div className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden h-full flex flex-col  cursor-pointer">
                {/* Top Curve Border */}
                <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-xl bg-black group-hover:bg-blue-500 transition-colors duration-300 " />

                {/* Content Container */}
                <div className="p-4 flex flex-col h-auto ">
                  {/* Icon & Title with hover effect */}
                  <div className="flex items-center mb-4 relative">
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <Image
                        src={GrapIcon}
                        alt="Graph Icon"
                        className="absolute inset-0 w-full h-full group-hover:opacity-0"
                        width={40}
                        height={40}
                      />
                      <Image
                        src={HoverGraphIcon}
                        alt="Hover Graph Icon"
                        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h4 className="text-lg font-semibold ml-3">
                      {service.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {service.describation}
                  </p>

                  {/* Image Section with Hover Icon */}
                  <div className="relative rounded-lg overflow-hidden mt-auto">
                    <Image
                      src={service.Image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                      width={400}
                      height={250}
                    />
                    <div className="absolute bottom-0  right-0  rounded-full p-2 shadow-md">
                      <div className="relative w-14 h-14">
                        <Image
                          src={RightTopIcon}
                          alt="Navigation icon"
                          className="absolute inset-0 w-full h-full group-hover:hidden"
                        />
                        <Image
                          src={HoverRightIcon}
                          alt="Hover navigation icon"
                          className="absolute inset-0 w-full h-full hidden group-hover:block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end mt-4 gap-2   block hidden md:flex">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center bg-blue-500 text-white cursor-pointer"
          aria-label="Previous slide"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center bg-blue-500 text-white cursor-pointer"
          aria-label="Next slide"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HomeServices;
