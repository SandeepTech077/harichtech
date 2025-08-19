
"use client"
import React from 'react';
import { FAQItem } from './FAQItem';

interface FAQSectionProps {
  title: string;
  faqs: Array<{
    title: string;
    describation: string[];
  }>;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
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
      </div>
    </section>
  );
};