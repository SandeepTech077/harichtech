"use client";
import React from "react";
import { FAQItem } from "./FAQItem";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface PointArray {
  title: string;
  describation: string[];
}

interface FAQSectionProps {
  title: string;
  faqs: PointArray[];
  svg: StaticImageData;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs, svg }) => {
  return (
    <section className="py-16">
      <div className=" mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* 🔹 Left side - FAQs */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent text-left mb-8">
              {title}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  title={faq.title}
                  descriptions={faq.describation}
                />
              ))}
            </div>
          </div>

          {/* 🔹 Right side - SVG */}
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <Image
              src={svg}
              alt="FAQ illustration"
              className="max-w-sm w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
