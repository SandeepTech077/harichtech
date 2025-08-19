import { industiesData } from "@/data/industriesData";
import { notFound } from "next/navigation";
import { MainSection } from "@/components/Industries/MainSection";
import { ServeSection } from "@/components/Industries/ServeSection";
import { WhyChooseUsSection } from "@/components/ServicesAllPageComponent/WhyChooseUsSection";
import { ServicesSection } from "@/components/ServicesAllPageComponent/ServicesSection";
import { ConnectUsSection } from "@/components/ServicesAllPageComponent/ConnectUsSection";
import { GrowthSection } from "@/components/Industries/GrowthSection";
import { PortfolioSection } from "@/components/ServicesAllPageComponent/PortfolioSection";
import { IndustriesSection } from "@/components/ServicesAllPageComponent/IndustriesSection";
import { FAQSection } from "@/components/ServicesAllPageComponent/FAQSection";

export async function generateStaticParams() {
  return industiesData.map((service) => ({
    slug: service.type,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const service = industiesData.find((s) => s.type === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.mainSection.title}${service.mainSection.blueTitle}`,
  };
}

interface ServicePageProps {
  params: { slug: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = industiesData.find((s) => s.type === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="py-36">
      {/* 🔹 Pass data to MainSection */}
      <div className="px-4 sm:px-6 lg:px-16">
        <MainSection
          title={service.mainSection.title}
          blueTitle={service.mainSection.blueTitle}
          descriptions={service.mainSection.descriptions ?? []}
          rightSideImage={service.mainSection.rightSideImage}
        />
        <ServeSection
          title={service.serveSection.title}
          blueTitle={service.serveSection.blueTitle}
          descriptions={service.serveSection.descriptions ?? []}
          cards={service.serveSection.cards}
        />
      </div>
      <WhyChooseUsSection
        title={service.whyChooseUsSection.title}
        description={service.whyChooseUsSection.description}
        cards={service.whyChooseUsSection.cards}
      />
      <div className="px-4 sm:px-6 lg:px-16">
        <ServicesSection
          title={service.serviceSections.title}
          blueTitle={service.serviceSections.blueTitle}
          description={service.serviceSections.description}
          cards={service.serviceSections.cards}
        />
        <ConnectUsSection
          title={service.connectUsSection.title}
          descriptions={service.connectUsSection.descriptions}
          btnTitle={service.connectUsSection.btnTitle}
        />
        <GrowthSection
          title={service.realEstateGrowth.title}
          blueTitle={service.realEstateGrowth.blueTitle}
          descriptions={service.realEstateGrowth.descriptions}
          bullets={service.realEstateGrowth.bullets}
          testimonial={service.realEstateGrowth.testimonial}
        />
        <PortfolioSection
          title={service.portfolioSection.title}
          blueTitle={service.portfolioSection.blueTitle}
          projects={service.portfolioSection.projects}
          buttonTitle={service.portfolioSection.btnTitle}
        />
        <IndustriesSection
          title={service.IndustriesSection.title}
          blueTitle={service.IndustriesSection.blueTitle}
          description={service.IndustriesSection.description}
          cards={service.IndustriesSection.cards}
        />
        <FAQSection
          title={service.faqSection.title}
          faqs={service.faqSection.ponits}
          svg={service.faqSection.svgimage}
        />
      </div>
    </main>
  );
}
