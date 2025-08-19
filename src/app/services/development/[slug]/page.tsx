import { ServicePageDataWebDevelopement } from "@/data/ServicePagesData";
import { notFound } from "next/navigation";
import { BannerSection } from "@/components/ServicesAllPageComponent/BannerSection";
import { BuildModernSection } from "@/components/ServicesAllPageComponent/BuildModernSection";
import { WhyChooseUsSection } from "@/components/ServicesAllPageComponent/WhyChooseUsSection";
import { ApprouchSection } from "@/components/ServicesAllPageComponent/ApprouchSection";
import { ConnectUsSection } from "@/components/ServicesAllPageComponent/ConnectUsSection";
import { ServicesSection } from "@/components/ServicesAllPageComponent/ServicesSection";
import { FAQSection } from "@/components/ServicesAllPageComponent/FAQSection";
import { DevelopmentProcess } from "@/components/ServicesAllPageComponent/DevelopementProcess";
import { TechStackSection } from "@/components/ServicesAllPageComponent/TechStackSection";
import { IndustriesSection } from "@/components/ServicesAllPageComponent/IndustriesSection";
import { PortfolioSection } from "@/components/ServicesAllPageComponent/PortfolioSection";

export async function generateStaticParams() {
  return ServicePageDataWebDevelopement.map((service) => ({
    slug: service.type,
  }));
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = ServicePageDataWebDevelopement.find((s) => s.type === slug);

  if (!service) {
    // This will show the not found page
    notFound();
  }

  return (
    <main className="py-36 ">
      <div className="px-4 sm:px-6 lg:px-16">
        <BannerSection
          title={service.bannerTitle.title}
          buttonText={service.bannerTitle.btn}
        />

        <BuildModernSection
          title={service.buildMorden.title}
          subtitle={service.buildMorden.subtitle}
          descriptions={service.buildMorden.description}
          svgIcon={service.buildMorden.svgIcon}
        />
      </div>

      <WhyChooseUsSection
        title={service.whyChooseUsSection.title}
        description={service.whyChooseUsSection.description}
        cards={service.whyChooseUsSection.cards}
      />
      <ApprouchSection
        title={service.approchSection.title}
        blueTitle={service.approchSection.blueTitle}
        descriptions={service.approchSection.description}
        rightImage={service.approchSection.rightImage}
        points={service.approchSection.points}
      />
      <div className="px-4 sm:px-6 lg:px-16">
        <ConnectUsSection
          title={service.connectUsSection.title}
          descriptions={service.connectUsSection.descriptions}
          btnTitle={service.connectUsSection.btnTitle}
        />
        <ServicesSection
          title={service.serviceSections.title}
          blueTitle={service.serviceSections.blueTitle}
          description={service.serviceSections.description}
          cards={service.serviceSections.cards}
        />
        <DevelopmentProcess
          title={service.developmentProcessSection.title}
          blueTitle={service.developmentProcessSection.blueTitle}
          description={service.developmentProcessSection.description}
          banner={service.developmentProcessSection.banner}
        />
        <TechStackSection
          title={service.techStacksSection.title}
          blueTitle={service.techStacksSection.blueTitle}
          description={service.techStacksSection.description}
          cards={service.techStacksSection.cards}
        />
        <IndustriesSection
          title={service.IndustriesSection.title}
          blueTitle={service.IndustriesSection.blueTitle}
          description={service.IndustriesSection.description}
          cards={service.IndustriesSection.cards}
        />
        <PortfolioSection
          title={service.portfolioSection.title}
          blueTitle={service.portfolioSection.blueTitle}
          projects={service.portfolioSection.projects}
          buttonTitle={service.portfolioSection.btnTitle}
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