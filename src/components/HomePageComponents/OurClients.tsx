"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface OurClientsProps {
  data: {
    title: string;
    clintsImages: StaticImageData[];
  };
}

const OurClients: React.FC<OurClientsProps> = ({ data }) => {
  const { clintsImages, title } = data;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="mx-auto relative py-10 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          {title.split(" ")[0]}{" "}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            {title.split(" ")[1] || ""}
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
      >
        {clintsImages.map((logo, index) => (
          <motion.div
            key={index}
            variants={logoVariant}
            className="group bg-gray-100 rounded-xl p-8 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer min-h-[100px]"
          >
            <div className="relative w-full h-[60px] lg:h-[120px]  flex items-center justify-center">
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                fill
                className="object-contain group-hover:grayscale-0 transition-all duration-300"
               priority={index === 0 || index === 5}

              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurClients;
