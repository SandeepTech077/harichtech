'use client';

import { useParams } from 'next/navigation';
import { ServiceListData } from '@/data/ServiceListData';
import ServiceDetailCard from '@/components/ServiceList/ServiceDetailCard';
import ProcessComponent from '@/components/ServiceList/ProcessSection';
import ServicesSection from '@/components/ServiceList/ServicesSection';
import PortfolioSection from '@/components/ServiceList/PortfolioSection';
import WhyChooseUs from '@/components/ServiceList/WhyChooseUs';
import MotionComponent from '@/Animation/MotionComponent';

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params?.id;

  const serviceId = parseInt(id as string); // Ensure it's a string before parsing
  const service = ServiceListData.serviceList.find(item => item.id === serviceId);

  if (!service || !service.maintitle) {
    return <div className="p-6 text-red-600">Service not found!</div>;
  }

  return (
    <div className="p-6 space-y-10">
      <MotionComponent type="slideIn" duration={1} delay={0.2}>
        <ServiceDetailCard data={service.maintitle} />
      </MotionComponent>

      <MotionComponent type="fadeIn" duration={1} delay={0.4}>
        <ProcessComponent processData={service.process} />
      </MotionComponent>

      <MotionComponent type="fadeIn" duration={1} delay={0.6}>
        <ServicesSection servicesData={service.services} />
      </MotionComponent>

      <MotionComponent type="fadeIn" duration={1} delay={0.8}>
        <PortfolioSection portfolioData={service.portfolio} />
      </MotionComponent>

      <MotionComponent type="bounce" duration={1} delay={1}>
        <WhyChooseUs whyUsData={service.whyUs} />
      </MotionComponent>
    </div>
  );
}
