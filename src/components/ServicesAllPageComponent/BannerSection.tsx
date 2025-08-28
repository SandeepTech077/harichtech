"use client";

import React from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BannerSectionProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const BannerSection: React.FC<BannerSectionProps> = ({
  title,
  buttonText,
  onButtonClick,
}) => {
  return (
    <motion.section
      className="w-full mx-auto bg-gradient-to-r from-[#1E5AFF] to-[#004BC2] text-white py-20 rounded-[20px]"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {/* ✅ Centered button with animation */}
          <motion.div
            className="flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact-us">
              <button
                className="flex items-center gap-4 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={onButtonClick}
              >
                {buttonText}
                <MoveUpRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
