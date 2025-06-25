
import { notFound } from "next/navigation";
import { ServiceListData } from "@/data/ServiceListData";
import { HomePagedata } from "@/data/HomePageData";
import ServiceDetailCard from "@/components/ServiceList/ServiceDetailCard";
import ProcessComponent from "@/components/ServiceList/ProcessSection";
import ServicesSection from "@/components/ServiceList/ServicesSection";
import PortfolioSection from "@/components/ServiceList/PortfolioSection";
import ClientsComponent from "@/components/HomePageComponents/ClientsComponent";

interface Props {
  params: { id: string };
}



const ServiceDetailPage = async ({ params }: Props) => {
  const serviceId = parseInt(params.id);
  console.log(serviceId,"serviceId")
  const service = ServiceListData.serviceList.find((item) => item.type === serviceId);

  if (!service || !service.maintitle) return notFound();

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
};

export default ServiceDetailPage;
