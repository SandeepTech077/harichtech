"use client";

import React from "react";
import { FeatureCard } from "./FeatureCard";
import { motion } from "framer-motion";

interface CardArray {
  id: number;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  title: string;
  blueTitle: string;
  description: string;
  cards: CardArray[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  blueTitle,
  description,
  cards,
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {title}{" "}
              <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                {blueTitle}
              </span>
            </h2>
            <p className="text-black mx-auto">{description}</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FeatureCard
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
