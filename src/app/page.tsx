import { HomePagedata } from "../data/HomePageData";
import { AboutUsData } from "@/data/AboutUsData";
import MainTitleSection from "../components/HomePageComponents/MainTitleSection";
import KnownMore from "../components/HomePageComponents/KnownMore";
import HomeServices from "../components/HomePageComponents/HomeServices";
import PortfolioComponent from "../components/HomePageComponents/PortfolioComponent";
import ClientsComponent from "../components/HomePageComponents/ClientsComponent";
import AboutStatus from "@/components/AboutUsComponents/AboutStatus";
import OurClients from "@/components/HomePageComponents/OurClients";
import GetInTouch from "@/components/Ui/GetInTouch";

export default function Home() {
  const { ourStatus } = AboutUsData;

  return (
    <main className="w-full overflow-hidden">
      <MainTitleSection data={HomePagedata.mainTitleSection} />
      <div className="w-full">
        <div className=" mx-auto px-4 sm:px-0 lg:px-8 ">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            <KnownMore data={HomePagedata.knownMore} />
            <AboutStatus status={ourStatus.status} />
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
