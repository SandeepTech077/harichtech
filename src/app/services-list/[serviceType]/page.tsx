import { notFound } from 'next/navigation';
import { ServiceListData } from "@/data/ServiceListData";
import { HomePagedata } from "@/data/HomePageData";
import ServiceDetailCard from "@/components/ServiceList/ServiceDetailCard";
import ProcessComponent from "@/components/ServiceList/ProcessSection";
import ServicesSection from "@/components/ServiceList/ServicesSection";
import PortfolioSection from "@/components/ServiceList/PortfolioSection";
import ClientsComponent from "@/components/HomePageComponents/ClientsComponent";

interface ServiceDetailPageProps {
  params: Promise<{
    serviceType: string;
  }>;
}

// Static generation of dynamic routes
export async function generateStaticParams() {
  return ServiceListData.serviceList.map((service) => ({
    serviceType: service.type,
  }));
}

// SEO metadata generator
export async function generateMetadata({ params }: { params: Promise<{ serviceType: string }> }) {
  const { serviceType } = await params;

  const service = ServiceListData.serviceList.find(
    (service) => service.type === serviceType
  );

  if (!service) {
    return {
      title: 'Service Not Found - Harichtech',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.maintitle.subtitle} - Harichtech Services`,
    description: service.maintitle.describation || 'Explore our services',
    keywords: service.services?.services?.join(', ') || 'services, Harichtech',
  };
}

// Page Component
export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { serviceType } = await params;

  const service = ServiceListData.serviceList.find(
    (service) => service.type === serviceType
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-24 lg:pt-44 pb-8 sm:pb-12 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 space-y-10">
          <ServiceDetailCard data={service.maintitle} />
          <ProcessComponent processData={service.process} />
          <ServicesSection servicesData={service.services} />
          <PortfolioSection portfolioData={service.portfolio} />
          <ClientsComponent data={HomePagedata.client} />
        </div>
      </section>
    </main>
  );
}
