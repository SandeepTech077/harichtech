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
    <section className="relative w-full h-[40dvh] md:h-[100vh] mt-10">
      {/* Desktop Banner */}
      <div className="hidden md:block absolute inset-0 z-0 w-full h-full">
        <Image
          src={data.Banner}
          fill
          alt="Middle Banner"
          priority
          className="object-cover"
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