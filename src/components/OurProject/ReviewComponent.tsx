'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ReviewData {
  banner: StaticImageData;
  mobileBanner?: StaticImageData;
}

interface ReviewComponentProps {
  data: ReviewData;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ data }) => {
  return (
    <section className="relative w-full h-screen px-4 lg:px-20">
      {/* Desktop Banner */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={data.banner}
          alt="Review Banner"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden absolute  z-0">
        <Image
          src={data.mobileBanner || data.banner}
          alt="Mobile Review Banner"
          
          className="object-cover"
          
        />
      </div>
    </section>
  );
};

export default ReviewComponent;
