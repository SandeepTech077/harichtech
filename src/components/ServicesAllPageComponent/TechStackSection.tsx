"use client";
import React from "react";
import { TechStackCard } from "./TechStackCard";
import { motion } from "framer-motion";

interface CardArray {
  id: number;
  title: string;
  description: string[];
}

interface TechStackSectionProps {
  title: string;
  blueTitle: string;
  description?: string;
  cards: CardArray[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  title,
  blueTitle,
  description,
  cards,
}) => {
  return (
    <section className="px-4 lg:px-20 bg-white py-4">
      <div className="mx-auto px-4">
        <div className="mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[48px] font-bold text-gray-800 mb-6">
              {title}{" "}
              <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                {blueTitle}
              </span>
            </h2>
            {description && (
              <p className="text-[#02060B] text-[18px] mx-auto">
                {description}
              </p>
            )}
          </div>

          {/* Cards with animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <TechStackCard
                  title={card.title}
                  technologies={card.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
