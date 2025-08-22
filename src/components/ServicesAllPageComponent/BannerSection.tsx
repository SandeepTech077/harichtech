import React from 'react';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
interface BannerSectionProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const BannerSection: React.FC<BannerSectionProps> = ({ 
  title, 
  buttonText,
  onButtonClick 
}) => {
  return (
    <section className="w-full mx-auto bg-gradient-to-r from-[#1E5AFF] to-[#004BC2] text-white py-20 rounded-[20px]">
      <div className="mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          {/* ✅ Centered button */}

          <div className="flex justify-center">
            <Link href="/contact-us">
              <button
                className="flex items-center gap-4 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={onButtonClick}
              >
                {buttonText}
                <MoveUpRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
