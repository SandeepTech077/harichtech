import React from "react";
import { FeatureCard } from "./FeatureCard";

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
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {title}{" "}
              <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                {blueTitle}
              </span>
            </h2>
            <p className="text-black mx-auto">{description}</p>
          </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start">
  {cards.map((card) => (
    <FeatureCard
      key={card.id}
      title={card.title}
      description={card.description}
    />
  ))}
</div>

        </div>
      </div>
    </section>
  );
};
