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
  const {  clintsImages } = data;

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const logoVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="mx-auto relative py-16">
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-left">
          Our <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">Clients</span>
        </h2>
      </motion.div>

      {/* Clients Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {clintsImages.map((logo, index) => (
          <motion.div 
            key={index}
            variants={logoVariant}
            className="group bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[120px]"
          >
            <div className="relative w-full h-30 flex items-center justify-center">
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                className=" object-contain  group-hover:grayscale-0 transition-all duration-300"
                width={150}
                height={64}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurClients;