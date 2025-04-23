import { HomePagedata } from "../data/HomePageData";
import MainTitleSection from "../components/HomePageComponents/MainTitleSection";
import KnownMore from "../components/HomePageComponents/KnownMore";
import HomeServices from "../components/HomePageComponents/HomeServices";
import PortfolioComponent from "../components/HomePageComponents/PortfolioComponent";
import ProcessComponent from "../components/HomePageComponents/ProcessComponent";
import ClientsComponent from "../components/HomePageComponents/ClientsComponent";
import BlogsComponent from "../components/HomePageComponents/BlogsComponent";
import MotionComponent from "@/Animation/MotionComponent";

export default function Home() {
  return (
    <main className="w-full">
      <MainTitleSection data={HomePagedata.mainTitleSection} />
      <div className="w-full space-y-10 px-5 md:px-10 lg:px-20">
      <MotionComponent type="slideIn" duration={1} delay={0.5} >
        
        <KnownMore data={HomePagedata.knownMore} />
        </MotionComponent>

        <MotionComponent type="slideIn" duration={1} delay={0.5} >
        <HomeServices data={HomePagedata.serviceList} />
        </MotionComponent>
        <MotionComponent type="bounce" duration={1} delay={0.5} >
        <PortfolioComponent data={HomePagedata.portfolio} />
        </MotionComponent>
       

        <MotionComponent type="bounce" duration={1} delay={0.5} >

        <ProcessComponent data={HomePagedata.process} />
        </MotionComponent>

        <MotionComponent type="bounce" duration={1} delay={0.5} >

        <ClientsComponent data={HomePagedata.client} />
        </MotionComponent>
        <MotionComponent type="bounce" duration={1} delay={0.5} >

        <BlogsComponent data={HomePagedata.blog} />
        </MotionComponent>
      </div>
    </main>
  );
}