"use client";
import React, { useState } from "react";
import { FAQItem } from "./FAQItem";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "framer-motion";

interface PointArray {
  title: string;
  description: string[];
}

interface FAQSectionProps {
  title: string;
  faqs: PointArray[];
  svg: StaticImageData;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs, svg }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // close if same, open if different
  };

  return (
    <section className="py-5">
      <div className="mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row items-start gap-6">
          {/* 🔹 Left side - FAQs */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent text-left mb-3">
              {title}
            </h2>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  title={faq.title}
                  descriptions={faq.description}
                  isOpen={activeIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* 🔹 Right side - SVG */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-20">
              <Image
                src={svg}
                alt="FAQ illustration"
                className="h-auto max-w-md w-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
