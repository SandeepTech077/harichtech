import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Title from "@/components/Title"
interface AboutUsProps {
  aboutUs: {
title:string;
    subTitle:string;
    descrobation:string[]
    BannerImg: StaticImageData,
  };
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutUs }) => {
  return (
    <section className="relative w-full mx-auto">
      {/* Title and navigation */}
      <div className="flex justify-center mb-6">
       <Title title={aboutUs.title}/>
      </div>

      {/* Main content */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-[30px] md:text-[48px] font-bold mb-4">
  {aboutUs.subTitle.split("Harichtech")[0]}
  <br />
  <span className="mt-2 inline-block bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
    Harichtech
  </span>
</h1>


        <div className="mx-auto">
          {aboutUs.descrobation.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4 text-left md:text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Banner Image */}
      <div className="border border-blue-300 rounded-lg overflow-hidden mb-10">
        {aboutUs.BannerImg ? (
          <Image
            src={aboutUs.BannerImg}
            alt="About Us Banner"
            width={1232}
            height={479}
            className="w-full h-auto"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">1232 × 479</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
