"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface Card {
  id: number;
  icon: StaticImageData;
  title: string;
}

interface ServeSectionProps {
  title: string;
  blueTitle: string;
  descriptions: string[];
  cards: Card[];
}

export const ServeSection: React.FC<ServeSectionProps> = ({
  title,
  blueTitle,
  descriptions,
  cards,
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        {/* 🔹 Title */}
        <h2 className="text-[30px] md:text-[48px] font-bold text-black mb-10 leading-snug text-center">
          {title}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            {blueTitle}
          </span>
        </h2>

        {/* 🔹 Descriptions */}
        {descriptions.length > 0 && (
          <div className=" mx-auto mb-12 text-center text-[18px] text-black space-y-4">
            {descriptions.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        )}

        {/* 🔹 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F1F1F1] rounded-lg p-8 flex items-center gap-4 hover:shadow-lg transition-shadow"
            >
              <Image src={card.icon} alt={card.title} width={28} height={28} />
              <h3 className="text-lg font-semibold text-black">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
