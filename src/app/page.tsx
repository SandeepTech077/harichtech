import { HomePagedata } from "../data/HomePageData";
import { AboutUsData } from "@/data/AboutUsData";
import MainTitleSection from "../components/HomePageComponents/MainTitleSection";
import HomeServices from "../components/HomePageComponents/HomeServices";
import PortfolioComponent from "../components/HomePageComponents/PortfolioComponent";
import ClientsComponent from "../components/HomePageComponents/ClientsComponent";
import AboutStatus from "@/components/AboutUsComponents/AboutStatus";
import OurClients from "@/components/HomePageComponents/OurClients";
import GetInTouch from "@/components/Ui/GetInTouch";
import AboutUs from "@/components/HomePageComponents/AboutUs";
import { IndustriesSection } from "@/components/ServicesAllPageComponent/IndustriesSection";

export default function Home() {
  const { ourStatus } = AboutUsData;

  return (
    <main className="w-full overflow-hidden">
      {/* Fullscreen Hero */}
      <MainTitleSection data={HomePagedata.mainTitleSection} />

      {/* Page Sections */}
      <div className="w-full">
        <div className="mx-auto px-4  lg:px-16">
          <div className="space-y-24 sm:space-y-28 lg:space-y-15">
            <AboutStatus status={ourStatus.status} />
            <AboutUs data={HomePagedata.aboutUs} />
            <PortfolioComponent data={HomePagedata.portfolio} />
            <HomeServices data={HomePagedata.serviceList} />
            <IndustriesSection
              title={HomePagedata.IndustriesSection.title}
              blueTitle={HomePagedata.IndustriesSection.blueTitle}
              description={HomePagedata.IndustriesSection.description}
              cards={HomePagedata.IndustriesSection.cards}
            />
            <GetInTouch
              title="Ready to Accelerate Your Digital Journey?"
              subtitle="Let's discuss your vision and turn it into a powerful digital reality."
              buttonText="Let’s Connect"
              bg="bg-white"
            />
            <OurClients data={HomePagedata.ourClient} />
            <ClientsComponent data={HomePagedata.client} />
          </div>
        </div>
      </div>
    </main>
  );
}

