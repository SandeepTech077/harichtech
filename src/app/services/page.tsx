import React from 'react';
import { Services } from "@/data/ServiesData";
import ServiceTitleSection from "@/components/ServiceComponents/ServiceTitleSection";
import ServicesSection from "@/components/ServiceComponents/ServicesSection";
import MotionComponent from "@/Animation/MotionComponent";

export default function ServicesPage() {
  const { serviceTitle, services } = Services;

  return (
    <main className="w-full space-y-10 py-20 px-5 md:px-10 lg:px-20 mx-auto">
      <MotionComponent type="bounce" duration={1} delay={0.5}>
        <ServiceTitleSection serviceTitle={serviceTitle} />
      </MotionComponent>
      
      <MotionComponent type="bounce" duration={1} delay={0.5}>
        <ServicesSection services={services} />
      </MotionComponent>
    </main>
  );
}