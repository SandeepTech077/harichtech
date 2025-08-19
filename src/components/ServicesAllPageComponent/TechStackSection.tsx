import React from "react";
import { TechStackCard } from "./TechStackCard";

interface CardArray {
  id: number;
  title: string;
  describation: string[];
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
    <section className="px-4  lg:px-20 bg-white">
      <div className=" mx-auto px-4">
        <div className=" mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[48px] font-bold text-gray-800 mb-6">
              {title}{" "}
              <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                {blueTitle}
              </span>
            </h2>
            {description && (
              <p className="text-[#02060B] text-[18px]  mx-auto">
                {description}
              </p>
            )}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <TechStackCard
                key={card.id}
                title={card.title}
                technologies={card.describation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
