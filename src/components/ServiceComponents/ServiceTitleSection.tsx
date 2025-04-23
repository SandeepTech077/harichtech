import React from 'react';
import Title from "@/components/Title"
interface ServiceTitleSectionProps {
  serviceTitle: {
    title: string;
    subTitle: string;
    describation: string;
  };
}

const ServiceTitleSection: React.FC<ServiceTitleSectionProps> = ({ serviceTitle }) => {
  const { title, describation } = serviceTitle;

  return (
    <section className="mb-16">
      {/* Title pill */}
      <div className="inline-block mb-6">
        
     <Title title={title}/>
    
      </div>
      
      {/* Main title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
  Tailored Solutions for 
  <br />
  <span className="text-blue-600">Your Business</span>
</h1>

      
      {/* Description */}
      <div className="">
        <p className="text-gray-700">{describation}</p>
      </div>
    </section>
  );
};

export default ServiceTitleSection;