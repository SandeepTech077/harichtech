"use client";

import Title from "../Title";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  servicesData: {
    title: string;
    subTitle: string;
    services: string[];
  };
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ servicesData }) => {
  return (
    <div className="py-8 mx-auto">
      {/* Header section */}
      <div className="mb-10 text-center">
        <div className="inline-block mb-6">
          <Title title={servicesData.title} />
        </div>
        <h2 className="text-3xl font-bold">
          Our Core{" "}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            Services
          </span>
        </h2>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {servicesData.services.map((service, index) => (
          <motion.div
            key={index}
            className="border border-black rounded-lg p-8 flex items-center justify-center text-center h-24 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(32, 88, 255, 0.4)",
            }}
          >
            <p className="font-semibold text-[16px] md:text-[19px]">
              {service}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
