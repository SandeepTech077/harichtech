import React from "react";
import { Services } from "@/data/ServiesData";
import ServiceTitleSection from "@/components/ServiceComponents/ServiceTitleSection";
import ServicesSection from "@/components/ServiceComponents/ServicesSection";
import MotionComponent from "@/Animation/MotionComponent";
import OurClients from "@/components/HomePageComponents/OurClients";
import { HomePagedata } from "@/data/HomePageData";
import WhyChooseUs from "@/components/ServiceList/WhyChooseUs";


export default function ServicesPage() {
  const { serviceTitle, services,whyUs } = Services;

  return (
    <main className="w-full space-y-10 py-16 md:py-32 px-5 md:px-10 lg:px-16 mx-auto mt-10">
      <MotionComponent type="bounce" duration={1} delay={0.5}>
        <ServiceTitleSection serviceTitle={serviceTitle} />
      </MotionComponent>

      <MotionComponent type="bounce" duration={1} delay={0.75}>
        <ServicesSection services={services} />
      </MotionComponent>
      <OurClients data={HomePagedata.ourClient} />
      <WhyChooseUs whyUsData={whyUs} />
    </main>
  );
}
