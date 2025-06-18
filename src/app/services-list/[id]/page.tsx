"use client";

import { useParams } from "next/navigation";
import { ServiceListData } from "@/data/ServiceListData";
import ServiceDetailCard from "@/components/ServiceList/ServiceDetailCard";
import ProcessComponent from "@/components/ServiceList/ProcessSection";
import ServicesSection from "@/components/ServiceList/ServicesSection";
import PortfolioSection from "@/components/ServiceList/PortfolioSection";
import MotionComponent from "@/Animation/MotionComponent";
import ClientsComponent from "@/components/HomePageComponents/ClientsComponent";
import { HomePagedata } from "@/data/HomePageData";

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params?.id;

  const serviceId = parseInt(id as string);
  const service = ServiceListData.serviceList.find(
    (item) => item.id === serviceId
  );

  if (!service || !service.maintitle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-red-200">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Service Not Found
          </h2>
          <p className="text-gray-600">
            The requested service could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white ">
      {/* Hero Section with optimized spacing */}
      <section className="pt-24 lg:pt-44 pb-8 sm:pb-12 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 space-y-10">
          <MotionComponent type="slideIn" duration={0.8} delay={0.1}>
            <ServiceDetailCard data={service.maintitle} />
          </MotionComponent>

          <MotionComponent type="fadeIn" duration={0.8} delay={0.2}>
            <ProcessComponent processData={service.process} />
          </MotionComponent>

          <MotionComponent type="fadeIn" duration={0.8} delay={0.3}>
            <ServicesSection servicesData={service.services} />
          </MotionComponent>

          <MotionComponent type="fadeIn" duration={0.8} delay={0.4}>
            <PortfolioSection portfolioData={service.portfolio} />
          </MotionComponent>

          <MotionComponent type="bounce" duration={0.8} delay={0.5}>
            <ClientsComponent data={HomePagedata.client} />
          </MotionComponent>
        </div>
      </section>
    </main>
  );
}
