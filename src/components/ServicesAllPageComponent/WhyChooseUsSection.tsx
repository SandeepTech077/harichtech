import React from 'react';
import { FeatureCard } from './FeatureCard';

interface CardArray{
id: number;
    title: string;
    describation: string;
}

interface WhyChooseUsSectionProps {
  title: string;
  description: string;
  cards: CardArray[];
    
  
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ 
  title, 
  description, 
  cards 
}) => {
  return (
    <section className="py-26 w-full mx-auto bg-gradient-to-r from-[#1E5AFF] to-[#004BC2] text-white">
      <div className=" mx-auto px-4">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[38px] md:text-[48px] font-bold mb-6">
              {title}
            </h2>
            <p className=" max-w-7xl mx-auto">
              {description}
            </p>
          </div>
          <div className="px-4 lg:px-26 mx-auto grid md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <FeatureCard
                key={card.id}
                title={card.title}
                description={card.describation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};