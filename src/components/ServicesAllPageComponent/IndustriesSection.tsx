import React from 'react';
import { IndustryCard } from './IndustryCard';
import { StaticImageData } from 'next/image';

interface CardArray{
     id: number;
    title: string;
    description: string;
    icons:StaticImageData
}

interface IndustriesSectionProps {
  title: string;
  blueTitle: string;
  description?: string | null;
  cards: CardArray[]
 

}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ 
  title, 
  blueTitle, 
  description, 
  cards 
}) => {

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[48px] font-bold text-gray-800 mb-6">
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card) => (
              <IndustryCard
                key={card.id}
                title={card.title}
                description={card.description}
                icons={card.icons}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};