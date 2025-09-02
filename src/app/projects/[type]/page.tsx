import { notFound } from "next/navigation";
import { OurProjects } from "@/data/OurProjectData";
import ProjectBanner from "@/components/OurProject/ProjectBanner";
import OverView from "@/components/OurProject/OverView";
import BannerMiddle from "@/components/OurProject/BannerMiddle";
import DesignComponent from "@/components/OurProject/DesignComponent";
import GetInTouch from "@/components/Ui/GetInTouch";
import MotionComponent from "@/Animation/MotionComponent";

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return OurProjects.projectdata.map((project) => ({
    type: project.type, // must be string
  }));
}

const PortfolioDetail = async ({ params }: Props) => {
  const { type } = await params;

  const project = OurProjects.projectdata.find((item) => item.type === type);

  if (!project) return notFound();

  return (
    <div className="bg-white py-5">
      <MotionComponent type="bounce" duration={1} delay={0.5}>
        <ProjectBanner project={project.BannerSection} />
      </MotionComponent>

      <MotionComponent type="fadeIn" duration={1} delay={0.75}>
        <OverView data={project.projectOverView} />
      </MotionComponent>

      <MotionComponent type="slideIn" duration={1} delay={0.85}>
        <BannerMiddle data={project.MiddleBannerSection} />
      </MotionComponent>

      <MotionComponent type="bounce" duration={1} delay={0.85}>
        <DesignComponent data={project.design} />
      </MotionComponent>

      {/* <ReviewComponent data={project.review} /> */}

      <MotionComponent type="zoomIn" duration={1} delay={0.85}>
        <div className="px-4 lg:px-20 py-10 pt-10">
          <GetInTouch
            title="Ready to Accelerate Your Digital Journey?"
            subtitle="Let's discuss your vision and turn it into a powerful digital reality."
            buttonText="Let’s Connect"
          />
        </div>
      </MotionComponent>
    </div>
  );
};

export default PortfolioDetail;
