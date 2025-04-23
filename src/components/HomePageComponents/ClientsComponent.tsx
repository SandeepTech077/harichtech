"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


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

const ClientsComponent: React.FC<ClientsComponentProps> = ({ data }) => {
  return (
    <div className="w-full">
      {/* Clients Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <div className="inline-block mb-4">
            <Title title={data.title} />
          </div>
          <h2 className="text-3xl font-bold">
            See What <span className="text-blue-600">Our Clients</span> <br />
            Have to Say
          </h2>
        </div>

        {/* Navigation buttons (hidden on mobile) */}
        <div className="hidden lg:flex gap-2">
          <button
            className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded"
            // You can add Swiper's navigation controls here if needed
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded"
            // You can add Swiper's navigation controls here if needed
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Slider using Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
      >
        {data.testimonialsSlider.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-[#F1F1F1] p-8 rounded-[20px]">
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={testimonial.clipImg}
                  alt="imgclip"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              {/* Testimonial content */}
              <p className="text-[#02060B] mb-8 border-b-1 py-10">
                {testimonial.description.replace(/[""]/g, "")}
              </p>

              {/* Client info and rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {testimonial.img && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>

                {/* 5-star rating */}
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsComponent;
