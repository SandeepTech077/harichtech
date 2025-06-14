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
    <main className="w-full">
      <MainTitleSection data={HomePagedata.mainTitleSection} />
      <KnownMore data={HomePagedata.knownMore} />
      <div className="w-full space-y-16  px-5 md:px-10 lg:px-20 py-30">
        <AboutStatus status={ourStatus.status} />
        <HomeServices data={HomePagedata.serviceList} />
        <PortfolioComponent data={HomePagedata.portfolio} />
        <OurClients data={HomePagedata.ourClient}/>
        <ClientsComponent data={HomePagedata.client} />
       <GetInTouch/>
      </div>
    </main>
  );
}
