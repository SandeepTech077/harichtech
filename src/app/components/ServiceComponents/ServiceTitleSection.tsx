import React from "react";
import Title from "../Title";
interface ServiceTitleSectionProps {
  serviceTitle: {
    title: string;
    subTitle: string;
    describation: string;
  };
}

const ServiceTitleSection: React.FC<ServiceTitleSectionProps> = ({
  serviceTitle,
}) => {
  const { title, describation } = serviceTitle;

  return (
    <section className="mb-16">
      {/* Title pill */}
      <div className="inline-block mb-6">
        <Title title={title} />
      </div>

      {/* Main title */}
      <h1 className="text-[30px] md:text-[48px] font-bold mb-6">
        Tailored Solutions for
        <br />
        <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">Your Business</span>
      </h1>

      {/* Description */}
      <div className="">
        <p className="text-black text-[16px] lg:text-[20px] leading-[40px]">{describation}</p>
      </div>
    </section>
  );
};

export default ServiceTitleSection;
