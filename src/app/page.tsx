  import { HomePagedata } from "../data/HomePageData";
  import MainTitleSection from "../components/HomePageComponents/MainTitleSection";
  import KnownMore from "../components/HomePageComponents/KnownMore";
  import HomeServices from "../components/HomePageComponents/HomeServices";
  import PortfolioComponent from "../components/HomePageComponents/PortfolioComponent";
  import ProcessComponent from "../components/HomePageComponents/ProcessComponent";
  import ClientsComponent from "../components/HomePageComponents/ClientsComponent";
  import BlogsComponent from "../components/HomePageComponents/BlogsComponent";

  export default function Home() {
    return (
      <main className="w-full">
        <MainTitleSection data={HomePagedata.mainTitleSection} />
          <KnownMore data={HomePagedata.knownMore} />
        <div className="w-full space-y-16  px-5 md:px-10 lg:px-20 py-30">
          <HomeServices data={HomePagedata.serviceList} />
          <PortfolioComponent data={HomePagedata.portfolio} />
          <ProcessComponent data={HomePagedata.process} />
          <ClientsComponent data={HomePagedata.client} />
          <BlogsComponent data={HomePagedata.blog} />
        </div>
      </main>
    );
  }
