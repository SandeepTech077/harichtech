import { notFound } from "next/navigation";
import { OurProjects } from "@/data/OurProjectData";
import ProjectBanner from "@/components/OurProject/ProjectBanner";
import OverView from "@/components/OurProject/OverView";
import BannerMiddle from "@/components/OurProject/BannerMiddle";
import DesignComponent from "@/components/OurProject/DesignComponent";
import ReviewComponent from "@/components/OurProject/ReviewComponent";
import GetInTouch from "@/components/Ui/GetInTouch";

interface Props {
  params: { id: string };
}

const PortfolioDetail = ({ params }: Props) => {
  const id = parseInt(params.id);
  const project = OurProjects.projectdata.find((item) => item.id === id);

  if (!project) return notFound();

  return (
    <div className="bg-white py-7">
      <ProjectBanner project={project.BannerSection} />
      <OverView data={project.projectOverView} />
      <BannerMiddle data={project.MiddleBannerSection}/>
      <DesignComponent data={project.design}/>
      <ReviewComponent data={project.review} />
      <div className="px-4 lg:px-20 py-10 pt-10">

       <GetInTouch/>
      </div>
    </div>
  );
};

export default PortfolioDetail;
