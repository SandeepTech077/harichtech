"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "../Title";
import Button from "../Button";
import { motion } from "framer-motion";

interface DataProps {
  title: string;
  subtitle: string;
  describation: string;
  btnTitle?: string;
  BannerRight?: StaticImageData;
}

interface ServiceDetailCardProps {
  data: DataProps;
}

const ServiceDetailCard = ({ data }: ServiceDetailCardProps) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-6 lg:gap-8"
      >
        {/* Title Badge */}
        <div className="w-fit">
          <Title title={data.title} />
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-900 leading-tight">
          {data.subtitle}
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-prose">
          {data.describation}
        </p>

        {/* Call to Action Button */}
        {data.btnTitle && (
          <div className="mt-2">
            <Button text={data.btnTitle} href="/contact-us" />
          </div>
        )}
      </motion.div>

      {/* Image Section */}
      {data.BannerRight && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <Image
              src={data.BannerRight}
              alt={`${data.title} - ${data.subtitle}`}
              width={600}
              height={300}
              className="w-full h-100 object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>
      )}
    </article>
  );
};

export default ServiceDetailCard;
