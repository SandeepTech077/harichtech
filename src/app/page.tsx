import { HomePagedata } from "../data/HomePageData";
import { AboutUsData } from "@/data/AboutUsData";
import MainTitleSection from "../components/HomePageComponents/MainTitleSection";
import HomeServices from "../components/HomePageComponents/HomeServices";
import PortfolioComponent from "../components/HomePageComponents/PortfolioComponent";
import ClientsComponent from "../components/HomePageComponents/ClientsComponent";
import AboutStatus from "@/components/AboutUsComponents/AboutStatus";
import OurClients from "@/components/HomePageComponents/OurClients";
import GetInTouch from "@/components/Ui/GetInTouch";
import AboutUs from "@/components/AboutUsComponents/AboutUs";

export default function Home() {
  const { ourStatus } = AboutUsData;
  console.log(HomePagedata,"HomePagedata")

  return (
    <main className="w-full overflow-hidden">
      {/* Fullscreen Hero */}
      <MainTitleSection data={HomePagedata.mainTitleSection} />

      {/* Page Sections */}
      <div className="w-full">
        <div className="mx-auto px-4  lg:px-16">
          <div className="space-y-24 sm:space-y-28 lg:space-y-32">
            <AboutStatus status={ourStatus.status} />
            <AboutUs data={HomePagedata.aboutUs} />
            <HomeServices data={HomePagedata.serviceList} />
            <PortfolioComponent data={HomePagedata.portfolio} />
            <OurClients data={HomePagedata.ourClient} />
            <ClientsComponent data={HomePagedata.client} />
            <GetInTouch />
          </div>
        </div>
      </div>
    </main>
  );
}

