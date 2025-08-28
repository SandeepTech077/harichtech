import React from "react";
import Link from "next/link";

interface SimpleBannerProps {
  buttonText: string;
  buttonHref: string;
  heading: string;
  highlightText: string;
}

const SimpleBanner: React.FC<SimpleBannerProps> = ({
  buttonText,
  buttonHref,
  heading,
  highlightText,
}) => {
  return (
    <div className="w-full bg-[#F5F5F5] py-16 flex flex-col items-center justify-center text-center rounded-[10px]">
      {/* Top Button */}
      <Link
        href={buttonHref}
        className="px-5 py-2 mb-4 text-white bg-blue-600 rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        {buttonText}
      </Link>

      {/* Heading */}
      <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
        {heading} <span className="text-blue-600">{highlightText}</span>
      </h2>
    </div>
  );
};

export default SimpleBanner;
