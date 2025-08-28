import { AboutUsData } from "@/data/AboutUsData";
import { HomePagedata } from "@/data/HomePageData";
import AboutUs from "@/components/AboutUsComponents/AboutUs";
import AboutStatus from "@/components/AboutUsComponents/AboutStatus";
import InnovationMeet from "@/components/AboutUsComponents/InnovationMeet";
import MotionComponent from "@/Animation/MotionComponent";
import ProcessComponent from "@/components/HomePageComponents/ProcessComponent";
import WhyChooseUs from "@/components/ServiceList/WhyChooseUs";
import { Services } from "@/data/ServiesData";

export default function AboutPage() {
  const { aboutUs, ourStatus, innovationMeet, } = AboutUsData;

  return (
    <main className="w-full pt-40 px-5 md:px-10 lg:px-20 space-y-10">
      <MotionComponent type="fadeIn" duration={1} delay={0.3}>
        <AboutUs aboutUs={aboutUs} />
      </MotionComponent>

      <MotionComponent type="fadeIn" duration={1} delay={0.5}>
        <AboutStatus status={ourStatus.status} />
      </MotionComponent>

      <MotionComponent type="fadeIn" duration={1} delay={0.7}>
        <ProcessComponent data={HomePagedata.process} />
      </MotionComponent>
      <MotionComponent type="bounce" duration={1} delay={0.7}>
        <InnovationMeet innovationMeet={innovationMeet} />
      </MotionComponent>

      <WhyChooseUs whyUsData={Services.whyUs} />
    </main>
  );
}
