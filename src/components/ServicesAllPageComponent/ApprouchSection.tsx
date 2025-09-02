"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ApprouchSectionProps {
  title: string;
  blueTitle: string;
  descriptions: string[];
  rightImage: StaticImageData;
  points?: {
    title: string;
    bulletPoints: string[];
  } | null;
}

export const ApprouchSection: React.FC<ApprouchSectionProps> = ({
  title,
  blueTitle,
  descriptions,
  rightImage,
  points,
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[30px] lg:text-[40px] w-max-3xl font-bold text-gray-900 mb-6">
            {title} <span className="text-blue-600">{blueTitle}</span>
          </h2>

          {descriptions.map((desc, i) => (
            <motion.p
              key={i}
              className="text-[18px] text-gray-600 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              viewport={{ once: true }}
            >
              {desc}
            </motion.p>
          ))}

          {points && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {points.title}
              </h3>
              <motion.ul
                className="list-disc list-inside space-y-2 text-gray-700"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {points.bulletPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    className="leading-relaxed"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={rightImage}
            alt="Approach Illustration"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};
