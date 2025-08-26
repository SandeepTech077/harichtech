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
    <section className="relative w-full h-[38vh] mt-10 overflow-hidden">
      {/* Desktop Banner */}
      <div className="hidden md:block absolute inset-0 z-0 w-full h-full">
        <Image
          src={data.Banner}
          alt="Middle Banner"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden absolute inset-0 z-0 w-full h-[100vh]">
        <Image
          src={data.mobileBanner || data.Banner}
          alt="Mobile Middle Banner"
          className="object-cover"

          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default BannerMiddle;