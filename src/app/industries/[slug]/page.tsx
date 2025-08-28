import { GrowthSection } from "@/components/Industries/GrowthSection";
import { MainSection } from "@/components/Industries/MainSection";
import { ServeSection } from "@/components/Industries/ServeSection";
import { ConnectUsSection } from "@/components/ServicesAllPageComponent/ConnectUsSection";
import { FAQSection } from "@/components/ServicesAllPageComponent/FAQSection";
import { IndustriesSection } from "@/components/ServicesAllPageComponent/IndustriesSection";
import { PortfolioSection } from "@/components/ServicesAllPageComponent/PortfolioSection";
import { ServicesSection } from "@/components/ServicesAllPageComponent/ServicesSection";
import { WhyChooseUsSection } from "@/components/ServicesAllPageComponent/WhyChooseUsSection";
import { industiesData } from "@/data/industriesData";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MotionComponent from "@/Animation/MotionComponent";

export async function generateStaticParams() {
  return industiesData.map((industry) => ({
    slug: industry.type, 
  }));
}

interface PageProps {
  params: Promise<{
    slug: string; 
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // Await the params first
  const industry = industiesData.find((item) => item.type === slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
      description: 'The requested industry page could not be found.',
    };
  }

  const industryTitle = industry.mainSection.title + industry.mainSection.blueTitle;
  
  return {
    title: `${industryTitle} | Harichtech`,
    description: industry.mainSection.descriptions[0]?.substring(0, 160) + '...',
    keywords: `${industry.type}, digital transformation, technology solutions, Harichtech`,
    openGraph: {
      title: `${industryTitle} | Harichtech`,
      description: industry.mainSection.descriptions[0],
      type: 'website',
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params; // Await the params first
  const industryData = industiesData.find((item) => item.type === slug);

  if (!industryData) {
    notFound();
  }

  return (
    <main className="mt-33 py-4">
      <div className="px-4 sm:px-6 lg:px-16">
        <MotionComponent type="bounce" duration={1} delay={0.5}>
          <MainSection
            title={industryData.mainSection.title}
            blueTitle={industryData.mainSection.blueTitle}
            descriptions={industryData.mainSection.descriptions ?? []}
            rightSideImage={industryData.mainSection.rightSideImage}
          />
        </MotionComponent>

        <MotionComponent type="bounce" duration={1} delay={0.75}>
          <ServeSection
            title={industryData.serveSection.title}
            blueTitle={industryData.serveSection.blueTitle}
            descriptions={industryData.serveSection.description ?? []}
            cards={industryData.serveSection.cards}
          />
        </MotionComponent>
      </div>

      <WhyChooseUsSection
        title={industryData.whyChooseUsSection.title}
        description={industryData.whyChooseUsSection.description}
        cards={industryData.whyChooseUsSection.cards}
      />

      <div className="px-4 sm:px-6 lg:px-16">
        <ServicesSection
          title={industryData.serviceSections.title}
          blueTitle={industryData.serviceSections.blueTitle}
          description={industryData.serviceSections.description}
          cards={industryData.serviceSections.cards}
        />

        <ConnectUsSection
          title={industryData.connectUsSection.title}
          descriptions={industryData.connectUsSection.descriptions}
          btnTitle={industryData.connectUsSection.btnTitle}
        />

        <MotionComponent type="bounce" duration={1} delay={0.1}>
          <GrowthSection
            title={industryData.realEstateGrowth.title}
            blueTitle={industryData.realEstateGrowth.blueTitle}
            descriptions={industryData.realEstateGrowth.descriptions}
            bullets={industryData.realEstateGrowth.bullets}
            testimonial={industryData.realEstateGrowth.testimonial}
          />
        </MotionComponent>

        <MotionComponent type="bounce" duration={1} delay={0.85}>
          <PortfolioSection
            title={industryData.portfolioSection.title}
            blueTitle={industryData.portfolioSection.blueTitle}
            projects={industryData.portfolioSection.projects}
            buttonTitle={industryData.portfolioSection.btnTitle}
          />
        </MotionComponent>

        <IndustriesSection
          title={industryData.IndustriesSection.title}
          blueTitle={industryData.IndustriesSection.blueTitle}
          description={industryData.IndustriesSection.description}
          cards={industryData.IndustriesSection.cards}
        />

        <FAQSection
          title={industryData.faqSection.title}
          faqs={industryData.faqSection.ponits}
          svg={industryData.faqSection.svgimage}
        />
      </div>
    </main>
  );
}