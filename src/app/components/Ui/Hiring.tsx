"use client";

import React, { useState } from "react";
import ApplicationModal from "./ApplicationModal";

interface HiringItem {
  title: string;
  experiance: string;
  opening: string;
  btnText: string;
}

interface HiringProps {
  data: {
    title: string;
    hirings: HiringItem[];
  };
}

const Hiring: React.FC<HiringProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJobTitle("");
  };

  return (
    <>
      <section className="py-16 mx-auto">
        {/* Title with gradient on last two words */}
        <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-10">
          {
            (() => {
              const words = data.title.trim().split(" ");
              const lastTwo = words.slice(-2).join(" ");
              const rest = words.slice(0, -2).join(" ");
              return (
                <>
                  {rest}{" "}
                  <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                    {lastTwo}
                  </span>
                </>
              );
            })()
          }
        </h2>

        {/* Job Listings */}
        <div className="grid gap-6 md:grid-cols-4">
          {data.hirings.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition p-6 flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <h3 className="text-[20px] lg:text-[24px] font-bold text-black mb-4">
                  {job.title}
                </h3>
                <p className="text-black text-[14px] lg:text-[16px]">
                  {job.experiance}
                </p>
                <p className="text-black text-[14px] lg:text-[16px]">
                  {job.opening}
                </p>
              </div>

              <button
                onClick={() => handleApplyClick(job.title)}
                className="cursor-pointer mt-6 bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white px-5 py-2 rounded-md hover:opacity-90 transition"
              >
                {job.btnText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        jobTitle={selectedJobTitle}
      />
    </>
  );
};

export default Hiring;
