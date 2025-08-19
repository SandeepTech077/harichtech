"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ConnectUsSectionProps {
  title: string;
  descriptions?: string[]; // ✅ optional
  btnTitle: string;
}

export const ConnectUsSection: React.FC<ConnectUsSectionProps> = ({
  title,
  descriptions = [], // ✅ default fallback
  btnTitle,
}) => {
  return (
    <section className="">
      <div className=" mx-auto w-full">
        <div className="bg-gradient-to-r from-[#2058FF] to-[#004BC2] rounded-2xl p-8 sm:p-12 text-white flex flex-col sm:flex-row justify-between items-center gap-8">
          
          {/* Left Content */}
          <div className="max-w-6xl">
            <h2 className="text-[25px] font-bold mb-4">
              {title}
            </h2>
            {descriptions.map((desc, i) => (
              <p key={i} className="text-[18px] text-white mb-4">
                {desc}
              </p>
            ))}
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0">
            <button className="bg-white text-[#004BC2] font-medium px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition flex items-center gap-2">
              {btnTitle} <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
