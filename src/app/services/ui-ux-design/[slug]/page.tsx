import { ServicePageDataOfUIUx } from "@/data/ServicePagesData";
import { notFound } from "next/navigation";
import { BannerSection } from "@/components/ServicesAllPageComponent/BannerSection";
import { BuildModernSection } from "@/components/ServicesAllPageComponent/BuildModernSection";
import { WhyChooseUsSection } from "@/components/ServicesAllPageComponent/WhyChooseUsSection";
import { ApprouchSection } from "@/components/ServicesAllPageComponent/ApprouchSection";
import { ConnectUsSection } from "@/components/ServicesAllPageComponent/ConnectUsSection";
import { ServicesSection } from "@/components/ServicesAllPageComponent/ServicesSection";
import { DevelopmentProcess } from "@/components/ServicesAllPageComponent/DevelopementProcess";
import { TechStackSection } from "@/components/ServicesAllPageComponent/TechStackSection";
import { IndustriesSection } from "@/components/ServicesAllPageComponent/IndustriesSection";

export async function generateStaticParams() {
  // Make sure this includes ALL possible slug values, including 'website'
  const allSlugs = ServicePageDataOfUIUx.map((service) => service.type);
  
  // Add any missing slugs that might exist in your routes
  const additionalSlugs = ['website']; // Add other missing slugs here if needed
  
  // Combine and deduplicate
  const uniqueSlugs = [...new Set([...allSlugs, ...additionalSlugs])];
  
  return uniqueSlugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = ServicePageDataOfUIUx.find(
    (s) => s.type === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.bannerTitle.title,
    description: service.buildMorden.describation[0],
  };
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = ServicePageDataOfUIUx.find(
    (s) => s.type === slug
  );

  if (!service) {
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
          descriptions={service.buildMorden.describation}
          svgIcon={service.buildMorden.svgIcon}
        />
      </div>

      <WhyChooseUsSection
        title={service.whyChooseUsSection.title}
        description={service.whyChooseUsSection.describation}
        cards={service.whyChooseUsSection.cards}
      />
      <ApprouchSection
        title={service.approchSection.title}
        blueTitle={service.approchSection.blueTitle}
        descriptions={service.approchSection.describation}
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
          description={service.serviceSections.describation}
          cards={service.serviceSections.cards}
        />
        <DevelopmentProcess
          title={service.developmentProcessSection.title}
          blueTitle={service.developmentProcessSection.blueTitle}
          description={service.developmentProcessSection.describation}
          banner={service.developmentProcessSection.banner}
        />
        <TechStackSection
          title={service.techStacksSection.title}
          blueTitle={service.techStacksSection.blueTitle}
          description={service.techStacksSection.describation}
          cards={service.techStacksSection.cards}
        />
        <IndustriesSection
          title={service.IndustriesSection.title}
          blueTitle={service.IndustriesSection.blueTitle}
          description={service.IndustriesSection.describation}
          cards={service.IndustriesSection.cards}
        />
      </div>
    </main>
  );
}