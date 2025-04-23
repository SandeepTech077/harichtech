import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BannerSectionProps {
  banner: StaticImageData;
  mobileBanner:StaticImageData;
  title: string;
  describation: string;
  btnRedirect: string;
  btnArrowSvg: StaticImageData;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  banner,
  mobileBanner,
  title,
  describation,
  btnRedirect,
  btnArrowSvg,
}) => {
  return (
    <div className="relative w-full h-[60dvh] lg:h-[100dvh] rounded-[20px] overflow-hidden mb-16">
      {/* Banner Image */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={banner}
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 block lg:hidden ">
        <Image
          src={mobileBanner}
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-black/80 rounded-[20px]  mx-5 mb-5 ">
        <h2 className="text-xl md:text-3xl font-bold mb-2">{title}</h2>
        <p className="text-[12px] md:text-base mb-4 max-w-3xl opacity-90">
          {describation}
        </p>
        <Link
          href="/blog/digital-marketing"
          className="inline-flex items-center"
        >
          <span className="font-medium">{btnRedirect}</span>
          <span className="ml-2 ">
            <Image src={btnArrowSvg} alt="Arrow" width={20} height={20} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BannerSection;
