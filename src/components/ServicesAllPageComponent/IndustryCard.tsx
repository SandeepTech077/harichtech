import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface IndustryCardProps {
  title: string;
  description: string;
  icons: StaticImageData;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ 
  title, 
  description, 
  icons 
}) => {
  return (
    <div className="bg-[#F1F1F1] p-12 rounded-xl shadow-md hover:shadow-lg transition-shadow flex  space-x-6">
      {/* Left: Icon */}
      <div className="flex-shrink-0">
        <Image 
          src={icons} 
          alt={`${title} icon`} 
          width={60} 
          height={60} 
        />
      </div>

      {/* Right: Text content */}
      <div>
        <h3 className="text-[22px] font-semibold text-black mb-2">
          {title}
        </h3>
        <p className="text-black text-[16px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
