"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface DevelopmentProcessProps {
  title: string;
  blueTitle: string;
  description: string;
  banner: StaticImageData; // image path
}

export const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({
  title,
  blueTitle,
  description,
  banner,
}) => {
  return (
    <section className="py-20">
      <motion.div
        className="text-center mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {title}{" "}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            {blueTitle}
          </span>
        </h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src={banner}
            alt="Development Process Banner"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
