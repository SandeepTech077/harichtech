"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import ApplicationModal from "./ApplicationModal"; // ✅ Import modal

interface ResumeUploadData {
  title: string;
  describation: string;
  btnText: string;
  rightImage: StaticImageData;
}

interface ResumeUploadProps {
  data: ResumeUploadData;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({ data }) => {
  const { title, describation, btnText, rightImage } = data;

  // ✅ State for modal (like in Hiring)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full mx-auto py-12">
      <div
        className="relative rounded-2xl lg:rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(270deg, #2058FF 0%, #004BC2 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
                {title}
              </h2>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                {describation}
              </p>

              {/* ✅ Button now opens modal */}
              <button
                onClick={handleOpenModal}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                style={{
                  background: "white",
                  color: "black",
                }}
                type="button"
                aria-label="Upload your resume"
              >
                <span className="text-sm sm:text-base">{btnText}</span>
                <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full p-4 sm:p-6 lg:p-8">
            <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src={rightImage}
                alt="Upload Resume - Professional workspace"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Reuse ApplicationModal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        jobTitle="General Resume Upload" // You can customize this text
      />
    </div>
  );
};

export default ResumeUpload;
