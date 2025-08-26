import React from 'react';
import Link from 'next/link';
import Arrow from "../../../public/SVG/blue-arrow.svg"
import Image from 'next/image';
interface GetInTouchProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({
  title,
  subtitle, 
  buttonText,
  
}) => {
  return (
    <div className={`w-full mx-auto p-6 sm:p-8 lg:p-10 bg-blue-600 border-none rounded-xl  mb-10`}>
      <div className="flex flex-col lg:flex-row items-start  lg:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-xl lg:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="mt-4 lg:mt-0">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-[10px] bg-white transition-all"
          >
            <span className="bg-gradient-to-l from-[#2575FC] to-[#0052D3] bg-clip-text text-transparent">
              {buttonText}
            </span>
            <Image
              src={Arrow}
              alt="Arrow"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
