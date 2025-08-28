"use client";

import React from "react";
import { FeatureCard } from "./FeatureCard";
import { motion } from "framer-motion";

interface CardArray {
  id: number;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  title: string;
  description: string;
  cards: CardArray[];
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  title,
  description,
  cards,
}) => {
  return (
    <motion.section
      className="py-26 w-full mx-auto bg-gradient-to-r from-[#1E5AFF] to-[#004BC2] text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto px-4">
        <div className="mx-auto">
          {/* Title + Description */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-[38px] md:text-[48px] font-bold mb-6">
              {title}
            </h2>
            <p className="max-w-7xl mx-auto">{description}</p>
          </motion.div>

          {/* Cards with stagger animation */}
          <motion.div
            className="px-4 lg:px-26 mx-auto grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <FeatureCard
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
