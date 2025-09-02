"use client";

import React from "react";
import { IndustryCard } from "./IndustryCard";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CardArray {
  id: number;
  title: string;
  description: string;
  icons: StaticImageData;
}

interface IndustriesSectionProps {
  title: string;
  blueTitle: string;
  description?: string | null;
  cards: CardArray[];
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  title,
  blueTitle,
  description,
  cards,
}) => {
  return (
    <section className="py-3">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[43px] font-bold text-gray-800 mb-6">
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

          {/* Animated Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="h-full"
              >
                <IndustryCard
                  title={card.title}
                  description={card.description}
                  icons={card.icons}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
