import React from "react";

interface SimpleBannerProps {
  buttonText: string;
  heading: string;
  highlightText: string;
}

const SimpleBanner: React.FC<SimpleBannerProps> = ({
  buttonText,
  heading,
  highlightText,
}) => {
  return (
    <div className="w-full bg-[#F5F5F5] py-16 flex flex-col items-center justify-center text-center rounded-[10px]">
      {/* Top Button */}
      <div
        className="px-5 py-2 mb-4 text-white bg-blue-600 rounded-md text-lg md:text-xl font-medium hover:bg-blue-700 transition"
      >
        {buttonText}
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
        {heading} <span className="text-blue-600">{highlightText}</span>
      </h2>
    </div>
  );
};

export default SimpleBanner; 

