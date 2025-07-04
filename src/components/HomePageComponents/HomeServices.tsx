"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import Title from "../Title";

interface ServiceItem {
  id: number;
  title: string;
  describation: string;
  Image: StaticImageData;
}

interface HomeServicesProps {
  data: {
    title: string;
    Subtitle: string;
    describation: string;
    serviceLists: ServiceItem[];
  };
}

const HomeServices: React.FC<HomeServicesProps> = ({ data }) => {
  const { title, describation, serviceLists } = data;

  // Scroll animation refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const gridRef = useRef(null);

  // InView hooks
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.5,
  });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      variants={fadeIn}
      className="mx-auto relative px-4 "
    >
      {/* Services Header */}
      <div className="mb-10 md:mb-12 flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left Side: Title + Heading */}
        <motion.div
          ref={titleRef}
          variants={slideUp}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          className="px-0 lg:px-4 py-2 rounded-md mb-2 lg:mb-0 max-w-lg"
        >
          <div className="w-40 text-center mb-4 lg:mb-10">
            <Title title={title} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            We Provide The{" "}
            <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
              Solution
            </span>{" "}
            For Our{" "}
            <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
        </motion.div>

        {/* Right Side: Description */}
        <motion.div
          ref={descriptionRef}
          variants={slideLeft}
          initial="hidden"
          animate={isDescriptionInView ? "visible" : "hidden"}
          className="text-black max-w-2xl text-left lg:text-right lg:self-end"
        >
          <p>{describation}</p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        ref={gridRef}
        variants={staggerContainer}
        initial="hidden"
        animate={isGridInView ? "visible" : "hidden"}
        className=" mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceLists.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariant}
              className="group bg-[#F1F1F1] rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Service Icon */}
              <div className="mb-6 rounded-full bg-white hover:bg-[#F1F1F1] w-16 h-16 flex items-center justify-center text-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={service.Image}
                    alt={service.title}
                    className="w-8 h-8 object-contain text-black"
                    width={32}
                    height={32}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.describation}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeServices;
