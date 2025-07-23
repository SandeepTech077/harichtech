"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";

interface Service {
  id: number;
  title: string;
  type:string;
  description: string;
  btnTitle: string;
  serviceIcons: string[];
  ImgBanner?: StaticImageData;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="space-y-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col md:flex-row lg:gap-12 items-center"
        >
          {/* Left content (on mobile, it's below the image) */}
          <div className="w-full md:w-1/2">
            {/* Image on mobile */}
            {service.ImgBanner ? (
              <div className="w-full md:hidden relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={service.ImgBanner}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            )}

            <h2 className="text-[32px] lg:text-[34px] font-bold mt-4">
              {service.title}
            </h2>

            {/* Service icons */}
            <div className="flex gap-3 flex-wrap my-4">
              {service.serviceIcons.map((icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className="w-14 h-14 rounded-md flex items-center justify-center bg-gray-100"
                >
                  <div className="relative w-8 h-8">
                    <Image
                      src={icon}
                      alt={`${service.title} tool ${iconIndex + 1}`}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="32px"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-[14px] lg:text-[16px] text-[#02060B] mb-6">
              {service.description}
            </p>

            {/* Button */}
            <div className="pt-4">
              <Button
                text={service.btnTitle}
                href={`/services-list/${service.type}`}
              />
            </div>
          </div>

          {/* Right image (on larger screens) */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            {service.ImgBanner ? (
              <div className="hidden md:block relative w-full h-100 rounded-lg overflow-hidden">
                <Image
                  src={service.ImgBanner}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;