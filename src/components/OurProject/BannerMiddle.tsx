'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface BannerMiddleProps {
  data: {
    Banner: StaticImageData;
    mobileBanner?: StaticImageData;
  };
}

const BannerMiddle: React.FC<BannerMiddleProps> = ({ data }) => {
  return (
    <section className="relative w-full h-screen mt-10">
      {/* Desktop Banner */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={data.Banner}
          alt="Middle Banner"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src={data.mobileBanner || data.Banner}
          alt="Mobile Middle Banner"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default BannerMiddle;
